let teamNum = 1;

$("#next").click(nextImg);
$("#prev").click(prevImg);

$("#Huni").click(function () {
  window.location.href = "Huni.html"
});

$("#Untara").click(function () {
  window.location.href = "Untara.html"
});

$("#Peanut").click(function () {
  window.location.href = "Peanut.html"
});

$("#Blank").click(function () {
  window.location.href = "Blank.html"
});

$("#Faker").click(function () {
  window.location.href = "Faker.html"
});

$("#Sky").click(function () {
  window.location.href = "Sky.html"
});

$("#Bang").click(function () {
  window.location.href = "Bang.html"
});

$("#Wolf").click(function () {
  window.location.href = "Wolf.html"
});

$("#cCarter").click(function () {
  window.location.href = "cCarter.html"
});

$("#kkOma").click(function () {
  window.location.href = "kkOma.html"
});

$("#Rapidstar").click(function () {
  window.location.href = "Rapidstar.html"
});

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
