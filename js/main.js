/* =========================================
   VOYAGE — MAIN JAVASCRIPT
========================================= */


/* =========================================
   PRODUCT DATABASE
========================================= */

const productDatabase = {

    1: {
        name: 'Voyage Elite 24"',
        category: "Suitcases",
        filterCategory: "Suitcases",
        price: 189,
        image: "assets/images/lagguage.png",
        gallery: [
            "assets/images/lagguage.png",
            "assets/images/lagguage1.1.png",
            "assets/images/lagguage1.2.png"
        ],
        badge: "NEW",
        description:
            "Designed for modern travelers, the Voyage Elite combines durable construction with a refined minimalist design. Built to handle every journey while keeping your essentials protected.",
        material: "Premium Polycarbonate",
        dimensions: "24 × 16 × 10 in",
        weight: "8.2 lbs",
        capacity: "65 Liters",
        sizes: ['20"', '24"', '28"']
    },

    2: {
        name: 'Voyage Classic 20"',
        category: "Suitcases",
        filterCategory: "Suitcases",
        price: 149,
        oldPrice: 179,
        image: "assets/images/lagguage2.png",
        gallery: [
            "assets/images/lagguage2.png",
            "assets/images/bag.png",
            "assets/images/bag5.png"
        ],
        badge: "SALE",
        description:
            "A compact carry-on designed for effortless short trips. Lightweight, durable and easy to move through busy airports.",
        material: "Durable Polycarbonate",
        dimensions: "20 × 14 × 9 in",
        weight: "6.4 lbs",
        capacity: "42 Liters",
        sizes: ['18"', '20"', '22"']
    },

    3: {
        name: "Voyage Urban Pack",
        category: "CARRY ON",
        filterCategory: "CARRY ON",
        price: 99,
        image: "assets/images/1.png",
        gallery: [
            "assets/images/1.png",
            "assets/images/2.png",
            "assets/images/3.png"
        ],
        badge: "",
        description:
            "A versatile everyday backpack designed for city travel, work and weekend adventures.",
        material: "Premium Fabric",
        dimensions: "18 × 12 × 7 in",
        weight: "2.1 lbs",
        capacity: "28 Liters",
        sizes: ["Standard"]
    },

    4: {
        name: "Voyage Weekender",
        category: "CARRY ON",
        filterCategory: "CARRY ON",
        price: 129,
        image: "assets/images/M.2.1.png",
        gallery: [
            "assets/images/M.2.1.png",
            "assets/images/M.2.2.png",
            "assets/images/M.2.3.png"
        ],
        badge: "BESTSELLER",
        description:
            "A refined weekender with generous space for short trips and spontaneous getaways.",
        material: "Premium Canvas",
        dimensions: "22 × 12 × 11 in",
        weight: "2.8 lbs",
        capacity: "48 Liters",
        sizes: ["Standard"]
    },

    5: {
        name: 'Voyage Grand 28"',
        category: "CARRY ON",
        filterCategory: "CARRY ON",
        price: 229,
        image: "assets/images/mens5-removebg-preview.png",
        gallery: [
            "assets/images/mens5-removebg-preview.png",
            "assets/images/mens5.1-removebg-preview.png",
            "assets/images/mens5.2-removebg-preview.png"
        ],
        badge: "",
        description:
            "Large-capacity luggage designed for extended journeys while maintaining a clean modern silhouette.",
        material: "Premium Polycarbonate",
        dimensions: "28 × 19 × 12 in",
        weight: "9.5 lbs",
        capacity: "92 Liters",
        sizes: ['24"', '28"', '30"']
    },

    6: {
        name: "Voyage Explorer",
        category: "CARRY ON",
        filterCategory: "CARRY ON",
        price: 119,
        image: "assets/images/mens8-removebg-preview.png",
        gallery: [
            "assets/images/mens8-removebg-preview.png",
            "assets/images/mens8.1-removebg-preview.png",
            "assets/images/mens8.2-removebg-preview.png"
        ],
        badge: "NEW",
        description:
            "A rugged travel backpack built for exploration, hiking and long outdoor adventures.",
        material: "Water Resistant Fabric",
        dimensions: "20 × 13 × 8 in",
        weight: "2.5 lbs",
        capacity: "35 Liters",
        sizes: ["Standard"]
    },

    7: {
        name: "Voyage Weekend",
        category: "BACKPACK",
        filterCategory: "BACKPACK",
        price: 139,
        image: "assets/images/mens10-removebg-preview.png",
        gallery: [
            "assets/images/mens10-removebg-preview.png",
            "assets/images/mens10.1-removebg-preview.png",
            "assets/images/mens10.2-removebg-preview.png"
        ],
        badge: "",
        description:
            "A spacious and stylish travel bag designed for comfortable weekend journeys.",
        material: "Premium Fabric",
        dimensions: "23 × 13 × 10 in",
        weight: "2.7 lbs",
        capacity: "50 Liters",
        sizes: ["Standard"]
    },

    8: {
        name: 'Voyage Mini 18"',
        category: "BACKPACK",
        filterCategory: "BACKPACK",
        price: 119,
        oldPrice: 149,
        image: "assets/images/mens12-removebg-preview.png",
        gallery: [
            "assets/images/mens12-removebg-preview.png",
            "assets/images/mens12.1-removebg-preview.png",
            "assets/images/mens12.2-removebg-preview.png"
        ],
        badge: "SALE",
        description:
            "A compact and lightweight suitcase designed for quick trips and effortless mobility.",
        material: "Durable Polycarbonate",
        dimensions: "18 × 13 × 8 in",
        weight: "5.8 lbs",
        capacity: "36 Liters",
        sizes: ['18"', '20"']
    },

    9: {
        name: 'Voyage Signature 26"',
        category: "Travel Bags",
        filterCategory: "Travel Bags",
        price: 209,
        image: "assets/images/bags4-removebg-preview.png",
        gallery: [
            "assets/images/bags4-removebg-preview.png",
            "assets/images/bags4.1-removebg-preview.png",
            "assets/images/bags4.2-removebg-preview.png"
        ],
        badge: "",
        description:
            "A sophisticated suitcase combining reliable protection with an elegant travel aesthetic.",
        material: "Premium Polycarbonate",
        dimensions: "26 × 18 × 11 in",
        weight: "8.8 lbs",
        capacity: "78 Liters",
        sizes: ['24"', '26"', '28"']
    },

    10: {
        name: "Voyage Metro Pack",
        category: "Travel Bags",
        filterCategory: "Travel Bags",
        price: 109,
        image: "assets/images/bags1.png",
        gallery: [
            "assets/images/bags1.png",
            "assets/images/bags1.1.png",
            "assets/images/bags1.2.png"
        ],
        badge: "NEW",
        description:
            "A sleek urban backpack made for commuting, business travel and everyday movement.",
        material: "Water Resistant Fabric",
        dimensions: "18 × 12 × 7 in",
        weight: "2.0 lbs",
        capacity: "26 Liters",
        sizes: ["Standard"]
    },

    11: {
        name: "Voyage Carry Bag",
        category: "Travel Bags",
        filterCategory: "Travel Bags",
        price: 89,
        image: "assets/images/bags5.png",
        gallery: [
            "assets/images/bags5.png",
            "assets/images/bags5.1.png",
            "assets/images/bags5.2.png"
        ],
        badge: "",
        description:
            "A lightweight carry bag offering practical storage for everyday travel and short journeys.",
        material: "Premium Fabric",
        dimensions: "20 × 11 × 9 in",
        weight: "1.8 lbs",
        capacity: "32 Liters",
        sizes: ["Standard"]
    },

    12: {
        name: 'Voyage Grand Pro 30"',
        category: "Travel Bags",
        filterCategory: "Travel Bags",
        price: 249,
        image: "assets/images/hikingbags2-removebg-preview.png",
        gallery: [
            "assets/images/hikingbags2-removebg-preview.png",
            "assets/images/hikingbags2.1-removebg-preview.png",
            "assets/images/hikingbags2.2-removebg-preview.png"
        ],
        badge: "BESTSELLER",
        description:
            "Our largest premium suitcase, designed for long journeys and travelers who need maximum capacity.",
        material: "Premium Polycarbonate",
        dimensions: "30 × 20 × 13 in",
        weight: "10.2 lbs",
        capacity: "105 Liters",
        sizes: ['28"', '30"']
    }

};

