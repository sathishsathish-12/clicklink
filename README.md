# A Little Diwali Surprise for Priyadharini ❤️🪔

A frontend-only React + Vite six-page Diwali surprise. It uses JSX components and HashRouter for GitHub Pages compatibility. No backend, database, login or external personal-data storage.

## Run locally
1. Install Node.js (LTS).
2. Extract this ZIP and open the project folder in VS Code.
3. Open Terminal in VS Code and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).
5. Check the production build with `npm run build`.

## Personalise it
- Edit `src/config.js` to change the name, greeting, letter, photo captions and song titles.
- Replace `public/images/photo-1.jpg` through `photo-6.jpg` with your own images.
- Put your own licensed/permitted audio files in `public/music/`:
  - `bigil-theme.mp3`
  - `magale.mp3`
- The player has Play/Pause, Next track and Mute/Unmute. Browsers require a user click before audio can play.

## Fun interactions
- Open the gift box on page 1.
- Tap the diyas on page 2.
- Reveal four compliments and send a heart on page 3.
- Open the six memory cards on page 4.
- Open the envelope on page 5.
- Replay the celebration or revisit the letter on page 6.

## Notes
The project uses React Router, Framer Motion and React Icons. Music and personal photos are intentionally left as local placeholders. Copyrighted movie songs are not included in the ZIP; add audio only if you have permission to use it.


## Publish on GitHub Pages
1. Create a GitHub repository and upload/push all project files (including `.github/workflows/deploy.yml`).
2. Push your project to the `main` branch.
3. In GitHub, open **Settings → Pages**. Set **Build and deployment → Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy React app to GitHub Pages** to finish successfully.
5. Open the Pages URL shown in the workflow deployment.

The project uses HashRouter, so links use `/#/wish`, `/#/about`, etc., and work on GitHub Pages without a custom 404 rewrite.
