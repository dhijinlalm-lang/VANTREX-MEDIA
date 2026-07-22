# AWS Amplify Deployment Guide for Vantrex Media

This guide explains how to deploy the **Vantrex Media** website to **AWS Amplify** (Hosting).

---

## 🚀 Option 1: Continuous Deployment via Git (Recommended)

This is the easiest and most robust method. Whenever you push code to your repository (GitHub, GitLab, Bitbucket, or AWS CodeCommit), AWS Amplify will automatically build and deploy your site.

### Step 1: Push your code to Git
If you haven't already, initialize a Git repository and push your project to a remote host (e.g., GitHub):
```bash
git init
git add .
git commit -m "Initial commit with AWS Amplify configurations"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### Step 2: Connect repository in AWS Console
1. Log in to the [AWS Management Console](https://aws.amazon.com/console/) and search for **AWS Amplify**.
2. Click **New app** > **Host web app**.
3. Select your git provider (e.g., GitHub) and authorize Amplify.
4. Choose your repository and the branch (e.g., `main`).
5. Amplify will automatically detect the configuration from the `amplify.yml` file we created in the root directory.
6. **CRITICAL NODE VERSION SETTING**:
   * Scroll down to **Advanced Settings** (or go to **App settings** > **Environment variables** after creating the app).
   * Add a new environment variable:
     - **Key**: `AMPLIFY_NODE_VERSION`
     - **Value**: `20`
   * This native variable ensures AWS Amplify uses Node.js 20 throughout the entire container pipeline (Vite 6 and React 19 require Node 18+).
7. Click **Save and deploy**.

---

## 🛠️ Option 2: Manual Deployment via Zip Upload

If you would rather upload your built files directly to AWS Amplify without connecting a Git repository:

1. Build the application locally:
   ```bash
   npm install
   npm run build
   ```
2. Compress the contents of the generated `dist/` directory into a `.zip` file. (Make sure you zip the *contents* of `dist/` directly, rather than the `dist/` folder itself).
3. In the AWS Amplify Console, click **New app** > **Deploy without Git**.
4. Drag and drop your `.zip` archive into the deployment canvas.

---

## ⚠️ CRITICAL: SPA Rewrite & Redirect Rules

Single Page Applications (SPAs) like React use client-side routing. If a user directly accesses a sub-page (e.g., `https://example.com/services`) or refreshes the page, CloudFront/S3 might throw a `404 Not Found` or `403 Access Denied` error because that physical index page doesn't exist on the static server.

To solve this, configure a URL rewrite in AWS Amplify:

1. Open your app in the **AWS Amplify Console**.
2. In the left navigation menu, go to **App settings** > **Rewrites and redirects**.
3. Click **Edit** and add the following rule:

| Source Address | Target Address | Type |
| :--- | :--- | :--- |
| `</^[^.]+$|\.(?!(css\|gif\|ico\|jpg\|js\|png\|txt\|svg\|woff\|woff2\|json)$)([^.]+$)/>` | `/index.html` | `200 (Rewrite)` |

4. Click **Save**.

This regular expression directs all traffic back to `index.html` (except for assets like JS, CSS, images, etc.), allowing React/Vite client-side routing to function seamlessly!

---

## 🔒 Security & Performance Headers (`custom-headers.json`)

To lock down the security profile and optimize load performance, we have added a `/custom-headers.json` file to the root of the project. AWS Amplify Hosting recognizes this file automatically to apply custom headers to responses:

- **Strict Cache Control**: Added `Cache-Control: public, max-age=31536000, immutable` for built assets in `/assets/**/*` to optimize browser caching and improve global loading speeds.
- **Clickjacking Protection**: Applied `X-Frame-Options: DENY` dynamically on all pages.
- **XSS Mitigation**: Applied `X-XSS-Protection: 1; mode=block` for older legacy browsers.
- **Content Type Sniffing**: Applied `X-Content-Type-Options: nosniff`.
- **Referrer Security**: Configured `Referrer-Policy: same-origin` to preserve customer privacy.

