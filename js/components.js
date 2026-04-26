const NAV_HTML = `
<nav>
  <div class="container">
    <div class="nav-inner">
      <a href="/" class="nav-logo">
        <img src="/images/syncstream-logo-wordmark.png" alt="SyncStream">
      </a>
      <ul class="nav-links">
        <li><a href="/#features">Features</a></li>
        <li><a href="/#how-it-works">How it works</a></li>
        <li><a href="/#pricing">Pricing</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="https://www.wix.com/app-market" class="nav-cta" target="_blank">Install Free</a></li>
      </ul>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <img src="/images/syncstream-logo-wordmark.png" alt="SyncStream">
        <p>Automated product feed sync from Wix to Google Merchant Center and Meta Catalog.</p>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <ul>
          <li><a href="/#features">Features</a></li>
          <li><a href="/#how-it-works">How it works</a></li>
          <li><a href="/#pricing">Pricing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/about.html">About</a></li>
          <li><a href="mailto:info@sync-stream.app">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="/privacy.html">Privacy Policy</a></li>
          <li><a href="/terms.html">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${new Date().getFullYear()} Purposeful IT LLC. All rights reserved.</span>
      <span>Built in Avon, Ohio</span>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
});
