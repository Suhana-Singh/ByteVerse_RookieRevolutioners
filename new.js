window.onload = function() {
    var rows = 5;
    var columns = 5;
    var currTile;
    var otherTile;
    var turns = 0;

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.src = "./white1.jpg";
            tile.draggable = true;

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
        }
    }

    let pieces = [];
    for(let i = 1; i < rows * columns; i++) {
        pieces.push(i.toString());
    }
    pieces.reverse();

    for(let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./puzzle image/" + pieces[i] + ".gif";
        tile.draggable = true;

        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);

        document.getElementById("pieces").append(tile);
    }

    function dragStart() {
        currTile = this;
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragDrop() {
        otherTile = this;

        let currImg = currTile.src;
        let otherImg = otherTile.src;
        
        currTile.src = otherImg;
        otherTile.src = currImg;

        if(!(currTile.src.includes("white1.jpg")) ){
            turns++;
            document.getElementById("turns").innerText = turns;
        }
    }

    function dragEnd() {
        if(currTile.src.includes("white1.jpg")) {
            return;
        }
    }
}