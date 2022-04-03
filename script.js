var dict1 = {
  australia: 57,
  netherlands: 55,
  "the USA": 52,
  chile: 48,
  "south korea": 44,
  "the UK": 43,
  japan: 37,
  france: 36,
  spain: 34,
  canada: 33,
  "saudi arabia": 33,
  italy: 23,
  poland: 23,
  germany: 22,
  vietnam: 19,
  china: 18,
  thailand: 18,
  mexico: 17,
  russia: 16,
  turkey: 15,
  argentina: 14,
  brazil: 13,
  "south africa": 13,
  iran: 12,
  phillipines: 9,
  egypt: 9,
  indonesia: 8,
  india: 4,
  pakistan: 3,
  nigeria: 3,
};

function change() {
  var country = document.getElementById("country_select").value;
  if (country == "") return;
  var num = dict1[country];
  var rank = Object.keys(dict1).indexOf(country) + 1;
  var last = rank.charAt(rank.length - 1);
  if (last == 1) rank += "st";
  else if (last == 2) rank += "nd";
  else if (last == 3) rank += "rd";
  else last += "th";
  document.getElementById("result1").innerText =
    "With the " +
    rank +
    " highest usage in the world, the average person in " +
    country +
    " wastes " +
    num +
    "kg of single-use plastic per year.";

  var age = document.getElementById("age_input").value;
  var text =
    "The average " +
    age +
    "-year-old living in " +
    country +
    " has generated a total of " +
    num * age +
    "kg of plastic waste.";
  if (age == "") text = "";
  document.getElementById("result2").innerText = text;

  text =
    num * age +
    "kg of plastic is equal to:\n" +
    (num * age) / 0.02 +
    " plastic water bottles\n" +
    "OR " +
    (num * age) / 0.005 +
    " plastic utensils\n" +
    "OR " +
    (num * age) / 0.001 +
    " plastic plates\n";
  if (age == "") text = "";
  document.getElementById("result3").innerText = text;

  text =
    "Since you live in " +
    country +
    " you should try to use less than " +
    num / 365 +
    "kg of single-use plastic per day to lower the average.\n" +
    "WHICH IS: \n" +
    Math.floor(num / 365 / 0.02) +
    " plastic water bottles\n OR " +
    Math.floor(num / 365 / 0.005) +
    " plastic utensils\n OR " +
    Math.floor(num / 365 / 0.001) +
    " plastic plates\n";
  var goal = document.getElementById("daily-goal");
  if (goal == "") text = "";
  document.getElementById("daily-goal").innerText = text;
}

/*function trackData() {
  var date = getDate();
  var amount = document.getElementById("usage-input").value;
  var dates = localStorage.getItem("plasticDates");
  var amounts = localStorage.getItem("plasticAmounts")
  if(dates == null || amounts == null) {
    dates = [];
    amounts = [];
  }
  dates.push(date)
  amounts.push(amount);
  dates.push("2022-04-04")
  amounts.push(5);
  dates.push("2022-04-07")
  amounts.push(4);
  var canvas = document.getElementById("plastic-chart");
  var chartData = {
    labels: dates,
    datasets: [{ data: amounts }],
  };
  var chart = new Chart(canvas, {
      type: "line",
      data: chartData,
      options: {
        legend:{display:false}
      },
    });
  localStorage.setItem("plasticDates", dates);
  localStorage.detItem("plasticAmounts", amounts)
}

function getDate(yesterday) {
  var today = new Date();
  var d = String(today.getDate());
  var m = String(today.getMonth()+1);
  var y = String(today.getFullYear());
  if(yesterday(d = String(today.getDate())));
  return y + "-" + m + "-" +  d;
}*/

//FOOD WASTE
var dict2 = {
  "the USA":59,
  australia:102,
  japan:64,
  france:85,
  russia:33,
  germany:75,
  china:64,
  spain:77,
  "the UK":77,
  india:50,
};
function echange() {
  var country = document.getElementById("ecountry_select").value;
  if (country == "") return;
  var num = dict2[country];
  var rank = Object.keys(dict2).indexOf(country) + 1;
  var last = rank.charAt(rank.length - 1);
  if (last == 1) rank += "st";
  else if (last == 2) rank += "nd";
  else if (last == 3) rank += "rd";
  else last += "th";
  document.getElementById("eresult1").innerText =
    "With the " +
    rank +
    " highest usage in the world, the average person in " +
    country +
    " wastes " +
    num +
    "kg of food per year.";

  var age = document.getElementById("eage_input").value;
  var text =
    "The average " +
    age +
    "-year-old living in " +
    country +
    " has contributed a total of " +
    num * age +
    "kg.";
  if (age == "") text = "";
  document.getElementById("eresult2").innerText = text;


  text =
    "Since you live in " +
    country +
    " you should try to use less than " +
    num / 365 +
    "kg per day to lower the average.\n"
  var goal = document.getElementById("edaily-goal");
  if (goal == "") text = "";
  document.getElementById("edaily-goal").innerText = text;
}
