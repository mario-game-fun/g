
    const owner = "mario-game-fun";
    const repo = "g";
    const branch = "main";
    const path_git = "https://mario-game-fun.github.io/g/";

    

async function loadFolders(path, containerId) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
    const res = await fetch(url);
    const items = await res.json();

    if (!Array.isArray(items)) return;

    const container = document.getElementById(containerId);

    for (const item of items) {
        if (item.type === "dir") {
            const card = document.createElement("div");
            card.className = "folder-card";
            card.innerHTML = `
                <img class="folder-thumb" src="" alt="">
                <div class="folder-name">${item.name}</div>
            `;
            const thumb = card.querySelector(".folder-thumb");
                thumb.src = path_git+item.path+"/logo.webp";
            card.onclick = () => {
                navigator.clipboard.writeText(path_git +item.path);
                showToast("Đã copy đường dẫn folder!");
            };

            container.appendChild(card);
        }
    }
}


async function loadFiles(path, containerId, type) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;

    const res = await fetch(url);
    const files = await res.json();

    if (!Array.isArray(files)) {
        console.error("API error:", files);
        return;
    }

    const container = document.getElementById(containerId);

    files.forEach(file => {
        if (file.type === "file") {
            if (type === "image" && file.name.match(/\.(jpg|jpeg|png|webp)$/i)) {
                const img = document.createElement("img");
                img.src = file.download_url;

                img.onclick = () => {
                    navigator.clipboard.writeText(file.download_url);
                    showToast("Đã copy link ảnh!");
                };

                container.appendChild(img);
            }
            if (type === "video" && file.name.endsWith(".mp4")) {
                const video = document.createElement("video");
                video.src = file.download_url;
                video.controls = true;

                video.onclick = () => {
                    navigator.clipboard.writeText(file.download_url);
                    showToast("Đã copy link video!");
                };

                container.appendChild(video);
            }
        }
    });
} 