import { NextResponse, NextRequest } from "next/server";
import connectToDB from "../../../lib/mongodb";
import Blog from "../../../models/blog";
import User from "@/models/user";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    // Step 1: Get all blogs
    const blogs = await Blog.find();
    console.log("The first blogs:", blogs)

    // Step 2: Get all unique creator IDs
    const creatorIds = [...new Set(blogs.map((blog) => blog.creator))];

    // Step 3: Fetch the corresponding users
    const users = await User.find({ _id: { $in: creatorIds } });

    // Step 4: Map users by ID for quick access
    const userMap = new Map(users.map((user) => [user._id.toString(), user]));

    // Step 5: Attach user info to each blog
    const formattedBlogs = blogs.map((blog) => {
      const creator = userMap.get(blog.creator.toString());
      return {
        ...blog.toObject(),
        creator: creator
          ? {
              _id: creator._id,
              email: creator.email,
              fullname: creator.fullname,
              image: creator.image,
            }
          : null,
      };
    });

    return NextResponse.json({ blogs: formattedBlogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs and creators:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs and creators" },
      { status: 500 }
    );
  }
}
