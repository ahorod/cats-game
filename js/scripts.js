// business logic
function Board (row, col){
  this.row = row;
  this.col = col;
  this.spaces = [];
  for (var i=0; i < this.row; i++){
    for (var j=0; j< this.col; j++){
      var space = new Space(i,j);
      this.spaces.push(space);
    }
  }
}

function Space (row, col) {
  this.row = row;
  this.col = col;
  this.markedBy = 0;
}

var myBoard = new Board (3,3);
// myBoard.spaces[0].markedBy = "X";
// myBoard.spaces[8].markedBy = "O";
// console.log(myBoard);
// console.log(myBoard.spaces);

function buttonClick(buttonid){
  var cell = myBoard.spaces[buttonid];
  console.log(buttonid);
  cell.markedBy = "X"
}


//User Interface
function render(){
  for (var i=0; i < myBoard.spaces.length; i++){
    var cell = myBoard.spaces[i];
    if (cell.markedBy === "X"){
      $("#cell-"+i).html('<img src="img/kitty.png" alt="blackcat">');
    }
    else if (cell.markedBy === "O") {
      $("#cell-"+i).html('<img src="img/whitecat.png" alt="blackcat">');
    }
  }
}
$(function(){
  render();

    $("#cell-0").click(function(event){
      event.preventDefault();
      buttonClick(0);
      render();
      });
    $("#cell-1").click(function(event){
      event.preventDefault();
      buttonClick(1);
      render();
      });
    $("#cell-2").click(function(event){
      event.preventDefault();
      buttonClick(2);
      render();
      });
    $("#cell-3").click(function(event){
      event.preventDefault();
      buttonClick(3);
      render();
      });
    $("#cell-4").click(function(event){
      event.preventDefault();
      buttonClick(4);
      render();
      });
    $("#cell-5").click(function(event){
      event.preventDefault();
      buttonClick(5);
      render();
      });
    $("#cell-6").click(function(event){
      event.preventDefault();
      buttonClick(6);
      render();
      });
    $("#cell-7").click(function(event){
      event.preventDefault();
      buttonClick(7);
      render();
      });
    $("#cell-8").click(function(event){
      event.preventDefault();
      buttonClick(8);
      render();
      });

});
