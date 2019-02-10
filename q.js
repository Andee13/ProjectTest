let table = document.querySelector("#table");
let addButtonColumn = document.querySelector("#addButtonColumn");
let addButtonRow = document.querySelector("#addButtonRow");
let removeButtonColumn = document.querySelector("#minusButtonColumn");
let removeRow = document.querySelector("#minusButtonRow");

addButtonColumn.addEventListener('click',addColumn);
addButtonRow.addEventListener('click', addRow);
removeButtonColumn.addEventListener('click', removeColumn);
removeRow.addEventListener('click', removeRows);
table.addEventListener('mouseover', move);
table.addEventListener('mouseleave', hide);
removeRow.addEventListener('mouseover', makeVisible);
removeButtonColumn.addEventListener('mouseover', makeVisible);

function addRow() {
    let row = document.createElement("tr");
    let length = document.querySelector("tr").children.length;
    for (let i = 0; i < length; i++) {
        let td = document.createElement("td");
        row.appendChild(td);
    }
    table.querySelector("tbody").appendChild(row);
    console.log(table.querySelector("tbody").appendChild(row));
}
function addColumn() {
    let array = document.querySelectorAll("tr");
    let length = array.length;
    for (let i = 0; i < length; i++) {
        let elem = document.createElement("td");
        array[i].append(elem);
    }
}
function removeColumn(){
    let rows = document.querySelectorAll("tr");
    let length = rows.length;
    for (let i = 0; i < length; i++) {
        table.rows[i].cells[0].remove();
    }
    hide();
}
function removeRows() {
    table.rows[0].remove();
    hide();
}
function move(event) {
    makeVisible();
    let elem = event.target;
    if(elem.tagName === "TD"){
        let indexLeft = 0;
        //find a column
        for(let i = 0;i < elem.parentNode.children.length; i++){
            if(elem ===  elem.parentNode.children.item(i)) {
                indexLeft = i;
                break;
            }
        }
        let left = 103 + 53.8 * indexLeft;
        removeButtonColumn.style.left = left + "px";
        let indexTop = 0;
        for(let i = 0;i < elem.parentNode.parentNode.children.length; i++){
            if(elem.parentNode ===  elem.parentNode.parentNode.children.item(i)) {
                indexTop = i;
                break;
            }
        }
        let top = 103 + indexTop * 52.8;
        removeRow.style.top = top + "px";
        window.getComputedStyle(removeButtonColumn);
    }
}
function  makeVisible() {
    if(table.rows.length >=2 ) {
        removeRow.style.visibility = "visible";
    }
    if( table.rows[0].cells.length >= 2){
            removeButtonColumn.style.visibility = "visible";
    }
}
function hide() {
    removeButtonColumn.style.visibility = "hidden";
    removeRow.style.visibility = "hidden";
}
