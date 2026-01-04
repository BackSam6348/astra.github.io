let posts = [];

fetch("posts.json")
  .then(r => r.json())
  .then(d => { posts = d; render(); });

function addPost() {
  const file = image.files[0];
  const imgPath = file ? `/images/${file.name}` : null;

  posts.push({
    id: Date.now(),
    title: title.value,
    date: new Date().toISOString().split("T")[0],
    content: content.value,
    pinned: pinned.checked,
    image: imgPath
  });

  if (file) {
    alert(`이미지 파일을 /images/${file.name} 로 업로드하세요.`);
  }

  render();
}

function render() {
  list.innerHTML = "";
  posts.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.pinned ? "📌" : ""} ${p.title}
      <button onclick="edit(${p.id})">수정</button>
      <button onclick="remove(${p.id})">삭제</button>
    `;
    list.appendChild(li);
  });
}

function edit(id) {
  const p = posts.find(p => p.id === id);
  title.value = p.title;
  content.value = p.content;
  pinned.checked = p.pinned;
  remove(id);
}

function remove(id) {
  posts = posts.filter(p => p.id !== id);
  render();
}

function exportPosts() {
  const blob = new Blob([JSON.stringify(posts, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "posts.json";
  a.click();
}
