(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
// Header carousel
$(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    dotsData: true,
});


// Testimonials carousel
$('.testimonial-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    dotsData: true,
});
$('.part-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    dots: true,
    responsive: {
        0:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:5
        },
       
    },
    dotsData:false,
});






//new

$(document).ready(function() {
    setTimeout(function() {
        $("#formModalpopupAds").modal();
    }, 10000);

    $(".owl-carousel-section1").owlCarousel({
        loop: true,
        margin: 15,
        items: 2,
        lazyLoad: true,
        dots: false,
        itemsMobile: [320, 2],
        nav: true,
        navText: [
            '<img src="images/ic_previous_1.png"/>',
            '<img src="images/ic_next.png"/>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            320: {
                items: 1,
                loop: true,
                autoHeight: false,
                nav: false,
                dots: true,
                margin: 5,
            },
            480: {
                items: 1,
                loop: true,
                autoHeight: false,
                nav: false,
                dots: true,
                margin: 0,
            },
            768: {
                items: 1,
                loop: true,
                autoHeight: false,
                nav: false,
                dots: true,
                margin: 5,
            },
            1000: {
                items: 3,
            },
        },
    });
    $(".owl-carousel-review").owlCarousel({
        loop: true,
        margin: 15,
        items: 2,
        lazyLoad: true,
        dots: true,
        itemsMobile: [320, 2],
        nav: false,
        navText: [
            '<img src="images/ic_previous_1.png"/>',
            '<img src="images/ic_next.png"/>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            320: {
                items: 1,
                loop: true,
                autoHeight: true,
                nav: false,
                dots: true,
                margin: 5,
            },
            480: {
                items: 1,
                loop: true,
                autoHeight: true,
                nav: false,
                dots: true,
                margin: 0,
            },
            768: {
                items: 1,
                loop: true,
                autoHeight: true,
                nav: false,
                dots: true,
                margin: 5,
            },
            1000: {
                items: 1,
            },
        },
    });
    $(".owl-carousel-exp-center").owlCarousel({
        loop: true,
        margin: 15,
        items: 2,
        lazyLoad: true,
        dots: false,
        itemsMobile: [320, 2],
        nav: true,
        navText: [
            '<img src="images/ic_previous_1.png" alt="previous arrow"/>',
            '<img src="images/ic_next.png" alt="next arrow"/>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            320: {
                items: 1,
                loop: true,
                autoHeight: true,
                nav: false,
                dots: true,
                margin: 5,
            },
            480: {
                items: 1,
                loop: true,
                autoHeight: true,
                nav: false,
                dots: true,
                margin: 0,
            },
            768: {
                items: 1,
                loop: true,
                autoHeight: true,
                nav: false,
                dots: true,
                margin: 5,
            },
            1000: {
                items: 3,
            },
        },
    });
    $(".owl-carousel-adwards").owlCarousel({
        loop: true,
        margin: 15,
        items: 2,
        autoplay: true,
        autoplayTimeout: 1000,
        lazyLoad: true,
        dots: true,
        itemsMobile: [320, 2],
        nav: false,
        navText: [
            '<img src="images/ic_previous_1.png"/>',
            '<img src="images/ic_next.png"/>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            320: {
                items: 1,
                loop: true,
                autoHeight: true,
                nav: false,
                dots: true,
                margin: 5,
            },
            480: {
                items: 2,
                loop: true,
                autoHeight: true,
                nav: false,
                dots: true,
                margin: 0,
            },
            768: {
                items: 3,
                loop: true,
                autoHeight: true,
                nav: false,
                dots: true,
                margin: 5,
            },
            1000: {
                items: 4,
            },
        },
    });
    if ($(window).width() < 767) {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 0) {
                $(".footer-stickey-mobile").show();
            } else {
                $(".footer-stickey-mobile").show();
            }
        });
    }
    $.validator.addMethod(
        "pattern",
        function(value, element, param) {
            if (this.optional(element)) {
                return true;
            }
            if (typeof param === "string") {
                param = new RegExp("^(?:" + param + ")$");
            }
            return param.test(value);
        },
        "Invalid format."
    );
    // $(".form-text-section").hide(300);
    // $(".form-terms-cond").hide(300);
    // $("input[name='PropertyType[]'], input[name='your-city']").on("change", function() {
    //     if ($(this).val() !== "" && $("input[name='your-city']").is(":checked") && $(
    //             "input[name='PropertyType[]']").is(":checked") == true) {
    //         $(".form-text-section").show(300);
    //         $(".submit-wraper, .form-terms-cond").show(300);
    //     }
    // });
    $("#popup-phone").on("keypress keydown keyup", function() {
        var phone_ext = $("#phone-no-ext").val();
        if (phone_ext == "+91") {
            var value = $(".mobile-phone-ext:input[type='tel']").val();
            if (
                $(".mobile-phone-ext:input[type='tel']").val() !== "" &&
                value.length == 10
            ) {
                $("#text-form-message-phone").text(
                    "Do pick up when we call. Our numbers start with 080"
                );
                $("#text-form-message-phone").removeClass("error-msg");
            } else if (
                $(".mobile-phone-ext:input[type='tel']").val() !== "" &&
                value.length >= 4 &&
                value.length <= 11
            ) {
                $("#text-form-message-phone").text("Enter a valid mobile phone number");
                $("#text-form-message-phone").addClass("error-msg");
            }
        }
    });

    $("input[name='PropertyType[]']").on("change", function() {
        if ($(this).val() !== "") {
            $("#property-message").show(200);
            $("#property-message").css("visibility", "visible");
            $("input[name='PropertyType[]'] + label").css("color", "#cfcece");
            $("input[name='PropertyType[]'] + label").css("border-color", "#cfcece");
            $(".form-radio-gp input[type=radio]:checked + label").css(
                "color",
                "#666666"
            );
            $(".form-radio-gp input[type=radio]:checked + label").css(
                "border-color",
                "#666666"
            );
            var radioValue = $("input[name='PropertyType[]']:checked").val();
            if (radioValue == "1 BHK") {
                $("#property-message-change").text("We find hidden space in 1BHKs");
            } else if (radioValue == "2 BHK") {
                $("#property-message-change").text(
                    "We've got smart designs for your 2 bedroom home"
                );
            } else if (radioValue == "3 BHK") {
                $("#property-message-change").text(
                    "Our designs satisfy all family members"
                );
            } else if (radioValue == "4+ BHK / Duplex") {
                $("#property-message-change").text(
                    "Our designs satisfy all family members"
                );
            } else if (radioValue == "Independent Home / Villa") {
                $("#property-message-change").text(
                    "We can design all spaces of your sprawling home"
                );
            }
        }
    });
    $("#cityname").change(function() {
        console.log($(this).val(), "sdflksjdkfjljlkjsflkjkjklfj");
        if ($(this).val() !== "") {
            $("#location-message").show(200);
            $("#location-message").css("visibility", "visible");
            $("input[name='your-city'] + label").css("color", "#cfcece");
            $("#location-message-change").css("color", "#0f0f10");
            $("input[name='your-city'] + label").css("border-color", "#cfcece");
            $(".form-radio-gp input[type=radio]:checked + label").css(
                "color",
                "#666666"
            );
            $(".form-radio-gp input[type=radio]:checked + label").css(
                "border-color",
                "#666666"
            );
            var radioValue1 = $(this).val();
            console.log(radioValue1);
            if (radioValue1 == "Mumbai") {
                console.log("SDfdsfds");
                $("#location-message-change").text(
                    "Mumbaikars love the extra space we create "
                );
                $("#location-image-change").attr("src", "./images/ic_mumbai.png");
            } else if (radioValue1 == "Navi Mumbai") {
                $("#location-message-change").text(
                    "Mumbaikars love the extra space we create"
                );
                $("#location-image-change").attr("src", "./images/ic_mumbai.png");
            } else if (radioValue1 == "Bengaluru") {
                $("#location-message-change").text(
                    "Our hometown too! - with many happy customers"
                );
                $("#location-image-change").attr(
                    "src",
                    "./images/konark-sun-temple-bangalore.png"
                );
            } else if (radioValue1 == "Hyderabad") {
                $("#location-message-change").text(
                    "Visit our dazzling experience centre in Banjara hills and Gachibowli"
                );
                $("#location-image-change").attr(
                    "src",
                    "./images/hyderabad-charminar.png"
                );
            } else if (radioValue1 == "Chennai") {
                $("#location-message-change").text(
                    "The city of art, culture, beaches and heritage - a designer's dream!"
                );
                $("#location-image-change").attr("src", "./images/chennai-black.png");
            } else if (radioValue1 == "Thane") {
                $("#location-message-change").text("Come meet our designers in Thane");
                $("#location-image-change").attr("src", "./images/thane.png");
            } else if (radioValue1 == "Mysore") {
                $("#location-message-change").text("Come meet our designers in Mysore");
                $("#location-image-change").attr("src", "./images/ic_mysore.jpg");
            } else if (radioValue1 == "Pune") {
                $("#location-message-change").text(
                    "Oh the smartest city  - we love Pune!"
                );
                $("#location-image-change").attr("src", "./images/ic_pune.jpg");
            } else if (radioValue1 == "Coimbatore") {
                $("#location-message-change").text(
                    "A city full of heritage and colour - we love it!"
                );
                $("#location-image-change").attr(
                    "src",
                    "https://media.designcafe.com/wp-content/uploads/2022/09/06155354/coimbatore-icon.png"
                );
            } else if (radioValue1 == "Vizag") {
                $("#location-message-change").text(
                    "The city of maritime experiences, temples and museums - we love it!"
                );
                $("#location-image-change").attr(
                    "src",
                    "https://media.designcafe.com/wp-content/uploads/2022/12/15120744/vizag-icon-black.png"
                );
            } else if (radioValue1 == "ahmedabad") {
                $("#location-message-change").text(
                    "The city of old charm & pioneering progress!"
                );
                $("#location-image-change").attr(
                    "src",
                    "https://www.designcafe.com/wp-content/uploads/2023/07/Ahmedabad-Icon-Black.png"
                );
            } else if (radioValue1 == "kolkata") {
                $("#location-message-change").text(
                    "The city of joy! Where heritage meets modernity"
                );
                $("#location-image-change").attr(
                    "src",
                    "https://www.designcafe.com/wp-content/uploads/2023/07/Kolkata-Icon-Black.png"
                );
            } else if (radioValue1 == "Surat") {
                $("#location-message-change").text("Where heritage meets innovation!");
                $("#location-image-change").attr(
                    "src",
                    "https://media.designcafe.com/wp-content/uploads/2023/09/13114507/surat-Icon-black.png"
                );
            } else if (radioValue1 == "Vadodara") {
                $("#location-message-change").text(
                    "The heart of tradition, heritage and artistry"
                );
                $("#location-image-change").attr(
                    "src",
                    "https://media.designcafe.com/wp-content/uploads/2023/09/13114503/vadodara-black-icon.png"
                );
            }
        }
    });
    $(".text-input-name:input[type='text']").on("focusout", function() {
        if ($(this).val() !== "") {
            $("#form-name-message").show(200);
            $("#form-name-message").css("visibility", "visible");
            var currentText = $(this).val();
            var firstWord = currentText.replace(/ .*/, "");
            $("#input-name-val").text(firstWord);
        } else {
            // $("#form-name-message").hide(200);
        }
    });
    $(".mobile-phone-ext:input[type='tel']").on("focusin", function() {
        $("#form-in-message").show(200);
        $("#form-in-message").css("visibility", "visible");
        var value = $(".mobile-phone-ext:input[type='tel']").val();
        if (value == 10) {
            $(".submit-wraper, .form-terms-cond").show(300);
        }
    });
    $(".mobile-phone-ext:input[type='tel']").focus(function() {
        if ($("#form-input-name").val() == "") {
            $("#text-form-message-name-1").hide();
            $("#form-name-message ").show();
            $("#form-name-message").css("visibility", "visible");
            $("#error-message-show").show().text("Enter your name");
        }
    });

    function clearAffiliatesPopupForm() {
        $("#AffiliatesPopupForm").trigger("reset");
        $("#AffiliatesPopupForm").validate().resetForm();
        $("#LeadPopFormSubmitBtnMumbai").prop("disabled", false);
        $("#LeadPopFormSubmitBtnMumbai .lds-ring").css("display", "none");
    }

    $("#AffiliatesPopupForm").validate({
        onfocusout: function(element) {
            this.element(element);
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "your-name") {
                $("#form-name-message").show();
                $("#form-name-message").css("visibility", "visible");
                $("#text-form-message-name-1").hide();
                $("#error-message-show").show().text("Enter your valid name");
                $("#error-message-show").addClass("error");
            } else if (element.attr("name") == "your-mobilenumber") {
                console.log(error);

                $("#form-in-message").css("display", "inline-block");
                $("#form-in-message").css("visibility", "visible");
                $("#text-form-message-phone").replaceWith(error.insertAfter(element));
                $(".error").addClass("form-select-message");
            } else if (
                element.attr("name") == "your-city" &&
                $("#cityname :selected").text() == "Property Location"
            ) {
                $("#location-message").show();
                $("#location-message").css("visibility", "visible");

                $("#location-message-change").text("Please select a location.");
                $("#location-message-change").css("color", "#e61323");
            }
        },
        success: function(label, element) {
            if (label.attr("for") == "form-input-name") {
                $("#text-form-message-name-1").show();
                $("#error-message-show").hide();
            }
            if (label.attr("for") == "popup-phone") {
                label
                    .addClass("valid")
                    .text("Do pick up when we call. Our numbers start with 080");
            }
        },
        rules: {
            "your-name": {
                required: true,
                pattern: /^[a-zA-Z ]{2,30}$/,
            },
            "your-mobilenumber": {
                required: true,
                minlength: 10,
                pattern: /^[1-9]\d{9}$|^[1-9]\d{9}$/,
            },
            email: {
                required: true,
                pattern: /^(.+)@((?:[a-zA-Z0-9])+)\.([a-zA-z]{2,4})([\.][a-zA-Z]{2,4}){0,1}$/,
            },
            "PropertyType[]": {
                required: true,
            },
            "your-city": {
                required: true,
            },
        },
        messages: {
            "your-name": {
                required: "Enter your name.",
                pattern: "Enter a valid name",
            },
            "your-mobilenumber": {
                required: "Enter a valid mobile phone number.",
                minlength: "Enter a valid mobile phone number.",
                pattern: "Enter a valid mobile phone number.",
            },
            email: {
                required: "Enter a valid email address.",
                pattern: "Enter a valid email address.",
            },
            "PropertyType[]": {
                required: "Please select property type.",
            },
            "your-city": {
                required: "Please select a location.",
            },
        },
        submitHandler: function(form) {
            try {
                if ($('input[type=radio][name="PropertyType[]"]:checked').length == 0) {
                    $("#property-message").show();
                    $("#property-message").css("visibility", "visible");
                    $("#property-message-change").html(
                        '<label id="popup-phone-error" class="error form-select-message" for="popup-phone">Please select property type.</label>'
                    );
                    return false;
                }

                if ($("#cityname").find('option[value="value"]').length != 0) {
                    $("#location-message").show();
                    $("#location-message").css("visibility", "visible");
                    $("#location-message-change").html(
                        '<label id="popup-phone-error" class="error form-select-message" for="popup-phone">Please select a location.</label>'
                    );
                    return false;
                }
                var formURL = $("#AffiliatesPopupForm").attr("action");
                var formData = $("#AffiliatesPopupForm").serializeArray();
                $.ajax({
                    url: formURL,
                    type: "POST",
                    data: formData,
                    beforeSend: function() {
                        $("#LeadPopFormSubmitBtnAffiliates").prop("disabled", true);
                        $("#LeadPopFormSubmitBtnAffiliates .lds-ring").css(
                            "display",
                            "inline-block"
                        );
                        $("#errorMsgPopAffiliates").text("");
                    },
                    success: function(data, textStatus, jqXHR) {
                        data = JSON.parse(data);
                        console.log(data);
                        if (
                            data.redirect_url &&
                            !window.location.href.match(data.redirect_url)
                        ) {
                            clearAffiliatesPopupForm();
                            window.location =
                                window.location.origin +
                                "/thank-you/?ref=" +
                                window.location.href;
                        } else {
                            $("#LeadPopFormSubmitBtnAffiliates").prop("disabled", false);
                            $("#LeadPopFormSubmitBtnAffiliates .lds-ring").css(
                                "display",
                                "none"
                            );
                            // clearAffiliatesLeadForm();
                            window.location =
                                window.location.origin +
                                "/thank-you/?ref=" +
                                window.location.href;
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown);
                        $(".LeadPopFormSubmitBtnAffiliates").prop("disabled", false);
                        $(".LeadPopFormSubmitBtnAffiliates .lds-ring").css(
                            "display",
                            "none"
                        );
                        // clearAffiliatesLeadForm();
                        window.location =
                            window.location.origin +
                            "/thank-you/?ref=" +
                            window.location.href;
                    },
                });
            } catch (e) {
                $("#LeadPopFormSubmitBtnAffiliates").prop("disabled", false);
                $("#LeadPopFormSubmitBtnAffiliates .lds-ring").css("display", "none");
                // clearAffiliatesLeadForm();
                window.location =
                    window.location.origin + "/thank-you/?ref=" + window.location.href;
            }
        },
    });
    $("#AffiliatesLeadFormClose").on("click", function() {
        clearAffiliatesPopupForm();
    });
    $("#AffiliatesPopupForm .selectpicker").on("change", function() {
        $(this).valid();
    });

    // Add smooth scrolling to all links
    $(".scroll-click").on("click", function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, main").animate({
                    scrollTop: $(hash).offset().top,
                },
                1000,
                function() {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
    //----------------------1------
    window.dataLayer = window.dataLayer || [];

    // function gtag() {
    //     dataLayer.push(arguments);
    // }
    // gtag("js", new Date());
    // /*gtag('config', 'AW-844999971');*/
    // gtag("config", "AW-770899520");
    // gtag('config', 'UA-113234250-1');

    //----------------------2------
    // !(function(f, b, e, v, n, t, s) {
    //     if (f.fbq) return;
    //     n = f.fbq = function() {
    //         n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    //     };
    //     if (!f._fbq) f._fbq = n;
    //     n.push = n;
    //     n.loaded = !0;
    //     n.version = "2.0";
    //     n.queue = [];
    //     t = b.createElement(e);
    //     t.async = !0;
    //     t.src = v;
    //     s = b.getElementsByTagName(e)[0];
    //     s.parentNode.insertBefore(t, s);
    // })(
    //     window,
    //     document,
    //     "script",
    //     "https://connect.facebook.net/en_US/fbevents.js"
    // );
    // fbq("init", "555410081511945");
    // fbq("track", "PageView");

    // End Facebook Pixel
    //Quora Pixel Code (JS Helper)
    // !(function(q, e, v, n, t, s) {
    //     if (q.qp) return;
    //     n = q.qp = function() {
    //         n.qp ? n.qp.apply(n, arguments) : n.queue.push(arguments);
    //     };
    //     n.queue = [];
    //     t = document.createElement(e);
    //     t.async = !0;
    //     t.src = v;
    //     s = document.getElementsByTagName(e)[0];
    //     s.parentNode.insertBefore(t, s);
    // })(window, "script", "https://a.quora.com/qevents.js");
    // qp("init", "311b7417252443a0ae91fc77e8fe2f4f");
    // qp("track", "ViewContent");
    // //<!-- Google Tag Manager -->
    // (function(w, d, s, l, i) {
    //     w[l] = w[l] || [];
    //     w[l].push({
    //         "gtm.start": new Date().getTime(),
    //         event: "gtm.js",
    //     });
    //     var f = d.getElementsByTagName(s)[0],
    //         j = d.createElement(s),
    //         dl = l != "dataLayer" ? "&l=" + l : "";
    //     j.async = true;
    //     j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    //     f.parentNode.insertBefore(j, f);
    // })(window, document, "script", "dataLayer", "GTM-WLR8MTX");
    // //<!-- Bing -->
    // (function(w, d, t, r, u) {
    //     var f, n, i;
    //     (w[u] = w[u] || []),
    //     (f = function() {
    //         var o = {
    //             ti: "134601667",
    //         };
    //         (o.q = w[u]), (w[u] = new UET(o)), w[u].push("pageLoad");
    //     }),
    //     (n = d.createElement(t)),
    //     (n.src = r),
    //     (n.async = 1),
    //     (n.onload = n.onreadystatechange =
    //         function() {
    //             var s = this.readyState;
    //             (s && s !== "loaded" && s !== "complete") ||
    //             (f(), (n.onload = n.onreadystatechange = null));
    //         }),
    //     (i = d.getElementsByTagName(t)[0]),
    //     i.parentNode.insertBefore(n, i);
    // })(window, document, "script", "//bat.bing.com/bat.js", "uetq");

    // //-------------------2--------
    // function custom_template(obj) {
    //     var data = $(obj.element).data();
    //     var text = $(obj.element).text();
    //     if (data && data["img_src"]) {
    //         img_src = data["img_src"];
    //         template = $(
    //             "<div class='countryFlag'><img src=\"" +
    //             img_src +
    //             '" style="width:16px;height:16px;"/><p style="font-size:13pt;text-align:center;margin:0 0 0 5px">' +
    //             text +
    //             "</p></div>"
    //         );
    //         return template;
    //     }
    // }
    // var options = {
    //     templateSelection: custom_template,
    //     templateResult: custom_template,
    // };
});

//services in about
var x = document.getElementById("img_txt");
            
// if (x) {
  x.addEventListener("mouseover", func, false);
  x.addEventListener("mouseout", func1, false);
// }

function func()
{
   document.getElementById("toto").setAttribute("style", "display:block;")
}

function func1()
{
    document.getElementById("toto").setAttribute("style", "display:none;")
}



//whatsapp

        document.addEventListener("DOMContentLoaded", function() {
    const whatsapp = document.getElementById('whatsapp');
    setTimeout(function() {
        whatsapp.style.animation = 'slideDown 2s forwards';
    }, 500); // Adjust delay if needed
});


document.addEventListener("DOMContentLoaded", function() {
const whatsappButton = document.getElementById('whatsapp');
setTimeout(function() {
    whatsappButton.style.animation = 'slideDown 2s forwards';
}, 500); // Adjust delay if needed
});



    