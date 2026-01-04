let posts = [];

fetch("posts.json")
  .then(r => r.json())
  .then(data => {
    posts = data;
    renderList();
  });

function addPost() {
  const file = image.files[0];
  let imagePath = null;

  if (file) {
    imagePath = `/images/${file.name}`;
    alert(
      `이미지 업로드 안내:\n/images/${file.name} 로 저장 후 GitHub에 업로드하세요.`
    );
  }

  posts.push({
    id: Date.now(),
    title: title.value,
    date: new Date().toISOString().split("T")[0],
    content: content.value,
    pinned: pinned.checked,
    image: imagePath
  });

  renderList();
}

function renderList() {
  list.innerHTML = "";
  posts.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.pinned ? "📌" : ""} <b>${p.title}</b> (${p.date})
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
  pinned.checked = p.pinned;
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
