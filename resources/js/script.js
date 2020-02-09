$(document).ready(init);

function init() {

    var uChoice;

    $('#mjs_gameStarted').hide();
    $('#mjs_start').click(showChoice);

    $(document).on(
        'click', '.ms_choice', function () {
            uChoice = $(this).attr('choice');
            console.log("user choiced:", uChoice);
        }
    );
    
    
    
    /* * * ALL FUNCTIONS * * */

    // Start game
    function showChoice() {
        $(this).slideUp(250);
        $(this).parent().slideUp(350);
        $('#mjs_gameStarted').delay(750).fadeIn(350);   
    }

}