/* =========================================
   CATEGORY FILTER
========================================= */

const categoryButtons =
    document.querySelectorAll(".filter-category");

const productCards =
    document.querySelectorAll(".shop-product-card");

const productCount =
    document.getElementById("productCount");


if (categoryButtons.length && productCards.length) {

    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedCategory =
                button.textContent.trim();


            /* =========================
               ACTIVE BUTTON
            ========================= */

            categoryButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            /* =========================
               NORMALIZE CATEGORY
            ========================= */

            const normalizeCategory = (category) => {

                return category
                    .trim()
                    .toLowerCase()
                    .replace(/s$/, "");

            };


            const selected =
                normalizeCategory(selectedCategory);


            /* =========================
               FILTER PRODUCTS
            ========================= */

            let visibleProducts = 0;


            productCards.forEach(card => {

                const productCategory =
                    card.dataset.category || "";


                const product =
                    normalizeCategory(productCategory);


                const isAll =
                    selectedCategory.toLowerCase() === "all";


                const categoryMatch =
                    product === selected;


                if (isAll || categoryMatch) {

                    card.closest(".col-lg-3").style.display = "";

                    visibleProducts++;

                } else {

                    card.closest(".col-lg-3").style.display = "none";

                }

            });


            /* =========================
               UPDATE COUNT
            ========================= */

            if (productCount) {

                productCount.textContent =
                    visibleProducts;

            }

        });

    });

}


