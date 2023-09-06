const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const card_content_inner = document.querySelector(".card__content-inner");
const dots = document.querySelectorAll(".dot");
const dot_list = document.querySelector(".dots");
let curItem = 0;
let maxItem = 4;

next.addEventListener("click", function () {
    curItem++;
    if (curItem === maxItem) curItem = 0;
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });
    dots[curItem].classList.add("active");
    card_content_inner.style.transform = `translateX(-${curItem * 100}%)`;
});

prev.addEventListener("click", function () {
    curItem--;
    if (curItem === -1) curItem = maxItem - 1;
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });
    dots[curItem].classList.add("active");
    card_content_inner.style.transform = `translateX(-${curItem * 100}%)`;
});

dot_list.addEventListener("click", function (e) {
    const dot = e.target.closest(".dot");
    if (!dot) return;
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });
    curItem = +dot.dataset.index;
    card_content_inner.style.transform = `translateX(-${curItem * 100}%)`;
    dot.classList.add("active");
});
