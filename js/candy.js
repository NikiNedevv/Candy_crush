  var board =  [["R","O","Y","O","O","R","O","R","R","G"]];

 $(function(){
  drawBoard(board);
  console.log(board);
 });


function drawBoard(board){
  var tableelement,
  rowelement,
  first = null,
  second = null,
  clickCount = 0;

  var boardRows = board.length;
  var boardCols = board[0].length;
    
  tableelement = $("<table></table>");
  $("#board").html(' ');
  $("#board").append(tableelement);
  for (var i = 0; i < boardRows; i++) {
         rowelement = $("<tr></tr>");
         tableelement.append(rowelement);
    for (var j = 0; j < boardCols; j++) {
      rowelement.append($("<td class='fruits'><img data-row='"+[i]+"' data-col='"+[j]+"' data-val='"+board[i][j]+"' src='img/"+board[i][j]+".png'>" + "'</td>"));

    }
  }
  $('.fruits').on('click', function(){
    clickCount++;
    if(clickCount < 2){
      first = [$(this).find('img').attr('data-row'),$(this).find('img').attr('data-col'),$(this).find('img').attr('data-val')];
    }
    if(clickCount == 2){
      second = [$(this).find('img').attr('data-row'),$(this).find('img').attr('data-col'),$(this).find('img').attr('data-val')];
    }

    if(first == null || second == null){
      if($(this).hasClass('clicked')){
        alert('click on another');
      }else{
        $(this).addClass('clicked');
      }
    }

    if(first && second){
      change(first,second,board);
    }
  });
}

function change(first,second,board){
  board[first[0]][first[1]] = second[2];
  board[second[0]][second[1]] = first[2];

  drawBoard(board);

  var boardRows = board.length;
  var boardCols = board[0].length;
  var isWinner = false;
  var position;

  












