import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'linear-gradient(to bottom, rgba(240, 253, 244, 0.98), rgba(209, 250, 229, 0.95))',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(187, 247, 208, 0.3)',
        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 1rem'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '0.5rem 0'
          }}>
            
            {/* Logo - Smaller and cleaner */}
            <Link 
              to="/" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                padding: '0.25rem 0'
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                padding: '0.4rem',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg 
                  style={{ 
                    width: '1.25rem', 
                    height: '1.25rem', 
                    color: 'white'
                  }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                background: 'linear-gradient(to right, #065f46, #059669)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em'
              }}>
                FoodSnap
              </span>
            </Link>

            {/* Navigation Links */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem'
            }}>
              {/* Home Link */}
              <Link 
                to="/" 
                style={{
                  color: '#1f2937',
                  fontWeight: 500,
                  textDecoration: 'none',
                  fontSize: '1rem',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#059669';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#1f2937';
                }}
              >
                Home
              </Link>

              {/* Try It Now Button */}
              <Link 
                to="/scan" 
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  letterSpacing: '0.01em'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.25)';
                }}
              >
                <svg 
                  style={{ 
                    width: '1rem', 
                    height: '1rem'
                  }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Try It
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          nav {
            padding: 0 0.75rem !important;
          }
          
          nav > div > div {
            padding: 0.4rem 0 !important;
          }
          
          a[href="/"] > div {
            padding: 0.35rem !important;
            border-radius: 8px !important;
          }
          
          a[href="/"] > div svg {
            width: 1rem !important;
            height: 1rem !important;
          }
          
          a[href="/"] > span {
            font-size: 1.25rem !important;
          }
          
          div > div:nth-child(2) {
            gap: 1rem !important;
          }
          
          a[href="/"] {
            font-size: 0.95rem !important;
          }
          
          a[href="/scan"] {
            padding: 0.4rem 1rem !important;
            font-size: 0.85rem !important;
            border-radius: 6px !important;
          }
          
          a[href="/scan"] svg {
            width: 0.875rem !important;
            height: 0.875rem !important;
          }
        }
        
        @media (max-width: 480px) {
          a[href="/"] > span {
            font-size: 1.1rem !important;
          }
          
          a[href="/"] {
            font-size: 0.9rem !important;
          }
          
          a[href="/scan"] {
            padding: 0.35rem 0.75rem !important;
            font-size: 0.8rem !important;
          }
          
          div > div:nth-child(2) {
            gap: 0.75rem !important;
          }
        }
        
        @media (max-width: 360px) {
          a[href="/"] > span {
            font-size: 1rem !important;
          }
          
          a[href="/scan"] span {
            display: none;
          }
          
          a[href="/scan"] {
            padding: 0.35rem !important;
            border-radius: 50% !important;
            width: 2.25rem;
            height: 2.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          a[href="/scan"] svg {
            margin: 0 !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;