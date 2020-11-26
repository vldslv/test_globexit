let colorChanger = function() {
    let color = document.querySelector("#color").value,
        number = document.querySelector("#number").value,
        elements = document.querySelectorAll("td"),
        active_element = document.querySelector(`.cell-${number}`);
    
    for (let element of elements) {
        element.style.backgroundColor = color;
    }

    active_element.style.backgroundColor = "white";
}
