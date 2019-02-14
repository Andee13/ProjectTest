drawTheTable("scene");

function drawTheTable(idWrapperOfTable) {
    const tableWrapper = document.querySelector("#"+idWrapperOfTable);
    const table = tableWrapper.querySelector(".table");
    const addButtonColumn = tableWrapper.querySelector(".btn.add.addColumn");
    const addButtonRow = tableWrapper.querySelector(".btn.add.addRow");
    const removeButtonColumn = tableWrapper.querySelector(".btn.remove.removeColumn");
    const removeRow = tableWrapper.querySelector(".btn.remove.removeRow");

    let lastRowPosition;
    let lastColumnPosition;
    let timerId;

    removeRow.addEventListener('mouseover', () => {
        clearTimeout(timerId);
    });
    removeButtonColumn.addEventListener('mouseover', () =>{
        clearTimeout(timerId);
    });
    removeButtonColumn.addEventListener('mouseleave', hideRemoveButtons);
    removeRow.addEventListener('mouseleave', hideRemoveButtons);
    addButtonColumn.addEventListener('click', () => {
        const array = document.querySelectorAll("tr");
        const length = array.length;
        for (let i = 0; i < length; i++) {
            let elem = document.createElement("td");
            array[i].append(elem);
        }
    });
    addButtonRow.addEventListener('click', () => {
        const row = document.createElement("tr");
        const length = document.querySelector("tr").children.length;
        for (let i = 0; i < length; i++) {
            let td = document.createElement("td");
            row.appendChild(td);
        }
        table.querySelector("tbody").appendChild(row);
    });
    removeButtonColumn.addEventListener('click', () => {
        const rows = tableWrapper.querySelectorAll("tr");
        const length = rows.length;
        for (let i = 0; i < length; i++) {
            table.rows[i].cells[lastColumnPosition].remove();
        }
        hideRemoveButtons();
    });
    removeRow.addEventListener('click', () => {
        table.rows[lastRowPosition].remove();
        hideRemoveButtons();
    });
    table.addEventListener('mouseover', () => {
        const elem = event.target;
        if (elem.tagName === "TD") {
            const countRows = elem.parentElement.parentElement.children.length;
            const arrayTr = Array.from(table.children[0].children);
            lastRowPosition = arrayTr.indexOf(elem.parentElement);
            removeRow.style.top = ((100 / countRows) * lastRowPosition) + "%";


            const countColumn = elem.parentElement.children.length;
            const arrayTd = Array.from(table.children[0].children[lastRowPosition].children);
            lastColumnPosition = arrayTd.indexOf(elem);
            removeButtonColumn.style.left = ((100 / countColumn) * lastColumnPosition) + "%";
        }
    });
    table.addEventListener('mouseleave',()=>{
        timerId = setTimeout(hideRemoveButtons, 300);
    });
    table.addEventListener('mouseover', () => {
        if (table.rows.length >= 2) {
            removeRow.style.visibility = "visible";
        }
        if (table.rows[0].cells.length >= 2) {
            removeButtonColumn.style.visibility = "visible";
        }
    });


    function hideRemoveButtons() {
        removeButtonColumn.style.visibility = "hidden";
        removeRow.style.visibility = "hidden";
    }
}

