import { fetchApi } from './api';

interface ContactPayload {
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  extra_field?: Record<string, any>;
}

interface ContactResponse {
  success: boolean;
  message: string;
  data?: any;
}

/**
 * Submit a contact form to the Mainstay CRM.
 * Automatically injects x-tenant-slug via fetchApi.
 *
 * @param payload - The contact form data
 * @returns ContactResponse with success status and message
 */
export async function submitContactForm(payload: ContactPayload): Promise<ContactResponse> {
  try {
    const response = await fetchApi('/api/v1/contacts', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json().catch(() => null);
      return {
        success: true,
        message: 'Your message has been sent successfully!',
        data,
      };
    }

    // Try to extract error message from the response
    const errorData = await response.json().catch(() => null);
    return {
      success: false,
      message: errorData?.message || `Submission failed (${response.status}). Please try again.`,
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
