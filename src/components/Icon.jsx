/* ===== ÍCONES =====
   SVG inline (traço de 1,7), um por nome. Cor herdada do texto. */

const PATHS = {
  shield: <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.6 7.5 9.5 4.3-.9 7.5-4.9 7.5-9.5V6L12 3Zm-3.5 9 2.5 2.5 4.5-5" />,
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  chart: <path d="M4 20V10m5.3 10V4m5.4 16v-7M20 20V8M3 20.5h18" />,
  handshake: <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2m-2-2 2.5 2.5a1.4 1.4 0 0 0 2-2l-3-3m0 0-1.6-1.6a2 2 0 0 0-2.8 0l-.6.6a2 2 0 0 1-2.8-2.8L10 5.2a3.5 3.5 0 0 1 4.3-.5l.6.4a2 2 0 0 0 1.5.3L21 4.5v9l-2 1M3 4.5l5.5 1M3 4.5v9l6 5" />,
  calculator: (
    <>
      <rect x="4.5" y="2.5" width="15" height="19" rx="2.5" />
      <path d="M8 6.5h8M8 11h.01M12 11h.01M16 11h.01M8 14.5h.01M12 14.5h.01M16 14.5v3M8 18h.01M12 18h.01" />
    </>
  ),
  wallet: (
    <>
      <path d="M19.5 7.5V5.8a1.8 1.8 0 0 0-2.2-1.7L5 6.5a2.5 2.5 0 0 0-2 2.4v9.6A2.5 2.5 0 0 0 5.5 21h13a2 2 0 0 0 2-2v-9.5a2 2 0 0 0-2-2H5" />
      <path d="M16.5 14.25h.01" />
    </>
  ),
  bi: <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" />,
  rocket: <path d="M5 15c-1.5 1.3-2 4.5-2 6 1.5 0 4.7-.5 6-2m-1-4 4 4m-4-4a12 12 0 0 1 3.8-7.3C14.5 5.5 18 4 21 3c-1 3-2.5 6.5-4.7 9.2A12 12 0 0 1 9 16m-1-1-3-1 2.5-3.5 3 .5m2.5 6 1 3 3.5-2.5-.5-3" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8.5 7V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V7M3 12.5h18" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20Zm-5-8h2.5l1.5-2.5 2 5 1.5-2.5H17" />,
  store: <path d="M3.5 9.5 5 4h14l1.5 5.5M3.5 9.5a2.8 2.8 0 0 0 5.5 0 2.8 2.8 0 0 0 5.5 0 2.8 2.8 0 0 0 5.5 0M5 11.5V20h14v-8.5M9.5 20v-5h5v5" />,
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9.5 9.5h5v5h-5zM9 2.5V6m6-3.5V6M9 18v3.5m6-3.5v3.5M2.5 9H6m-3.5 6H6m12-6h3.5M18 15h3.5" />
    </>
  ),
  building: <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h8A1.5 1.5 0 0 1 15 5.5V21m0-11h3.5A1.5 1.5 0 0 1 20 11.5V21M2.5 21h19M8 8h3m-3 4h3m-3 4h3" />,
  file: <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Zm0 0v5h5M9 13h6m-6 4h4" />,
  upload: <path d="M12 15V3m0 0L7.5 7.5M12 3l4.5 4.5M4 15v3.5A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5V15" />,
  check: <path d="M20 6.5 9.5 17 4 11.5" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4m8-4v4m-8.5 7h.01m4.5 0h.01m4.5 0h.01" />
    </>
  ),
  chat: <path d="M20.5 12a8.5 8.5 0 0 1-12.4 7.5L3.5 20.5l1-4.4A8.5 8.5 0 1 1 20.5 12ZM8 10.5h8M8 14h5" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  arrowUp: <path d="M7 17 17 7m-9 0h9v9" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10.5" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  swap: <path d="M7 4 3.5 7.5 7 11M3.5 7.5h13M17 13l3.5 3.5L17 20m3.5-3.5h-13" />,
}

export function Icon({ name, className = 'size-5', strokeWidth = 1.7 }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {PATHS[name]}
    </svg>
  )
}

/** Logo do WhatsApp (preenchido). */
export function WhatsAppIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm0-21.6A11.8 11.8 0 0 0 1.9 18L.2 24l6.2-1.6A11.8 11.8 0 1 0 12 .2Z" />
    </svg>
  )
}