/* =========================================
   PRODUCT SORTING
========================================= */

const sortSelect =
    document.querySelector(".sort-select");

const productsGrid =
    document.querySelector(".products-grid");


if (sortSelect && productsGrid) {

    const productItems =
        Array.from(
            productsGrid.querySelectorAll(".col-lg-3")
        );


    productItems.forEach((item, index) => {
        item.dataset.originalOrder = index;
    });


    sortSelect.addEventListener("change", () => {

        const selectedSort =
            sortSelect.value;

        let sortedItems =
            [...productItems];


        if (selectedSort === "low") {

            sortedItems.sort((a, b) => {

                const priceA =
                    Number(
                        a.querySelector(
                            ".shop-product-card"
                        ).dataset.price
                    );

                const priceB =
                    Number(
                        b.querySelector(
                            ".shop-product-card"
                        ).dataset.price
                    );

                return priceA - priceB;

            });

        }


        else if (selectedSort === "high") {

            sortedItems.sort((a, b) => {

                const priceA =
                    Number(
                        a.querySelector(
                            ".shop-product-card"
                        ).dataset.price
                    );

                const priceB =
                    Number(
                        b.querySelector(
                            ".shop-product-card"
                        ).dataset.price
                    );

                return priceB - priceA;

            });

        }


        else if (selectedSort === "new") {

            sortedItems.sort((a, b) => {

                const newA =
                    a.querySelector(".shop-badge")
                        ?.textContent
                        .trim() === "NEW"
                        ? 1
                        : 0;

                const newB =
                    b.querySelector(".shop-badge")
                        ?.textContent
                        .trim() === "NEW"
                        ? 1
                        : 0;

                return newB - newA;

            });

        }


        else {

            sortedItems.sort((a, b) => {

                return (
                    Number(a.dataset.originalOrder) -
                    Number(b.dataset.originalOrder)
                );

            });

        }


        sortedItems.forEach(item => {
            productsGrid.appendChild(item);
        });

    });

}


/* =========================================
   SHOPPING CART
========================================= */

let cart =
    JSON.parse(
        localStorage.getItem("voyageCart")
    ) || [];


/* =========================================
   SAVE CART
========================================= */

function saveCart() {

    localStorage.setItem(
        "voyageCart",
        JSON.stringify(cart)
    );

}


/* =========================================
   UPDATE CART COUNT
========================================= */

function updateCartCount() {

    const cartCounters =
        document.querySelectorAll(
            ".cart-icon span"
        );


    const totalItems =
        cart.reduce(
            (total, item) =>
                total + Number(item.quantity || 0),
            0
        );


    cartCounters.forEach(counter => {

        counter.textContent =
            totalItems;

    });

}


/* =========================================
   GET PRODUCT FROM SHOP CARD
========================================= */

function getProductData(card) {

    const productId =
        card.dataset.id;

    const databaseProduct =
        productDatabase[productId];


    if (databaseProduct) {

        return {

            id: productId,

            name: databaseProduct.name,

            category: databaseProduct.category,

            price: databaseProduct.price,

            image: databaseProduct.image,

            color: "Onyx Black",

            size:
                databaseProduct.sizes?.[0] ||
                "Standard",

            quantity: 1

        };

    }


    return null;

}


/* =========================================
   ADD PRODUCT TO CART
========================================= */

