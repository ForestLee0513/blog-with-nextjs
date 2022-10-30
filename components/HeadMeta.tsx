import Head from "next/head";

import bio from "../bio";

interface Props {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const HeadMeta = ({ title, description, url, image }: Props) => {
  return (
    <Head>
      <title>{title || `${bio.username}'s Page`}</title>
      <meta name="description" content={description || bio.description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || `${bio.username}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || `${bio.url}`} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content={bio.username} />
    </Head>
  );
};

export default HeadMeta;
