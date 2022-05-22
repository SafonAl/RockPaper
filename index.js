let button;
let random;
let signs = ["ROCK", "PAPER", "SCISSORS"];
let message;
let compChose;


$(".gameBtn").on("click", function () {
    button = $(this).text();
    random = Math.floor(Math.random()*3);
    compChose = signs[random];
    if (button === compChose) {
        message = "I`ts a DRAW!";
    }
    else if (button === "ROCK" & compChose === "PAPER") {
        message = "YOU LOSE!";
    }
    else if (button === "ROCK" & compChose === "SCISSORS") {
        message = "YOU WIN!"
    }
    else if (button === "PAPER" & compChose === "ROCK") {
        message = "YOU WIN!"
    }
    else if (button === "PAPER" & compChose === "SCISSORS") {
        message = "YOU LOSE!";
    }
    else if (button === "SCISSORS" & compChose === "ROCK") {
        message = "YOU LOSE!";
    }
    else if (button === "SCISSORS" & compChose === "PAPER") {
        message = "YOU WIN!";
    }

    $(".youChose").text(button);
    $(".compChose").text(signs[random])

    $(".winner").text(message);

    $(".retry").on("click", function() {
        $(".youChose").text("         ");
        $(".compChose").text("        ");
        $(".winner").text("       ");
    })

});


function retry() {

}