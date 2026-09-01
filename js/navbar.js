/* =========================================
   VOYAGE — GLOBAL NAVBAR
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbarContainer =
        document.getElementById("navbar");

    if (!navbarContainer) return;


    navbarContainer.innerHTML = `

        <nav class="navbar navbar-expand-lg navbar-light fixed-top">

            <div class="container">

                <a class="navbar-brand" href="index.html">
                    VOYAGE<span>.</span>
                </a>


                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >

                    <span class="navbar-toggler-icon"></span>

                </button>


                <div
                    class="collapse navbar-collapse"
                    id="mainNavbar"
                >


                    <ul class="navbar-nav mx-auto">

                        <li class="nav-item">

                            <a
                                class="nav-link"
                                href="index.html"
                                data-page="index"
                            >
                                Home
                            </a>

                        </li>


                        <li class="nav-item">

                            <a
                                class="nav-link"
                                href="products.html"
                                data-page="products"
                            >
                                Shop
                            </a>

                        </li>


                        <li class="nav-item">

                            <a
                                class="nav-link"
                                href="brands.html"
                                data-page="brands"
                            >
                                Brands
                            </a>

                        </li>


                        <li class="nav-item">

                            <a
                                class="nav-link"
                                href="about.html"
                                data-page="about"
                            >
                                About
                            </a>

                        </li>


                        <li class="nav-item">

                            <a
                                class="nav-link"
                                href="contact.html"
                                data-page="contact"
                            >
                                Contact
                            </a>

                        </li>

                    </ul>


                    <div class="nav-actions">

                        <!-- PROFILE -->

                        <a
                            href="account.html"
                            class="nav-icon"
                            aria-label="Account"
                        >

                            <i class="bi bi-person"></i>

                        </a>


                        <!-- CART -->

                        <a
                            href="cart.html"
                            class="nav-icon cart-icon"
                            aria-label="Shopping Cart"
                        >

                            <i class="bi bi-bag"></i>

                            <span>0</span>

                        </a>


                    </div>

                </div>

            </div>

        </nav>

    `;


    /* =========================================
       ACTIVE PAGE
    ========================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .replace(".html", "");


    let activePage =
        currentPage || "index";


    if (
        activePage === "product-details" ||
        activePage === "cart"
    ) {

        activePage = "products";

    }


    document
        .querySelectorAll(".nav-link[data-page]")
        .forEach(link => {

            if (
                link.dataset.page === activePage
            ) {

                link.classList.add("active");

            }

        });


    /* =========================================
       UPDATE CART COUNT
    ========================================= */

    updateNavbarCartCount();


    function updateNavbarCartCount() {

        const cart =
            JSON.parse(
                localStorage.getItem("voyageCart")
            ) || [];


        const totalItems =
            cart.reduce(
                (total, item) =>
                    total +
                    Number(item.quantity || 0),
                0
            );


        document
            .querySelectorAll(".cart-icon span")
            .forEach(counter => {

                counter.textContent =
                    totalItems;

            });

    }

});