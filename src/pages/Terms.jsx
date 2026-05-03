import './About.css'; // Reuse some layout styles

const Terms = () => {
  return (
    <div className="about-page container section animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="about-header">
        <h1 className="section-title">Terms & <span className="gradient-text">Conditions</span></h1>
      </div>
      
      <div className="terms-content" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h3>
        <p>
          Welcome to Mariyazi. By engaging with our web design and development services, you agree to be bound by the following Terms and Conditions. Please read them carefully before initiating any projects.
        </p>

        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>2. Services & Pricing</h3>
        <p>
          Our starter templates begin at $219. Custom web architectures, comprehensive automation setups, and premium digital packages are priced based on the project scope defined during the discovery phase. A 50% non-refundable deposit is required to commence engineering, with the remaining 50% due upon project completion before final deployment.
        </p>

        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>3. Revisions & Approvals</h3>
        <p>
          Projects include a set number of revision rounds to ensure your vision is executed flawlessly. Additional revisions outside the original scope will be billed at our standard agency rate. Upon final approval, any further structural or design modifications will require a new work order.
        </p>

        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>4. Intellectual Property</h3>
        <p>
          Upon final payment, full intellectual property rights for the finalized design and code are transferred to you. We reserve the right to display the completed project in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) is signed prior to project commencement.
        </p>

        <h3 style={{ color: 'var(--color-text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>5. Client Responsibilities</h3>
        <p>
          You are responsible for providing all necessary text, images, and content required for the website in a timely manner. Delays in providing content may result in project timeline extensions. We are not liable for any copyright infringements related to content provided by you.
        </p>

        <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Terms;
