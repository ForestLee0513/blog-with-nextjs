import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import bio from "~/bio";

export const config = {
  runtime: "experimental-edge",
};

const OgImageHandler = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : `${bio.username}'s Page`;

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
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};

export default OgImageHandler;
