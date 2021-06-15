var calculate = document.getElementById('calculate');
var dCoupon = document.getElementById('d-coupon');
var coupon = 'SEICARO';
var discount = 0.1;

var result = 50;
document.getElementById('final-price').innerHTML = '€ ' + result;

calculate.addEventListener('click', function () {

    var result = 50;

    var additions = document.getElementsByClassName('addition');

    for (i = 0; i < additions.length; i++) {

        if (additions[i].checked) {
            result += parseInt(additions[i].value);
        }

    }

    document.getElementById('final-price').innerHTML = '€ ' + result;

    if (dCoupon.value.length > 0 && dCoupon.value === coupon) {
        document.getElementById('final-price').innerHTML = '€ ' + (result - (result * discount)).toFixed(2);
    } else if (dCoupon.value.length > 0 && dCoupon.value !== coupon) {
        alert('Attenzione! Il tuo Coupon non è valido!')
    }

});

