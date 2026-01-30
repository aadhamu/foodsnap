function Disclaimer() {
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
            background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
            marginBottom: '1rem',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            <svg style={{ width: '2rem', height: '2rem', color: '#dc2626' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
            color: '#111827'
          }}>
            Disclaimer
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
          background: '#fee2e2',
          borderRadius: '0.75rem',
          borderLeft: '3px solid #dc2626'
        }}>
          <p style={{
            fontSize: '1.125rem',
            color: '#7f1d1d',
            lineHeight: '1.7',
            margin: 0,
            fontWeight: '500'
          }}>
            FoodSnap provides AI-generated nutritional estimates. These results are
            not guaranteed to be accurate.
          </p>
        </div>

        {/* Warning Banner */}
        <div style={{
          marginBottom: '2.5rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
          borderRadius: '0.75rem',
          border: '2px solid #f59e0b',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <svg style={{ width: '1.5rem', height: '1.5rem', color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span style={{
              fontSize: '1.125rem',
              fontWeight: '700',
              color: '#92400e'
            }}>
              IMPORTANT DISCLAIMER
            </span>
          </div>
          <p style={{
            color: '#78350f',
            fontSize: '1.05rem',
            lineHeight: '1.6',
            margin: 0
          }}>
            Please read this disclaimer carefully before using FoodSnap.
            This is not a substitute for professional medical advice.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* No Professional Advice */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            borderTop: '4px solid #dc2626'
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
                background: 'rgba(239, 68, 68, 0.1)',
                border: '2px solid rgba(239, 68, 68, 0.3)'
              }}>
                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#ef4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              No Professional Advice
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              This app does not provide medical, health, or dietary advice. Always
              consult a professional before making health decisions.
            </p>
            <div style={{
              padding: '0.75rem',
              background: 'rgba(239, 68, 68, 0.05)',
              borderRadius: '0.5rem',
              borderLeft: '3px solid #ef4444'
            }}>
              <p style={{
                color: '#b91c1c',
                fontSize: '0.95rem',
                fontWeight: '600',
                margin: 0
              }}>
                ⚕️ Consult healthcare professionals for medical and dietary advice
              </p>
            </div>
          </div>

          {/* Use at Your Own Risk */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            borderTop: '4px solid #f59e0b'
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
                background: 'rgba(245, 158, 11, 0.1)',
                border: '2px solid rgba(245, 158, 11, 0.3)'
              }}>
                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#f59e0b' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              Use at Your Own Risk
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '0.75rem'
            }}>
              You accept full responsibility for how you use the information
              provided.
            </p>
            <ul style={{
              margin: '0',
              paddingLeft: '1.25rem',
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                AI estimates are not guaranteed to be accurate
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                Use the information provided at your own discretion
              </li>
              <li>
                FoodSnap is not liable for decisions made based on AI analysis
              </li>
            </ul>
          </div>

          {/* Accuracy Disclaimer */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            borderTop: '4px solid #d97706'
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
                background: 'rgba(217, 119, 6, 0.1)',
                border: '2px solid rgba(217, 119, 6, 0.3)'
              }}>
                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Accuracy Disclaimer
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '0.75rem'
            }}>
              Nutritional information provided by FoodSnap:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '1rem'
            }}>
              <div style={{
                padding: '1rem',
                background: 'rgba(254, 226, 226, 0.3)',
                borderRadius: '0.5rem',
                border: '1px solid #fecaca'
              }}>
                <p style={{
                  fontWeight: '600',
                  color: '#dc2626',
                  margin: '0 0 0.25rem 0',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Not 100% Accurate
                </p>
                <p style={{
                  color: '#7f1d1d',
                  fontSize: '0.95rem',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  AI analysis may not be perfectly accurate
                </p>
              </div>
              
              <div style={{
                padding: '1rem',
                background: 'rgba(254, 249, 195, 0.3)',
                borderRadius: '0.5rem',
                border: '1px solid #fef08a'
              }}>
                <p style={{
                  fontWeight: '600',
                  color: '#854d0e',
                  margin: '0 0 0.25rem 0',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  For Informational Use
                </p>
                <p style={{
                  color: '#78350f',
                  fontSize: '0.95rem',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  Use as a general guide only
                </p>
              </div>
              
              <div style={{
                padding: '1rem',
                background: 'rgba(220, 252, 231, 0.3)',
                borderRadius: '0.5rem',
                border: '1px solid #bbf7d0'
              }}>
                <p style={{
                  fontWeight: '600',
                  color: '#065f46',
                  margin: '0 0 0.25rem 0',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Estimates Only
                </p>
                <p style={{
                  color: '#047857',
                  fontSize: '0.95rem',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  Results are estimates, not exact measurements
                </p>
              </div>
            </div>
          </div>

          {/* External Services */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            borderTop: '4px solid #7c3aed'
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
                background: 'rgba(139, 92, 246, 0.1)',
                border: '2px solid rgba(139, 92, 246, 0.3)'
              }}>
                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#8b5cf6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              External Services
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              AI analysis is powered by third-party services. We are not responsible
              for their performance or policies.
            </p>
            <div style={{
              padding: '0.75rem',
              background: 'rgba(139, 92, 246, 0.05)',
              borderRadius: '0.5rem',
              borderLeft: '3px solid #8b5cf6'
            }}>
              <p style={{
                color: '#6d28d9',
                fontSize: '0.95rem',
                fontWeight: '500',
                margin: 0
              }}>
                🔗 Third-party AI services may have their own limitations and terms
              </p>
            </div>
          </div>

          {/* Final Warning */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
            border: '2px solid #fca5a5',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: '#dc2626' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#991b1b'
              }}>
                FINAL DISCLAIMER
              </span>
            </div>
            <p style={{
              color: '#7f1d1d',
              fontSize: '1.05rem',
              lineHeight: '1.6',
              margin: 0,
              fontWeight: '500'
            }}>
              By using FoodSnap, you acknowledge and agree to all limitations 
              and disclaimers outlined above. Use this service responsibly.
            </p>
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
            For medical advice, please consult qualified healthcare professionals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;