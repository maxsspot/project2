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
		document.title = "My IR Project";
            }


            function openreview () {
                //document.getElementById ("review_idea").style.display = "block";
                document.getElementById ("review_idea").style.marginLeft = "0px";
		document.title = "My IR Project - Review the project";
            }

            function closereview () {
                //document.getElementById ("review_idea").style.display = "none";
                document.getElementById ("review_idea").style.marginLeft = "-100%";
		document.title = "My IR Project";
            }

            function first () {
                document.getElementById ("first").style.marginLeft = "0px";
		document.title = "My IR Project - Title, Page Count, Genre";
            }

            function second () {
                document.getElementById ("second").style.marginLeft = "0px";
		document.title = "My IR Project - Characters";
            }

            function third () {
                document.getElementById ("third").style.marginLeft = "0px";
		document.title = "My IR Project - Setting";
            }

            function fourth () {
                document.getElementById ("fourth").style.marginLeft = "0px";
		document.title = "My IR Project - Plot";
            }

            function fifth () {
                document.getElementById ("fifth").style.marginLeft = "0px";
		document.title = "My IR Project - Theme";
            }

            function sixth () {
                document.getElementById ("sixth").style.marginLeft = "0px";
		document.title = "My IR Project - Review";
            }
