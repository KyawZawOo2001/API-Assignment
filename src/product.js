let productArray;
window.onload = function () {
    productArray = JSON.parse(localStorage.getItem('products'));
    const productDiv = document.getElementById('product-container');
    productArray.forEach(product => {
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
        productDiv.appendChild(element);
    })

    const search = document.getElementById('search-bar');
    search.addEventListener('input', e => {

    })
}
