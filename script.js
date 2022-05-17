
var words = [
  "ABOUT",
  "ABOVE",
  "AFTER",
  "AGAIN",
  "ALONE",
  "APPLE",
  "BEACH",
  "BEGIN",
  "BLACK",
  "BRING",
  "BROWN",
  "BUNNY",
  "CAMEL",
  "CANDY",
  "CARRY",
  "CHILD",
  "CLEAN",
  "CLOSE",
  "COUNT",
  "DADDY",
  "DREAM",
  "DRESS",
  "DRIVE",
  "EIGHT",
  "EVERY",
  "FIGHT",
  "FLOOR",
  "FOUND",
  "GHOST",
  "GOOSE",
  "GREAT",
  "GREEN",
  "HAPPY",
  "HEARD",
  "HEART",
  "HIPPO",
  "HORSE",
  "HOUSE",
  "INDIA",
  "JUICE",
  "KOALA",
  "LARGE",
  "LIGHT",
  "LUCKY",
  "MOMMY",
  "MONEY",
  "MOOSE",
  "MOUSE",
  "MUMMY",
  "MUSIC",
  "NEVER",
  "NURSE",
  "PANDA",
  "PAPER",
  "PARTY",
  "PIZZA",
  "PLANE",
  "PLANT",
  "PLATE",
  "PRICE",
  "PUPPY",
  "QUACK",
  "QUEEN",
  "QUIET",
  "RIGHT",
  "RIVER",
  "ROBIN",
  "ROBOT",
  "ROUND",
  "SEVEN",
  "SHEEP",
  "SKUNK",
  "SLEEP",
  "SMALL",
  "SPOON",
  "STAMP",
  "STAND",
  "STICK",
  "STORE",
  "STORY",
  "STRAY",
  "SUNNY",
  "SWEET",
  "TABLE",
  "THERE",
  "THING",
  "THREE",
  "TIGER",
  "TODAY",
  "TRAIN",
  "TRUCK",
  "TUMMY",
  "UNDER",
  "WATER",
  "WHITE",
  "WITCH",
  "WOMAN",
  "WOMEN",
  "WRITE",
  "ZEBRA",
];
`var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(value)
}`
var interval;
var timer;
function myFunction() {
  total += a;
  quantity++;
  $("#button").hide();
  var res4 = $("#previous3").html();
  $("#previous4").html("");
  $("#previous4").prepend(res4);
  var res3 = $("#previous2").html();
  $("#previous3").html("");
  $("#previous3").prepend(res3);
  var res2 = $("#previous").html();
  $("#previous2").html("");
  $("#previous2").prepend(res2);
  var res = $("#current").html();
  $("#previous").html("");
  $("#previous").prepend(res);
  clearInterval(interval)
  $("#average").text(
    "there has been an average of " + Math.round(total / quantity) + " guesses"
  );
  wordle();
}
var speed = 1000;
var letters;
var stringy;
var correct0;
var correct1;
var correct2;
var correct3;
var correct4;
var colors;
var a;
var total = 0;
var quantity = 0;
var wrdRand = Math.floor(Math.random() * words.length);
var solution = words[wrdRand];
var slider;
var wordle = function () {
  $("#current").html(
    '<h1 id = "array"></h1><br><h2 id = "fail"></h2><br><h2 id = "score"></h2><br><p id = "button"></p><br>'
  );
  letters = ["A", "B", "C", "D", "E"];
  stringy = null;
  correct0 = 1;
  correct1 = 1;
  correct2 = 1;
  correct3 = 1;
  correct4 = 1;
  colors = ["black", "black", "black", "black", "black"];
  a = 1;
  wrdRand = Math.floor(Math.random() * words.length);
  solution = words[wrdRand];

  timer = null;

  i = 0;
  timer = function (e) {
    interval = setInterval(function () {
      slider = document.getElementById("myRange");

slider.oninput = function() {
  speed = ((1/slider.value)*1000000);
}
      function generateRandomLetter() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        return alphabet[Math.floor(Math.random() * alphabet.length)];
      }
      i++;
      var time = i / 60;
      finalTime = time.toFixed(0);
      if (letters.length >= 5) {
        for (var k = 0; k < letters.length; k++) {
          if (correct0 != 1) {
            letters.splice(1, 1, correct0);
            colors[0] = "green";
          } else {
            letters.splice(1, 1, generateRandomLetter());
          }
          if (correct1 != 1) {
            letters.splice(2, 1, correct1);
            colors[1] = "green";
          } else {
            letters.splice(2, 1, generateRandomLetter());
          }
          if (correct2 != 1) {
            letters.splice(3, 1, correct2);
            colors[2] = "green";
          } else {
            letters.splice(3, 1, generateRandomLetter());
          }
          if (correct3 != 1) {
            letters.splice(4, 1, correct3);
            colors[3] = "green";
          } else {
            letters.splice(4, 1, generateRandomLetter());
          }
          if (correct4 != 1) {
            letters.splice(5, 1, correct4);
            colors[4] = "green";
          } else {
            letters.splice(5, 1, generateRandomLetter());
          }
          if (letters.length == 6) {
            letters.splice(0, 1);
          }
          stringy = letters.join("");
          $("#array").html(
            '<span id = "letter1" style="color:' +
              colors[0] +
              '; " >' +
              stringy[0] +
              '</span><span id = "letter2" style="color:' +
              colors[1] +
              '; " >' +
              stringy[1] +
              '<span><span id = "letter3" style="color:' +
              colors[2] +
              '; " >' +
              stringy[2] +
              '<span><span id = "letter4" style="color:' +
              colors[3] +
              '; " >' +
              stringy[3] +
              '<span><span id = "letter5" style="color:' +
              colors[4] +
              '; " >' +
              stringy[4] +
              "<span>"
          );
          for (var i = 0; i < stringy.length; i++) {
            if (solution[i] == stringy[i]) {
              if (i == 0) {
                correct0 = stringy[0];
              }
              if (i == 1) {
                correct1 = stringy[1];
              }
              if (i == 2) {
                correct2 = stringy[2];
              }
              if (i == 3) {
                correct3 = stringy[3];
              }
              if (i == 4) {
                correct4 = stringy[4];
              }
            }
          }
        }
        if (stringy != solution) {
          a++;
          $("#fail").prepend(
            '<span style="color:' +
              colors[0] +
              '; " >' +
              stringy[0] +
              '</span><span style="color:' +
              colors[1] +
              '; " >' +
              stringy[1] +
              '<span><span style="color:' +
              colors[2] +
              '; " >' +
              stringy[2] +
              '<span><span  style="color:' +
              colors[3] +
              '; " >' +
              stringy[3] +
              '<span><span  style="color:' +
              colors[4] +
              '; " >' +
              stringy[4] +
              "<span>" +
              "<br>"
          );
        }
        if (stringy == solution) {
          $("#score").text("completed in " + a + " guesses");
          let btn = document.createElement("button");
          btn.innerHTML = "Click Me";
          $("#button").html('<button id = \"btn\" onclick=\"myFunction()\">Click me!</button>');
        }
      }
    }, speed);
  };
  timer();
  
}
wordle();
