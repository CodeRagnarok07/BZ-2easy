const slider = document.querySelector(".sliderDragable");
	
let lastCursorX = 0
let cursorX = 0;
let isPressed = false;
if (slider) {
    slider.addEventListener("mousedown", (e) => {
        isPressed = true;
        cursorX = e.offsetX;
        lastCursorX = cursorX
        slider.style.cursor = "grabbing";

        console.log(cursorX	)
    });
    window.addEventListener("mouseup", () => {
        slider.style.cursor = "grab";
        setTimeout(()=>{
            slider.style.cursor = "auto";
        }, 200)
    });

    window.addEventListener("mouseup", () => {
        isPressed = false;
    });
    slider.addEventListener("mousemove", (e) => {
        if (!isPressed) return;
        e.preventDefault();
        slider.scrollLeft = cursorX - e.pageX;  
    });
}