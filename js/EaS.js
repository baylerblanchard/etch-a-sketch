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
        if(sliderValue == 1){
            clearGrid();
            makeGrid(5);
        }else if(sliderValue == 2){
            clearGrid();
            makeGrid(9);
        }else if(sliderValue == 3){
            clearGrid();
            makeGrid(16);
        }else if(sliderValue == 4){
            clearGrid();
            makeGrid(64);
        }else if(sliderValue == 5){
            clearGrid();
            makeGrid(100);
        }
    });

}

//clear button logic
function clearGrid(){
    var clearListener = document.getElementById("clear");

    clearListener.addEventListener("click", function(){
        var grid = document.getElementById("grid");
        grid.innerHTML = '';
        });
}

sliderListener();
makeGrid(gridSize);