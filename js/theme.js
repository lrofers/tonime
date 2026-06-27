const btn = document.getElementById("theme-toggle");

const theme = localStorage.getItem("theme");

if(theme === "light"){
    document.body.classList.add("light");
}

btn.onclick = () => {

    document.body.classList.toggle("light");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("light")
            ? "light"
            : "dark"
    );

};
