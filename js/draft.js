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