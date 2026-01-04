fetch("posts.json")
  .then(r => r.json())
  .then(posts => {
    const pinned = posts.filter(p => p.pinned);
    const normal = posts.filter(p => !p.pinned).reverse();

    [...pinned, ...normal].forEach(post => {
      const div = document.createElement("div");
      div.className = "post clickable";

      div.onclick = () => {
        location.href = `post.html?id=${post.id}`;
      };

      div.innerHTML = `
        ${post.pinned ? '<div class="pin">📌 공지</div>' : ""}
        <h2>${post.title}</h2>
        <div class="date">${post.date}</div>
        ${post.image ? `<img src="${post.image}" class="preview">` : ""}
        <p>${marked.parse(post.content.split("\n").slice(0, 3).join("\n"))}</p>
      `;

      document.getElementById("posts").appendChild(div);
    });
  });
