const btn = document.getElementById("toggleBtn");
const body = document.body;
const title = document.getElementById("title");

btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if(body.classList.contains("darkmode")){
        title.contextContent = "Dark Mode";
        btn.textContent = " Switch to Light Mode";
    }else{
        title.textContent  = "Light Mode";
        btn.textContent  = "Switch to Dark Mode";
    }
});
