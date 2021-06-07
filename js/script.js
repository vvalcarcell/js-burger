var calculate = document.getElementById('calculate');
var coupon = document.getElementById('d-coupon');

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

    var dCoupon = document.getElementById('d-coupon');
    if (dCoupon.value === 'SEICARO') {
        var dPrice = result - (result * 0.10);
        document.getElementById('d-price').innerHTML = 'But only for you the special price is € ' + dPrice + '!';
    }

});

