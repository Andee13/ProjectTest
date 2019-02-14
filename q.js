drawTheTable("scene");

function drawTheTable(idWrapperOfTable) {
    //const tableWrapper = document.querySelector("#"+idWrapperOfTable);
    const  tableWrapper = document.querySelector(`#${idWrapperOfTable}`);
    const table = tableWrapper.querySelector(".table");
    const addButtonColumn = tableWrapper.querySelector(".table-btn.add.addColumn");
    const addButtonRow = tableWrapper.querySelector(".table-btn.add.addRow");
    const removeButtonColumn = tableWrapper.querySelector(".table-btn.remove.removeColumn");
    const removeRow = tableWrapper.querySelector(".table-btn.remove.removeRow");
//переменне  леты

    let lastRowPosition;
    let lastColumnPosition;
    let timerId;
//functions declararion
    const hideRemoveButtonsConst = () =>{
        removeButtonColumn.style.visibility = "hidden";
        removeRow.style.visibility = "hidden";
    };
    const makeVisibleConstFunc = () => {
        if (table.firstElementChild.childElementCount >= 2) {
            removeRow.style.visibility = "visible";
        }
        if (table.firstElementChild.firstElementChild.childElementCount >= 2) {
            removeButtonColumn.style.visibility = "visible";
        }
    };
    const mouseOverTableFunc = (event) => {
        const elem = event.target;
        console.log("tagName = " + elem.tagName);
        console.log("contains = " + elem.className.includes("remove"));
        if (elem.tagName === "TD") {
            clearTimeout(timerId);
            const countRows = elem.parentElement.parentElement.children.length;
            const arrayTr = Array.from(table.firstElementChild.children);
            lastRowPosition = arrayTr.indexOf(elem.parentElement);
            removeRow.style.top = ((100 / countRows) * lastRowPosition) + "%";

            const countColumn = elem.parentElement.children.length;
            const arrayTd = Array.from(table.firstElementChild.children[lastRowPosition].children);
            lastColumnPosition = arrayTd.indexOf(elem);
            removeButtonColumn.style.left = ((100 / countColumn) * lastColumnPosition) + "%";

            makeVisibleConstFunc();

        } else if (elem.className.includes("remove")) {
            clearTimeout(timerId);
        } else if (elem.tagName === "TABLE") {
            clearTimeout(timerId);
            makeVisibleConstFunc();
        } else {
            hideRemoveButtonsConst();
        }
    };
    const addColumnFunc = () => {
        const array = document.querySelectorAll("tr");
        const length = array.length;
        for (let i = 0; i < length; i++) {
            let elem = document.createElement("td");
            array[i].append(elem);
        }
    };
    const addRowFunc = () => {
        const row = document.createElement("tr");
        const length = document.querySelector("tr").children.length;
        for (let i = 0; i < length; i++) {
            let td = document.createElement("td");
            row.appendChild(td);
        }
        table.querySelector("tbody").appendChild(row);
    };
    const removeColumnFunc = () => {
        const rows = tableWrapper.querySelectorAll("tr");
        const length = rows.length;
        for (let i = 0; i < length; i++) {
            table.rows[i].cells[lastColumnPosition].remove();
        }
        hideRemoveButtonsConst();
    };
    const removeRowFunc = () => {
        table.rows[lastRowPosition].remove();
        hideRemoveButtonsConst();
    };
    const mouseLeaveTable = ()=>{
        timerId = setTimeout(hideRemoveButtonsConst,300);
    };
    
    addButtonColumn.addEventListener('click', addColumnFunc);
    addButtonRow.addEventListener('click', addRowFunc);
    removeButtonColumn.addEventListener('click',removeColumnFunc);
    removeRow.addEventListener('click', removeRowFunc);
    tableWrapper.addEventListener('mouseover', mouseOverTableFunc);
    tableWrapper.addEventListener('mouseleave',mouseLeaveTable);
}

