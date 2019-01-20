let table = document.getElementById("table");
let addButtonColumn = document.getElementById("addButtonColumn");
let addButtonRow = document.getElementById("addButtonRow");
//ad2.onclick = addRow;
//adding column
addButtonColumn.onclick = addColumn;
function addColumn() {
    let rows = document.getElementsByTagName("tr");
    let arr = document.getElementsByTagName("tr");
    for(let i = 0; i < arr.length; i++){
        let elem = document.createElement("td");
        arr[i].appendChild(elem);
    }
    // if( table.rows[0].cells.length >= 2){
    //     removeButtonColumn.style.visibility = "visible";
    // }
};
//adding row
addButtonRow.onclick = addRow;
function addRow() {
    var addButton2 = document.getElementById("addButton2");
    console.log(table.childNodes[1]);
    let row = document.createElement("tr");
    let n = document.getElementsByTagName("tr")[0].children.length;
    for(let i = 0; i < n; i++){
        let td = document.createElement("td");
        row.appendChild(td);
    }
    console.log(table.getElementsByTagName("tbody")[0]);
    table.getElementsByTagName("tbody")[0].appendChild(row);
    //set Visible
    // if(table.rows.length >=2 ){
    //     removeRow.style.visibility = "visible";
    // }
}


let removeButtonColumn = document.getElementById("minusButtonColumn");
removeButtonColumn.onclick = removeColumn;
function removeColumn(){

    let rows = document.getElementsByTagName("tr");
    console.log(table.getElementsByTagName("tbody"));
    for (let i = 0; i < rows.length; i++) {
        table.rows[i].cells[0].remove();
    }

    let cells = table.rows[0].cells.length;
    //console.log(cells);
    //if(cells < 2 ) {
    removeButtonColumn.style.visibility = "hidden";
    removeRow.style.visibility = "hidden";
    //}
    //removeButtonColumn.style.visibility = "hidden";
}

let removeRow = document.getElementById("minusButtonRow");
removeRow.onclick = removeRows;
function removeRows() {
    let rows = document.getElementsByTagName("tr");
    table.rows[0].remove();

   // if(rows.length < 2){
    removeButtonColumn.style.visibility = "hidden";
    removeRow.style.visibility = "hidden";
    //}
}

table.onmouseover = move;
table.onmouseleave = leave;
removeRow.onmouseover = makeVisible;
removeButtonColumn.onmouseover = makeVisible;
function move(event) {
    //target.style.marginLeft = (parseInt(window.getComputedStyle(target).marginLeft) + 54).toString()+"px";
    makeVisible();
    let elem = event.target;
    let m = window.getComputedStyle(elem);
    if(elem.tagName === "TD"){
        let indexLeft = 0;
        //find a column
        for(let i = 0;i < elem.parentNode.children.length; i++){
            if(elem ===  elem.parentNode.children.item(i)) {
               // console.log("elem = ",  i);
                indexLeft = i;
                break;
            }

        }

        let left = 53.8 * indexLeft;
        //change style via style
        //console.log("index = ", window.getComputedStyle(removeButtonColumn).left);
        removeButtonColumn.style.left = "100px";
        removeButtonColumn.style.left = ((parseInt(window.getComputedStyle(removeButtonColumn).left) + left).toString() + "px");


        //find a row
        let indexTop = 0;
        for(let i = 0;i < elem.parentNode.parentNode.children.length; i++){
            if(elem.parentNode ===  elem.parentNode.parentNode.children.item(i)) {
                console.log("elem row = ",  i);
                indexTop = i;
                break;
            }
        }
        console.log(indexTop);
        let top = indexTop * 52.8;
        removeRow.style.top = "103px";
        removeRow.style.top = ((parseInt(window.getComputedStyle(removeRow).top) + top).toString() + "px");
        //console.log(elem.parentNode.children.item());
        //console.log(elem.parentNode);

        window.getComputedStyle(removeButtonColumn);
        //console.log();


    }
    //console.log(event.target.tagName)
}
function  makeVisible() {
    if(table.rows.length >=2 ) {
        removeRow.style.visibility = "visible";
    }

    // removeRow.onclick = function () {
    //     removeRow.style.visibility = "hidden";
    // }
    if( table.rows[0].cells.length >= 2){
            removeButtonColumn.style.visibility = "visible";
    }

    // removeRow.style.visibility = "visible";
    // removeButtonColumn.style.visibility = "visible";
}

function leave (){
    removeRow.style.visibility = "hidden";
    removeButtonColumn.style.visibility = "hidden";
}