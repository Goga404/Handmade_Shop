function main() {
    $('.button').hide(); /* added a CSS property of display: none */
    $('#sale').fadeIn(2000);
    $('#kids').fadeIn(3000);
    $('#her').fadeIn(4000);
}

$(document).ready(main); /* jQuery built in function to check if the page is ready before it will run our code. 
                         * 
                         Функция main будет выполнена только после прогрузки документа*/