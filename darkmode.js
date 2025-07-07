const toggleBtn = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

// Load theme from localStorage
if (localStorage.theme === "dark") {
  htmlEl.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  if (htmlEl.classList.contains("dark")) {
    htmlEl.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    htmlEl.classList.add("dark");
    localStorage.theme = "dark";
  }
});
