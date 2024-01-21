function makeGrid(a) {
    for (var i = 0; i < a; i++) {
        var row = document.createElement("div");
        row.classList.add("cell");
        document.getElementById("container").appendChild(row);
        for (var j = 0; j < a; j++) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
}

makeGrid(16);