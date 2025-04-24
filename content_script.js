let id_name = "[id='ctl00_phContents_Schedule1_lblPeriod";
let id_name_copy = id_name;
let jikan = ["8:50 - 10:20", "10:30 - 12:00", "12:50 - 14:20", "14:30 - 16:00", "16:10 - 17:40"];

for (let i = 1; i <= 5; i++) {
  id_name += i + "']";
  let jigen = document.querySelector(id_name);
  
  jigen.textContent = jigen.textContent + "限: " + jikan[i - 1];

  id_name = id_name_copy
}
