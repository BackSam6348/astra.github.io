fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    posts
      .slice()
      .reverse()
      .forEach(post => {
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `
          <h2>${post.title}</h2>
          <div class="date">${post.date}</div>
          <p>${post.content.replace(/\n/g, "<br>")}</p>
        `;
        document.getElementById("posts").appendChild(div);
      });
  });
