 //images/icons array
//     var jewelsType={R: "https://findicons.com/files/icons/298/ukrainian_motifs/128/apple.png",
//                    G:  "https://findicons.com/files/icons/298/ukrainian_motifs/128/apple.png",
//                    B: "https://findicons.com/files/icons/343/fruits/128/grape.png",
//                    P:  "https://findicons.com/files/icons/343/fruits/128/banana.png",
//                    O: "https://findicons.com/files/icons/343/fruits/128/watermelon.png",
//                    Y: "https://findicons.com/files/icons/343/fruits/128/pineapple.png"
                    
//                   };
//                   console.log(jewelsType);

    var board = [[['R','G','G','B'], 
                  ['B','O','G','G'], 
                  ['P','O','B','P'], 
                  ['Y','B','Y','O']]];
//                   cell,
// newCell,
// direction,
// points=0, moves=0, b=0, sNum=0;
// var xLen = board[0].length;
// var yLen = board.length;

var boardRows = board.length;
var boardCols = board[0].length;
  

var table = $()
$tableelement = $("<table></table>");
$("#board").append($tableelement);
for (var i = 0; i < boardRows; i++) {
       $rowelement = $("<tr></tr>");
       $tableelement.append($rowelement);
  for (var j = 0; j < boardCols; j++) {
    $rowelement.append$($("<td>" + board[i][j] + "</td>").css("background-image", "url(img/"+board[i][j]+".png)"));

  }
}

// function generateBoard(){
//   $('#board').css('width', xLen*80+20+'px');
//   $('.row').remove();
//   for (var i = 0; i < yLen; i++) {
//     $('#board').append($('<div class="row" id="row_'+i+'">'));
//     for (var j = 0; j < xLen; j++) {
//       $('#row_'+i).append($('<div class="col" id="'+i+''+j+'">').css("background-image", "url(img/"+board[i][j]+".png)"));
//     }
//   }
// }











// var $row = $("<div />", {class: 'row'});
// var $cols = $("<div />", {class: 'cols'});

// $(document).ready(function () {
//     //add columns to the the temp row object
//     for (var i = 0; i < boardCols; i++) {
//         $row.append($cols.clone());
//     }
//     //clone the temp row object with the columns to the wrapper
//     for (var i = 0; i < boardRows; i++) {
//         $("#board").append($row.clone());
//     }
// });

  // for (var r = 0; r < rows; r++){
  //   for (var c =0; c< cols; c++) {
  //     var cell = $("<img class='jewel' id='jewel_"+r+"_"+c+"' r='"+r+"' c='"+c+"'/>");
  //     $("body").append(cell);
  //     grid[r][c].o = cell;
  //   }
  //  }