function addToCart(product) {

    if (!product) return;


    const existingProduct =
        cart.find(item =>
            item.id === product.id
        );


    if (existingProduct) {

        existingProduct.quantity +=
            Number(product.quantity || 1);

    } else {

        cart.push({

            ...product,

            quantity:
                Number(product.quantity || 1)

        });

    }


    saveCart();

    updateCartCount();

    showCartNotification(
        `${product.name} added to cart`
    );

}


/* =========================================
   SHOP ADD TO CART BUTTONS
========================================= */

const addCartButtons =
    document.querySelectorAll(
        ".shop-add-cart"
    );


addCartButtons.forEach(button => {

    button.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();


            const card =
                button.closest(
                    ".shop-product-card"
                );


            if (!card) return;


            const product =
                getProductData(card);


            addToCart(product);

        }
    );

});


/* =========================================
   CART NOTIFICATION
========================================= */

function showCartNotification(message) {

    const oldNotification =
        document.querySelector(
            ".cart-notification"
        );


    if (oldNotification) {
        oldNotification.remove();
    }


    const notification =
        document.createElement("div");


    notification.className =
        "cart-notification";


    notification.innerHTML = `

        <i class="bi bi-check-circle"></i>

        <span>${message}</span>

    `;


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.classList.add("show");

    }, 10);


    setTimeout(() => {

        notification.classList.remove("show");


        setTimeout(() => {

            notification.remove();

        }, 300);

    }, 2200);

}


/* =========================================
   INITIAL CART COUNT
========================================= */

updateCartCount();


/* =========================================
   CART PAGE
========================================= */

const cartItemsContainer =
    document.getElementById("cartItems");

const emptyCart =
    document.getElementById("emptyCart");

const cartItemCount =
    document.getElementById("cartItemCount");

const summaryItemCount =
    document.getElementById("summaryItemCount");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const cartTax =
    document.getElementById("cartTax");

const cartTotal =
    document.getElementById("cartTotal");


/* =========================================
   RENDER CART
========================================= */

