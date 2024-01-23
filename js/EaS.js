const gridSize = 16;

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
       console.log(slider.value);
    });
}

function gridHandler() {
    var slider = document.getElementById("sleder");
    sliderListener();

    //3 is 16x16 so should be default
    if(slider.value = 3){
        gridSize = 16;
    }else if(slider.value = 1){
        gridSize = 4;
    }else if(slider.value = 2){
        gridSize = 9;
    }else if(slider.value = 4){
        gridSize = 64;
    }else if(slider.value = 5){
        gridsize = 100;
    }

    return gridSize;
}

makeGrid(gridSize);

console.log()