function PrivacyPolicy() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f0fdf4 100%)',
      padding: '3rem 1rem'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '1.25rem',
        padding: '2.5rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
        border: '1px solid rgba(229, 231, 235, 0.4)'
      }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '4rem',
            height: '4rem',
            borderRadius: '0.75rem',
            background: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)',
            marginBottom: '1rem',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <svg style={{ width: '2rem', height: '2rem', color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
            color: '#111827'
          }}>
            Privacy Policy
          </h1>
          
          <p style={{
            color: '#6b7280',
            fontSize: '1rem',
            marginBottom: '0.5rem'
          }}>
            Last updated: January 2026
          </p>
        </div>

        {/* Introduction */}
        <div style={{
          marginBottom: '2.5rem',
          padding: '1.5rem',
          background: '#f9fafb',
          borderRadius: '0.75rem',
          borderLeft: '3px solid #10b981'
        }}>
          <p style={{
            fontSize: '1.125rem',
            color: '#374151',
            lineHeight: '1.7',
            margin: 0
          }}>
            FoodSnap respects your privacy. This policy explains how we collect,
            use, and protect your information when you use our food analysis
            application.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Information We Collect */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb'
          }}>
            <h2 style={{
              fontSize: '1.375rem',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.5rem',
                background: 'rgba(16, 185, 129, 0.1)'
              }}>
                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              Information We Collect
            </h2>
            <ul style={{
              margin: '0',
              paddingLeft: '1.25rem',
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                Food images you upload for analysis
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                Basic device and browser information
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                Usage data to improve app performance
              </li>
              <li>
                Anonymous analytics for service improvement
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb'
          }}>
            <h2 style={{
              fontSize: '1.375rem',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.5rem',
                background: 'rgba(59, 130, 246, 0.1)'
              }}>
                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#3b82f6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              How We Use Your Information
            </h2>
            <ul style={{
              margin: '0',
              paddingLeft: '1.25rem',
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                To analyze food and provide nutrition insights
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                To improve system accuracy and performance
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                To maintain app security
              </li>
              <li>
                To enhance user experience
              </li>
            </ul>
          </div>

          {/* Data Storage */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb'
          }}>
            <h2 style={{
              fontSize: '1.375rem',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.5rem',
                background: 'rgba(245, 158, 11, 0.1)'
              }}>
                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#f59e0b' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              Data Storage
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              We do not permanently store your food images. Images are processed
              through AI services and discarded after analysis unless stated
              otherwise.
            </p>
            <div style={{
              padding: '0.75rem',
              background: 'rgba(16, 185, 129, 0.05)',
              borderRadius: '0.5rem',
              fontSize: '0.95rem',
              color: '#047857'
            }}>
              🔒 Your privacy is protected with temporary data processing
            </div>
          </div>

          {/* Third-Party Services */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb'
          }}>
            <h2 style={{
              fontSize: '1.375rem',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.5rem',
                background: 'rgba(139, 92, 246, 0.1)'
              }}>
                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#8b5cf6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              Third-Party Services
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '0.75rem'
            }}>
              FoodSnap uses external AI APIs to analyze food images. These services
              may process data according to their own privacy policies.
            </p>
            <div style={{
              padding: '0.75rem',
              background: 'rgba(139, 92, 246, 0.05)',
              borderRadius: '0.5rem',
              fontSize: '0.95rem',
              color: '#7c3aed'
            }}>
              🔗 We carefully select partners with strong privacy standards
            </div>
          </div>

          {/* Your Rights */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb'
          }}>
            <h2 style={{
              fontSize: '1.375rem',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.5rem',
                background: 'rgba(239, 68, 68, 0.1)'
              }}>
                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#ef4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Your Rights
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '0.75rem'
            }}>
              You may stop using the service at any time. Since we do not require
              accounts, we do not store personal identity data.
            </p>
            <ul style={{
              margin: '0',
              paddingLeft: '1.25rem',
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                Control over the data you upload
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                Ability to stop using the service anytime
              </li>
              <li>
                No persistent personal data storage
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid #e5e7eb',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '0.875rem'
          }}>
            For questions about our privacy practices, contact us at balaaadhamu45@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;