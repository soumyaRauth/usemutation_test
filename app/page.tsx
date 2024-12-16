"use client";
import Image from "next/image";
import { useCreatePost } from "./utils/hooks/useCreatePost";

export default function Home() {
  const createPost = useCreatePost();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button
        onClick={() =>
          createPost.mutate({ title: "fdfasfas", body: "ffasfsaf", userId: 1 })
        }
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Click Me
      </button>
    </div>
  );
}
