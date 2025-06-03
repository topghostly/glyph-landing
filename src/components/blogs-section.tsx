"use client";

import React, { useEffect, useState } from "react";

interface BlogType {
  id: string;
  title: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
}

interface BlogResponceType {
  _id: string;
  _localID: string;
  content: string;
  creator: {
    _id: string;
    email: string;
    fullname: string;
    image: string;
  };
  link: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getBlogs = async () => {
    setloading(true);
    try {
      const response = await fetch("/api/get-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      const blogData: BlogResponceType[] = data.blogs;

      const blogsArray: BlogType[] = blogData.map((item) => {
        const parsedContent = JSON.parse(item.content);

        return {
          id: item._id,
          title: parsedContent.content.title,
          image: parsedContent.content.mainImage.url,
          author: {
            name: item.creator.fullname,
            avatar: item.creator.image,
          },
          date: new Date(item.createdAt).toLocaleDateString(),
        };
      });

      setBlogs(blogsArray);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError(error as string);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (loading && !error)
    return (
      <div className="w-full h-fit flex items-center justify-center bg-foreground">
        <div className="flex items-center justify-center">
          <div className="w-2.5 h-2.5 border-1 border-background border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="w-full bg-foreground">
        <div className="lg:w-[960px] xl:w-[1280px] container py-[40px] md:py-[60px] lg:py-[100px]">
          <div className="flex flex-col gap-3">
            <h2 className="h2 text-background font-satoshi-b">
              From Draft to Discourse
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              Explore the latest musings, tutorials, and deep dives written in
              Glyph. Crafted in focus, shared with clarity.
            </p>
          </div>
          <div className="w-full h-fit flex items-center justify-center bg-foreground mt-10">
            <p className="text-background text-sm text-muted-foreground">
              An error occured while fetching all blogs
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <section className="w-full bg-foreground">
      <div className="lg:w-[960px] xl:w-[1280px] container py-[40px] md:py-[60px] lg:py-[100px]">
        <div className="flex flex-col gap-3">
          <h2 className="h2 text-background font-satoshi-b">
            From Draft to Discourse
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            Explore the latest musings, tutorials, and deep dives written in
            Glyph. Crafted in focus, shared with clarity.
          </p>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-3 text-background">
                  {blog.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-background">
                      {blog.author.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// {
//     "_id": "680d7731cecb9e8b5602021a",
//     "_localID": "a9248bc7-5728-4b4f-b935-0d3e4ccf818b",
//     "content": "{\"_localID\":\"a9248bc7-5728-4b4f-b935-0d3e4ccf818b\",\"content\":{\"title\":\"Welcome to Glyph — Your New Home for Storytelling the new\",\"description\":\"Glyph is designed to make blogging simple, powerful, and flexible — whether drafting ideas offline or publishing your stories to the world. With Glyph, you’re always in control.\",\"body\":{\"type\":\"doc\",\"content\":[{\"type\":\"heading\",\"attrs\":{\"textAlign\":null,\"level\":3},\"content\":[{\"type\":\"text\",\"text\":\"Congratulations on taking your first step with Glyph!\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"Glyph is designed to make blogging simple, powerful, and flexible — whether drafting ideas offline or publishing your stories to the world. With Glyph, \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"you’re always in control\"},{\"type\":\"text\",\"text\":\".\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"Here’s what you can do:\"}]},{\"type\":\"bulletList\",\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"✏️ \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Create and edit blogs\"},{\"type\":\"text\",\"text\":\" anytime — even when offline.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"📸 \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Add beautiful images\"},{\"type\":\"text\",\"text\":\" to bring your stories to life.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"🔖 \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Organize your blogs\"},{\"type\":\"text\",\"text\":\" with categories and tags for easy access.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"🚀 \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Publish when ready\"},{\"type\":\"text\",\"text\":\" — sync your work seamlessly when you're online. bb\"}]}]}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"At Glyph, we believe that every voice matters. Whether you're documenting your journey, sharing your expertise, or simply expressing yourself, \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"your stories deserve a place to shine\"},{\"type\":\"text\",\"text\":\".\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"Thank you for choosing Glyph. We can't wait to see what you'll create!\"}]},{\"type\":\"image\",\"attrs\":{\"src\":\"https://glyph-storage.s3.eu-north-1.amazonaws.com/19-Glyph-large-04.png\",\"alt\":\"19-Glyph-large-04.png\",\"title\":null}}]},\"mainImage\":{\"url\":\"https://glyph-storage.s3.eu-north-1.amazonaws.com/a9248bc7-5728-4b4f-b935-0d3e4ccf818b-main.jpg\",\"alt\":\"\"}},\"creator\":\"680cb2a1ec90715fd08fdf10\"}",
//     "creator": {
//         "_id": "680cb2a1ec90715fd08fdf10",
//         "email": "temitopeabolaji0327@gmail.com",
//         "fullname": "Abolaji Temitope",
//         "image": "https://lh3.googleusercontent.com/a/ACg8ocKnpB8KOqC3Bwg-zDjWCiVAIY6I1dyaIqEpPY5TSf-Wu7s3IriQ=s96-c"
//     },
//     "link": "https://glyph-cms.vercel.app/blogs/post/a9248bc7-5728-4b4f-b935-0d3e4ccf818b",
//     "createdAt": "2025-04-27T00:15:45.087Z",
//     "updatedAt": "2025-05-06T14:19:37.254Z",
//     "__v": 0
// }
