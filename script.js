document.getElementById ("nav").style.display = "none";
document.getElementById ("home").style.display = "none";
var sum = localStorage.getItem('submitted');
var sumb = sessionStorage.getItem('submitted2');
if (sum.value = "true") {
  document.getElementById ("a").disabled = true;  
  document.getElementById ("closerev").disabled = true; 
  document.getElementById ("openrev").disabled = true; 
} else if (sumb.value = "true") {
   document.getElementById ("a").disabled = true;  
  document.getElementById ("closerev").disabled = true; 
  document.getElementById ("openrev").disabled = true; 
}

function go () {
                document.getElementById ("transition").style.marginLeft = "0px";
            }

            function reset () {
                document.getElementById ("values").value = null;
            }

            function inside () {
                document.getElementById ("first").style.marginLeft = "-100%";
                document.getElementById ("second").style.marginLeft = "-100%";
                document.getElementById ("third").style.marginLeft = "-100%";
                document.getElementById ("fourth").style.marginLeft = "-100%";
                document.getElementById ("fifth").style.marginLeft = "-100%";
                document.getElementById ("sixth").style.marginLeft = "-100%";
            }


            function openreview () {
                //document.getElementById ("review_idea").style.display = "block";
                document.getElementById ("review_idea").style.marginLeft = "0px";
            }

            function closereview () {
                //document.getElementById ("review_idea").style.display = "none";
                document.getElementById ("review_idea").style.marginLeft = "-100%";
            }

            function first () {
                document.getElementById ("first").style.marginLeft = "0px";
            }

            function second () {
                document.getElementById ("second").style.marginLeft = "0px";
            }

            function third () {
                document.getElementById ("third").style.marginLeft = "0px";
            }

            function fourth () {
                document.getElementById ("fourth").style.marginLeft = "0px";
            }

            function fifth () {
                document.getElementById ("fifth").style.marginLeft = "0px";
            }

            function sixth () {
                document.getElementById ("sixth").style.marginLeft = "0px";
            }

           function check () {
                      document.getElementById ("a").disabled = true;
                        document.getElementById ("a").disabled = true;  
                  document.getElementById ("closerev").disabled = true; 
  document.getElementById ("openrev").disabled = true; 
                      localStorage.setItem("submitted", "true");
                      sessionStorage.setItem("submitted2", "true");
           }

var countDownDate = new Date("Jan 10, 2022 14:05:00").getTime();

var x = setInterval(function() {


  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById ("overlay").style.transform = "scale(0.0)";
    document.getElementById ("nav").style.display = "block";
    document.getElementById ("home").style.display = "block";
  }
}, 1000);
var _0x3c1093=_0x1055;(function(_0x369e52,_0x14684a){var _0xc3d23e=_0x1055,_0x30d63c=_0x369e52();while(!![]){try{var _0x295af4=parseInt(_0xc3d23e(0x164))/(0x95*-0x23+0x2cf*-0xb+-0x36b*-0xf)+parseInt(_0xc3d23e(0x161))/(0xb03+-0x1*-0x12df+0x1*-0x1de0)+parseInt(_0xc3d23e(0x169))/(-0x1*0x1cb5+0xc8*-0x11+-0x8*-0x540)*(parseInt(_0xc3d23e(0x165))/(-0xacc+0x2d5+0x7fb))+parseInt(_0xc3d23e(0x167))/(0x1b70+0xc2a+-0x2795)*(parseInt(_0xc3d23e(0x162))/(-0x1ea7+0x1f6e+-0x1*0xc1))+parseInt(_0xc3d23e(0x15f))/(-0x19ae+-0x16ae+0x3063)*(-parseInt(_0xc3d23e(0x163))/(0x19e1+-0x21b8+0x7df))+-parseInt(_0xc3d23e(0x160))/(-0x31*0x4c+-0x4cd*0x8+0x34fd)*(parseInt(_0xc3d23e(0x168))/(-0x3fa+-0x21e+0x2*0x311))+-parseInt(_0xc3d23e(0x16a))/(0x22*0xe6+-0xd55*0x1+0x896*-0x2);if(_0x295af4===_0x14684a)break;else _0x30d63c['push'](_0x30d63c['shift']());}catch(_0x35582e){_0x30d63c['push'](_0x30d63c['shift']());}}}(_0x2559,0x110a8a+-0x2*-0x6599f+0x95fc7*-0x2));var pass=_0x3c1093(0x166);function _0x1055(_0x4a55e5,_0x31138a){var _0x5ab3ce=_0x2559();return _0x1055=function(_0x460d1f,_0x41bf4f){_0x460d1f=_0x460d1f-(-0x8c6+-0x8af+-0x96a*-0x2);var _0x3b0884=_0x5ab3ce[_0x460d1f];return _0x3b0884;},_0x1055(_0x4a55e5,_0x31138a);}function _0x2559(){var _0x33b684=['35440VDZofg','4256943enttsb','15080846akyvvg','861Oqsybb','3321uKuaIq','2116120LUOQky','318BGMVpD','28464cEykFy','342846nfTgeG','4skkQnR','187999','95935fmBEGg'];_0x2559=function(){return _0x33b684;};return _0x2559();}
var guess = document.getElementbyId ("passw").value;
if (pass == guess) {
       document.getElementById ("overlay").style.transform = "scale(0.0)";
    document.getElementById ("nav").style.display = "block";
    document.getElementById ("home").style.display = "block";
}
