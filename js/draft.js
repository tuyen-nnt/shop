$(function() {
    $.getJSON( "data.json", function(data) {
        var itemList = [];
        console.log(data)
        $.each(data, function(index, items) {
            itemList.push(`
            <section class='py-5'>
                <div class='container px-4px-lg-5my-5'> 
                    <div class='row gx-4 gx-lg-5 align-items-center'>
                        <div class='col-md-6'><img class='card-img-top mb-5 mb-md-0' src='https://dummyimage.com/600x700/dee2e6/6c757d.jpg' alt='...'/></div>
                        <div class='col-md-6'>
                            <div class='small mb-1'>` + items.SKU + `</div>
                            <h1 class='display-5fw-bolder' type='text' name='item-name' value=''></h1>
                            <div class='fs-5mb-5'>
                                <span class='text-decoration-line-through' type='text' name='discount-price' value=''>` + items.discountPrice + `</span>
                                <span type='text' name='current-price' value=''>` + items.currentPrice + `</span>
                            </div>
                            <p class='lead'type='text'name='item-description' value=''>` + items.itemDescription + `</p>
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

        console.log(itemList)
        $("<div/>", {
            html: itemList.join("\n")
        }).appendTo("#products");

    });
});


$(function() {

    $.getJSON( "data.json", function(data) {
        // console.log(data)
        var itemList = [];

        $.each(data, function(index, items) {
            itemList.push(`
                <div class='col mb-5' id="index" value= 'item_'` + index.toString() + `' >
                    <div class='card h-100'>
                        <!-- Sale badge-->
                        <div class='badge bg-dark text-white position-absolute' style='top: 0.5rem; right: 0.5rem'>Sale</div>
                        <!-- Product image-->
                        <img id="btn" class='card-img-top' src='` + items.imageUrl + `' alt='...' />
                        <!-- Product details-->
                        <div class='card-body p-4'>
                            <div class='text-center'>
                                <!-- Product name-->
                                <h5 class='fw-bolder'>` + items.name + `</h5>
<!--                                &lt;!&ndash; Product reviews&ndash;&gt;-->
<!--                                <div class='d-flex justify-content-center small text-warning mb-2'>-->
<!--                                    <div class='bi-star-fill'></div>-->
<!--                                    <div class='bi-star-fill'></div>-->
<!--                                    <div class='bi-star-fill'></div>-->
<!--                                    <div class='bi-star-fill'></div>-->
<!--                                    <div class='bi-star-fill'></div>-->
<!--                                </div>-->
                                <!-- Product price-->
                                <span class='text-muted text-decoration-line-through'>`+ items.price + `</span>
                                ` + items.discountPrice + `
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                            <div class='text-center'><a class='btn btn-outline-dark mt-auto' href='#'>Add to cart</a></div>
                        </div>
                    </div>
                </div>`);
        });
        // console.log(item + '\nnext\n')
        items = itemList.join("\n")
        $(items).appendTo("#products");
    });
});


// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript


$(document).ready(function()
{
    $('.product').click(function(){
        $(location).attr('href','shop_item.html');
        //$(this).load('shop_item.html');
    });
});

