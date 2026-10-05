import type { NextConfig } from 'next';

/**
 * Settings for Next.js (the tool that builds this website).
 * You will not need to change this file often — but here is what every line does.
 */
const nextConfig: NextConfig = {
  // 'export' means: turn the whole site into plain HTML files, in a folder called `out`.
  // Plain HTML needs no server, so it can be hosted for free on GitHub Pages.
  output: 'export',

  // Next.js normally shrinks and reformats images for you, but that needs a server.
  // We do not have one, so we switch it off and your images are used as they are.
  images: { unoptimized: true },

  // Makes every page a folder with an index.html inside (out/about/index.html).
  // Every free host understands that, so your links never 404.
  trailingSlash: true,

  // THE TRICKY ONE. On GitHub Pages your site does not live at the top of a domain,
  // it lives in a sub-folder named after your repo:
  //   https://your-name.github.io/your-repo-name/
  // If Next.js does not know about that "/your-repo-name" part, every stylesheet
  // and script will look in the wrong place and the page will load with no styling.
  // `basePath` is that missing piece. The deploy workflow fills in the variable
  // for us (see .github/workflows/deploy.yml). On your own computer the variable
  // is empty, so your site stays at plain http://localhost:3000/.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',

  // Next.js otherwise drops AGENTS.md / CLAUDE.md notes-for-AI-tools files into
  // this folder while you work. Switched off so there is less to read.
  agentRules: false,
};

export default nextConfig;
