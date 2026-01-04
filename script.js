const posts = [
    {
        title: "첫 번째 게시물",
        date: "2026-01-04",
        content: "GitHub Pages로 만든 첫 게시물입니다."
    },
    {
        title: "두 번째 게시물",
        date: "2026-01-05",
        content: "HTML과 JavaScript만으로 관리할 수 있어요."
    }
];

const postContainer = document.getElementById("posts");

posts.reverse().forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
        <h2>${post.title}</h2>
        <div class="date">${post.date}</div>
        <p>${post.content}</p>
    `;
    postContainer.appendChild(div);
});
