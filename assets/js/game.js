// Global Variales ---------------------------------------------------------
$(document).ready(function () {

    //We are taking a random number between 0 and 1 and multipling it by the diffrence of (12 - 1) 
    var crys1 = Math.floor(Math.random() * (12 - 1) + 1);
    var crys2 = Math.floor(Math.random() * (12 - 1) + 1);
    var crys3 = Math.floor(Math.random() * (12 - 1) + 1);
    var crys4 = Math.floor(Math.random() * (12 - 1) + 1);
    var randNum = Math.floor(Math.random() * (120 - 19) + 19);

    // Counter    
    var win = 0;
    var loss = 0;
    var finalScore;

    // Functions ---------------------------------------------------------------

    function reset() {
        "use strict";
        // reset
        console.log("reset");
        var randNum = Math.floor(Math.random() * (120 - 19) + 19);
        console.log("randomNumber = " + randNum);
        crys1;
        crys2;
        crys3;
        crys4;

        finalScore = 0;

        //HTML
        $(".ranNumBox").html(randNum);
        $(".scoreDisplayChild").html(finalScore);
        start();
    }

    function start() {
        "use strict";
        // restart
        console.log("randomNumber = " + randNum);
        crys1;
        crys2;
        crys3;
        crys4;
        $(".scoreDisplayChild").html(0);
        finalScore = 0;

        //HTML
        $(".ranNumBox").html("<span>Match #:</span>" + "<br>" + randNum);
        $(".scoreDisplayedChild").html(finalScore);

        // Grabs value attr and puts crys1 random number
        $(".crystal1").attr("value", crys1);
        var test = $(".crystal1").attr("value");
        //Test / Debug
        console.log("crystal 1  " + test);
        console.log($(".crystal1"));

        $(".crystal2").attr("value", crys2);
        var test = $(".crystal2").attr("value");
        //Test / Debug
        console.log("crystal 2  " + test);

        $(".crystal3").attr("value", crys3);
        var test = $(".crystal3").attr("value");
        //Test / Debug
        console.log("crystal 3  " + test);

        $(".crystal4").attr("value", crys4);
        var test = $(".crystal4").attr("value");
        //Test / Debug
        console.log("crystal 4  " + test);

        // when clicked saves the Final Score
        $(".box").on("click", function () {
            var test1 = $(this).attr("value");

            // add to Final score when clicked
            finalScore = parseInt(finalScore) + parseInt(test1);
            console.log("Crystal* " + test1);
            console.log("finalScore*** " + finalScore);
            $(".scoreDisplayChild").html(finalScore);

            if (randNum === finalScore) {
                alert("win");
                win++;
                $(".winNum").html(win);
                $(".scoreDisplayChild").html(0);
                reset();

            } else if (finalScore > randNum) {
                alert("loser");
                loss++;
                $(".lossNum").html(loss);
                $(".scoreDisplayChild").html(0);
                reset();
            }
        });
    }

    // Main -----------------------------------------------------------------

    start();

});