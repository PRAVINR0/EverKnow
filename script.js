document.getElementById("search").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const posts = document.querySelectorAll(".blog-post");

  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    post.style.display = text.includes(query) ? "block" : "none";
  });
});
