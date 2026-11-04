/* BUSINESS WHATSAPP NUMBER */

const businessNumber = "919623684388";


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function() {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


/* CLOSE MOBILE MENU AFTER CLICKING A LINK */

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

    });

});


/* SET MINIMUM EVENT DATE TO TODAY */

const today = new Date();
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

document.getElementById("visitorDate").min = localToday;
document.getElementById("eventDate").min = localToday;


/* WHATSAPP MESSAGE FUNCTION */

function sendWhatsAppMessage(message) {

    if (!/^91[0-9]{10}$/.test(businessNumber)) {

        alert("Please add your correct WhatsApp business number in script.js.");

        return false;
    }

    const whatsappURL = 
        "https://wa.me/" + businessNumber +
        "?text=" + encodeURIComponent(message);

   window.open(whatsappURL, "_blank");

    return true;
}


/* WELCOME ENQUIRY POPUP */

const enquiryPopup = document.getElementById("enquiryPopup");

const closePopup = document.getElementById("closePopup");

const continueLink = document.getElementById("continueLink");


/* CLOSE POPUP */

function hidePopup() {

    enquiryPopup.style.display = "none";

}

closePopup.addEventListener("click", hidePopup);

continueLink.addEventListener("click", function(event) {

    event.preventDefault();

    hidePopup();

});


/* WELCOME ENQUIRY FORM */

const welcomeForm = document.getElementById("welcomeForm");

welcomeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("visitorName").value.trim();

    const mobile =
        document.getElementById("visitorMobile").value.trim();

    const functionType =
        document.getElementById("visitorFunction").value;

    const eventDate =
        document.getElementById("visitorDate").value;

    const location =
        document.getElementById("visitorLocation").value.trim();


    if (!/^[0-9]{10}$/.test(mobile)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;

    }

    const message =
        "Hello Shivkrupa Mandap & Decor!" +
        "\n\nNew Website Enquiry" +
        "\nName: " + name +
        "\nMobile: " + mobile +
        "\nFunction: " + functionType +
        "\nEvent Date: " + eventDate +
        "\nEvent Location: " + location;

    if (sendWhatsAppMessage(message)) {

        hidePopup();

        welcomeForm.reset();

    }

});


/* MAIN BOOKING FORM */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const functionType =
        document.getElementById("functionType").value;

    const duration =
        document.getElementById("duration").value;

    const eventDate =
        document.getElementById("eventDate").value;

    const location =
        document.getElementById("eventLocation").value.trim();

    const requirements =
        document.getElementById("requirements").value.trim();


    if (!/^[0-9]{10}$/.test(mobile)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;

    }


    const message =
        "Hello Shivkrupa Mandap & Decor!" +
        "\n\nNew Decoration Booking Enquiry" +
        "\nName: " + name +
        "\nMobile Number: " + mobile +
        "\nFunction Type: " + functionType +
        "\nRental Duration: " + duration +
        "\nEvent Date: " + eventDate +
        "\nEvent Location: " + location +
        "\nAdditional Requirements: " +
        (requirements || "Not specified");


    if (sendWhatsAppMessage(message)) {

        bookingForm.reset();

    }

});