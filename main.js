let colorChanger = function() {
    let color = document.querySelector("#color").value;
    let number = document.querySelector("#number").value;
    let elements = document.querySelectorAll("td");
    let active_element = document.querySelector(`.cell-${number}`);
    
    for (let element of elements) {
        element.style.backgroundColor = color;
    }

    active_element.style.backgroundColor = "white";
}
