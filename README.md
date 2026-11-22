# Min Zhe Cheah Portfolio

The production portfolio is the static Luna site in `site/`. It is published to GitHub Pages at `https://minzhecheah.github.io/portfolio/` when changes are pushed to `main`.

## Production files

- `site/index.html` — homepage, project selector, experience, education, and contact details
- `site/lunar-surface.jpg` and `site/portrait.png` — hero artwork
- `site/MinZhe_Cheah_Resume.pdf` — downloadable resume
- `.github/workflows/deploy.yml` — verifies and deploys the static site folder

The Next.js files in `app/` are not part of the GitHub Pages deployment. Update `site/` to change the live portfolio.
