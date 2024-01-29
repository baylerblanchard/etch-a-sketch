const gridSize = 16;

//color picker logic
var colorPicker = document.getElementById("color");
document.addEventListener("change", function(){console.log("color changed " + colorPicker.value)});

//random color logic
function randomColor(){
    var randButton = document.getElementById("random");
    var cells = document.getElementsByClassName("cell");

    randButton.addEventListener("click", function(){
        console.log("random clicked");
        for (var i = 0; i<cells.length; i++){
            cells[i].addEventListener("mouseover", function(){
                this.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
            });
        }
    });
}

//hover to paint cells logic
function paint(){
    var colorPicker = document.getElementById("color");

    var divs = document.getElementsByClassName("cell");

    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function(){
            this.style.backgroundColor = colorPicker.value;
        });
    }
}

//make grid logic
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
                    row.appendChild(cell);
                }
            }
        }
        paint();
}

//slider logic
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
randomColor();