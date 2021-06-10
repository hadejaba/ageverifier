//KEEP THIS COMMENTED OUT
// function timeOfDay() {
//     var hour = new Date().getHours();
//     var greeting;
//     if (hour < 18) {
//         greeting = "good day!";
//     } else {
//         greeting = "good evening!";
//     }
// }

//DO NOT KEEP COMMENTED OUT
// var hour = new Date().getHours();

// if (hour < 18) {
//     document.write("good day!" + "<br>");

// } else {
//     document.write("good evening!" + "<br>");
// };


//KEEP THIS COMMENTED OUT
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");

// ^^ is the same as :


//DO NOT KEEP COMMENTED OUT
// for (let i = 0; i < 10; i++) {
//     document.write("hello world" + "<br>")
// }


// for (i = 0; i < 10; i++) {
//     if (i === 7) {
//         break;
//     }
// }
// document.write("the number is " + i + "<br>");

// var x = 0;
// while (x < 5) {
//     console.log(x);
//     x = x + 1;
// };

// var x = 5;
// while (x < 5) {
//     console.log(x);
//     x = x + 1;
// }

// KEEP THIS COMMENTED OUT
// for (var i = 0; i < 20; i++) {
//     if (i === 0) {
//         document.write(i + ' is even' + "<br>");
//     }
//     else if (x % 2 === 0) {
//         document.write(i + ' is even' + "<br>");
//     }
//     else {
//         document.write(i + ' is odd' + "<br>");
//     }
// }

//DO NOT KEEP COMMENTED OUT
// for (var i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + ' is even' + "<br>");
//     } else {
//         document.write(i + ' is odd' + "<br>");
//     }
// };

// var money = 1500.00;
// var bills = 2500.00;

// if (money > bills) {
//     document.write("you are covered!")
// } else {
//     document.write("uh oh!" + "<br>")
// };

// if (money === bills) {
//     document.write("you are covered!")
// } else if (money > bills) {
//     document.write("you're good!")
// } else {
//     document.write("uh oh!" + "<br>")
// };


//KEEP THIS COMMENTED OUT
// if (money > bills) || (money === ) {
//     document.write("you are covered!")
// } else if (money === bills) || (money < 2000) 
// { 
//     else {
//     document.write("uh oh!" + "<br">)
// };

//DO NOT KEEP COMMENTED OUT
// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 60) {
//         return 'D';
//     } else {
//         return 'F';
//     }

// }

// document.write('your grade is ' + assignGrade(78) + "<br>");
// document.write('your grade is ' + assignGrade(92) + "<br>");
// document.write('your grade is ' + assignGrade(51) + "<br>");

var age = prompt("What is your age?");

if (age >= 18) alert('Welcome!')
else {
    alert('Sorry! Come back in a few years!')
    window.location.href = 'https://www.youtube.com/watch?v=K7l5ZeVVoCA'; //Will take you to Google.

}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}