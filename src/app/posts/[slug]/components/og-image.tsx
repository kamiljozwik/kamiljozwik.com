import React from 'react'

type Props = {
  meta: {
    title: string
    description: string
  } | undefined
}

export const OgImage = ({ meta }: Props) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #121212 0%, #2d2d2d 100%)',
        color: 'white',
        fontFamily: 'Geist, sans-serif',
        padding: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #3182ce 0%, #805ad5 100%)',
        opacity: '0.1',
        filter: 'blur(40px)',
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-50px',
        right: '-50px',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #805ad5 0%, #3182ce 100%)',
        opacity: '0.1',
        filter: 'blur(40px)',
      }} />

      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 70% 20%, rgba(49, 130, 206, 0.08) 0%, transparent 25%)',
      }} />

      {/* Content Container */}
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        zIndex: '1',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <p style={{
            fontSize: '24px',
            fontWeight: '700',
            margin: '0',
            background: 'linear-gradient(90deg, #ffffff 0%, #a0aec0 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px',
          }}>kamiljozwik.com</p>

          <div style={{
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            fontSize: '14px',
          }}>
            Post
          </div>
        </div>

        {/* Title */}
        <div style={{
          width: '100%',
          padding: '20px 0',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '700',
            lineHeight: '1.2',
            margin: '0',
            marginBottom: '20px',
            maxWidth: '90%',
            letterSpacing: '-1.5px',
          }}>
            {meta?.title}
          </h1>

          <p style={{
            fontSize: '24px',
            color: '#a0aec0',
            margin: '0',
            maxWidth: '80%',
            lineHeight: '1.4',
          }}>
            {meta?.description}
          </p>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #3182ce 0%, #805ad5 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            fontSize: '18px',
            fontWeight: '700',
          }}>
            KJ
          </div>
          <p style={{
            margin: '0',
            fontSize: '18px',
            fontWeight: '500',
          }}>
            Kamil Józwik
          </p>
        </div>
      </div>
    </div>
  )
}