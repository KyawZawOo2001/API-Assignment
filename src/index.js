
let allProducts = [];
let beauty = [];
let fragrances = [];
let furniture = [];
let groceries = [];
let dataArray = {};

main();
let seeAllBtns = document.querySelectorAll('.see-all');
seeAllBtns.forEach(seeAllBtn => {
    seeAllBtn.addEventListener('click', (e) => {
        e.preventDefault();
        redirectArray(seeAllBtn.id)
    })
})
async function main(){
    allProducts = await fetchProducts();

    await newlyAdded('beauty',beauty,allProducts,);
    await newlyAdded('fragrances',fragrances,allProducts,);
    await newlyAdded('furniture',furniture,allProducts,);
    await newlyAdded('groceries',groceries,allProducts,);
    dataArray = {
        cosmetic: beauty,
        fragrances: fragrances,
        furniture: furniture,
        groceries:groceries
    }

    const cosmeticDisplay = document.getElementById('cosmetic-display');
    showNewArrivals(beauty,cosmeticDisplay,4);
    const fragranceDisplay = document.getElementById('fragrance-display');
    showNewArrivals(fragrances,fragranceDisplay,4);
    const homeDecor = document.getElementById('homeDecor-display');
    showNewArrivals(furniture,homeDecor,4);
    const grocery = document.getElementById('grocery-display');
    showNewArrivals(groceries,grocery,4);

}

async function fetchProducts (){
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
}

function newlyAdded(category, variable, allProducts){
    allProducts.forEach(product => {
        if (product.category === category){
            variable.push(product);
        }
    })
}

function showNewArrivals(productArray,div,numOfProducts){
    let latest;

        latest= productArray.slice(-numOfProducts);

    latest.reverse().forEach(product => {

        let element = document.createElement('div');
        element.classList.add('w-full','flex','flex-col','gap-y-1','custom-shadow','p-5','leading-tight','rounded-lg',
            'justify-end');
        element.innerHTML = `
        <img class="w-3/4 self-center" src="${product.thumbnail}" alt="product thumbnail">
        <p class="text-gray-500 ">${product.brand}</p>
        <p class="font-semibold">${product.title}</p>
        <p class="">Rating : ${product.rating}</p>
        <div class="flex justify-between">
            <p class="text-green-800">$${product.price}</p>
            <p class="text-red-800">Stock:${product.stock}</p>
        </div>
        <button class="text-sm p-1 border-2 transition-colors duration-200 border-transparent bg-red-500 text-white mt-2 rounded hover:bg-white
            hover:text-red-500 hover:border-red-500">Add to cart</button>
        `
        div.appendChild(element);
    })
}

function redirectArray(id){
    if (id === 'cosmetic-btn'){
        storeProductIS(beauty);
    }else if(id === 'fragrance-btn'){
        storeProductIS(fragrances);
    }else if(id === 'homeDecor-btn'){
        storeProductIS(furniture);
    }else if(id === 'grocery-btn'){
        storeProductIS(groceries);
    }

}

function storeProductIS(array){
    localStorage.setItem('products', JSON.stringify(array));
    window.location.href = './products.html';
}
