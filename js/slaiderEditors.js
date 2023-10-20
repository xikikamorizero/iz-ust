const container = document.getElementById("slaider");
let isMouseDown = false;
let isScrolling = false;
let scrollLeft = 0;
let startX = 0;

container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mouseup", handleMouseUp);
container.addEventListener("mouseleave", handleMouseLeave);
container.addEventListener("mousemove", handleMouseMove);
container.addEventListener("click", handleClick);
container.addEventListener("selectstart", handleSelectStart);
container.addEventListener("dragstart", handleDragStart);

function handleMouseDown(e) {
    isMouseDown = true;
    startX = e.clientX - (container.offsetLeft || 0);
    scrollLeft = container.scrollLeft || 0;
}

function handleMouseUp() {
    isMouseDown = false;
}

function handleMouseLeave() {
    isMouseDown = false;
}

function handleMouseMove(e) {
    if (!isMouseDown || !container) return;
    e.preventDefault();
    const x = e.clientX - (container.offsetLeft || 0);
    const walk = (x - startX) * 1;
    container.scrollLeft = scrollLeft - walk;
    isScrolling = true;
}

function handleClick(e) {
    if (isScrolling) {
        e.preventDefault();
        e.stopPropagation();
    }
    isScrolling = false;
}

function handleSelectStart(e) {
    if (isScrolling) {
        e.preventDefault();
    }
}

function handleDragStart(e) {
    if (isScrolling) {
        e.preventDefault();
    }
}
