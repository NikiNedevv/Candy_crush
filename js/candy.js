 //images/icons array
    var jewelsType={R: "https://findicons.com/files/icons/298/ukrainian_motifs/128/apple.png",
                   G:  "https://findicons.com/files/icons/298/ukrainian_motifs/128/apple.png",
                   B: "https://findicons.com/files/icons/343/fruits/128/grape.png",
                   P:  "https://findicons.com/files/icons/343/fruits/128/banana.png",
                   O: "https://findicons.com/files/icons/343/fruits/128/watermelon.png",
                   Y: "https://findicons.com/files/icons/343/fruits/128/pineapple.png"
                    
                  };
//                   console.log(jewelsType);

    var board = [['R','G','G','B'], 
                  ['B','O','G','G'], 
                  ['P','O','B','P'], 
                  ['Y','B','Y','O']];



var boardRows = board.length;
var boardCols = board[0].length;
  

// var table = $()
$tableelement = $("<table></table>");
$("#board").append($tableelement);
for (var i = 0; i < boardRows; i++) {
       $rowelement = $("<tr></tr>");
       $tableelement.append($rowelement);
  for (var j = 0; j < boardCols; j++) {
    $rowelement.append$($("<td>" + board[i][j] + "</td>").css("background-image", "url(img/"+board[i][j]+".png)"));

  }
}













