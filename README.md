
# MCAS ReviewUI – Internationalized, Accessible Interface

This project provides a fully accessible, dark/light-mode enabled, and step-based evaluation interface for reviewing community-sourced posts for the r/MCAS database.

## ✅ Features
- Full accessibility (WCAG 2.2, A11Y, ARIA)
- Toggleable Dark/Light mode with localStorage preference
- Step-based input (Progressive Disclosure) for cognitive ease
- Mobile responsive, touch-optimized sliders
- Ready for embedding into Reddit-based or static MCAS tools

## 📂 File Structure
```
/reviewui/
├── index.html         # Main review interface
├── styles.css         # Theme-aware, responsive, accessible styles
├── script.js          # Theme toggle, slider sync, step navigation
```

## 🌍 How to Deploy with GitHub Pages

1. **Fork or clone this repo**  
2. **Enable GitHub Pages** under your repo's settings:
   - Choose branch: `main` or `master`
   - Folder: `/ (root)`
3. Your site will be available at:  
   `https://<your-username>.github.io/<repo-name>/`

✅ All assets are self-contained. No build step needed.

## 🧪 Preview It
Simply open `index.html` in any browser or upload the folder to your web host.

## 🛠️ Customization
You may adapt the slider labels, category options, or comment hints to reflect community needs. All color settings are defined via CSS `:root` variables.

## 🔄 License
Open-use for medical, educational or community moderation purposes under the MIT License.

---

For questions, contact: [mods@r-mcas.net](mailto:mods@r-mcas.net)
