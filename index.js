let button;
let random;
let signs = ["ROCK", "PAPER", "SCISSORS"];
let message;
let compChose;
let classColor;

$(".gameBtn").on("click", function () {
    button = $(this).text();
    random = Math.floor(Math.random()*3);
    compChose = signs[random];
    
    $(".winner").removeClass(classColor);

    if (button === compChose) {
        message = "I`ts a DRAW!";
        classColor = "draw";
    }
    else if (button === "ROCK" & compChose === "PAPER") {
        message = "YOU LOSE!";
        classColor = "lose";
    }
    else if (button === "ROCK" & compChose === "SCISSORS") {
        message = "YOU WIN!";
        classColor = "win";
    }
    else if (button === "PAPER" & compChose === "ROCK") {
        message = "YOU WIN!";
        classColor = "win";
    }
    else if (button === "PAPER" & compChose === "SCISSORS") {
        message = "YOU LOSE!";
        classColor = "lose";
    }
    else if (button === "SCISSORS" & compChose === "ROCK") {
        message = "YOU LOSE!";
        classColor = "lose";
    }
    else if (button === "SCISSORS" & compChose === "PAPER") {
        message = "YOU WIN!";
        classColor = "win";
    }

    $(".youChose").text(button);
    $(".compChose").text(signs[random]);

    $(".winner").text(message);
    $(".winner").addClass(classColor);

    $(".retry").on("click", function() {
        $(".youChose").text("");
        $(".compChose").text("");
        $(".winner").text("");

    })

    

});
