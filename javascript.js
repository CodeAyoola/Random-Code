function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = "";
  m = checkTime(m);

  if (h > 12) {
    h = h - 12;
    ampm = " PM";
  } else if (h == 12) {
    h = 12;
    ampm = " AM";
  } else if (h < 12) {
    ampm = " AM";
  } else {
    ampm = "PM";
  }

  if (h == 0) {
    h = 12;
  }

  document.getElementById("display").innerHTML = h + ":" + m + ampm;
  var t = setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

var quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. <br> - Nelson Mandela",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. <br> - Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. <br> - James Cameron",
  "Life is what happens when you're busy making other plans. <br> - John Lennon",
  "The way to get started is to quit talking and begin doing. <br> - Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking. <br> - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. <br> - Eleanor Roosevelt",
  "Life is never fair, and perhaps it is a good thing for most of us that it is not. <br> - Oscar Wilde",
  "The only impossible journey is the one you never begin. <br> - Tony Robbins",
  "In this life we cannot do great things, We can only do small things with great love. <br> - Mother Teresa",
];

//var randomNumber = Math.floor(Math.random());

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
  document.getElementById("quoteDisplay").style.color = "white";
  document.getElementById("quoteDisplay").style.fontSize = "40px";
  document.getElementById("quoteDisplay").style.marginLeft = "5px";
  document.getElementById("quoteDisplay").style.marginRight = "5px";
  document.getElementById("quoteDisplay").style.marginBottom = "10px;";
}

function startDate() {
  var d = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("date").innerHTML =
    days[d.getDay()] +
    " | " +
    [d.getMonth() + 1] +
    "/" +
    d.getDate() +
    "/" +
    d.getFullYear();
}
