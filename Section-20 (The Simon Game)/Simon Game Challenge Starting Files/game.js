buttonColor = ["red","blue","green","yellow"];
gamePattern = []
userClickedPattern = []
level = 0
started = false


function nextSequence(){
    userClickedPattern = []
    level += 1
    $('#level-title').text('Level '+level);
    randomNumber = Math.floor((Math.random() * 4)) ;
    randomChoosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChoosenColor);

    $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColor)
}

$('.btn').click(
    function(){
        var userChoosenColour = $(this).attr('id');
        userClickedPattern.push(userChoosenColour);
        playSound(userChoosenColour)
        animatePress(userChoosenColour)
        checkAnswer(userClickedPattern.length - 1);
    }
)

function playSound(name){
    var audio = new Audio('./sounds/' + name + '.mp3')
    audio.play()
}

function animatePress(userChoosenColour){
    console.log(userChoosenColour)
    $('#'+userChoosenColour).addClass('pressed')
    setTimeout(
        function(){
            $('#'+userChoosenColour).removeClass('pressed')
        },100
    );
}

$(document).keypress(
    function(){
        if(!started){
            $('#level-title').text('Level '+level);
            nextSequence();
            started = true;
        }
    }
)

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(
                function() {
                    nextSequence();
                },1000
            );
        }
    }else{
        // If You fail
        playSound("wrong")
        $('body').addClass('game-over')
        setTimeout(
            function(){
                $('body').removeClass('game-over')
            },200
        )
        $('#level-title').text('Game Over, Press Any Key to Restart')
        startOver()
    }
}

function startOver(){
    level = 0;
    gamePattern = []
    started = false;
}