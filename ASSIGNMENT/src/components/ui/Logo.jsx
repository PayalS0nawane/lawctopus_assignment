export default function Logo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Clausework logo"
    >
      <rect x="0" y="0" width="200" height="200" rx="36" fill="#1C2B33" />
      <path d="M62 48 L122 48 L138 64 L138 152 L62 152 Z" fill="#FAF8F5" />
      <path d="M122 48 L122 64 L138 64 Z" fill="#8B6F47" />
      <line x1="76" y1="82" x2="118" y2="82" stroke="#1C2B33" strokeWidth="4" strokeLinecap="round" />
      <line x1="76" y1="98" x2="124" y2="98" stroke="#1C2B33" strokeWidth="4" strokeLinecap="round" />
      <line x1="76" y1="114" x2="108" y2="114" stroke="#8B6F47" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M76 134 L88 146 L114 120"
        fill="none"
        stroke="#3D5A4C"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}