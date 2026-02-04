let currentLang = "id";
const data = [
  {
    id: 1,
    title: "Belajar Dasar HTML",
    issuer: "CODEPOLITAN",
    date: "2026",
    img: "assets/images/certificate/html.png",
    desc_id:
      "Berhasil memahami struktur dasar HTML dan mampu membuat halaman web statis sederhana.",
    desc_en:
      "Successfully understood basic HTML structure and created simple static web pages.",
  },
  {
    id: 2,
    title: "Mahir Menggunakan Text Editor (VSCODE)",
    issuer: "CODEPOLITAN",
    date: "2026",
    img: "assets/images/certificate/text-editor.png",
    desc_id:
      "Mampu menggunakan Visual Studio Code secara optimal untuk menulis, mengelola, dan debugging kode.",
    desc_en:
      "Able to use Visual Studio Code optimally for writing, managing, and debugging code.",
  },
  {
    id: 3,
    title: "GIT Pemula",
    issuer: "CODEPOLITAN",
    date: "2026",
    img: "assets/images/certificate/git-basic.png",
    desc_id:
      "Mampu menggunakan Git untuk melacak perubahan kode dan berkolaborasi dalam proyek menggunakan GitHub.",
    desc_en:
      "Able to use Git to track code changes and collaborate on projects using GitHub.",
  },

  {
    id: 4,
    title: "Pemrograman Javascript untuk Pemula sampai Mahir",
    issuer: "Programmer Zaman Now",
    date: "2026",
    img: "assets/images/certificate/javascript-basic.png",
    desc_id:
      "Berhasil menguasai dasar hingga lanjutan JavaScript, termasuk logika pemrograman, fungsi, dan pengelolaan data.",
    desc_en:
      "Successfully mastered JavaScript from basic to advanced concepts, including programming logic, functions, and data handling.",
  },
];

const translations = {
  id: {
    sub: "Software Engineer, lagi eksplor Android Development & belajar hal baru tiap hari. 😉",
    search: "Cari sertifikat...",
    btn: "Lihat Detail",
  },
  en: {
    sub: "Software Engineer, exploring Android Development & learning new things every day. 😊",
    search: "Search certificates...",
    btn: "View Details",
  },
};

function render() {
  const grid = document.getElementById("cert-grid");
  const query = document.getElementById("search").value.toLowerCase();
  grid.innerHTML = "";

  data
    .filter((i) => i.title.toLowerCase().includes(query))
    .forEach((item) => {
      grid.innerHTML += `
                    <div class="card">
                        <img src="${item.img}" class="card-img">
                        <div class="card-body">
                            <div class="card-title">${item.title}</div>
                            <div class="card-meta">${item.issuer} • ${item.date}</div>
                            <button class="btn-detail" onclick="openModal(${item.id})">${translations[currentLang].btn}</button>
                        </div>
                    </div>
                `;
    });
}

function toggleLang() {
  currentLang = currentLang === "id" ? "en" : "id";
  document.getElementById("subtitle").innerText = translations[currentLang].sub;
  document.getElementById("search").placeholder =
    translations[currentLang].search;
  render();
}

function openModal(id) {
  const item = data.find((x) => x.id === id);
  document.getElementById("m-img").src = item.img;
  document.getElementById("m-title").innerText = item.title;
  document.getElementById("m-meta").innerText = `${item.issuer} | ${item.date}`;
  document.getElementById("m-desc").innerText =
    currentLang === "id" ? item.desc_id : item.desc_en;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.getElementById("search").addEventListener("input", render);
render();
