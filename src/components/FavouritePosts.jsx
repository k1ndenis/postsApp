const FavouritePosts = (props) => {
  const { favouritePosts, setFavouritePosts } = props;

  function removeFavourite(index) {
    const updatedFavourites = [...favouritePosts];
    updatedFavourites.splice(index, 1);
    setFavouritePosts(new Set(updatedFavourites))
  }

  const favourites = [...favouritePosts].map((post, index) => {
      return (
        <div>
          <li 
            key={post.id}
          >
            {post.id}) {post.title}
            <button onClick={() => removeFavourite(index)}>
              x
            </button>
          </li>
        </div>
      )
    })


  return (
    <div>
      {favourites.length > 0
        ? (
          <>
            <h2>Избранные посты</h2>
            {favourites}
          </>
        )
        : (
          <>
            Вы пока что не добавили ни одного поста в избранное
          </>
        )
      }
      
    </div>
  )
}

export default FavouritePosts