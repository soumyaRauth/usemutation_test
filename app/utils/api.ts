type PostProp = {
  title: string;
  body: string;
  userId: number | string;
};
export const createAPost = async <T>({ title, body, userId }: PostProp) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: body,
          userId: userId,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create post");
    }
    const data = await response.json();

    return data;
  } catch (error) {
  } finally {
  }
};
