$(document).ready(function() {

    //Default grid size is 16px by 16px 
    drawGrid(16);

    //Calls functions for changing drawing colors when their buttons are clicked
    black();
    red();
    white();
    random();
    
    //Default borders are on
    border(); $('#border').prop('checked', true);

    //Grid options
    changeGrid();
    reset();
    clear();


   //Function to draw grid 
    function drawGrid(size) {
        for (var x = 1; x <= size; x++) {
            for (var y = 1; y <= size; y++) {
                $('.grid').append($('<div class="square"></div>'));
            };
        };

        var squareSize = 650/size;

        $('.square').width(squareSize);
        $('.square').height(squareSize);

        defaultBlack();
    }

    //Default drawing color is black - once page loads, user can draw in black
    function defaultBlack() {
        $('.square').mouseenter(function() {
            $(this).css('background-color', 'black');
        });
    }

    //When "black" button is clicked, the drawing color becomes black
    function black() {
        $('#black').click(function() {
            defaultBlack();
        });
    }

    //When "red" button is clicked, the drawing color becomes red
    function red() {
        $('#red').click(function() {
            $('.square').mouseenter(function() {
                $(this).css('background-color', 'red');
            });
        });   
    }

    //When "white" button is clicked, the drawing color becomes white
    function white() {
        $('#white').click(function() {
            $('.square').mouseenter(function() {
                $(this).css('background-color', 'white');
            });
        });   
    }

    //When "random" button is clicked, the drawing color becomes random 
    function random() {
        function rainbow() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var hex = 0; hex < 6; hex++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;

        }

        $('#random').click(function() {
            $('.square').mouseenter(function() {
                $(this).css('background-color', rainbow());
            });
        });
    }

    //Change grid resolution according to user input
    function changeGrid() {
        $('#submit').click(function() {
            $('.grid').empty();
            var newSize = $('input[name="resolution"]').val();
            drawGrid(newSize);
        });
    }

    //Toggle appearance of grid border
    function border() {
        $('#border').change(function() {
            if($(this).is(':checked')) {
                $('.square').css('outline', '1px solid black');
            } 
            else {
                $('.square').css('outline', 'none');
            }
        });
    }
    
    //Reset the grid to default settings
    function reset() {
        $('#reset').click(function() {
            $('.grid').empty();
            drawGrid(16);
        });
    }

    //When the clear button is clicked, the grid is cleared
    //Removes the background color of all the squares, returning it to default
    function clear() {
        $('#clear').click(function(){
            $('.square').css('background-color', '');
        });
    }
});