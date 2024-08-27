const loadMeta = async (url) => {
  const response = await fetch(url);
  const data = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, "text/html");

  const head = document.head;
  doc.head.childNodes.forEach(node => {
    head.appendChild(node.cloneNode(true));
  });
};

const loadHTML = async (url, elementId) => {
  const response = await fetch(url);
  const data = await response.text();
  document.getElementById(elementId).innerHTML = data;
};

// 페이지 로드 시 메타 정보 로드
document.addEventListener("DOMContentLoaded", () => {
  loadMeta("common/html/meta.html");

  loadHTML("common/html/script.html", "script");
  loadHTML("common/html/header.html", "header");
  loadHTML("common/html/footer.html", "footer");
});