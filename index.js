let mm;
let ss;
function study(x) {
  mm = x;
  ss = 0;
  


    let interval = setInterval(
      function () {
        let el = document.getElementById("timer");
        if (ss == 0 && mm == 0) {
          clearInterval(interval);
          el.innerHTML = "00.00"
          el.style.backgroundColor = "red";
        }
        else if (ss == 00) {
          mm -= 1;
          ss = 59;
          el.innerHTML = mm + ":" + ss
          document.title = mm + ":" + ss
        } else if (ss > 0) {
          ss -= 1;
          el.innerHTML = mm + ":" + ss
          document.title = mm + ":" + ss
        }

      }, 1000
    )


  
}