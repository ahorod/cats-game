// business logic

//
// function Space(){
//   this.markedBy = markedBy;
// // }
//
// var Space= new Space ()



var board = {row1:[0 ,0, 0],
            row2:[0, 0, 0],
            row3:[0, 0, 0]}

// board.prototype.getCoordinate = function(){
//   for (i=0; i < this.row1; i++){
//     if this.row1[i] !== 0{
//
//     }
//   }
//   return
// }

//
// var spaceMarker = function(){
//   board.row1[0] = 1
//   console.log(board.row1)
//
// }

//User Interface

$(function(){

  $("#cell1").click(function(event){
    event.preventDefault();
    $("#cell1").hide();
    $("#gray1").toggle();
  });
  $("#cell2").click(function(event){
    event.preventDefault();
    alert ("hi");
    $("#cell2").hide();
    $("#gray2").toggle();
  });
  $("#cell3").click(function(event){
    event.preventDefault();
    alert ("hi");
    $("#cell3").hide();
    $("#gray3").toggle();
  });
})
