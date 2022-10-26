# Blog template with NextJS

## Version requirements

Node.js: 16.13.0
Yarn: 1.22.18

## Quick Start

### 1. Clone this repo

```
git clone https://github.com/ForestLee0513/blog-with-nextjs.git
```

### 2. Install packages

This template is optimized to Yarn, but you can use npm too.

```
yarn
```

### 3. Start development server

```
yarn dev
# open localhost:3000
```

### 4. Edit your bio

Open `author.ts` file in root and change it if you're clone this repo successfully, this file will display like this.

```typescript
const author = {
  username: "Username",
  description: "hello world",
  link: {
    Github: "https://github.com/username",
  },
};

export default author;
```

### 5. Write your things

> All Markdown files are includes in `_data` folder.
> Check a frontmatter of each pages and apply it.

You can write a articles with markdown or MDX and you can import a component of `/components` folder in MDX files.

1. Blog

   ```
   # --- Start of frontmatter ---
   title: "Blog article"
   description: "A example of blog article"
   date: 2022-10-26 10:15:00
   # ---- End of frontmatter ----
   ---
   ...
   ```

   You can write a blog articles with Markdown or MDX in `_data/blog` folder.

2. Resume

   ```
   # --- Start of frontmatter ---
   title: "Blog article"
   description: "A example of blog article"
   date: 2022-10-26 10:15:00
   # ---- End of frontmatter ----
   ---
   ...
   ```

   You can write a resume with Markdown or MDX in `_data/resume.md` file.

3. Proejcts

   ```
   # --- Start of frontmatter ---
   title: "Blog article"
   description: "A example of blog article"
   date: 2022-10-26 10:15:00
   # ---- End of frontmatter ----
   ---
   ...
   ```

   You can write a resume with Markdown or MDX in `_data/projects` folder.

4. Deploy it!

   > I'll write Step-by-step of How to deploy soon...

   Finally... If you end this steps, You can depoly your page with static site deploy service with Github Pages, Netlify, AWS S3, etc...
   If you deploy with SSR(**S**ervice **S**ide **R**endering), you can use Vercel, AWS EC2, AWS Amplify, etc... for deploy.

## Customize

### Change styles

This template is use tailwindcss.  
you can change style in `/styles` folder.
