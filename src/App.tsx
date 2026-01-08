import { useState, useEffect } from 'react'
import './App.css'
import MainPost from './components/MainPost';
import Posts from './components/Posts';
import FavouritePosts from './components/FavouritePosts';
import SwitchButtons from './components/SwitchButtons';
import { Post } from './types/types'

function App() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [postId, setPostId] = useState<number>(0)
  const [favouritePosts, setFavouritePosts] = useState<Set<Post>>(new Set([]))

  useEffect(() => {
      const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
      fetch(url)
        .then((response) => response.json())
        .then((data: Post[]) => setPosts(data))
        .catch((error: Error) => console.log("Error: ", error))
    }, []);

  return (
    <div className='app-container'>
      <FavouritePosts
        favouritePosts={favouritePosts}
        setFavouritePosts={setFavouritePosts}
      />
      <span className='column'>
        <span className='main-block'>
          <MainPost
            posts={posts}
            postId={postId}
            setPostId={setPostId}
            favouritePosts={favouritePosts}
          />
          <SwitchButtons
            posts={posts}
            postId={postId}
            setPostId={setPostId}
          />
        </span>
        <Posts
          posts={posts}
          setPosts={setPosts}
          postId={postId}
          setPostId={setPostId}
          favouritePosts={favouritePosts}
          setFavouritePosts={setFavouritePosts}
        />
      </span>
    </div>
  )
}

export default App
