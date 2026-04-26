# SyncStream — sync-stream.app

Static marketing site for the SyncStream Wix App Market product.

## Structure

```
/
  index.html          Landing page
  about.html          About page
  terms.html          Terms of Service
  privacy.html        Privacy Policy
  css/
    style.css         Shared styles
  js/
    components.js     Shared nav + footer (injected client-side)
  images/
    syncstream-logo-wordmark.png    (add from uploads)
    syncstream-logo-icon.png        (add from uploads)
  netlify.toml        Netlify config
```

## Images needed

Add to /images/ before deploying:
- `syncstream-logo-wordmark.png` — horizontal logo with wordmark (SyncStream_Logo_w__Wording.png)
- `syncstream-logo-icon.png` — icon only (SyncStreamLogo.png)

Nav and footer reference `/images/syncstream-logo-wordmark.png`.

## Deploy to Netlify

1. Push to GitHub
2. Connect repo in Netlify dashboard
3. Build command: (none — static site)
4. Publish directory: `.`
5. Add custom domain: sync-stream.app

## DNS (Netlify)

In your domain registrar, point:
- `sync-stream.app` A record → Netlify load balancer IP (shown in Netlify dashboard)
- `www.sync-stream.app` CNAME → your-site-name.netlify.app

## Netlify Forms (optional)

To add a waitlist form, add `data-netlify="true"` to any `<form>` element and Netlify handles submissions without a backend.

## Contact

info@sync-stream.app
