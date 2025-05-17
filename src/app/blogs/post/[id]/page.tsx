import { Metadata, ResolvingMetadata } from "next";
import PreviewPage from "./preview-page";

// 1) declare the proper Props type for generateMetadata
type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
  // if you need searchParams, you can uncomment this:
  // searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { params }: GenerateMetadataProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    // 2) unwrap the promise
    const { id } = await params;

    const res = await fetch(`https://glyph-cms.vercel.app/api/blog/get-blog`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _localID: id }),
      cache: "no-store",
    });

    const result = await res.json();
    if (!res.ok || !result.blog) {
      return {
        title: "Blog Not Found | Glyph",
        description: "This blog post does not exist or has been removed.",
      };
    }

    const content = JSON.parse(result.blog.content);
    const title = content.content.title || "Untitled Blog";
    const description =
      content.content.description || "Read this insightful post on Glyph.";
    const image =
      content.content.mainImage?.url ||
      `${process.env.NEXT_PUBLIC_BASE_URL}/default-og.png`;

    return {
      title: `${title} | Glyph`,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: image, width: 1200, height: 630, alt: title }],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch (error) {
    console.error("Metadata error", error);
    return {
      title: "Post | Glyph",
      description: "Something went wrong trying to load the blog.",
    };
  }
}

export default function Page() {
  return <PreviewPage />;
}
