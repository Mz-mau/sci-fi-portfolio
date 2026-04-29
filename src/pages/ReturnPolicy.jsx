import './About.css'; 

const ReturnPolicy = () => {
  return (
    <div className="about-page container section animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="about-header">
        <h1 className="section-title">Return & <span className="gradient-text">Refund Policy</span></h1>
      </div>
      
      <div className="terms-content" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>1. Digital Templates</h3>
        <p>
          Due to the digital nature of our starter templates, all sales are final. Once a template is purchased and access is granted, we cannot offer refunds, returns, or exchanges. We encourage you to review the template previews and details carefully before completing your purchase.
        </p>

        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>2. Custom Projects</h3>
        <p>
          For custom web design and automation services, the 50% initial deposit is non-refundable as it covers the research, planning, and initial engineering phases. If a project is cancelled by the client after this phase, the client remains responsible for payment of all work completed to date.
        </p>

        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>3. Support & Issues</h3>
        <p>
          While we do not offer refunds, we are fully committed to your satisfaction. If you encounter any technical issues with a purchased template or a completed custom project, we provide 30 days of post-delivery support to ensure everything is functioning correctly.
        </p>

        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>4. Exceptions</h3>
        <p>
          Exceptions to this policy may be made at our sole discretion in cases of accidental duplicate purchases or verified technical failures on our end that prevent the delivery of the product.
        </p>

        <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
