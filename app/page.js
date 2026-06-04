// Root page for static export — meta-refresh redirect to /it/.
// With output: 'export' and localePrefix: 'always', no server-side redirect
// is possible, so we serve a static page that redirects via <meta http-equiv>.

export const metadata = {
  title: "Fil d'Or",
  robots: { index: false }
};

export default function RootRedirect() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <meta httpEquiv="refresh" content="0; url=/it/" />
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'Georgia, serif', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Reindirizzamento a <a href="/it/" style={{ color: 'var(--gold-main)' }}>Fil d'Or</a>…
        </p>
      </div>
    </>
  );
}
