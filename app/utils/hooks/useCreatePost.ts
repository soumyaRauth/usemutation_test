import { useMutation } from "@tanstack/react-query";
import { createAPost } from "../api";
type PostProp = {
  title: string;
  body: string;
  userId: number | string;
};
export const useCreatePost = () => {
  return useMutation({
    mutationFn: (post: PostProp) => createAPost(post),
  });
};
