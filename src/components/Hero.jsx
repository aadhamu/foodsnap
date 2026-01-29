import { Link } from "react-router-dom";

function Hero() {
  return (
    <section style={{
      position: 'relative',
      textAlign: 'center',
      padding: '6rem 1rem',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 50%, #a7f3d0 100%)',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-10%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, transparent 70%)',
        borderRadius: '50%'
      }}></div>
      
      {/* Floating food icons */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        animation: 'float 6s ease-in-out infinite'
      }}>
        <svg style={{ width: '60px', height: '60px', opacity: '0.7' }} fill="#10b981" viewBox="0 0 24 24">
          <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"/>
        </svg>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '25%',
        right: '15%',
        animation: 'float 7s ease-in-out infinite 1s'
      }}>
        <svg style={{ width: '50px', height: '50px', opacity: '0.7' }} fill="#059669" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>

      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 1 
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          padding: '0.5rem 1.5rem',
          borderRadius: '50px',
          marginBottom: '1.5rem',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          <span style={{
            color: '#059669',
            fontWeight: '600',
            fontSize: '0.875rem',
            letterSpacing: '0.05em'
          }}>
             TRACK • ANALYZE • TRANSFORM
          </span>
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          marginBottom: '1.5rem',
          background: 'linear-gradient(to right, #065f46, #059669, #10b981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: '1.2',
          letterSpacing: '-0.025em'
        }}>
          Snap Your Food.<br />
          <span style={{ color: '#059669' }}>Know What You Eat.</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.25rem',
          color: '#374151',
          marginBottom: '2rem',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto 2rem',
          opacity: '0.9'
        }}>
          Stop guessing, start knowing. Upload a food photo and instantly get detailed nutritional 
          information — calories, protein, carbs, and more. Your journey to better eating starts here.
        </p>

        {/* Problem Statement Highlight */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '1.5rem',
          borderRadius: '1rem',
          marginBottom: '2.5rem',
          borderLeft: '4px solid #10b981',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
          textAlign: 'left',
          maxWidth: '700px',
          margin: '0 auto 2.5rem'
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#4b5563',
            margin: 0,
            fontStyle: 'italic',
            lineHeight: '1.6'
          }}>
            "As someone who started going to the gym, I realized the biggest challenge isn't working out — 
            it's eating right. Tracking nutrition shouldn't be stressful. That's why I built FoodSnap."
          </p>
        </div>

        {/* CTA Button */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/scan"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '1.125rem',
              boxShadow: '0 10px 20px -5px rgba(16, 185, 129, 0.4)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 30px -5px rgba(16, 185, 129, 0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 20px -5px rgba(16, 185, 129, 0.4)';
            }}
          >
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Try It Now — Free
          </Link>
          
          <Link 
            to="/how-it-works"
            style={{
              background: 'transparent',
              color: '#059669',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '1.125rem',
              border: '2px solid #10b981',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            See How It Works
          </Link>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginTop: '3rem',
          flexWrap: 'wrap'
        }}>
          {[
            { value: 'Instant', label: 'Analysis' },
            { value: '100+', label: 'Foods Identified' },
            { value: '0%', label: 'Manual Input' },
            { value: '24/7', label: 'Tracking' }
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#065f46',
                marginBottom: '0.25rem'
              }}>{stat.value}</div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '500'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <svg style={{ width: '24px', height: '24px', color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Add animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        @media (max-width: 768px) {
          .hero-heading {
            font-size: 2.5rem !important;
          }
          .hero-subtitle {
            font-size: 1.125rem !important;
            padding: 0 1rem;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          .hero-buttons a {
            width: 100%;
            max-width: 300px;
            text-align: center;
            justify-content: center;
          }
          .hero-stats {
            gap: 1.5rem;
          }
          .hero-stats div {
            min-width: 120px;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;