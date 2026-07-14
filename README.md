# American Dream KG — React website

Responsive Russian-language website for the American Dream education center in Osh.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Netlify is configured by `netlify.toml` to run `npm run build` and publish `dist`.

Course registration buttons open the branded internal route `/registration`. Submissions are sent as JSON to `/api/requests`; Netlify proxies that route to the existing American Dream Telegram-bot server. The SPA fallback keeps `/registration` working after a direct page refresh.
