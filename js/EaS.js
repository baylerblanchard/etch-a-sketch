const gridSize = 16;
var sliderValue;

function makeGrid(gridSize) {
    var grid = document.getElementById("grid");

    for (var i = 0; i < gridSize; i++) {
        var row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);

        for (var j = 0; j < gridSize; j++) {
            var cell = document.createElement("div");
            cell.innerHTML = '<div class="cell-16x16"></div>';
            row.appendChild(cell);
        }
    }
}

function sliderListener() {
    var slider = document.getElementById("slider");

    slider.addEventListener("change", function() {
        sliderValue = slider.value;
        console.log(sliderValue);
    });
}


makeGrid(gridSize);

sliderListener();
