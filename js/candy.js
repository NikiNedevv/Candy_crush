  var board = [['R','G','G','B'], 
                  ['B','O','G','G'], 
                  ['P','O','B','P'], 
                  ['Y','B','Y','O']];

 $(function(){
  drawBoard(board);
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
    change(first,second);
  });
}

function change(first,second){
  console.log(first[2]);
}













