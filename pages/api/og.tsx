import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import bio from "../../bio";

const spoqaRegular = fetch(
  new URL("../../public/fonts/SpoqaHanSansNeo-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
const spoqaBold = fetch(
  new URL("../../public/fonts/SpoqaHanSansNeo-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export const config = {
  runtime: "experimental-edge",
};

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

export default OgImageHandler;
