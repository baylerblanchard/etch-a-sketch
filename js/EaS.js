const gridSize = 16;
const defaultColor = "black";


//color picker logic
var colorPicker = document.getElementById("color");
document.addEventListener("change", function(){console.log("color changed " + colorPicker.value)});

//hover logic
function changeBackground(){
    
}

function makeGrid(gridSize) {
    var grid = document.getElementById("grid");

    if (gridSize == 1) {

        for (var i = 0; i < 5; i++) {
            var row = document.createElement("div");
            row.className = "row";
            grid.appendChild(row);

            for (var j = 0; j < 5; j++) {
                var cell = document.createElement("div");
                cell.className = "cell";
                cell.style.height = "120px"
                cell.style.width = "120px"
                //cell.innerHTML = '<div class="cell-5x5"></div>';
                row.appendChild(cell);
            }
        }
    }else if(gridSize == 2){

        for (var i = 0; i < 9; i++) {
            var row = document.createElement("div");
            row.className = "row";
            grid.appendChild(row);

            for (var j = 0; j < 9; j++) {
                var cell = document.createElement("div");
                cell.className = "cell";
                cell.style.height = "67px"
                cell.style.width = "67px"
                //cell.innerHTML = '<div class="cell-9x9"></div>';
                row.appendChild(cell);
            }
        }
    }else if(gridSize == 3 || gridSize == 16){

            for (var i = 0; i < 16; i++) {
                var row = document.createElement("div");
                row.className = "row";
                grid.appendChild(row);
    
                for (var j = 0; j < 16; j++) {
                    var cell = document.createElement("div");
                    cell.className = "cell";
                    cell.style.height = "37px"
                    cell.style.width = "37px"
                    //cell.innerHTML = '<div class="cell"></div>';
                    row.appendChild(cell);
                }
            }
        }else if(gridSize == 4){

            for (var i = 0; i < 64; i++) {
                var row = document.createElement("div");
                row.className = "row";
                grid.appendChild(row);
    
                for (var j = 0; j < 64; j++) {
                    var cell = document.createElement("div");
                    cell.className = "cell";
                    cell.style.height = "9px"
                    cell.style.width = "9px"
                    //cell.innerHTML = '<div class="cell-64x64"></div>';
                    row.appendChild(cell);
                }
            }
        }else if(gridSize == 5){

            for (var i = 0; i < 100; i++) {
                var row = document.createElement("div");
                row.className = "row";
                grid.appendChild(row);
    
                for (var j = 0; j < 100; j++) {
                    var cell = document.createElement("div");
                    cell.className = "cell";
                    cell.style.height = "6px"
                    cell.style.width = "6px"
                    //cell.innerHTML = '<div class="cell-100x100"></div>';
                    row.appendChild(cell);
                }
            }
        }

}

function sliderListener() {
    var slider = document.getElementById("slider");
    
    slider.addEventListener("change", function() {
        sliderValue = slider.value;
        clearSlider();

        if(sliderValue == 1){
            makeGrid(1);
        }else if(sliderValue == 2){
            makeGrid(2);
        }else if(sliderValue == 3){
            makeGrid(16);
        }else if(sliderValue == 4){
            makeGrid(4);
        }else if(sliderValue == 5){
            makeGrid(5);
        }
    });

}


//clear button logic
function clearGrid(){
    var clearListener = document.getElementById("clear");
    var slider = document.getElementById("slider");

    clearListener.addEventListener("click", function(){
        var grid = document.getElementById("grid");
        grid.innerHTML = '';
        makeGrid(slider.value);
        });

}

//clear logic for slider
function clearSlider(){
    var grid = document.getElementById("grid");

    grid.innerHTML = '';
}

clearGrid();
sliderListener();
makeGrid(gridSize);