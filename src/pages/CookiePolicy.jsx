function Cookies() {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
            color: '#111827'
          }}>
            Cookie Policy
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
            FoodSnap may use cookies and similar technologies to improve user
            experience and monitor performance.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* What Are Cookies? */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              What Are Cookies?
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '0.75rem'
            }}>
              Cookies are small files stored on your device to help websites
              function properly.
            </p>
            <div style={{
              padding: '0.75rem',
              background: 'rgba(16, 185, 129, 0.05)',
              borderRadius: '0.5rem',
              fontSize: '0.95rem',
              color: '#047857'
            }}>
              🍪 Small text files that enhance your browsing experience
            </div>
          </div>

          {/* How We Use Cookies */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              How We Use Cookies
            </h2>
            <ul style={{
              margin: '0',
              paddingLeft: '1.25rem',
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                To remember user preferences
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                To track performance and usage statistics
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                To improve app functionality
              </li>
              <li>
                To enhance your overall experience
              </li>
            </ul>
          </div>

          {/* Cookie Types */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              Types of Cookies We Use
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                padding: '1rem',
                background: 'rgba(16, 185, 129, 0.05)',
                borderRadius: '0.5rem',
                borderLeft: '3px solid #10b981'
              }}>
                <p style={{
                  fontWeight: '600',
                  color: '#065f46',
                  margin: '0 0 0.25rem 0',
                  fontSize: '1rem'
                }}>
                  Essential Cookies
                </p>
                <p style={{
                  color: '#4b5563',
                  fontSize: '0.95rem',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  Required for basic site functionality
                </p>
              </div>
              
              <div style={{
                padding: '1rem',
                background: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '0.5rem',
                borderLeft: '3px solid #3b82f6'
              }}>
                <p style={{
                  fontWeight: '600',
                  color: '#1d4ed8',
                  margin: '0 0 0.25rem 0',
                  fontSize: '1rem'
                }}>
                  Analytics Cookies
                </p>
                <p style={{
                  color: '#4b5563',
                  fontSize: '0.95rem',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  Help us understand how users interact with our app
                </p>
              </div>
              
              <div style={{
                padding: '1rem',
                background: 'rgba(245, 158, 11, 0.05)',
                borderRadius: '0.5rem',
                borderLeft: '3px solid #f59e0b'
              }}>
                <p style={{
                  fontWeight: '600',
                  color: '#d97706',
                  margin: '0 0 0.25rem 0',
                  fontSize: '1rem'
                }}>
                  Preference Cookies
                </p>
                <p style={{
                  color: '#4b5563',
                  fontSize: '0.95rem',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  Remember your settings and preferences
                </p>
              </div>
            </div>
          </div>

          {/* Managing Cookies */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              Managing Cookies
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              You can disable cookies through your browser settings, but some
              features may not work properly.
            </p>
            <div style={{
              padding: '0.75rem',
              background: 'rgba(139, 92, 246, 0.05)',
              borderRadius: '0.5rem',
              fontSize: '0.95rem',
              color: '#7c3aed'
            }}>
              ⚙️ Most browsers allow you to control cookie settings in their privacy options
            </div>
          </div>

          {/* Browser Instructions */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3" />
                </svg>
              </div>
              Browser Cookie Controls
            </h2>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              To manage cookies in your browser:
            </p>
            <ul style={{
              margin: '0',
              paddingLeft: '1.25rem',
              color: '#4b5563',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Chrome:</strong> Settings → Privacy and Security → Cookies
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Firefox:</strong> Options → Privacy & Security → Cookies
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Safari:</strong> Preferences → Privacy → Cookies
              </li>
              <li>
                <strong>Edge:</strong> Settings → Privacy, search, and services → Cookies
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
            fontSize: '0.875rem',
            marginBottom: '0.5rem'
          }}>
            For more information about cookies, visit 
            <a 
              href="https://www.allaboutcookies.org" 
              style={{
                color: '#059669',
                textDecoration: 'none',
                marginLeft: '0.25rem'
              }}
            >
              allaboutcookies.org
            </a>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Cookies;