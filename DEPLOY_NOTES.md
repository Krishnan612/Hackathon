Netlify deployment notes

1. Build command: npm run build
2. Publish directory: dist
3. SPA single-page app routing: ensure `public/_redirects` contains:

   /* /index.html 200

4. Common issues:
   - If you see the `public/index.html` placeholder after deployment, ensure you ran the build step and pushed the generated `dist` output, or configure Netlify to run the build command during deploy.
   - Avoid hard-coded `/src/assets/...` paths inside JSON files; instead import assets in TypeScript so Vite bundles them.

5. Troubleshooting:
   - Run `npm run build` locally and serve `dist` to verify assets load.
   - Check Netlify deploy logs for the publish directory and build output.
