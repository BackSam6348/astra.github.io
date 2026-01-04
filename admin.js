let posts = [];

fetch("posts.json")
  .then(res => res.json())
  .then(data => {
    posts = data;
    renderList();
  });

function addPost() {
  posts.push({
    id: Date.now(),
    title: title.value,
    date: new Date().toISOString().split("T")[0],
    content: content.value
  });
  renderList();
}

function renderList() {
  list.innerHTML = "";
  posts.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      <b>${p.title}</b> (${p.date})
      <button onclick="editPost(${p.id})">수정</button>
      <button onclick="deletePost(${p.id})">삭제</button>
    `;
    list.appendChild(li);
  });
}

function editPost(id) {
  const p = posts.find(p => p.id === id);
  title.value = p.title;
  content.value = p.content;
  deletePost(id);
}

function deletePost(id) {
  posts = posts.filter(p => p.id !== id);
  renderList();
}

function exportPosts() {
  const blob = new Blob(
    [JSON.stringify(posts, null, 2)],
    { type: "application/json" }
  );
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "posts.json";
  a.click();
}
