import React from "react"
import { Post } from './../types/types'

interface PastPostProps {
  posts: Post[];
  postId: number;
  favouritePosts: Set<Post>;
}

const PastPost: React.FC<PastPostProps> = ({
  posts,
  postId,
  favouritePosts
}) => {

  const pastPost = () => {
    if (posts.length == 0) return null;

    const prevPostId = postId == 0
      ? posts.length - 1
      : postId - 1;

    const prevPost = posts[prevPostId];

    return (
      <span 
        style={{
          color: [...favouritePosts].includes(posts[postId - 1])
            ? "gold"
            : ""
          }
        }
      >
        {prevPost.id}) {prevPost.title}
      </span>
    )
  }
    

  return (
    <>
      {pastPost()}
    </>
  )
}

export default PastPost