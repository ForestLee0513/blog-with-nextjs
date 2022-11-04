# Blog template with NextJS

## Version requirements

Node.js: 16.13.0
Yarn: 1.22.18

## Features

### 1. Markdown/MDX Articles

You can write a articles with Markdown/MDX in Blog, Resume and Projects.

### 2. Reading time

This project can parse Markdown/MDX articles and convert to reading time from words and display it.

### 3. Dynamic OG Image (SSR Only)

> This feature is available in SSR only.

This project can generate OG Images dynamically.
If you want to use dynamic og image, add a `useDyanmicThumbnail` prop and remove `image` in HeadMeta Component` like this.

```jsx
import HeadMeta from "../components/HeadMeta";

const Page = () => {
  return (
    <>
      <HeadMeta
        title="foo"
        description="foo description"
        useDyanmicThumbnail={true} // Change here.
      />
      {/* Content Here... */}
    </>
  );
};
```

### 4. Simple deploy options

You can choose depoly types from SSR/SSG if you want build this project to SSG, you can build simple to type `yarn static` than deploy it from `out` folder.
And you can build this project to SSR to type `yarn build`.

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

Open `bio.ts` file in root and change it if you're clone this repo successfully, this file will display like this.

```typescript
const bio = {
  username: "Username",
  description: "hello world",
  url: "https://username.github.io",
  link: {
    Github: "https://github.com/username",
  },
};

export default bio;
```

### 5. Write your things

> All Markdown files are includes in `_data` folder.
> Check a frontmatter of each pages and apply it.

You can write a articles with markdown or MDX and you can import a component of `/components` folder in MDX files.

1. Blog

   ```
   ---
   title: "Blog article"
   description: "A example of blog article"
   date: 2022-10-27 16:25:00
   ---
   ...
   ```

   You can write a blog articles with Markdown or MDX in `_data/blog` folder.
   If you create a file correctlly, you'll get this results like this:
   ![Blog index](docs/images/blog-index.png)
   ![Blog article](docs/images/blog-article.png)

2. Resume

   ```
   ---
   title: "Doe's reusme"
   date: 2022-10-27 16:25:00
   description: "I have a 2 years of Front-end job experiences."
   ---
   ...
   ```

   You can write a resume with Markdown or MDX in `_data/resume.md` file.
   If you edit a file correctlly, you'll get this result like this:

   ![Resume](docs/images/resume.png)

3. Proejcts

   ```
   ---
   title: "Personal ACME Project"
   description: "A simple website"
   date: 2022-10-27 16:25:00
   ---
   ...
   ```

   You can write a resume with Markdown or MDX in `_data/projects` folder.
   If you edit a file correctlly, you'll get this results like this:

   ![Projects index](docs/images/projects-index.png)
   ![Projects article](docs/images/projects-article.png)

### 6. Deploy it!

> A root url should change to your deploy URL for display dynamic og image. You can change root url in `url` at `bio.ts` and `config.url` at `package.json`

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ForestLee0513/blog-with-nextjs) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FForestLee0513%2Fblog-with-nextjs)

## Customize

### Change styles

This template is use tailwindcss.  
you can change style in `/styles` folder.

### Change dyamic OG Image styles

You can change dynamic OG Image styles in `pages/api/og.tsx`

```jsx
// ...

const OgImageHandler = async (req: NextRequest) => {
  const spoqaRegularData = await spoqaRegular;
  const spoqaBoldData = await spoqaBold;

  const { searchParams } = new URL(req.url);

  const hasTitle = searchParams.has("title");
  const hasDescription = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : `${bio.username}'s Page`;
  const description = hasDescription
    ? searchParams.get("description")?.slice(0, 100)
    : `${bio.description}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "30px",
          fontFamily: "Spoqa Han Sans Neo",
        }}
      >
        <h1
          style={{
            fontSize: 48,
            fontWeight: 600,
          }}
        >
          {title}
        </h1>
        <p style={{ fontWeight: 400 }}>{description}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Spoqa Han Sans Neo",
          data: spoqaRegularData,
          weight: 400,
          style: "normal",
        },
        {
          name: "Spoqa Han Sans Neo",
          data: spoqaBoldData,
          weight: 600,
          style: "normal",
        },
      ],
    }
  );
};
```
