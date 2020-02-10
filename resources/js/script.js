$(document).ready(init);
function init() {
    // All variables
    var uChoice, userScore = 0, botScore = 0;
    // Hide result column
    $('#mjs_resultOutput').hide();
    // Hide another choice button
    $('#mjs_anotherChoice').hide();
    // Hide invite to play message
    $('#mjs_gameStarted').hide();
    // Show user choice 
    $('#mjs_start').click(showChoice);
    // Get choice
    $(document).on(
        'click', '.ms_choice', function () {
            uChoice = $(this).attr('choice');
            bChoice = getBotChoice();
            choiceHighlight(uChoice, bChoice);
            result = showWinner(uChoice, bChoice);
            printResult(result);
        }
    );
    /* * * ALL FUNCTIONS * * */
    // Start game
    function showChoice() {
        $(this).slideUp(250);
        $(this).parent().slideUp(350);
        $('#mjs_gameStarted').delay(750).fadeIn(350);
    }
    // Get bot choice
    function getBotChoice() {
        var possibleChoice = ['r', 'p', 's'];
        var rand = Math.floor((Math.random() * 3));
        var res;
        switch (rand) {
            case 0:
                res = possibleChoice[0]               
                break;
            case 1:
                res = possibleChoice[1]
                break;
            case 2:
                res = possibleChoice[2]
                break;
        }   
        return res;
    }
    // Show user and bot choice
    function choiceHighlight(uChoice, bChoice) {
        $("i[choice|='" + uChoice + "']").removeClass('ms_choice');
        $("i[b-choice|='" + bChoice + "']").removeClass('mjs_botChoice');
        setTimeout(function() {
            $("i[choice|='" + uChoice + "']").addClass('ms_choice');
            $("i[b-choice|='" + bChoice + "']").addClass('mjs_botChoice');
            $('#mjs_resultOutput').fadeOut(350);
        }, 1250);
    }
    // Show the winner of the match
    function showWinner(uChoice, bChoice) {
        switch (uChoice + bChoice) {
            // User win
            case "rs":
            case "pr":
            case "sp":
                userScore++;
                $('#mjs_uPointsCounter').delay(250).fadeIn(350).append().html(userScore);
                return "User";
                break;
            // Bot win
            case "rp":
            case "ps":
            case "sr":
                botScore++;
                $('#mjs_bPointsCounter').delay(250).fadeIn(350).append().html(botScore);
                return "Bot";
                break;
            // Draws
            case "rr":
            case "pp":
            case "ss":
                return "draw";
                break;
        }        
    }
    // Print the winner in page
    function printResult(result) {
        var output;
        if (result === "draw" ? output = "It's a draw!" : output = result + " win!");
        $('#mjs_resultOutput').delay(250).fadeIn(350).append().html(output);
    }
}