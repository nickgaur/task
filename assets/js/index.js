const image = document.querySelectorAll("img");
const dropContainer = document.getElementById("drop-container");
const body = document.querySelector("body");
const dragText = document.getElementById("drag-text");
const imgDropContainer = document.getElementById("img-drop-container");
let dragged;
let imgSrc;

// =========================== DRAG DROP FUNCTIONALITY ==========================
image.forEach((img) => {

    img.addEventListener("drag", (event) => {
    })

    img.addEventListener("dragstart", (event) => {
        dragText.innerText = "+"
        dropContainer.style.borderStyle = "dashed"
        dragged = event.target.cloneNode(true);
        imgSrc = dragged.src
        event.target.classList.add("dragging")
        imgDropContainer.classList.add("overlay")
        dropContainer.children[0].classList.add("overlay")
    })

    img.addEventListener("dragend", (event) => {
        event.target.classList.remove("dragging");
        imgDropContainer.classList.remove("overlay");
        dropContainer.style.borderStyle = "solid";
        dropContainer.children[0].classList.remove("overlay")
    })

    dropContainer.addEventListener(
        "dragover",
        (event) => {
            event.preventDefault();
        }
    );

    dropContainer.addEventListener("drop", (event) => {
        event.preventDefault();
        for (let i = 1; i < imgDropContainer.children.length; i++) {
            imgDropContainer.children[i].remove()
        }
        body.style.backgroundImage = `url(${imgSrc})`
        imgDropContainer.append(dragged)
        dragText.innerText = "";
    })
})
// ==================================================================================


// ===================== RESET FUNCTIONALITY ==================

const btn = document.querySelector("button")
btn.addEventListener("click", (event) => {
    body.style.backgroundImage = "none"
    for (let i = 1; i < imgDropContainer.children.length; i++) {
        imgDropContainer.children[i].remove()
    }
    dragText.innerText = "+"
})

// ============================================================