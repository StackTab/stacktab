# StackTab — Chrome Extensions Portfolio & Landing Hub

> High-velocity, local-first Chrome extensions engineered for power users and developers.

## 🚀 Live Extensions Included
| Extension | Chrome Web Store | Edge Add-ons |
|---|---|---|
| **TabIntel** — Duplicate Tab Manager | [Install on Chrome](https://chromewebstore.google.com/detail/tabintel-%E2%80%94-duplicate-tab/nlgfdajjjfdegnlgbhfmnpbejlkodfpa) | [Install on Edge](https://microsoftedge.microsoft.com/addons/detail/tabintel-%E2%80%94-duplicate-tab-/fcmbhdagmkmeladpfmdbokainmglfplb) |
| **Path Jump** — URL Path Navigator | [Install on Chrome](https://chromewebstore.google.com/detail/path-jump-%E2%80%93-url-path-navi/fbomikgcaliadepbcadbajcaghiamadk) | [Install on Edge](https://microsoftedge.microsoft.com/addons/detail/path-jump-%E2%80%93-url-path-navi/cmipbnlnjjcbahcfjdpcniniapegjiih) |

---

## 🌐 GitHub Pages Deployment Guide (Free, No Custom Domain Needed)

### 1. Recommended Repository Name
To get the cleanest, most professional free GitHub Pages URL without buying a domain, name your GitHub repository:
- **`stacktab`**  
  👉 Your live URL will be: **`https://<your-username>.github.io/stacktab/`**

*(Alternatively, if you create a repository named `<your-username>.github.io`, your site will be hosted directly at the root: `https://<your-username>.github.io/`)*

### 2. Steps to Publish on GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "feat: launch StackTab extensions portfolio hub"

# Link to your new GitHub repo
git remote add origin https://github.com/<your-username>/stacktab.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your GitHub repository: **Settings** → **Pages**.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**. Your site will be live in ~60 seconds!

---

## ⚡ How to Customize or Change Brand Name
Everything is centralized for zero-friction rebranding:
1. **Change Brand Name:** Edit `data/site-config.json` (change `"name": "StackTab"` to whatever you wish).
2. **Add a New Extension:**
   - Open `data/extensions.json` and append your new extension details.
   - Duplicate `extensions/tabintel/` into `extensions/<your-new-slug>/` and update the content.
   - It will automatically render and integrate across the site!

---

## 🛡️ Chrome Web Store Compliance Links
When publishing or updating your extensions in the Chrome Web Store Developer Dashboard, use these exact links:
- **TabIntel Support URL:** `https://<your-username>.github.io/stacktab/extensions/tabintel/`
- **TabIntel Privacy Policy:** `https://<your-username>.github.io/stacktab/extensions/tabintel/privacy.html`
- **Path Jump Support URL:** `https://<your-username>.github.io/stacktab/extensions/path-jump/`
- **Path Jump Privacy Policy:** `https://<your-username>.github.io/stacktab/extensions/path-jump/privacy.html`
