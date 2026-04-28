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
      question: "How long does a custom project take?",
      answer: "Custom UI/UX and automation projects typically take 2-4 weeks depending on complexity. We focus on quality and precision, ensuring every element is architected for peak performance."
    },
    {
      question: "Do you offer logo and branding services?",
      answer: "Yes! We offer comprehensive branding packages including logo design, color palettes, and full visual identity systems to ensure your business stands out."
    },
    {
      question: "What kind of business automation do you provide?",
      answer: "We build internal dashboards, automated customer workflows, CRM integrations, and custom tools that eliminate repetitive tasks, allowing you to focus on growth."
    },
    {
      question: "Is hosting and domain setup included?",
      answer: "With 'The Complete Package', we handle everything from domain registration to high-performance cloud hosting. For other packages, we provide full guidance and deployment support."
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
