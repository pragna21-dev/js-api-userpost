const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

document.addEventListener('DOMContentLoaded', async () => {
	const posts=await getPosts();
    //    console.log(posts);
    renderPosts(posts)
});
async function getPosts() {
  try {
    const res = await fetch(POSTS_URL);
    const data = await res.json();
    //  console.log(data);
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}
function renderPosts(posts){
    const container = document.getElementById('posts-list');
    if (!container) return;
	container.innerHTML = '';
     posts.forEach((post) => {
      console.log(post);
      const card = createCard(post);
    container.appendChild(card);
     })
    }
   
 function createCard(post) {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-8';

  col.innerHTML = `
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${post.body}</p>
      </div>
      <div class="card-footer text-end">
        <button class="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  `;
 return col;
 
}
