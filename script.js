const posts = [
    {
        title: "Astra Group 홈페이지 오픈",
        date: "2026-01-04",
        content: "Astra Group 공식 홈페이지가 GitHub Pages를 통해 오픈되었습니다."
    },
    {
        title: "디스코드 커뮤니티 안내",
        date: "2026-01-05",
        content: "아래 디스코드 서버를 통해 공지, 개발 소식, 커뮤니티 활동을 진행합니다."
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
