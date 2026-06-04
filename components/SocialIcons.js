// Thin-stroke SVG social icons. No icon-font; pure inline SVG.

const baseProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true
};

export function LinkedInIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="0.5" />
      <path d="M7 10v7" />
      <circle cx="7" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </svg>
  );
}

export function GitHubIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5a3 3 0 0 0-.9-2.3c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.5 4.5 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6 0C6.5 2 5.4 2.3 5.4 2.3a4.5 4.5 0 0 0-.1 3.5A5 5 0 0 0 4 9.3c0 5 3 6.2 6 6.5a3 3 0 0 0-.9 2.3V21" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function socialList() {
  return [
    { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedInIcon },
    { id: 'github', label: 'GitHub', href: 'https://github.com/marcocattazzo', Icon: GitHubIcon },
    { id: 'facebook', label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
    { id: 'instagram', label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon }
  ];
}
