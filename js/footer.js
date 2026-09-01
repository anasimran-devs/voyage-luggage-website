/* =========================================
   VOYAGE — GLOBAL FOOTER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const footerContainer =
        document.getElementById("footer");

    if (!footerContainer) return;


    footerContainer.innerHTML = `

        <footer class="footer">

            <div class="container">

                <div class="row gy-5">


                    <!-- ================= BRAND ================= -->

                    <div class="col-lg-4">

                        <a
                            href="index.html"
                            class="footer-logo">

                            VOYAGE<span>.</span>

                        </a>


                        <p>
                            Premium luggage for people who believe
                            every journey is worth taking.
                        </p>


                        <div class="social-links">

                            <a href="#">
                                <i class="bi bi-instagram"></i>
                            </a>

                            <a href="#">
                                <i class="bi bi-facebook"></i>
                            </a>

                            <a href="#">
                                <i class="bi bi-twitter-x"></i>
                            </a>

                        </div>

                    </div>



                    <!-- ================= SHOP ================= -->

                    <div class="col-6 col-lg-2">

                        <h4>
                            Shop
                        </h4>


                        <a href="products.html">
                            Suitcases
                        </a>

                        <a href="products.html">
                            Backpacks
                        </a>

                        <a href="products.html">
                            Travel Bags
                        </a>

                        <a href="products.html">
                            Accessories
                        </a>

                    </div>



                    <!-- ================= COMPANY ================= -->

                    <div class="col-6 col-lg-2">

                        <h4>
                            Company
                        </h4>


                        <a href="about.html">
                            About Us
                        </a>

                        <a href="brands.html">
                            Brands
                        </a>

                        <a href="contact.html">
                            Contact
                        </a>

                        <a href="#">
                            FAQ
                        </a>

                    </div>



                    <!-- ================= CUSTOMER CARE ================= -->

                    <div class="col-lg-4">

                        <h4>
                            Customer Care
                        </h4>


                        <p class="footer-contact">

                            <i class="bi bi-envelope"></i>

                            hello@voyage.com

                        </p>


                        <p class="footer-contact">

                            <i class="bi bi-telephone"></i>

                            +1 234 567 890

                        </p>


                        <p class="footer-contact">

                            <i class="bi bi-clock"></i>

                            Mon — Fri, 9AM — 6PM

                        </p>

                    </div>


                </div>



                <!-- ================= FOOTER BOTTOM ================= -->

                <div class="footer-bottom">

                    <p>
                        © 2026 Voyage. All rights reserved.
                    </p>


                    <div>

                        <a href="#">
                            Privacy Policy
                        </a>

                        <a href="#">
                            Terms & Conditions
                        </a>

                    </div>

                </div>


            </div>

        </footer>

    `;

});