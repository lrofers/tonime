// =========================
// TONIME SEARCH ENGINE
// =========================

const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const title = card.querySelector(".card-title")
            .textContent
            .toLowerCase();

        const genre = card.querySelectorAll(".card-info")[1]
            .textContent
            .toLowerCase();

        if (
            title.includes(keyword) ||
            genre.includes(keyword)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});
