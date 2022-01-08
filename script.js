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
