let scene = document.querySelector("#scene");
let table = document.querySelector("#table");
let addButtonColumn = document.querySelector("#addButtonColumn");
let addButtonRow = document.querySelector("#addButtonRow");
let removeButtonColumn = document.querySelector("#minusButtonColumn");
let removeRow = document.querySelector("#minusButtonRow");

let lastRowPosition;
let lastColumnPosition;

addButtonColumn.addEventListener('click',() => {
        let array = document.querySelectorAll("tr");
        let length = array.length;
        for (let i = 0; i < length; i++) {
            let elem = document.createElement("td");
            array[i].append(elem);
        }});
addButtonRow.addEventListener('click', () => {
        let row = document.createElement("tr");
        let length = document.querySelector("tr").children.length;
        for (let i = 0; i < length; i++) {
            let td = document.createElement("td");
            row.appendChild(td);
        }
        table.querySelector("tbody").appendChild(row);
    });
removeButtonColumn.addEventListener('click', () => {
    let rows = document.querySelectorAll("tr");
    let length = rows.length;
    for (let i = 0; i < length; i++) {
        table.rows[i].cells[lastColumnPosition].remove();
    }
    hide();
});
removeRow.addEventListener('click', () => {
    table.rows[lastRowPosition].remove();
    hide();
});
table.addEventListener('mouseover', () =>{
    let elem = event.target;
    if(elem.tagName === "TD") {
        let numberOfTr = elem.parentElement.parentElement.children.length;
        let arrayTr = Array.from(table.children[0].children);
        lastRowPosition = arrayTr.indexOf(elem.parentElement);
        removeRow.style.top = ((100 / numberOfTr) * lastRowPosition) + "%";

        let numberOfTd = elem.parentElement.children.length;
        let arrayTd = Array.from(table.children[0].children[lastRowPosition].children);
        lastColumnPosition = arrayTd.indexOf(elem);
        removeButtonColumn.style.left = ((100 / numberOfTd) * lastColumnPosition) + "%";
    }
});
table.addEventListener('mouseleave', hide);
scene.addEventListener('mouseover', () => {
    if(table.rows.length >=2 ) {
        removeRow.style.visibility = "visible";
    }
    if( table.rows[0].cells.length >= 2){
        removeButtonColumn.style.visibility = "visible";
    }
});

function hide() {
    removeButtonColumn.style.visibility = "hidden";
    removeRow.style.visibility = "hidden";
}
