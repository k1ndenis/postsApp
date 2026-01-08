export interface Post {
  id: number;
  title: string;
}

type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface PostsProps {
  posts: Post[];
  setPosts: SetStateFunction<Post[]>;
  postId: number;
  setPostId: SetStateFunction<number>;
  favouritePosts: Set<Post>;
  setFavouritePosts: SetStateFunction<Set<Post>>;
}

export interface FavouritePostsProps {
  favouritePosts: Set<Post>;
  setFavouritePosts: SetStateFunction<Set<Post>>;
}

export interface MainPostProps {
  posts: Post[];
  postId: number;
  setPostId: SetStateFunction<number>;
  favouritePosts: Set<Post>;
}
export interface SwitchButtonsProps {
  posts: Post[];
  postId: number;
  setPostId: SetStateFunction<number>;
}