import './About.css'; 

const PrivacyPolicy = () => {
  return (
    <div className="about-page container section animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="about-header">
        <h1 className="section-title">Privacy <span className="gradient-text">Policy</span></h1>
      </div>
      
      <div className="terms-content" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>1. Data Collection</h3>
        <p>
          We collect information that you provide directly to us when you book a discovery call, purchase a template, or contact us through our website. This may include your name, email address, company name, and project details.
        </p>

        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>2. Use of Information</h3>
        <p>
          Your information is used exclusively to provide and improve our services, communicate with you regarding your projects, and process payments. We do not sell your personal data to third parties.
        </p>

        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>3. Data Security</h3>
        <p>
          We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>4. Cookies</h3>
        <p>
          Our website may use cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings.
        </p>

        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>5. Third-Party Services</h3>
        <p>
          We may use third-party services like Vercel (for hosting) and Web3Forms (for contact forms) which have their own privacy policies. We encourage you to review their policies as well.
        </p>

        <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
