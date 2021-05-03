"use strict";

var products = [
  {
    id: "1",
    name:"Quartz Belt Watch",
    price:"$120.00",
    category:"Accessories",
    brand:"Quartz",
    color:"black",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "img/product/product1.png"
  },
  {
    id: "2",
    name:"Women Grey dress",
    price:"$120.00",
    category:"Women",
    brand:"101",
    color:"Grey",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "img/product/r8.jpg"
  },
  {
    id: "3",
    name:"Room Flash Light",
    price:"$120.00",
    category:"Decor",
    brand:"Lights",
    color:"white",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "img/product/product3.png"
  },
  {
    id: "4",
    name:"Bird",
    price:"$120.00",
    category:"Decor",
    brand:"Lights",
    color:"white",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "img/product/decor2.jpg"
  },
  {
    id: "5",
    name:"Cushion",
    price:"$120.00",
    category:"Decor",
    brand:"@Home",
    color:"white",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "img/product/cushion.jpg"
  },
  {
    id: "6",
    name:"Grey t-shirt",
    price:"$120.00",
    category:"Men",
    brand:"Puma",
    color:"grey",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "img/product/r9.jpg"
  },
  {
    id: "7",
    name:"Stripes t-shirt",
    price:"$120.00",
    category:"Men",
    brand:"Nike",
    color:"white",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "img/product/r2.jpg"
  },
  {
    id: "8",
    name:"Red t-shirt",
    price:"$120.00",
    category:"Men",
    brand:"reebok",
    color:"red",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "img/product/r12.jpg"
  },
  {
    id: "9",
    name:"Black dress",
    price:"$120.00",
    category:"Women",
    brand:"Max",
    color:"black",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "img/product/r3.jpg"
  },
  {
    id: "10",
    name:"Blue Dress",
    price:"$120.00",
    category:"Women",
    brand:"Zara",
    color:"blue",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "img/product/r5.jpg"
  }
];

function showProducts(category) {
  let all_products="";
  let currentProducts;
  if(category && category.length) {
    currentProducts = products.filter(function(data) {
      return data.category === category;
    });
  } else {
    currentProducts = products;
  }
  for(var i = 0; i < currentProducts.length; i++) {
      let currentProduct =  JSON.stringify(currentProducts[i]).split('"').join("&quot;");
      let subproduct = [
          '<div class="col-md-6 col-lg-4">',
          '<div class="card text-center card-product">',
          '<div class="card-product__img">',
          '<img class="card-img" src="' + currentProducts[i].image + '" alt="" width=" 250px" height="270px">',
          '<ul class="card-product__imgOverlay">',
          '<li><button><i class="ti-search"></i></button></li>' + 
          `<li><button onclick="addToCart(${currentProduct})"><i class="ti-shopping-cart"></i></button></li>` +
          '<li><button><i class="ti-heart"></i></button></li>',
          '</ul>',
          '</div>',
          '<div class="card-body">',
          '<p>' + currentProducts[i].category + '</p>'+
          `<h4 class="card-product__title"><a href="single-product.html" onclick="setSingleItem(${currentProduct})">` +  currentProducts[i].name + '</a></h4>',
          '<p class="card-product__price">' + currentProducts[i].price + '</p>',
          '</div>',
          '</div>',
          '</div>'
      ].join("\n");
      all_products +=subproduct;
  }
  document.getElementById("list_products").innerHTML = all_products;
};

function redirectPage(val) {
  location.href = val + ".html";
}

function getCartCount() {
 return parseInt(sessionStorage.getItem("total") || 0);
}
function resetCart() {
  sessionStorage.setItem("total", 0);
  sessionStorage.setItem("cartItems", JSON.stringify([]));
}

function setSingleItem(sitem) {
  sessionStorage.setItem("singleItem",JSON.stringify(sitem));
}
function getSingleItem() {
  return JSON.parse(sessionStorage.getItem("singleItem"));
}

function displayCartCount() {
  let cart = document.getElementsByClassName("nav-shop__circle");
  if(cart && cart.length) {
    cart[0].innerText = sessionStorage.getItem("total");
  }
}

function addToCart(item, redirectPage) {
  //count
  let count = getCartCount();
  sessionStorage.setItem("total", count + 1);
  displayCartCount();
  var cartValue = JSON.parse(sessionStorage.getItem("cartItems")) || [];
  cartValue.push(item);
  sessionStorage.setItem("cartItems", JSON.stringify(cartValue));
  item.quantity = "1";
  if(redirectPage && redirectPage.length) {
    // setTimeout(()=>{
    window.location = redirectPage+"?from=product";
    // }, 3000);
  }
  cartEvent(item);
}

function cartEvent(item) {
  let eventName = "Add to cart";
  FM.associateVisitor(sessionStorage.getItem("email"));
  var cartValue = JSON.parse(sessionStorage.getItem("cartItems"))
  item = item || cartValue[cartValue.length -1];
  FM.trackCustomEvent(eventName, item);
  fwcrm.trackCustomEvent("Added to cart", item);
}

// function setSessionURL() {
//   var sessionField = document.querySelector("#sessionrecording");

//   function callback() {
//     FM.getCurrentSessionURL(function(status, url) {
//           sessionField.value = url;
//           console.log("### Session Recording URL #### ", url);
//     });
//   }
//   if(!FM || !FM.getCurrentSessionURL) {
//       window.setTimeout(setSessionURL, 500);
//       return;
//   }
//   callback();
//   return;
// }

function setEmail() {
  var getEmail = $("input[name='email']").val();
  var name = $("input[name='name']").val();
  sessionStorage.setItem("email", getEmail);

  var new_contact = {
    'first name': name,  //Replace with Your Name content
    'Email': getEmail,
    'sessionrecording':$( "#sessionrecording" ).val(), // Session url
    'fs_contact':true,
  };
  var identifier = getEmail //Replace with You Email
  freshsales.identify(identifier, new_contact);
  FM.identify(getEmail);
}

