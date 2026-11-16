# Nayan Jain - Portfolio

A multi-section portfolio (Home, Projects, About, Skills, Experience, Education, Contact).
Plain HTML, CSS and JavaScript. No build step and no installs.

## Quickest way: run the Python launcher

1. Open the folder in VS Code, then open the terminal (Ctrl+`).
2. Run `python run.py` (on Mac/Linux: `python3 run.py`).
3. It prints a link like http://127.0.0.1:8000 and opens it in your browser. Press Ctrl+C to stop.

Needs Python 3 only. No packages to install.

## Or run it with Live Server in VS Code

1. Unzip the folder and open it in VS Code (File > Open Folder > `nayan-portfolio`).
2. Open the Extensions panel (Ctrl+Shift+X), search for **Live Server** (by Ritwick Dey) and install it.
3. Right-click `index.html` and choose **Open with Live Server**.
   The site opens at http://127.0.0.1:5500 and reloads when you save a file.

No extension? Just double-click `index.html` to open it in your browser.
You need an internet connection the first time so the Google Fonts load.

## Project structure

    run.py          starts a local server and prints the link
    index.html      all pages (each section is a <section class="view" data-view="...">)
    css/style.css   colors, fonts and layout (colors are CSS variables at the top)
    js/main.js      page switching, the "Keep exploring" stickers, copy-email button

## Things to edit

- Email, LinkedIn, GitHub: search `index.html` for `nayanjain23085`, `nayanjainnj`, `nj23085`.
- Add a GitHub link to AdaptiRAG: in the Projects section, copy the "View on GitHub" button from another project.
- Add your photo: put it in an `images/` folder and add an `<img>` in the About section.
- Change colors: edit the variables at the top of `css/style.css` (`--teal`, `--yellow`, `--pink`, ...).

## Put it online (free)

- **GitHub Pages:** push the folder to a repo, then Settings > Pages > deploy from the `main` branch.
- **Netlify or Vercel:** drag and drop the folder onto their dashboard.
