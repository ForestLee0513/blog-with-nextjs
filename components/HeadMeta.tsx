import Head from "next/head";

import bio from "../bio";
import defaultThumbnail from "../public/assets/images/default-thumbnail.png";

interface Props {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  useDyanmicThumbnail: boolean;
}

const HeadMeta = ({
  title,
  description,
  url,
  image,
  useDyanmicThumbnail,
}: Props) => {
  const exportType = process.env.NEXT_PUBLIC_EXPORT_TYPE;
  const isProd = JSON.parse(process.env.NEXT_PUBLIC_IS_PRODUCTION as string);
  // Check is website is production and if site is production, covert url to production URL
  const dynamicOGUrl = isProd
    ? encodeURI(`${bio.url}/api/og?title=${title}&description=${description}`)
    : encodeURI(
        `http://localhost:3000/api/og?title=${title}&description=${description}`
      );

  // Check is website's export type and if is website's export is SSR and invalid image, display dynamic OG image
  const ogUrl =
    exportType === "SSR" && useDyanmicThumbnail
      ? dynamicOGUrl
      : image || defaultThumbnail.src;

  return (
    <Head>
      <title>{title || `${bio.username}'s Page`}</title>
      <meta name="description" content={description || bio.description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || `${bio.username}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || `${bio.url}`} />
      <meta property="og:image" content={ogUrl} />
      <meta property="og:article:author" content={bio.username} />
    </Head>
  );
};

export default HeadMeta;
