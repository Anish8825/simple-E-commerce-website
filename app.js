// Products

const products = [

    {
        id: 1,
        name: "Banana",
        category: "produce",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500"
    },

    {
        id: 2,
        name: "Milk",
        category: "dairy",
        price: 3.89,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500"
    },

    {
        id: 3,
        name: "Bread",
        category: "bakery",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=500"
    },

    {
        id: 4,
        name: "Ribeye Steak",
        category: "meat",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500"
    },

    {
        id: 5,
        name: "Orange Juice",
        category: "beverages",
        price: 5.29,
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500"
    },

    {
        id: 6,
        name: "Almonds",
        category: "snacks",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500"
    }

];


// Cart

let cart = [];


// Display products

function displayProducts(productList) {

    const productGrid =
        document.getElementById("productGrid");

    productGrid.innerHTML = "";

    productList.forEach(product => {

        productGrid.innerHTML += `

            <div class="product-card">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <span class="category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p class="price">
                    $${product.price.toFixed(2)}
                </p>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>

        `;

    });

}


// Add product to cart

function addToCart(id) {

    const product =
        products.find(product => product.id === id);

    cart.push(product);

    updateCart();

}


// Update cart

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `

            <div class="cart-item">

                <span>
                    ${item.name}
                </span>

                <span>
                    $${item.price.toFixed(2)}

                    <button
                        onclick="removeFromCart(${index})">
                        ✕
                    </button>
                </span>

            </div>

        `;

    });


    cartCount.innerText = cart.length;

    cartTotal.innerText = total.toFixed(2);

}


// Remove product

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// Filter products

function filterProducts(category) {

    if (category === "all") {

        displayProducts(products);

        return;

    }


    const filtered =
        products.filter(
            product => product.category === category
        );


    displayProducts(filtered);

}


// Search

document
    .getElementById("searchInput")
    .addEventListener("input", function () {

        const search =
            this.value.toLowerCase();


        const result =
            products.filter(product =>
                product.name
                    .toLowerCase()
                    .includes(search)
            );


        displayProducts(result);

    });


// Open cart

function openCart() {

    document
        .getElementById("cartBox")
        .classList.add("active");

}


// Close cart

function closeCart() {

    document
        .getElementById("cartBox")
        .classList.remove("active");

}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }


    alert(
        "Order placed successfully!"
    );


    cart = [];

    updateCart();

    closeCart();

}


// Load products when page opens

displayProducts(products);