function displayCartItems() {
  var cartValue = JSON.parse(sessionStorage.getItem("cartItems")); 
  let cartitems = "";
  if (cartValue && cartValue.length) {
    let cartTotal = cartValue.length * 120;
    sessionStorage.setItem("cartTotal", cartTotal);
    let table = document.getElementById("cart_products");
    for(var i = 0; i < cartValue.length; i++) {
      var newRow = table.insertRow(0);
      let cartitem = [
        '<td>',
        '<div class="media">',
        '<div class="d-flex">',
        '<img src="' + cartValue[i].image +'" alt="" width="120px" height ="100px">',
        '</div>',
        '<div class="media-body">',
        '<p>' + cartValue[i].name + '</p>',
        '</div>',
        '</div>',
        '</td>',
        '<td>',
        '<h5>' + cartValue[i].price + '</h5>',
        '</td>',
        '<td>',
        '<div class="product_count">',
        '<input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty">'+
        `<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>`+ 
        `<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>`+
        '</div>',
        '</td>',
        '<td>',
        '<h5>' + cartValue[i].price + '</h5>',
        '</td>',
      ].join("\n");
      cartitems +=cartitem;
      newRow.innerHTML = cartitem;
    }
  } else {
      let newRow = table.insertRow(0);
      let emptyCart = [
        '<tr style="text-align:center;">',
        'No items in cart',
        '</tr>'
      ].join("\n");
      newRow.innerHTML = emptyCart;   
  }
  setCartTotal();
}

function setCartTotal() {
  let cartTotal = (sessionStorage.getItem("cartTotal") || 0)
  document.getElementById("cart_subtotal").innerHTML = "$" + cartTotal;
  return cartTotal;
}

function setCartTotalAmount() {
  let totalamount = parseInt(sessionStorage.getItem("cartTotal")) + 50;
  document.getElementById("cart_total_amount").innerHTML = "$" + totalamount;
  return totalamount;
}

function checkoutItems() {
  var cartValue = JSON.parse(sessionStorage.getItem("cartItems")); 
  let cartitems = "";
  let checkoutCaontainer = document.getElementById("checkout_items");
    for(var i = 0; i < cartValue.length; i++) {
      var eachItem = [
        '<li>',
        '<a href="#">' + cartValue[i].name + '<span class="middle">x 01</span> <span class="last">' + cartValue[i].price  + '</span></a></li>'
      ].join("\n");
      cartitems += eachItem;
    }
  checkoutCaontainer.innerHTML = cartitems;
  setCartTotal();
  setCartTotalAmount();
  return;
}

function confirmationFinalPage() {
  var cartValue = JSON.parse(sessionStorage.getItem("cartItems")); 
  let cartitems = "";
  if (cartValue && cartValue.length) {
    let cartTotal = cartValue.length * 120;
    sessionStorage.setItem("cartTotal", cartTotal);
    let table = document.getElementById("cart_products");
    for(var i = 0; i < cartValue.length; i++) {
      var newRow = table.insertRow(0);
      let cartitem = [
                '<td>',
                '<p>' + cartValue[i].name + '</p>',
                '</td>',
                '<td>',
                '<h5>x 01</h5>',
                '</td>',
                '<td>',
                '<p>' + cartValue[i].price + '</p>',
                '</td>'
      ].join("\n");
      cartitems +=cartitem;
      newRow.innerHTML = cartitem;
    }
  }
  setCartTotal();
  let total = setCartTotalAmount();
  let orderid = Math.random().toString().slice(2,11);
  document.getElementById("order_id").innerHTML = orderid;
  let date = new Date;
  document.getElementById("order_date").innerHTML = date.toLocaleString().split(',')[0];
  document.getElementById("order_total").innerHTML = "USD " + total;
  confirmpurchase(cartValue, orderid, date);
  
}

function confirmpurchase(cartValue , orderid, date) {
  var purchasedItems={};
  if (cartValue && cartValue.length) {
    purchasedItems.totalItems = cartValue.length;
    purchasedItems.totalAmount = "$" + ((cartValue.length * 120) + 50);
    purchasedItems.purchaseId = orderid;
    purchasedItems.date = date;
    purchasedItems.products = (cartValue.map(function (el) { return el.name; })).toString();
    setTimeout(function(){
    let eventName = "Purchased Items";
    let email = sessionStorage.getItem("email");
    FM.associateVisitor(email);
    FM.trackCustomEvent(eventName, purchasedItems);
    },500);

    var transactionObject = new Object();
    transactionObject.id = "736efeda-8887-49ec-a6d1-4334282ece8d";
    transactionObject.domain  = "https://topprcrm.freshworks.com/crm/marketer/mas/api/v1/mail/transactional";
    transactionObject.authtoken = "ite368urjq57085sfjd36sq8t5r9mgr26qkhnlot";
    transactionObject.recipient = sessionStorage.getItem("email");
    var cartDetails=new Object();
    cartDetails.date=purchasedItems.date;
    cartDetails.totalItems=purchasedItems.totalItems;
    cartDetails.totalAmount=purchasedItems.totalAmount;
    cartDetails.purchaseId=purchasedItems.purchaseId;
    cartDetails.email=sessionStorage.getItem("email");
    transactionObject.tokens=cartDetails;
    $.ajax({
      url: 'https://quiet-inlet-81552.herokuapp.com/transaction',
      type: 'POST',
      data : JSON.stringify(transactionObject),
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      success: function (response) {
          console.log("Success" + response);
      },
      error: function(response) {
        console.log("Error" + response);
      }
    });
  }
  return;
}








