import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCamera, FaRobot, FaChartBar, FaCheckCircle } from "react-icons/fa";


function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      number: "01",
      icon: (
        <svg style={{ width: '2.5rem', height: '2.5rem', color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Snap & Upload",
      description: "Take a clear photo of your meal or upload an existing picture from your gallery. No need for perfect lighting!",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)",
      delay: "0.1s"
    },
    {
      number: "02",
      icon: (
        <svg style={{ width: '2.5rem', height: '2.5rem', color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI Analysis",
      description: "Our advanced AI scans the image, identifies multiple food items, and analyzes portion sizes automatically.",
      color: "#059669",
      gradient: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
      delay: "0.2s"
    },
    {
      number: "03",
      icon: (
        <svg style={{ width: '2.5rem', height: '2.5rem', color: '#047857' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Nutrition Breakdown",
      description: "Get instant detailed nutritional information including calories, protein, carbs, fats, vitamins, and more.",
      color: "#047857",
      gradient: "linear-gradient(135deg, #bbf7d0 0%, #a7f3d0 100%)",
      delay: "0.3s"
    },
    {
      number: "04",
      icon: (
        <svg style={{ width: '2.5rem', height: '2.5rem', color: '#065f46' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3" />
        </svg>
      ),
      title: "Daily Tracking",
      description: "Your meals are automatically logged. Track daily totals and progress toward your fitness goals effortlessly.",
      color: "#065f46",
      gradient: "linear-gradient(135deg, #a7f3d0 0%, #6ee7b7 100%)",
      delay: "0.4s"
    }
  ];

 const journeySteps = [
  {
    step: "Before Meal",
    action: "Take photo of your plate",
    result: "Image captured for analysis",
    icon: <FaCamera size={20} className="text-green-500" />
  },
  {
    step: "During Processing",
    action: "AI identifies food items",
    result: "Food database matched",
    icon: <FaRobot size={20} className="text-blue-500" />
  },
  {
    step: "Analysis",
    action: "Nutrition calculation",
    result: "Detailed breakdown generated",
    icon: <FaChartBar size={20} className="text-yellow-500" />
  },
  {
    step: "Result",
    action: "Report delivered",
    result: "Meal logged in your diary",
    icon: <FaCheckCircle size={20} className="text-green-600" />
  }
];


  return (
    <section style={{
      padding: '4rem 1rem',
      background: 'linear-gradient(to bottom, #ffffff, #f8fafc)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 20s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 25s ease-in-out infinite reverse'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            padding: '0.5rem 1.25rem',
            borderRadius: '50px',
            marginBottom: '1rem',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{
              color: '#059669',
              fontWeight: '600',
              fontSize: '0.875rem',
              letterSpacing: '0.05em'
            }}>
              SIMPLE • FAST • ACCURATE
            </span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #065f46, #059669)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2',
            letterSpacing: '-0.025em'
          }}>
            How FoodSnap Works
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Four simple steps from snap to nutrition facts. No manual input, no guesswork — 
            just instant insights about what you're eating.
          </p>
        </div>

        {/* Steps Grid - Responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {steps.map((step, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '1.25rem',
                padding: '1.75rem',
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: step.delay
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 10px 30px -5px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Animated Background Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '4px',
                background: step.gradient,
                transform: 'scaleY(0)',
                transformOrigin: 'top',
                transition: 'transform 0.6s ease',
                transitionDelay: '0.2s'
              }}></div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1.25rem'
              }}>
                {/* Step Number Circle */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: step.gradient,
                  border: `2px solid ${step.color}`,
                  flexShrink: 0
                }}>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: step.color
                  }}>
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '0.875rem',
                  background: step.gradient,
                  boxShadow: '0 8px 16px -4px rgba(16, 185, 129, 0.2)',
                  flexShrink: 0
                }}>
                  {step.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '700',
                  color: '#111827',
                  margin: 0
                }}>
                  {step.title}
                </h3>
              </div>
              
              <p style={{
                color: '#6b7280',
                lineHeight: '1.7',
                margin: 0,
                paddingLeft: '0.5rem'
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Timeline - Mobile Optimized */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1.25rem',
          padding: '2rem 1.25rem',
          marginBottom: '4rem',
          boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e5e7eb',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1.5rem',
            textAlign: 'center',
            background: 'linear-gradient(to right, #065f46, #059669)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            The Complete Journey
          </h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {journeySteps.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  backgroundColor: idx % 2 === 0 ? '#f9fafb' : 'white',
                  borderLeft: `4px solid ${steps[idx]?.color || '#10b981'}`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateX(8px)';
                  e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {/* Icon Badge */}
                <div style={{
                  fontSize: '1.5rem',
                  minWidth: '2.5rem',
                  height: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '0.5rem',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                
                {/* Content */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  minWidth: 0, // Prevents overflow
                  gap: '0.25rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      fontWeight: '600',
                      color: steps[idx]?.color || '#10b981',
                      fontSize: '0.95rem',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.step}
                    </span>
                    <span style={{
                      color: '#9ca3af',
                      fontSize: '0.875rem'
                    }}>
                      →
                    </span>
                    <span style={{
                      color: '#4b5563',
                      fontSize: '0.95rem',
                      flex: 1,
                      minWidth: 0,
                      wordBreak: 'break-word'
                    }}>
                      {item.action}
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      color: '#059669',
                      fontWeight: '500',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      padding: '0.375rem 0.75rem',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: '2.5rem 1.5rem',
          borderRadius: '1.25rem',
          background: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)',
          border: '1px solid #bbf7d0',
          boxShadow: '0 20px 40px -15px rgba(16, 185, 129, 0.15)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#065f46',
            marginBottom: '1rem',
            lineHeight: '1.3'
          }}>
            Ready to Transform Your Eating Habits?
          </h3>
          
          <p style={{
            fontSize: '1.125rem',
            color: '#4b5563',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Join thousands who have simplified their nutrition tracking with FoodSnap.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap' 
          }}>
            <Link 
              to="/scan"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '0.875rem 1.75rem',
                borderRadius: '10px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '1rem',
                boxShadow: '0 10px 20px -5px rgba(16, 185, 129, 0.3)',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 30px -5px rgba(16, 185, 129, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 20px -5px rgba(16, 185, 129, 0.3)';
              }}
            >
              <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Start Scanning Now
            </Link>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @media (min-width: 640px) {
          .how-it-works-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (min-width: 1024px) {
          .how-it-works-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        
        @media (max-width: 640px) {
          section {
            padding: 3rem 0.75rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
            padding: 0 0.5rem;
          }
          
          .journey-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          
          .journey-item > div:first-child {
            min-width: auto !important;
            width: 100%;
          }
          
          .journey-item > div:last-child {
            width: 100%;
            text-align: left;
          }
        }
        
        @media (max-width: 480px) {
          .timeline-step {
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          
          .timeline-step > div {
            width: 100% !important;
            min-width: auto !important;
            margin-bottom: 0.5rem;
          }
          
          .timeline-step > div:last-child {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

export default HowItWorks;