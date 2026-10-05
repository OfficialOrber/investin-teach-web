# investin-teach-web

A starter website you can make your own: a personal portfolio to show people, plus a
small web app to learn how interactive pages actually work. Everything you need is
already here — no accounts, no passwords, no setup beyond two commands.

**Making your own copy:** press the green **Use this template** button at the top of
this page → **Create a new repository**. Give it a name, and set it to **Public** —
GitHub's free website hosting does not work on private repos, so choosing Private
here means you will not be able to put your site online later. Then download your new
repo to your computer (the green **Code** button → "Open with GitHub Desktop", or
`git clone` if you know it).

---

## 1. What you need

- A computer (Windows, Mac or Linux).
- **Node.js version 20 or newer** — download it from [nodejs.org](https://nodejs.org)
  and pick the big green "LTS" button. Node.js is the program that runs the website
  code on your own computer.
- A code editor. [VS Code](https://code.visualstudio.com) is free and what most people use.

To check Node.js installed properly, open a terminal and type:

```bash
node -v
```

If it prints something like `v22.22.3`, you are ready.

---

## 2. Get it running

Open a terminal and type these three commands, one at a time:

```bash
cd investin-teach-web
npm install
npm run dev
```

`cd` moves the terminal into the project folder (use your own folder's name if you
renamed it). `npm install` downloads the code this project depends on, which takes a
minute the first time. `npm run dev` starts the website on your computer.

Then open **http://localhost:3000** in your browser.

Leave that terminal running. While it runs, every time you save a file the browser
updates by itself. To stop it, click the terminal and press `Ctrl + C`.

---

## 3. Change your first thing

1. Open the file **`src/lib/profile.ts`** in your editor.
2. Find the line that says `name: 'Your Name',`
3. Change it to your name, keeping the quotes: `name: 'Priya',`
4. **Save the file** (`Ctrl + S`, or `Cmd + S` on a Mac).
5. Look at the browser. It changed on its own.

That file holds every personal word on the site — your name, your tagline, your
email, your links, your skills. No page has your name typed into it; they all read it
from there. Change `src/lib/profile.ts` and `src/lib/projects.ts` and the whole site
is yours.

---

## 4. Where everything lives

```
investin-teach-web/
├── src/
│   ├── lib/
│   │   ├── profile.ts        ← 👋 START HERE. Your name, bio, email, links, skills.
│   │   └── projects.ts       ← Your projects. Replace the three examples.
│   │
│   ├── app/                  ← One folder per page. The folder name is the web address.
│   │   ├── layout.tsx        ← Wraps every page (the top bar and the footer live here).
│   │   ├── globals.css       ← Colours and fonts for the whole site.
│   │   ├── page.tsx          ← The home page, at /
│   │   ├── about/            ← /about
│   │   ├── contact/          ← /contact  (a form, explained inside the file)
│   │   ├── playground/       ← /playground  (the to-do app — the most interesting one)
│   │   └── projects/
│   │       ├── page.tsx      ← /projects   (the list)
│   │       └── [slug]/       ← /projects/pixel-pet, /projects/bus-countdown, …
│   │                            The square brackets mean "this bit changes".
│   │
│   └── components/           ← Small reusable pieces, used by the pages above.
│       ├── Nav.tsx           ← The bar across the top.
│       ├── Footer.tsx        ← The strip at the bottom.
│       ├── Container.tsx     ← Keeps page content a readable width.
│       ├── Card.tsx          ← The bordered boxes.
│       ├── Button.tsx        ← Buttons and link-buttons.
│       └── Tag.tsx           ← The little rounded pills.
│
├── public/                   ← Put pictures here. A file public/me.jpg is at /me.jpg
├── next.config.ts            ← Build settings. Commented — worth a read before you deploy.
└── .github/workflows/        ← The robots that build and publish your site for you.
```

---

## 5. Deploy your site

This puts your site on the real internet, at a real web address, for free.

**Make sure your repo is Public.** Go to Settings → scroll to the bottom → "Change
repository visibility". GitHub Pages is not free on private repos, so a private one
will not publish.

**Turn Pages on — do this BEFORE you push anything.**

1. Go to your repo on GitHub.
2. **Settings** → **Pages** (in the left-hand menu).
3. Under "Build and deployment", change **Source** to **GitHub Actions**.

> ⚠️ If you skip this step the publishing robot fails, because there is nothing for
> it to publish to. Already pushed and seen a red ✗? No problem: turn Pages on as
> above, then go to the **Actions** tab, click the run that failed, and press
> **Re-run jobs**.

**Then push your work:**

```bash
git add .
git commit -m "Make the site mine"
git push
```

Go to the **Actions** tab and watch it build — a yellow dot means working, a green ✓
means done. It takes about a minute.

**Your site is now at:**

```
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME/
```

(The exact address is printed in the Actions log, and on the Settings → Pages screen.)

From now on, every push to `main` updates the live site automatically.

---

## 6. Try these

In order of difficulty. Do them in any order you like.

1. **Change the accent colour.** In `src/app/globals.css`, find `--brand: #4f46e5;`
   and put a different colour in. `#16a34a` is green, `#dc2626` is red, or search
   "colour picker hex" and take your pick. Save and look at the links and buttons.
2. **Add a fourth project.** In `src/lib/projects.ts`, copy one of the three blocks
   between `{` and `},`, paste it at the top of the list, and change the words. Give
   it a `slug` nobody else has. It appears on `/projects` *and* gets its own page.
3. **Add a page to the menu.** Make a folder `src/app/hobbies/` with a file
   `page.tsx` inside it, copy the contents of `src/app/about/page.tsx` into it as a
   starting point, then add `{ label: 'Hobbies', href: '/hobbies' }` to the list at
   the top of `src/components/Nav.tsx`.
4. **Add a "Clear all" button to the playground.** In
   `src/app/playground/page.tsx`, copy the `clearCompleted` function, rename your
   copy `clearAll`, and make it `setTodos([])` — an empty list. Then add a second
   `<Button>` next to the first one that calls it.
5. **Show how many are done.** There is already a line working out `left`. Add one
   below it that counts the finished ones instead, and show it on the page.
6. **Show the date each to-do was added.** In the `Todo` type add `added: string`.
   In `addTodo`, set `added: new Date().toLocaleDateString()`. Then display
   `{todo.added}` inside the `<li>`, in small faded text:
   `<span className="text-xs opacity-40">{todo.added}</span>`.
   (Your old saved to-dos will not have a date — that is worth thinking about.)
7. **Let people edit a to-do.** Double-clicking an item should turn it into a text
   box you can type in. You will need a new piece of state to remember *which* item
   is being edited.
8. **Put your picture on the home page.** Drop a photo into `public/` as
   `public/me.jpg`. Then at the top of `src/app/page.tsx` add
   `import Image from 'next/image';` and put this inside the page:
   `<Image src="/me.jpg" alt="Me" width={128} height={128} className="mt-8 rounded-full object-cover" />`
   Use Next.js's `Image` rather than a plain `<img>` and the picture keeps working
   once your site is published in a sub-folder — see the `basePath` comment in
   `next.config.ts` for why that matters.

---

## 7. When it breaks

Everybody's breaks. These are the usual five.

**`sh: next: command not found`**
You have not run `npm install` yet, or it stopped half way. Run it again and let it
finish before you try `npm run dev`.

**The terminal says `⚠ Port 3000 is in use ... using available port 3001 instead`**
You already have a site running in another terminal window. Next.js does not argue
about it — it quietly moves to the next free port. So your site is at
**http://localhost:3001**, not 3000, and if you open 3000 you will be looking at the
*other* one and wondering why your changes are not showing up. Always trust the
`Local:` line the terminal prints — that address is the right one. To tidy up
instead, find the other terminal and press `Ctrl + C`, or pick a port yourself:

```bash
npm run dev -- -p 3005
```

**`This API is only available in Client Components. To fix, mark the file (or its
parent) with the "use client" directive.`**
You used `useState`, `useEffect` or an `onClick` in a file that does not say
`'use client';` on its very first line. Add that line and the error goes away. Those
features need a real browser, and that one line is how you tell Next.js "this file
runs in the browser, not while the site is being built". See the top of
`src/app/playground/page.tsx` for an example.

**You changed something and nothing happened**
Three things to check, in this order: did you **save the file**; is `npm run dev`
still running in the terminal (if it stopped, start it again); are you looking at
http://localhost:3000. If all three are fine, look in the terminal — an error there
means the site could not rebuild, and the message usually names the file and line.

**Red squiggles in the editor but the site works fine**
That is TypeScript being fussy, often about a missing comma or quote mark a few lines
above where the squiggle is. Check the line before the one it is complaining about.

---

## What this is built with

[Next.js](https://nextjs.org) (the App Router), [React](https://react.dev),
[TypeScript](https://www.typescriptlang.org), [Tailwind CSS](https://tailwindcss.com)
and [Lucide](https://lucide.dev) icons. No database, no server, no sign-ins —
`npm run build` turns the whole thing into plain HTML files that any free host can
serve.
