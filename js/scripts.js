/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// $(document).ready(function(){
//     $('#product').click(function(){
//         $(this).load('js/shop_item.html');
//     });
// });

//https://stackoverflow.com/questions/67342639/loop-through-json-file-to-create-html-and-output-html-using-javascript-using-fe
// $(function()
// {
//     const app = document.querySelector('.products');
//     fetch('data.json')
//         .then(response => response.json())
//         .then(data => {
//             // convert the data to html
//             const chunk = data.map(item =>
//                 `<section class="py-5">
//         <div class="container px-4 px-lg-5 my-5">
//             <div class="row gx-4 gx-lg-5 align-items-center">
//                 <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
//                 <div class="col-md-6">
//                     <div class="small mb-1">${item.SKU}</div>
//                     <h1 class="display-5 fw-bolder" type ="text" name="item-name">${item.item-name}</h1>
//                     <div class="fs-5 mb-5">
//                         <span class="text-decoration-line-through" type ="text" name="discount-price">${item.discount-price}</span>
//                         <span type ="text" name="current-price">${item.current-price}</span>
//                     </div>
//                     <p class="lead" type ="text" name="item-description">${item.item-description}</p>
//                     <div class="d-flex">
//                         <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
//                         <button class="btn btn-outline-dark flex-shrink-0" type="button">
//                             <i class="bi-cart-fill me-1"></i>
//                             Add to cart
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>`
//             ).join('');
//             // create a virtual container
//             const range = document.createRange();
//             // give it a context
//             range.selectNode(app);
//             // add the html, this converts the html into a collection of elements
//             const fragment = range.createContextualFragment(chunk);
//             // append the elements to the document
//             app.appendChild(fragment);
//         });
//     });

// $.getJSON('data.json', function(data) {
//     //do stuff with your data here
//     for (let key in data) {
//         if (data.hasOwnProperty(key)) {
//             document.getElementsByName(key)[0].value = data[key];
//             //or document.getElementsById("#"+key)[0].value = data[key];
//         }
//     }
// });



// Next step:
// Read json then add products to homepage
// click a product in homepage then navigate to the product description page (shop_item.html)

// Read JSON add to homepage
$(document).ready(function() {

    $.getJSON( "data.json", function(data) {
        // console.log(data)
        var itemList = [];

        $.each(data, function(index, items) {
            itemList.push(`
                <div class='col mb-5 target' id='item_${index.toString()}'>
                    <div class='card h-100'>
                        <!-- Sale badge-->
                        <div class='badge bg-dark text-white position-absolute' style='top: 0.5rem; right: 0.5rem'>Sale</div>
                        <!-- Product image-->
                        <img id="btn" class='card-img-top' src='${items.imageUrl}' alt='...' />
                        <!-- Product details-->
                        <div class='card-body p-4'>
                            <div class='text-center'>
                                <!-- Product name-->
                                <h5 class='fw-bolder'>${items.name}</h5>
<!--                                &lt;!&ndash; Product reviews&ndash;&gt;-->
<!--                                <div class='d-flex justify-content-center small text-warning mb-2'>-->
<!--                                    <div class='bi-star-fill'></div>-->
<!--                                    <div class='bi-star-fill'></div>-->
<!--                                    <div class='bi-star-fill'></div>-->
<!--                                    <div class='bi-star-fill'></div>-->
<!--                                    <div class='bi-star-fill'></div>-->
<!--                                </div>-->
                                <!-- Product price-->
                                <span class='text-muted text-decoration-line-through'>${items.price}</span>
                                 ${items.discountPrice}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                            <div class='text-center'><a id='target' class='btn btn-outline-dark mt-auto'>Add to cart</a></div>
                        </div>
                    </div>
                </div>`);
            });
            // console.log(item + '\nnext\n')
        items = itemList.join("\n")
        $(items).appendTo("#products");

        $("#target").on( "click", function() {
            alert( "Handler for `click` called." );
        });

        $(".target").on( "click", function() {
            // var idItem = document.getAttribute('id');

            var idItem = $(this).attr('id');

            // create query string
            var vars = "id=" + idItem
            console.log(vars)
            var hr = new XMLHttpRequest()
            var url = 'show_item.php'

            hr.open("POST", url, true)
            hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
            hr.send(vars)
            console.log(hr)
        } );

    });
});


// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript

// Load item details
$(function() {
    $.getJSON( "data.json", function(data) {
        // console.log(data)
        itemList = []
        $.each(data, function(index, items) {
            itemList.push(`
                        <section class='py-5'>
                            <div class='container px-4px-lg-5my-5'>
                                <div class='row gx-4 gx-lg-5 align-items-center'>
                                    <div class='col-md-6'><img class='target' class='card-img-top mb-5 mb-md-0' src='https://dummyimage.com/600x700/dee2e6/6c757d.jpg'/></div>
                                    <div class='col-md-6'>
                                        <div class='small mb-1'>${items.SKU}</div>
                                        <h1 class='display-5fw-bolder' type='text' name='item-name' value=''></h1>
                                        <div class='fs-5mb-5'>
                                            <span class='text-decoration-line-through' type='text' name='discount-price' value=''>${items.discountPrice}</span>
                                            <span type='text' name='current-price' value=''>${items.currentPrice}</span>
                                        </div>
                                        <p class='lead'type='text'name='item-description' value=''>${items.itemDescription}</p>
                                        <div class='d-flex'>
                                            <input class='form-control text-center me-3' id='inputQuantity' type='num' value='1' style='max-width:3rem'/>
                                            <button class='btn btn-outline-dark flex-shrink-0' type='button'>
                                                <i class='bi-cart-fillme-1'></i>
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>`);
            // })
            // console.log(item + '\nnext\n')
        });

        // console.log(itemList)
        $("<div/>", {
            html: itemList.join("\n")
        }).appendTo("#products_item");

        // $("#target").on( "click", function() {
        //     alert( "Handler for `click` called." );
        // } );
    });
});