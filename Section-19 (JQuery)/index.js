// $(document).ready(function(){
// $("h1").css("color", "red")
// });

// $('button').css("background-color", "red")

// $('h1').addClass('big_title margin_50')
// $('h1').removeClass('big_title')
// $('h1').addClass('margin_50')

// $('button').text('Bye')

// $('button').html("<em>Hey<em>")

// console.log($('img').attr('src'));

// $('a').attr('href','https://www.bing.com')

// console.log($('h1').attr('class'))

// $('h1').click(
//     function(){
//         $('h1').css('color', 'purple')
//     }
// )

// $('button').click(
//     function(){
//         $('h1').css('color','green')
//     }
// )

// $('input').keypress(
//     function(event){
//         console.log(event.key);
//     }
// )

// $(document).keypress(
//     function(event){
//         $('h1').text(event.key)
//     }
// )

// $('h1').on('mouseover', function(){
//     $('h1').css('color', 'red')
// })

// // Adding buttons
// $('h1').before('<button>New</button>')
// $('h1').after('<button>New</button>')
// $('h1').prepend('<button>New</button>')
// $('h1').append('<button>New</button>')

// Removing all the buttons
// $('button').remove()

$('button').on('click', 
    function(){
        // $('h1').hide();
        // $('h1').show();
        // $('h1').toggle();
        // $('h1').fadeOut();
        // $('h1').fadeIn();
        // $('h1').fadeToggle();
        // $('h1').slideUp();
        // $('h1').slideDown();
        // $('h1').slideToggle();
        // $('h1').animate(
        //     {
        //         opacity: 0.5,
        //         margin: "20px",
        //         fontSize: "150px"
        //     }
        // );
        $('h1').slideUp().slideDown().animate(
            {
                opacity: 0.5,
                margin: "20px",
                fontSize: "150px"
            }
        );
    }
)