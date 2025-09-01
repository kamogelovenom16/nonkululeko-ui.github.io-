// Search function with highlight
function searchPosts() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let posts = document.getElementById("posts") ? document.getElementById("posts").getElementsByTagName("article") : [];

  for (let i = 0; i < posts.length; i++) {
    let titleEl = posts[i].getElementsByTagName("h3")[0];
    let textEl = posts[i].getElementsByTagName("p")[0];
    let title = titleEl.innerText.toLowerCase();
    let text = textEl.innerText.toLowerCase();

    // Reset highlights
    titleEl.innerHTML = titleEl.innerText;
    textEl.innerHTML = textEl.innerText;

    if (input === "" || title.includes(input) || text.includes(input)) {
      posts[i].style.display = "block";

      if (input !== "") {
        let regex = new RegExp("(" + input + ")", "gi");
        titleEl.innerHTML = titleEl.innerText.replace(regex, "<mark>$1</mark>");
        textEl.innerHTML = textEl.innerText.replace(regex, "<mark>$1</mark>");
      }
    } else {
      posts[i].style.display = "none";
    }
  }
}

// Dark mode toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});