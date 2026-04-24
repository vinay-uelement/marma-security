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
  // Fallback to Web3Forms if NEXT_PUBLIC_API_URL is missing
  if (!process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL === '') {
    try {
      const formData = new FormData();
      // append access_key from web3forms
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
      formData.append("access_key", accessKey);

      // Helper to map keys to readable names for Web3Forms dashboard
      const getFieldName = (key: string) => (key === 'subject' ? 'Area of Interest' : key);

      // Append top-level fields
      Object.entries(payload).forEach(([key, value]) => {
        if (key !== 'extra_field' && value !== undefined && value !== null) {
          formData.append(getFieldName(key), typeof value === 'object' ? JSON.stringify(value) : value.toString());
        }
      });

      // Flatten extra_field if it exists
      if (payload.extra_field) {
        Object.entries(payload.extra_field).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            formData.append(getFieldName(key), typeof value === 'object' ? JSON.stringify(value) : value.toString());
          }
        });
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        return {
          success: true,
          message: 'Your message has been sent successfully!',
          data,
        };
      }

      return {
        success: false,
        message: data.message || 'Submission failed. Please try again.',
      };
    } catch (error) {
      console.error('Web3Forms fallback error:', error);
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.',
      };
    }
  }

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