function renderCart() {

    if (!cartItemsContainer) {
        return;
    }


    cartItemsContainer.innerHTML = "";


    if (cart.length === 0) {

        if (emptyCart) {
            emptyCart.style.display = "block";
        }

        if (cartItemCount) {
            cartItemCount.textContent = "0 Items";
        }

        if (summaryItemCount) {
            summaryItemCount.textContent = "0 Items";
        }

        if (cartSubtotal) {
            cartSubtotal.textContent = "$0";
        }

        if (cartTax) {
            cartTax.textContent = "$0";
        }

        if (cartTotal) {
            cartTotal.textContent = "$0";
        }

        return;

    }


    if (emptyCart) {
        emptyCart.style.display = "none";
    }


    let subtotal = 0;

    let totalItems = 0;


    cart.forEach((item, index) => {

        const itemPrice =
            Number(item.price) || 0;

        const itemQuantity =
            Number(item.quantity) || 1;


        subtotal +=
            itemPrice * itemQuantity;

        totalItems +=
            itemQuantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-product-image">

                ${
                    item.image

                    ?

                    `
                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >
                    `

                    :

                    `
                    <i class="bi bi-luggage"></i>
                    `
                }

            </div>


            <div class="cart-product-info">

                <p>
                    ${item.category || ""}
                </p>

                <h3>
                    ${item.name}
                </h3>

                <span>
                    ${item.color || "Onyx Black"}
                    ·
                    ${item.size || "Standard"}
                </span>


                <button
                    class="remove-item"
                    data-index="${index}"
                >
                    Remove
                </button>

            </div>


            <div class="cart-item-actions">

                <div class="cart-quantity">

                    <button
                        class="cart-minus"
                        data-index="${index}"
                    >
                        −
                    </button>


                    <span>
                        ${itemQuantity}
                    </span>


                    <button
                        class="cart-plus"
                        data-index="${index}"
                    >
                        +
                    </button>

                </div>


                <strong>
                    $${(
                        itemPrice *
                        itemQuantity
                    ).toFixed(0)}
                </strong>

            </div>

        `;


        cartItemsContainer.appendChild(
            cartItem
        );

    });


    if (cartItemCount) {

        cartItemCount.textContent =
            `${totalItems} ${
                totalItems === 1
                    ? "Item"
                    : "Items"
            }`;

    }


    if (summaryItemCount) {

        summaryItemCount.textContent =
            `${totalItems} ${
                totalItems === 1
                    ? "Item"
                    : "Items"
            }`;

    }


    if (cartSubtotal) {

        cartSubtotal.textContent =
            `$${subtotal.toFixed(0)}`;

    }


    const tax =
        subtotal * 0.05;


    if (cartTax) {

        cartTax.textContent =
            `$${tax.toFixed(0)}`;

    }


    const total =
        subtotal + tax;


    if (cartTotal) {

        cartTotal.textContent =
            `$${total.toFixed(0)}`;

    }


    attachCartEvents();

}


/* =========================================
   CART EVENTS
========================================= */

function attachCartEvents() {


    document
        .querySelectorAll(".cart-plus")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );


                    if (!cart[index]) return;


                    cart[index].quantity =
                        Number(
                            cart[index].quantity
                        ) + 1;


                    saveCart();

                    updateCartCount();

                    renderCart();

                }
            );

        });


    document
        .querySelectorAll(".cart-minus")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );


                    if (!cart[index]) return;


                    if (
                        Number(
                            cart[index].quantity
                        ) > 1
                    ) {

                        cart[index].quantity--;

                    } else {

                        cart.splice(index, 1);

                    }


                    saveCart();

                    updateCartCount();

                    renderCart();

                }
            );

        });


    document
        .querySelectorAll(".remove-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );


                    cart.splice(index, 1);


                    saveCart();

                    updateCartCount();

                    renderCart();

                }
            );

        });

}


/* =========================================
   INITIAL CART RENDER
========================================= */

renderCart();


/* =========================================
   PRODUCT DETAILS PAGE
========================================= */

const detailsPage =
    document.querySelector(".details-page");


if (detailsPage) {

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const productId =
        urlParams.get("id") || "1";


    const product =
        productDatabase[productId];


    if (!product) {

        window.location.href =
            "products.html";

    } else {


        /* =================================
           BASIC PRODUCT INFORMATION
        ================================= */


        const detailsName =
            document.getElementById(
                "detailsName"
            );


        const detailsCategory =
            document.getElementById(
                "detailsCategory"
            );


        const detailsPrice =
            document.getElementById(
                "detailsPrice"
            );


        const detailsDescription =
            document.getElementById(
                "detailsDescription"
            );


        const detailsMainImage =
            document.getElementById(
                "detailsMainImage"
            );


        const detailsBadge =
            document.getElementById(
                "detailsBadge"
            );


        const detailsBreadcrumb =
            document.getElementById(
                "detailsBreadcrumb"
            );


        /* =================================
           NAME
        ================================= */

        if (detailsName) {

            detailsName.textContent =
                product.name;

        }


        /* =================================
           CATEGORY
        ================================= */

        if (detailsCategory) {

            detailsCategory.textContent =
                product.category;

        }


        /* =================================
           PRICE
        ================================= */

        if (detailsPrice) {

            detailsPrice.innerHTML =
                `$${product.price}`;


            if (product.oldPrice) {

                detailsPrice.innerHTML +=
                    ` <del>$${product.oldPrice}</del>`;

            }

        }


        /* =================================
           DESCRIPTION
        ================================= */

        if (detailsDescription) {

            detailsDescription.textContent =
                product.description;

        }


        /* =================================
           MAIN IMAGE
        ================================= */

        if (detailsMainImage) {

            detailsMainImage.src =
                product.image;

            detailsMainImage.alt =
                product.name;

        }


        /* =================================
           BADGE
        ================================= */

        if (detailsBadge) {

            if (product.badge) {

                detailsBadge.textContent =
                    product.badge;

                detailsBadge.style.display =
                    "block";

            } else {

                detailsBadge.style.display =
                    "none";

            }

        }


        /* =================================
           BREADCRUMB
        ================================= */

        if (detailsBreadcrumb) {

            detailsBreadcrumb.textContent =
                product.name;

        }


        /* =================================
           PAGE TITLE
        ================================= */

        document.title =
            `${product.name} — Voyage`;


        /* =================================
           PRODUCT MATERIAL
        ================================= */

        const detailsMaterial =
            document.getElementById(
                "detailsMaterial"
            );


        if (detailsMaterial) {

            detailsMaterial.textContent =
                product.material;

        }


        /* =================================
           DIMENSIONS
        ================================= */

        const detailsDimensions =
            document.getElementById(
                "detailsDimensions"
            );


        if (detailsDimensions) {

            detailsDimensions.textContent =
                product.dimensions;

        }


        /* =================================
           WEIGHT
        ================================= */

        const detailsWeight =
            document.getElementById(
                "detailsWeight"
            );


        if (detailsWeight) {

            detailsWeight.textContent =
                product.weight;

        }


        /* =================================
           CAPACITY
        ================================= */

        const detailsCapacity =
            document.getElementById(
                "detailsCapacity"
            );


        if (detailsCapacity) {

            detailsCapacity.textContent =
                product.capacity;

        }


        /* =================================
           PRODUCT GALLERY
        ================================= */

        const thumbnailsContainer =
            document.getElementById(
                "productThumbnails"
            );


        if (
            thumbnailsContainer &&
            detailsMainImage
        ) {

            thumbnailsContainer.innerHTML =
                "";


            product.gallery.forEach(
                (image, index) => {

                    const thumbnail =
                        document.createElement(
                            "button"
                        );


                    thumbnail.type =
                        "button";


                    thumbnail.className =
                        "thumbnail";


                    if (index === 0) {

                        thumbnail.classList.add(
                            "active"
                        );

                    }


                    thumbnail.dataset.image =
                        image;


                    thumbnail.innerHTML = `

                        <img
                            src="${image}"
                            alt="${product.name}"
                        >

                    `;


                    thumbnail.addEventListener(
                        "click",
                        () => {

                            detailsMainImage.src =
                                image;


                            document
                                .querySelectorAll(
                                    "#productThumbnails .thumbnail"
                                )
                                .forEach(item => {

                                    item.classList
                                        .remove(
                                            "active"
                                        );

                                });


                            thumbnail.classList.add(
                                "active"
                            );

                        }
                    );


                    thumbnailsContainer
                        .appendChild(
                            thumbnail
                        );

                }
            );

        }


        /* =================================
           SIZE OPTIONS
        ================================= */

        const sizeOptions =
            document.getElementById(
                "sizeOptions"
            );


        const selectedSize =
            document.getElementById(
                "selectedSize"
            );


        if (sizeOptions) {

            sizeOptions.innerHTML =
                "";


            product.sizes.forEach(
                (size, index) => {

                    const button =
                        document.createElement(
                            "button"
                        );


                    button.type =
                        "button";


                    button.className =
                        "size-option";


                    button.textContent =
                        size;


                    button.dataset.size =
                        size;


                    if (index === 0) {

                        button.classList.add(
                            "active"
                        );

                        if (selectedSize) {

                            selectedSize.textContent =
                                size;

                        }

                    }


                    button.addEventListener(
                        "click",
                        () => {

                            document
                                .querySelectorAll(
                                    ".size-option"
                                )
                                .forEach(
                                    item => {

                                        item.classList
                                            .remove(
                                                "active"
                                            );

                                    }
                                );


                            button.classList.add(
                                "active"
                            );


                            if (selectedSize) {

                                selectedSize.textContent =
                                    size;

                            }

                        }
                    );


                    sizeOptions.appendChild(
                        button
                    );

                }
            );

        }


        /* =================================
           COLOR OPTIONS
        ================================= */

        const colorButtons =
            document.querySelectorAll(
                ".color-option"
            );


        const selectedColor =
            document.getElementById(
                "selectedColor"
            );


        colorButtons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    colorButtons.forEach(
                        item => {

                            item.classList
                                .remove(
                                    "active"
                                );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    if (selectedColor) {

                        selectedColor.textContent =
                            button.dataset.color ||
                            "Onyx Black";

                    }

                }
            );

        });


        /* =================================
           PRODUCT QUANTITY
        ================================= */

        const detailsQuantity =
            document.getElementById(
                "detailsQuantity"
            );


        const detailsPlus =
            document.getElementById(
                "detailsPlus"
            );


        const detailsMinus =
            document.getElementById(
                "detailsMinus"
            );


        let quantity = 1;


        if (detailsPlus) {

            detailsPlus.addEventListener(
                "click",
                () => {

                    quantity++;


                    if (detailsQuantity) {

                        detailsQuantity.textContent =
                            quantity;

                    }

                }
            );

        }


        if (detailsMinus) {

            detailsMinus.addEventListener(
                "click",
                () => {

                    if (quantity > 1) {

                        quantity--;

                    }


                    if (detailsQuantity) {

                        detailsQuantity.textContent =
                            quantity;

                    }

                }
            );

        }


        /* =================================
           ADD TO CART FROM DETAILS
        ================================= */

        const detailsAddButton =
            document.getElementById(
                "detailsAddToCart"
            );


        if (detailsAddButton) {

            detailsAddButton.addEventListener(
                "click",
                () => {

                    const activeColor =
                        document.querySelector(
                            ".color-option.active"
                        );


                    const activeSize =
                        document.querySelector(
                            ".size-option.active"
                        );


                    const color =
                        activeColor?.dataset.color ||
                        "Onyx Black";


                    const size =
                        activeSize?.dataset.size ||
                        product.sizes?.[0] ||
                        "Standard";


                    const cartProduct = {

                        id:
                            `${productId}-${color}-${size}`,

                        productId:
                            productId,

                        name:
                            product.name,

                        category:
                            product.category,

                        price:
                            product.price,

                        image:
                            product.image,

                        color:
                            color,

                        size:
                            size,

                        quantity:
                            quantity

                    };


                    const existingProduct =
                        cart.find(
                            item =>
                                item.id ===
                                cartProduct.id
                        );


                    if (existingProduct) {

                        existingProduct.quantity +=
                            quantity;

                    } else {

                        cart.push(
                            cartProduct
                        );

                    }


                    saveCart();

                    updateCartCount();


                    showCartNotification(
                        `${product.name} added to cart`
                    );

                }
            );

        }


        /* =================================
           BUY NOW
        ================================= */

        const buyNowButton =
            document.getElementById(
                "buyNowBtn"
            );


        if (buyNowButton) {

            buyNowButton.addEventListener(
                "click",
                () => {

                    const activeColor =
                        document.querySelector(
                            ".color-option.active"
                        );


                    const activeSize =
                        document.querySelector(
                            ".size-option.active"
                        );


                    const color =
                        activeColor?.dataset.color ||
                        "Onyx Black";


                    const size =
                        activeSize?.dataset.size ||
                        product.sizes?.[0] ||
                        "Standard";


                    const buyProduct = {

                        id:
                            `${productId}-${color}-${size}`,

                        productId:
                            productId,

                        name:
                            product.name,

                        category:
                            product.category,

                        price:
                            product.price,

                        image:
                            product.image,

                        color:
                            color,

                        size:
                            size,

                        quantity:
                            quantity

                    };


                    const existingProduct =
                        cart.find(
                            item =>
                                item.id ===
                                buyProduct.id
                        );


                    if (existingProduct) {

                        existingProduct.quantity +=
                            quantity;

                    } else {

                        cart.push(
                            buyProduct
                        );

                    }


                    saveCart();

                    updateCartCount();


                    window.location.href =
                        "cart.html";

                }
            );

        }

    }

}


/* =========================================
   WISHLIST BUTTON
========================================= */

const wishlistButtons =
    document.querySelectorAll(
        ".shop-wishlist, .details-wishlist"
    );


wishlistButtons.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.preventDefault();

            event.stopPropagation();


            const icon =
                button.querySelector("i");


            if (!icon) return;


            const isActive =
                icon.classList.contains(
                    "bi-heart-fill"
                );


            if (isActive) {

                icon.classList.remove(
                    "bi-heart-fill"
                );

                icon.classList.add(
                    "bi-heart"
                );

            } else {

                icon.classList.remove(
                    "bi-heart"
                );

                icon.classList.add(
                    "bi-heart-fill"
                );

            }

        }
    );

});
/* =========================================
   SHOP PRODUCT SEARCH
========================================= */

const productSearch =
    document.getElementById("productSearch");

const clearSearch =
    document.getElementById("clearSearch");


if (productSearch) {

    productSearch.addEventListener(
        "input",
        function () {

            const searchValue =
                this.value
                    .trim()
                    .toLowerCase();


            if (clearSearch) {

                clearSearch.classList.toggle(
                    "show",
                    searchValue.length > 0
                );

            }


            const cards =
                document.querySelectorAll(
                    ".products-grid .shop-product-card"
                );


            cards.forEach(card => {

                const productName =
                    card.querySelector(
                        ".shop-product-info h3"
                    )?.textContent
                        .trim()
                        .toLowerCase() || "";


                const productCategory =
                    card.querySelector(
                        ".shop-product-info > p"
                    )?.textContent
                        .trim()
                        .toLowerCase() || "";


                const parent =
                    card.closest(".col-lg-3");


                if (
                    productName.includes(searchValue) ||
                    productCategory.includes(searchValue)
                ) {

                    parent.style.display = "";

                } else {

                    parent.style.display = "none";

                }

            });

        }
    );

}


/* =========================================
   CLEAR SEARCH
========================================= */

if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        function () {

            productSearch.value = "";

            productSearch.dispatchEvent(
                new Event("input")
            );

            productSearch.focus();

        }
    );

}
/* =========================================
   VOYAGE — PREMIUM UI ENHANCEMENTS
========================================= */


/* =========================================
   1. NAVBAR SCROLL EFFECT
========================================= */

const mainNavbar = document.querySelector(".navbar");

function handleNavbarScroll() {

    if (!mainNavbar) return;

    if (window.scrollY > 40) {
        mainNavbar.classList.add("scrolled");
    } else {
        mainNavbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleNavbarScroll, {
    passive: true
});

handleNavbarScroll();


/* =========================================
   2. SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .category-card, .product-card, .promo-box, .newsletter-content"
);

revealElements.forEach((element, index) => {

    element.classList.add("reveal-element");

    element.style.setProperty(
        "--reveal-delay",
        `${(index % 4) * 0.08}s`
    );
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("reveal-visible");

            observer.unobserve(entry.target);
        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    }
);


document
    .querySelectorAll(".reveal-element")
    .forEach(element => {

        revealObserver.observe(element);

    });


/* =========================================
   3. HERO ENTRANCE ANIMATION
========================================= */

const heroContent = document.querySelector(".hero-content");
const heroVisual = document.querySelector(".hero-visual");

if (heroContent) {
    heroContent.classList.add("hero-animate");
}

if (heroVisual) {
    heroVisual.classList.add("hero-visual-animate");
}


/* =========================================
   4. BUTTON RIPPLE EFFECT
========================================= */

const interactiveButtons = document.querySelectorAll(
    ".btn-main, .btn-outline, .newsletter-form button, .add-cart, .wishlist"
);


interactiveButtons.forEach(button => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        ripple.className = "button-ripple";

        const rect = button.getBoundingClientRect();

        const size = Math.max(
            rect.width,
            rect.height
        );

        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;

        ripple.style.left =
            `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top =
            `${event.clientY - rect.top - size / 2}px`;

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


/* =========================================
   5. PRODUCT CARD MOUSE TILT
========================================= */

const tiltCards = document.querySelectorAll(
    ".product-card"
);


tiltCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 992) return;

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2.5;

        const rotateY =
            ((x - centerX) / centerX) * 2.5;

        card.style.transform = `
            translateY(-7px)
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================
   6. CATEGORY CARD MOUSE EFFECT
========================================= */

const categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        const icon =
            card.querySelector(".category-icon");

        if (icon) {
            icon.style.transform =
                "rotate(-5deg) scale(1.04)";
        }

    });


    card.addEventListener("mouseleave", () => {

        const icon =
            card.querySelector(".category-icon");

        if (icon) {
            icon.style.transform = "";
        }

    });

});

/* =========================================
   8. ACTIVE PRODUCT IMAGE
========================================= */

const productImages =
    document.querySelectorAll(
        ".product-placeholder img"
    );


productImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.willChange = "transform";

    });


    image.addEventListener("mouseleave", () => {

        image.style.willChange = "auto";

    });

});


/* =========================================
   9. BACK TO TOP BUTTON
========================================= */

const backToTop =
    document.createElement("button");

backToTop.className = "back-to-top";

backToTop.setAttribute(
    "aria-label",
    "Back to top"
);

backToTop.innerHTML =
    '<i class="bi bi-arrow-up"></i>';

document.body.appendChild(backToTop);


function updateBackToTop() {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================
   10. PAGE LOAD
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
/* =========================================
   VOYAGE — BRANDS PAGE ANIMATIONS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const observerOptions = {
        threshold: 0.15
    };


    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            });

        },
        observerOptions
    );


    /* =========================================
       BRAND CARDS
    ========================================= */

    document
        .querySelectorAll(".brand-card")
        .forEach(card => {

            observer.observe(card);

        });


    /* =========================================
       INTRO
    ========================================= */

    const intro =
        document.querySelector(".brands-intro-grid");

    if (intro) {
        observer.observe(intro);
    }


    /* =========================================
       SECTION HEADING
    ========================================= */

    const heading =
        document.querySelector(
            ".brands-section .section-heading"
        );

    if (heading) {
        observer.observe(heading);
    }


    /* =========================================
       PROMO
    ========================================= */

    const promo =
        document.querySelector(".brand-promo-box");

    if (promo) {
        observer.observe(promo);
    }

});