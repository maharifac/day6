//use trict;


// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//        document.getElementById("demo").innerHTML = this.responseText;
//       }
//     };
//     xhttp.open("GET", "ajax_info.txt", true);
//     xhttp.send();
//   }


function loadLink(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200)
         {
        var obj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = obj.text_out;
        }
    }
        xhttp.open("GET", "http://www.randomtext.me/api/lorem/ul-5/5-15", true);
         xhttp.send();
}