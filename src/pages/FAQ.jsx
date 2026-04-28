import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What is included in a Starter Template?",
      answer: "Starter Templates include a professionally designed landing page tailored to your niche, high-fidelity mockups, mobile-responsive layout, and a clean, optimized code foundation. It's the fastest way to launch an elite brand presence."
    },
    {
      question: "Do I own the website and code after purchase?",
      answer: "Absolutely. Once the final payment is made, you own 100% of the rights to the code, designs, and assets created for your project. We build for you, not for us."
    },
    {
      question: "How long does a custom project take?",
      answer: "Custom UI/UX and automation projects typically take 2-4 weeks depending on complexity. We focus on quality and precision, ensuring every element is architected for peak performance."
    },
    {
      question: "How many revisions do I get?",
      answer: "For custom designs, we include 3 rounds of major revisions. We work closely with you during the wireframing and mockup stages to ensure the final product is exactly what you envisioned."
    },
    {
      question: "What kind of business automation do you provide?",
      answer: "We build internal dashboards, automated customer workflows, CRM integrations, and custom tools that eliminate repetitive tasks. Whether it's automated booking systems or data synchronization, we've got you covered."
    },
    {
      question: "Will my website be SEO optimized?",
      answer: "Yes. Every site we build follows SEO best practices, including semantic HTML, fast load times, meta tag optimization, and mobile-first indexing to give you the best possible start on search engines."
    },
    {
      question: "Do you offer logo and branding services?",
      answer: "Yes! We offer comprehensive branding packages including logo design, color palettes, and full visual identity systems to ensure your business stands out."
    },
    {
      question: "What tech stack do you use?",
      answer: "We primarily use modern, high-performance technologies like React, Next.js, and Vite, along with advanced CSS for animations. This ensures your site is blazing fast and future-proof."
    },
    {
      question: "Do you build E-commerce stores?",
      answer: "Yes, we build custom e-commerce solutions ranging from simple product landing pages to complex stores integrated with Stripe or Shopify."
    },
    {
      question: "What happens after the website is launched?",
      answer: "We don't just disappear. We provide 30 days of post-launch support to fix any bugs and ensure you're comfortable managing your new digital asset."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page container section animate-fade-in">
      <div className="page-header">
        <h1 className="section-title">Common <span className="gradient-text">Questions</span></h1>
        <p className="page-subtitle">Everything you need to know about our process and services.</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item glass-panel ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
