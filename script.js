fetch("posts.json")
  .then(r => r.json())
  .then(posts => {
    const pinned = posts.filter(p => p.pinned);
    const normal = posts.filter(p => !p.pinned);

    [...pinned, ...normal.reverse()].forEach(post => {
      const div = document.createElement("div");
      div.className = "post";

      div.innerHTML = `
        ${post.pinned ? '<div class="pin">📌 공지</div>' : ""}
        <h2>${post.title}</h2>
        <div class="date">${post.date}</div>
        ${
          post.image
            ? `<img src="${post.image}" class="preview">`
            : ""
        }
        <p>${post.content.replace(/\n/g, "<br>")}</p>
      `;

      document.getElementById("posts").appendChild(div);
    });
  });
