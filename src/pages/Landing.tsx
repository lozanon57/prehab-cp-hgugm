import { useNavigate } from 'react-router-dom'
import { ChevronRight, Info } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export function Landing() {
  const navigate = useNavigate()
  const { t, lang, setLang } = useLanguage()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
      {/* Top bar */}
      <header style={{
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        position: 'sticky', top: 0, zIndex: 50,
        minHeight: '56px',
        display: 'flex', alignItems: 'center',
        padding: '0 20px',
        justifyContent: 'space-between',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '17px', fontWeight: 600,
          color: 'var(--color-navy)',
          lineHeight: '1.2',
        }}>
          H.G.U. Gregorio Marañón
        </h1>
        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          style={{
            height: '32px', padding: '0 12px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-navy-muted)',
            color: 'var(--color-navy)',
            fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.05em',
            border: 'none', cursor: 'pointer',
          }}
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </header>

      <main style={{ flex: 1, maxWidth: '640px', margin: '0 auto', width: '100%', padding: '32px 20px 40px' }}>
        {/* Hero */}
        <div style={{
          backgroundColor: '#1B3F6B',
          borderRadius: 'var(--radius-xl)',
          padding: '32px 24px',
          marginBottom: '32px',
          color: 'white',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>🩺</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '26px', fontWeight: 700,
            marginBottom: '8px', lineHeight: '1.2',
          }}>
            {lang === 'es' ? 'Carcinomatosis peritoneal' : 'Peritoneal carcinomatosis'}
          </h2>
          <p style={{ fontSize: '15px', opacity: 0.8, lineHeight: '1.5' }}>
            {lang === 'es' ? 'CRS + HIPEC · PIPAC' : 'CRS + HIPEC · PIPAC'}
          </p>
          <p style={{ fontSize: '13px', opacity: 0.6, marginTop: '8px' }}>
            {lang === 'es'
              ? 'Programa de prehabilitación y recuperación oncológica'
              : 'Oncological prehabilitation and recovery programme'}
          </p>
        </div>

        {/* Section label */}
        <p className="label-caps" style={{ color: 'var(--color-text-muted)', marginBottom: '12px', paddingLeft: '4px' }}>
          {lang === 'es' ? '¿Qué necesitas?' : 'What do you need?'}
        </p>

        {/* Action buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          <button
            onClick={() => navigate('/prehab/CP')}
            className="pressable"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              boxShadow: 'var(--shadow-card)',
              display: 'flex', alignItems: 'center', gap: '16px',
              minHeight: '80px',
              borderLeft: '4px solid #1B3F6B',
            }}
          >
            <span style={{ fontSize: '28px' }}>💪</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '2px' }}>
                {lang === 'es' ? 'Prehabilitación' : 'Prehabilitation'}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                {lang === 'es' ? 'Antes de la cirugía · Ejercicio, nutrición y bienestar' : 'Before surgery · Exercise, nutrition and wellbeing'}
              </p>
            </div>
            <ChevronRight size={20} color="var(--color-text-muted)" />
          </button>

          <button
            onClick={() => navigate('/recuperacion/CP')}
            className="pressable"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              boxShadow: 'var(--shadow-card)',
              display: 'flex', alignItems: 'center', gap: '16px',
              minHeight: '80px',
              borderLeft: '4px solid var(--color-recovery)',
            }}
          >
            <span style={{ fontSize: '28px' }}>🏥</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '2px' }}>
                {lang === 'es' ? 'Mi recuperación' : 'My recovery'}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                {lang === 'es' ? 'Después de la cirugía · Guía ERAS personalizada' : 'After surgery · Personalised ERAS guide'}
              </p>
            </div>
            <ChevronRight size={20} color="var(--color-text-muted)" />
          </button>
        </div>

        {/* Info link */}
        <button
          onClick={() => navigate('/informacion')}
          className="pressable"
          style={{
            width: '100%', backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)', padding: '16px 20px',
            border: 'none', cursor: 'pointer', textAlign: 'left',
            boxShadow: 'var(--shadow-card)',
            display: 'flex', alignItems: 'center', gap: '12px',
            minHeight: '56px',
          }}
        >
          <Info size={20} color="var(--color-text-muted)" />
          <span style={{ flex: 1, fontSize: '15px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
            {lang === 'es' ? 'Información y contacto' : 'Information & contact'}
          </span>
          <ChevronRight size={18} color="var(--color-text-muted)" />
        </button>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '16px 20px 32px', color: 'var(--color-text-muted)', fontSize: '12px' }}>
        <p>{t.landing.creator}</p>
        <p style={{ marginTop: '2px' }}>{t.landing.creatorRole}</p>
      </footer>
    </div>
  )
}
