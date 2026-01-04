import { useState, useEffect } from 'react'
import './App.css'
import MainPost from './components/MainPost';
import Posts from './components/Posts';
import PastPost from './components/PastPost';
import NextPost from './components/NextPost';
import NextPastBtns from './components/NextPastBtns';
import FavouritePosts from './components/FavouritePosts';

function App() {

  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(0)
  const [favouritePosts, setFavouritePosts] = useState(new Set([]))

  useEffect(() => {
      const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
      fetch(url)
        .then((respone) => respone.json())
        .then((data) => setPosts(data))
    }, []);

  return (
    <>
      <FavouritePosts
        favouritePosts={favouritePosts}
        setFavouritePosts={setFavouritePosts}
      />
      <br/>
      <br/>
      <PastPost 
        posts={posts}
        postId={postId}
      />
      <MainPost 
        posts={posts}
        postId={postId}
        setPostId={setPostId}
      />
      <NextPost
        posts={posts}
        postId={postId}
      />
      <br/>
      <br/>
      <NextPastBtns
        posts={posts}
        postId={postId}
        setPostId={setPostId}
      />
      <br/>
      <Posts 
        posts={posts}
        postId={postId}
        setPostId={setPostId}
        favouritePosts={favouritePosts}
        setFavouritePosts={setFavouritePosts}
      />
    </>
  )
}

export default App
