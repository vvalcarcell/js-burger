var calculate = document.getElementById('calculate');
var coupon = document.getElementById('d-coupon');

calculate.addEventListener('click', function () {

    var result = 0;

    var additions = document.getElementsByClassName('addition');

    for (i = 0; i < additions.length; i++) {

        if (additions[i].checked) {
            result += parseInt(additions[i].value);
        }

    }

    var dCoupon = document.getElementById('d-coupon');
    if (dCoupon.value === 'SEICARO') {
        var dPrice = result - (result * 0.10);
    }

    document.getElementById('final-price').innerHTML = 'Your Price is € ' + result;
    document.getElementById('d-price').innerHTML = 'But only for you the special price is € ' + dPrice + '!';

});

// coupon.addEventListener('click', function(){

// })