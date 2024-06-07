export const loadPosts = async() => {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsJson = await postsResponse.json();
    const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photosJson = await photosResponse.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return {...post, cover: photosJson[index].url}
    });

    return postsAndPhotos;        
}