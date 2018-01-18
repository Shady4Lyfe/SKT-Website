let imgNum = 1;

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
  $("#img" + imgNum).hide();

  imgNum++;
  if (imgNum > 5) {
    imgNum = 1;
  }

  $("#img" + imgNum).show();
}

function prevImg() {
  $("#img" + imgNum).hide();

  imgNum--;
  if (imgNum < 1) {
    imgNum = 5;
  }

  $("#img" + imgNum).show();
}
