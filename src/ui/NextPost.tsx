import React from "react"
import { Post } from './../types/types'

interface NextPostProps {
  posts: Post[];
  postId: number;
  favouritePosts: Set<Post>;
}

const NextPost: React.FC<NextPostProps> = ({
  posts,
  postId,
  favouritePosts
}) => {

  const nextPost = () => {
    if (posts.length == 0) return null;

    const nextPostId = postId == posts.length - 1
      ? 0
      : postId + 1;

    const nextPost = posts[nextPostId];

    return (
      <span
        style={{
          color: [...favouritePosts].includes(posts[postId + 1])
            ? "gold"
            : ""
          }
        }
      >
        {nextPost.id}) {nextPost.title}
      </span>
    )
  }
    

  return (
    <>
      {nextPost()}
    </>
  )
}

export default NextPost