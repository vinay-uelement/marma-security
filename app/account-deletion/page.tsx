import React from 'react';

export default function AccountDeletionPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="w-full max-w-[900px] mx-auto px-6 lg:px-8 py-16 md:py-24">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-2 uppercase">
          Marma Security Account Deletion Information
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last Updated: May 8, 2026</p>

        <div className="prose-policy">

          <Section title="DELETE YOUR MARMA SECURITY ACCOUNT">
            <p>
              If you would like to permanently delete your Marma Security account and associated data, please follow the steps below.
            </p>
          </Section>

          <Section title="STEPS TO DELETE YOUR ACCOUNT">
            <ol>
              <li>Log in to your account at: <a href="https://marma.cloud" target="_blank" rel="noopener noreferrer">https://marma.cloud</a></li>
              <li>Navigate to Profile</li>
              <li>Select Delete Account</li>
              <li>Click the Submit button to confirm your request</li>
            </ol>
          </Section>

          <Section title="IMPORTANT INFORMATION">
            <p>
              Deleting the Marma Security mobile application alone does not delete your account or associated data. You must follow the account deletion process described above to request deletion of your account and data.
            </p>
          </Section>

          <Section title="WHAT HAPPENS WHEN YOUR ACCOUNT IS DELETED">
            <p>The following data will be permanently deleted:</p>
            <ul>
              <li>User account information</li>
              <li>Device and firewall configuration data</li>
              <li>Associated profile information</li>
              <li>Application usage data linked to your account</li>
              <li>Security alerts and monitoring history associated with your account</li>
            </ul>
          </Section>

          <Section title="DATA THAT MAY BE RETAINED">
            <p>Certain information may be retained for a limited period where required for:</p>
            <ul>
              <li>Legal or regulatory compliance</li>
              <li>Fraud prevention and security purposes</li>
              <li>Financial or transaction recordkeeping</li>
            </ul>
            <p>
              Certain retained information may be securely stored for up to 90 days or longer if required by law or regulatory obligations. Any retained data will be securely stored and deleted in accordance with applicable laws and Marma Security data retention policies.
            </p>
          </Section>

          <Section title="PROCESSING TIME">
            <p>
              Account deletion requests are typically processed within 30 days of submission.
            </p>
            <p>
              Once your account deletion request has been completed, deleted data cannot be recovered.
            </p>
          </Section>

          <Section title="NEED HELP?">
            <p>
              Marma Security Support<br />
              Website: <a href="https://marmasec.com" target="_blank" rel="noopener noreferrer">https://marmasec.com</a><br />
              Email: <a href="mailto:support@marmasec.com">support@marmasec.com</a>
            </p>
          </Section>

        </div>
      </section>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="policy-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
