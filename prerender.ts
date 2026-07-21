import { createServer } from 'vite';
import fs from 'fs/promises';
import path from 'path';

async function prerender() {
  console.log('Starting static pre-rendering (SSG)...');
  
  // Create a Vite dev server in middleware mode to load the TSX files safely
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    const distPath = path.resolve('dist');
    const templatePath = path.join(distPath, 'index.html');
    
    // Read the compiled production index.html (which already has Vite's build assets injected)
    let template = await fs.readFile(templatePath, 'utf-8');
    
    // Load our SSR entry point through Vite's module loader
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    
    const routes = [
      {
        path: '/',
        outputFile: 'index.html',
        title: "Vantrex Medias | Kerala's Leading Digital Marketing & SEO Growth Agency",
        description: "Vantrex Medias is Kerala's premium digital marketing & performance SEO agency based in Kannur, Kerala. Driving exponential business growth through Strategic SEO, Google Ads, Social Media Marketing, and conversion optimization."
      },
      {
        path: '/about',
        outputFile: 'about/index.html',
        title: "About Us | Vantrex Medias Kerala",
        description: "Learn about Vantrex Medias, Kannur's leading digital design & strategic marketing growth agency. We combine stunning aesthetic layouts with laser-focused conversion framework to scale businesses in Kerala."
      },
      {
        path: '/privacy',
        outputFile: 'privacy/index.html',
        title: "Privacy Policy | Vantrex Medias Kerala",
        description: "Read Vantrex Medias' Privacy Policy. We ensure absolute secure handling, zero-data sharing, and trust compliance for all your brand asset information."
      }
    ];

    for (const route of routes) {
      console.log(`\nRendering route: ${route.path}`);
      
      // Render the React app to string
      const appHtml = render(route.path);
      
      // Inject the HTML string into the #root div
      let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
      
      // Update <title>
      html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);
      
      // Update SEO description meta tag
      html = html.replace(
        /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta name="description" content="${route.description}" />`
      );
      
      // Update OG title meta tag
      html = html.replace(
        /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta property="og:title" content="${route.title}" />`
      );

      // Update OG description meta tag
      html = html.replace(
        /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta property="og:description" content="${route.description}" />`
      );

      // Update Twitter title meta tag
      html = html.replace(
        /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta name="twitter:title" content="${route.title}" />`
      );

      // Update Twitter description meta tag
      html = html.replace(
        /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta name="twitter:description" content="${route.description}" />`
      );

      // Save to its output path
      const fullOutputPath = path.join(distPath, route.outputFile);
      const parentDir = path.dirname(fullOutputPath);
      
      await fs.mkdir(parentDir, { recursive: true });
      await fs.writeFile(fullOutputPath, html, 'utf-8');
      
      console.log(`Saved pre-rendered page to: ${fullOutputPath}`);
    }
    
    console.log('\nAll pages successfully pre-rendered for search engine indexing!');
  } catch (error) {
    console.error('Error during pre-rendering:', error);
    process.exit(1);
  } finally {
    // Shutdown the Vite dev server cleanly
    await vite.close();
  }
}

prerender();
