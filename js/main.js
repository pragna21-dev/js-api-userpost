const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

document.addEventListener('DOMContentLoaded', () => {
	getPosts();
});
async function getPosts() {
  try {
    const res = await fetch(POSTS_URL);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}