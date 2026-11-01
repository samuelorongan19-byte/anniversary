# Babeh's Little World

A blue liquid-glass anniversary gift celebrating five years together. The site is static HTML, CSS, and vanilla JavaScript, so it runs locally and on GitHub Pages without a backend, login, or build step. It has no music or audio.

## Files

```text
index.html
style.css
script.js
assets/
  images/
    Couple-Main.jpg
    hobby-wattpad.jpg
    hobby-crochet.jpg
    hobby-fuzzyloop.jpg
    hobby-baking.jpg
    favourite-funny-01.jpg ... favourite-funny-04.jpg
```

The names above match the photos currently in the project. The spelling and capitalization in `script.js` must match the real filenames, including on GitHub Pages.

## Preview

Open `index.html` in a current browser. You can also start a local static server from this folder with `python -m http.server` and visit `http://localhost:8000`.

## Personalize the page

Edit the `PERSONALIZATION` object near the top of `script.js`:

- Change the `nickname`, anniversary date, or relationship start date.
- `featuredPhoto` uses the main couple photo (`assets/images/Couple-Main.jpg`). Change it to another local image path if needed. The countdown uses the visitor's device timezone and counts to midnight at the start of the anniversary date.
- Edit `hobbies` to update each hobby's title, image, alt text, description, and lightbox note.
- Keep exactly three entries in `reasons`; edit their titles, icons, and back-of-card messages.
- Edit `favoriteThings` for the four picture cards for pizza, nuts, soft drinks, and tulips. Each entry has an image path, alt text, label, and note.
- Replace `letter` with the final anniversary note. Keep the backticks around its multiline text.

Add images inside `assets/images/` and use relative paths such as `assets/images/my-photo.jpg`. Missing images show a blue placeholder; the rest of the site remains usable. The Favorite Things cards use the four images already supplied in the `favourite-funny-01.jpg` through `favourite-funny-04.jpg` files.

## GitHub Pages

1. Push the project files to the root of a GitHub repository, or to the folder selected for Pages.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the branch (usually `main`) and the project folder, then save.
4. Open the Pages URL shown in the settings.

All project image and stylesheet paths are relative, so the site works from a repository subpath. The optional Google Fonts link has local system-font fallbacks; no JavaScript library is required.
