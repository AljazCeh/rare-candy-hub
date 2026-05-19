import { SITE_DISABLED } from "./src/config/siteStatus";

/**
 * Vercel Edge Middleware – SEO-pravilno začasno onemogočanje strani.
 *
 * Ko je SITE_DISABLED === 1, middleware za vse zahteve strani vrne HTTP 503
 * (Service Unavailable) z ustreznimi SEO headerji, tako da Google ve, da je
 * stran le začasno nedostopna in ne indeksira prazne vsebine.
 *
 * Ko je SITE_DISABLED === 0, middleware ne posega v delovanje strani.
 */

export const config = {
  matcher: [
    /*
     * Ujema vse poti razen:
     * - /assets/  (Vite build – JS, CSS, slike)
     * - /favicon.ico
     * - /robots.txt
     * - /sitemap.xml
     * - /site.webmanifest
     * - /placeholder.svg in druge javne statične datoteke z ekstenzijo
     */
    "/((?!assets/|favicon\\.ico$|robots\\.txt$|sitemap\\.xml$|site\\.webmanifest$|placeholder\\.svg$|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|eot)$).*)",
  ],
};

const unavailableHtml = `<!DOCTYPE html>
<html lang="sl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Spletna stran trenutno ni na voljo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: linear-gradient(135deg, hsl(280, 55%, 18%) 0%, hsl(0, 0%, 6%) 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      overflow: hidden;
      position: relative;
      color: #fff;
      -webkit-font-smoothing: antialiased;
    }

    /* Decorative glow blobs */
    .glow-main {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 480px;
      height: 480px;
      border-radius: 50%;
      background: hsl(324, 53%, 48%);
      filter: blur(100px);
      opacity: 0.18;
      pointer-events: none;
    }
    .glow-secondary {
      position: fixed;
      top: 25%;
      right: 25%;
      width: 240px;
      height: 240px;
      border-radius: 50%;
      background: hsl(280, 55%, 50%);
      filter: blur(80px);
      opacity: 0.10;
      pointer-events: none;
    }

    .wrapper {
      position: relative;
      text-align: center;
      max-width: 520px;
      width: 100%;
      animation: fadeInUp 0.65s ease-out both;
    }

    .brand {
      margin-bottom: 2.5rem;
    }
    .brand-name {
      font-size: 1.25rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: -0.01em;
    }
    .brand-sub {
      font-size: 0.7rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.4);
      margin-left: 0.5rem;
    }

    .divider {
      width: 56px;
      height: 1px;
      background: linear-gradient(90deg, hsl(324, 53%, 48%) 0%, hsl(280, 55%, 45%) 100%);
      border-radius: 999px;
      margin: 0 auto 2.5rem;
      animation: scaleIn 0.55s ease-out 0.3s both;
      transform-origin: center;
    }

    h1 {
      font-size: clamp(1.5rem, 5vw, 2.25rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.25;
      letter-spacing: -0.02em;
      margin-bottom: 1.25rem;
    }

    p {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.52);
      line-height: 1.6;
    }

    @media (min-width: 640px) {
      .brand-name { font-size: 1.5rem; }
      p { font-size: 1.0625rem; }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleIn {
      from { transform: scaleX(0); opacity: 0; }
      to   { transform: scaleX(1); opacity: 1; }
    }
  </style>
</head>
<body>
  <div class="glow-main" aria-hidden="true"></div>
  <div class="glow-secondary" aria-hidden="true"></div>
  <div class="wrapper">
    <div class="brand">
      <span class="brand-name">Rare Candy Center</span>
      <span class="brand-sub">Play &amp; Chill</span>
    </div>
    <div class="divider"></div>
    <h1>Spletna stran trenutno ni na voljo</h1>
    <p>Za več informacij se obrnite na lastnika spletne strani.</p>
  </div>
</body>
</html>`;

export default function middleware(_request: Request): Response | undefined {
  if (SITE_DISABLED === 1) {
    return new Response(unavailableHtml, {
      status: 503,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Retry-After": "86400",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }
  // SITE_DISABLED === 0: stran deluje normalno, middleware ne posega
  return undefined;
}
