function newItem() {
    const inputValue = document.getElementById("input").value;

    if (String(inputValue).length > 0) {
        const listItem = document.createElement("li");
        const listItemText = document.createTextNode(inputValue);
        listItem.textContent = inputValue;
        console.log(listItem, listItemText);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", () => {
            listItem.remove();
        });
        listItem.appendChild(deleteBtn);

        listItem.addEventListener("click", () => {
            listItem.classList.toggle("strike");
        });

        console.log("draggable: ", listItem.draggable);
        const contailerList = document.getElementById("list");
        contailerList.appendChild(listItem);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    newItem();
});
