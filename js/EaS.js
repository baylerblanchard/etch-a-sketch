function makeGrid(a) {
    var grid = document.getElementById("grid");

    for (var i = 0; i < a; i++) {
        var row = document.createElement("div");
        row.className = "cell";
        grid.appendChild(row);

        for (var j = 0; j < a; j++) {
            var cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
    }
}

makeGrid(16);