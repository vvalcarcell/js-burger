var calculate = document.getElementById('calculate');
var dCoupon = document.getElementById('d-coupon');
var coupon = 'SEICARO';
var discount = 0.1;

var result = 50;
document.getElementById('final-price').innerHTML = 'Your Price is € ' + result;

calculate.addEventListener('click', function () {

    var result = 50;

    var additions = document.getElementsByClassName('addition');

    for (i = 0; i < additions.length; i++) {

        if (additions[i].checked) {
            result += parseInt(additions[i].value);
        }

    }

    document.getElementById('final-price').innerHTML = 'Your Price is € ' + result;

    if (dCoupon.value === coupon) {
        var dPrice = result - (result * discount);
        document.getElementById('d-price').innerHTML = 'But only for you the special price is € ' + dPrice + '!';
    }

});

