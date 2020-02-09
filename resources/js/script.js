$(document).ready(init);

function init() {

    // All variables
    var uChoice;
    
    // Hide invite to play message
    $('#mjs_gameStarted').hide();
    
    // Show user choice 
    $('#mjs_start').click(showChoice);

    // Get choice
    $(document).on(
        'click', '.ms_choice', function () {
            uChoice = $(this).attr('choice');
            bChoice = getBotChoice();
            console.clear();
            console.log("user choiced:", uChoice);
            console.log("bot choiced:", bChoice);
            showChoices(uChoice, bChoice);
        }
    );

    // TODO: Disable choice
    
    
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
    function showChoices(uChoice, bChoice) {
        $("i[choice|='" + uChoice + "']").removeClass('ms_choice');
        $("i[b-choice|='" + bChoice + "']").removeClass('mjs_botChoice');
    }

}