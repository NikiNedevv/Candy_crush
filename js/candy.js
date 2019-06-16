  var board =  [["P","B","P","B","P","B","P","B"], 
 ["Y","R","P","R","Y","G","G","B"], 
 ["B","P","R","O","G","P","G","O"], 
 ["O","R","P","G","Y","O","O","B"], 
 ["R","O","R","R","O","G","O","O"], 
 ["Y","B","Y","B","Y","O","Y","B"], 
 ["B","G","Y","B","Y","Y","O","P"], 
 ["P","O","O","G","G","Y","B","O"]];

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
      rowelement.append($("<td class='fruits'><img data-row='"+[i]+"' data-col='"+[j]+"' data-val='"+board[i][j]+"' src='img/"+board[i][j]+".png'>" + "</td>"));

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

  for (var i = 0; i < boardRows; i++) {   
    for (var j = 0; j < boardCols; j++) {
        if(board[i][j] == board[i][j + 1] && board[i][j] == board[i][j + 2] || board[i][j] == board[i][j - 1] && board[i][j] == board[i][j - 2]){
          isWinner = true;
        }
        if(i < (boardRows -1)){
          if(board[i][j] == board[i +1][j]){
            //if there are 2 rows down
            if((i+2) < (boardRows -1)){
              //check for 2 rows
              if(board[i][j] == board[i+2][j]){
                isWinner = true;
              }
            }else{
              //else check up
              if(board[i][j] == board[i -1][j]){
                isWinner = true;
              }
            }
          }
        }else{
          if(i > 0){
            if(board[i][j] == board[i -1][j]){
              if((i-2) > 0){
                //check 2 rows above
                if(board[i][j] == board[i-2][j]){
                  isWinner = true;
                }
              }else{
                //else 1 rows down
                if(board[i][j] == board[i +1][j]){
                  isWinner = true;
                }
              }
            }
          }
        }
    }
  }

  if(second[0] > first[0]){
    position = 'D';
  }

  if(second[0] < first[0]){
    position = 'U';
  }

  if(second[1] > first[1]){
    position = 'R';
  }

  if(second[1] < first[1]){
    position = 'L';
  }

  finishGame(isWinner,position,first);
}

function finishGame(winnning,position,first){
  console.log(first[0]+','+first[1]);
  console.log('direction = '+position)
  if(winnning){
    console.log(true);
  }else{
    console.log(false);
  }
}













