function Terms() {
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
        
        {/* Simple Header */}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
            color: '#111827'
          }}>
            Terms of Service
          </h1>
          
          <p style={{
            color: '#6b7280',
            fontSize: '1rem',
            marginBottom: '0.5rem'
          }}>
            Effective January 2026
          </p>
        </div>

        {/* Introduction - Clean */}
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
            By using FoodSnap, you agree to these terms. If you do not agree,
            please do not use the service.
          </p>
        </div>

        {/* Terms Sections - Clean and Spacious */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Service Description */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            transition: 'all 0.2s ease'
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              Service Description
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '0.75rem'
            }}>
              FoodSnap provides AI-powered food image analysis and estimated
              nutritional information.
            </p>
            <div style={{
              padding: '0.75rem',
              background: 'rgba(16, 185, 129, 0.05)',
              borderRadius: '0.5rem',
              fontSize: '0.95rem',
              color: '#047857'
            }}>
              📝 Note: Results are AI estimates for informational purposes
            </div>
          </div>

          {/* No Medical Advice */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            transition: 'all 0.2s ease'
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              No Medical Advice
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '0.75rem'
            }}>
              The information provided is for educational and informational purposes
              only. It is not medical or dietary advice.
            </p>
            <div style={{
              padding: '0.75rem',
              background: 'rgba(239, 68, 68, 0.05)',
              borderRadius: '0.5rem',
              fontSize: '0.95rem',
              color: '#dc2626',
              fontWeight: '500'
            }}>
              ⚠️ Consult healthcare professionals for medical decisions
            </div>
          </div>

          {/* User Responsibilities */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            transition: 'all 0.2s ease'
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              User Responsibilities
            </h2>
            <ul style={{
              margin: '0',
              paddingLeft: '1.25rem',
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                You must not upload harmful or illegal content
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                You understand results may not be 100% accurate
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                You use the app at your own risk
              </li>
              <li>
                Maintain account security and confidentiality
              </li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            transition: 'all 0.2s ease'
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              Limitation of Liability
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              FoodSnap is not responsible for decisions made based on nutrition
              estimates provided by the AI.
            </p>
          </div>

          {/* Changes to Terms */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            transition: 'all 0.2s ease'
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Changes to Terms
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              We may update these terms at any time without notice.
            </p>
          </div>
        </div>

        {/* Simple Footer */}
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
            Last updated: January 2026
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;