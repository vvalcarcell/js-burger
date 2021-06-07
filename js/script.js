var calculate = document.getElementById('calculate');

calculate.addEventListener('click', function () {

    var result = 0;

    var additions = document.getElementsByClassName('addition');

    for (i = 0; i < additions.length; i++) {

        if (additions[i].checked) {
            result += parseInt(additions[i].value);
        }

    }

    document.getElementById('final-price').innerHTML = 'Your Price is € ' + result;
});