const id = new URLSearchParams(location.search).get("id");

fetch("posts.json")
  .then(r => r.json())
  .then(posts => {
    const post = posts.find(p => p.id == id);
    if (!post) return;

    document.getElementById("post").innerHTML = `
      <h1>${post.title}</h1>
      <div class="date">${post.date}</div>
      ${post.image ? `<img src="${post.image}" class="detail-image">` : ""}
      <div class="content">${marked.parse(post.content)}</div>
    `;
  });
