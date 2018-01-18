let teamNum = 1;

$("#next").click(nextImg);
$("#prev").click(prevImg);

function nextImg() {
  $("#team" + teamNum).hide();

  teamNum++;
  if (teamNum > 5) {
    teamNum = 1;
  }

  $("#team" + teamNum).show();
}

function prevImg() {
  $("#team" + teamNum).hide();

  teamNum--;
  if (teamNum < 1) {
    teamNum = 5;
  }

  $("#team" + teamNum).show();
}