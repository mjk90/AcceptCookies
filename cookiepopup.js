const cookiePopupHtml = '<div id="cookie-popup-container">' +
    '<div class="cookie-popup" style="display: none;">' +
        '<div class="cookie-popup-inner">' +
            '<div class="cookie-popup-left">' +
                '<div class="cookie-popup-headline">This website uses cookies</div>' +
                '<div class="cookie-popup-sub-headline">By using this site, you agree to our use of cookies.</div>' +
            '</div>' +

            '<div class="cookie-popup-right">' +
                '<a href="#" class="cookie-popup-accept-cookies">Accept</a>' +
                '<a href="#" class="cookie-popup-learn-more">Learn More</a>' +
            '</div>' +

        '</div>' +
    '</div>' +
'</div>';

var cookiePopup = function(options) {
    var cookiesAccepted = getCookie("cookiesAccepted");

    if (!cookiesAccepted) {
        var cookiePopup = $(cookiePopupHtml);
        var position = "bottom";

        if(options != undefined) {
            position = options.position != undefined ? options.position : "bottom";

            if(options.title != undefined)
                cookiePopup.find('.cookie-popup-headline').text(options.title);
            if(options.text != undefined)
                cookiePopup.find('.cookie-popup-sub-headline').text(options.text);
            if(options.theme != undefined)
                cookiePopup.addClass("theme-" + options.theme);

            if(options.learnMore != undefined) {
                if(options.learnMore == false)
                    cookiePopup.find(".cookie-popup-learn-more").remove();
            }

            if(options.customText != undefined) {
                if(options.customText.headline != undefined)
                    cookiePopup.find(".cookie-popup-headline").text(options.customText.headline);
                if(options.customText.subHeadline != undefined)
                    cookiePopup.find(".cookie-popup-sub-headline").text(options.customText.subHeadline);
                if(options.customText.acceptButton != undefined)
                    cookiePopup.find(".cookie-popup-accept-cookies").text(options.customText.acceptButton);
                if(options.customText.learnMoreButton != undefined)
                    cookiePopup.find(".cookie-popup-learn-more").text(options.customText.learnMoreButton);
            }
        }
        
        cookiePopup.find('.cookie-popup').addClass("position-" + position);
        $('body').append(cookiePopup);
        $('.cookie-popup').slideToggle();
    }    
}

$(function () {
    $(document).on('click', '.cookie-popup-accept-cookies', function(e) {
        //var expiryDate = moment($("#acceptCookiesExpiryDateUtc").val(), "DD/MM/YYYY hh:mm");
        //var expires = "expires=" + expiryDate.toDate().toUTCString();
        e.preventDefault();
        var expires = "expires=08/11/2017"
        document.cookie = "cookiesAccepted=true; " + expires + "; path=/";
        $('.cookie-popup').slideToggle();
    });
});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}