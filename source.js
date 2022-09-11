
const baju = [
    {
        image : 'product1.jpg',
        category : 'Baju',
        type : 'Baju merah',
        price : 'Rp.500.000'
    },
    {
        image : 'product6.jpg',
        category : 'Baju',
        type : 'Baju hitam',
        price : 'Rp.350.000'
    },
    {
        image : 'product4.jpg',
        category : 'Baju',
        type : 'Baju biru',
        price : 'Rp.200.000'
    },
];

const sepatu = [
    {
        image : 'product2.jpg',
        category : 'Sepatu',
        type : 'Sepatu hitam',
        price : 'Rp.280.000'
    },
    {
        image : 'product11.jpg',
        category : 'Sepatu',
        type : 'Sepatu silver',
        price : 'Rp.300.000'
    },
    {
        image : 'product10.jpg',
        category : 'Sepatu',
        type : 'Sepatu hitam merah',
        price : 'Rp.600.000'
    }
];

const aksesoris = [
    {
        image : 'product8.jpg',
        category : 'Aksesoris',
        type : 'Jam tangan hitam',
        price : 'Rp.2,000.000'
    },
    {
        image : 'product9.jpg',
        category : 'Aksesoris',
        type : 'Jam tangan classic',
        price : 'Rp.900.000'
    }
];

const product = baju.concat(sepatu, aksesoris);

const detailProducts = document.getElementById('detailProduct');
const carousel = document.getElementById('carousel');
const categoryProduct = document.getElementById('category-product');
const titleProduct = document.getElementById('titleProduct');

const wrapperProduct = document.getElementById('product');

product.forEach((p)=>{
    let card = `  <div class="card-list" onclick="detailProduct('${p.image}', '${p.category}', '${p.type}', '${p.price}');">
                <img src="Assets/${p.image}" alt="">
                <p class="card-list-category">${p.category}</p>
                <p class="card-list-title">${p.type}</p>
                <h5 class="card-list-price">${p.price}</h5>
                </div>`;

                wrapperProduct.insertAdjacentHTML('afterbegin', card);
})



function filter(type){


    switch(type){
        case 'all' :
            wrapperProduct.innerHTML = '';
            carousel.style.display = 'block';
            categoryProduct.style.display = 'flex';
            detailProducts.innerHTML = ''
            titleProduct.innerText = 'All Product'
            product.forEach((p)=>{
                let card = `  <div class="card-list" onclick="detailProduct('${p.image}', '${p.category}', '${p.type}', '${p.price}');">
                            <img src="Assets/${p.image}" alt="">
                            <p class="card-list-category">${p.category}</p>
                            <p class="card-list-title">${p.type}</p>
                            <h5 class="card-list-price">${p.price}</h5>
                            </div>`;
            
                            wrapperProduct.insertAdjacentHTML('afterbegin', card);
            })
            break;
        case 'baju' :
            wrapperProduct.innerHTML = '';
            detailProducts.innerHTML = ''

            baju.forEach((p)=>{
                let card = `  <div class="card-list" onclick="detailProduct('${p.image}', '${p.category}', '${p.type}', '${p.price}');">
                            <img src="Assets/${p.image}" alt="">
                            <p class="card-list-category">${p.category}</p>
                            <p class="card-list-title">${p.type}</p>
                            <h5 class="card-list-price">${p.price}</h5>
                            </div>`;
            
                            wrapperProduct.insertAdjacentHTML('afterbegin', card);
            })
            break;
        case 'sepatu' :
            wrapperProduct.innerHTML = '';
            detailProducts.innerHTML = ''

            sepatu.forEach((p)=>{
                let card = `  <div class="card-list" onclick="detailProduct('${p.image}', '${p.category}', '${p.type}', '${p.price}');">
                            <img src="Assets/${p.image}" alt="">
                            <p class="card-list-category">${p.category}</p>
                            <p class="card-list-title">${p.type}</p>
                            <h5 class="card-list-price">${p.price}</h5>
                            </div>`;
            
                            wrapperProduct.insertAdjacentHTML('afterbegin', card);
            })
            break;
        case 'aksesoris' :
            wrapperProduct.innerHTML = '';
            detailProducts.innerHTML = ''

            aksesoris.forEach((p)=>{
                let card = `  <div class="card-list" onclick="detailProduct('${p.image}', '${p.category}', '${p.type}', '${p.price}');">
                            <img src="Assets/${p.image}" alt="">
                            <p class="card-list-category">${p.category}</p>
                            <p class="card-list-title">${p.type}</p>
                            <h5 class="card-list-price">${p.price}</h5>
                            </div>`;
            
                            wrapperProduct.insertAdjacentHTML('afterbegin', card);
            });
            break;
            default :
            break;
    }

}


function chat(){
    let message = 'Halo min, saya mau nanya.....';
    let whatsApp =  `https://wa.me/62895639394873?text=${message}`;
    location.href = whatsApp;
}

function redirectToLogin(){
    alert('Anda harus login terlebih dahulu!');
    setTimeout(()=>{
            location.href = 'login.html';
    }, 500);
}

function detailProduct(image, category, title, price){
    if(wrapperProduct.classList.contains('home')){
        location.href = 'product.html';
    }
    detailProducts.innerHTML = '';
    carousel.style.display = 'none';
    categoryProduct.style.display = 'none';


    let product = `     <h1 class="title">Detail Produk </h1>
                      <div class="detail-product">
                        <div class="img-product">
                            <img src="assets/${image}" alt="">
                        </div>
                        <div class="description-product">
                            <table class="list-information-product">
                                <tr align="left">
                                    <th class="list-info">Name Product</th>
                                    <td class="list-info">: ${title}</td>
                                </tr>
                                <tr align="left">
                                    <th class="list-info">Category Product</th>
                                    <td class="list-info">: ${category}</td>
                                </tr>
                                <tr align="left">
                                    <th class="list-info">Stock</th>
                                    <td class="list-info">: infinite</td>
                                </tr>
                                <tr align="left">
                                    <th class="list-info">Price</th>
                                    <td class="list-info">: ${price}</td>
                                </tr>
                            </table>
                            <div class="form-group">
                                <button class="btn-submit" onclick="filter('all')"><span class="fa fa-arrow-left"></span> Back</button>
                                <button class="btn-submit" onclick="redirectToLogin();">Add to cart <span class="fa fa-cart-plus"></span> </button>
                            </div>
                        </div>
                    </div>`;

                location.href = "#detailProduct";
                titleProduct.innerText = 'All Similiar Product'
                let param = category.toLowerCase();
                    filter(param);
                    detailProducts.insertAdjacentHTML('afterbegin', product);


}


let counter = 1;

setInterval(()=>{
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if(counter > 4){
        counter = 1;
    }
}, 5000);