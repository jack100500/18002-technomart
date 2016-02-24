var feedBackButton = document.querySelector('.btn-about-feedback');
if (feedBackButton !== null) {
    var feedBackBlock = document.querySelector('.feedback');
    var feedBackClose = document.querySelector('.feedback-close');
    feedBackButton.addEventListener('click', function(event) {
        event.preventDefault();
        feedBackBlock.classList.add('show-block');
    });

    feedBackClose.addEventListener('click', function(event) {
        event.preventDefault();
        feedBackBlock.classList.remove('show-block');
    });
}

var buyItemsButtons = document.querySelectorAll('.catalog-item-actions .buy');
if (buyItemsButtons !== null) {
    var cartBlock = document.querySelector('.cart-notification');
    var cartClose = document.querySelector('.cart-notification-close');
    var cartCancel = document.querySelector('.cart-cancel-btn');

    for (var i = 0; i < buyItemsButtons.length; ++i) {
        buyItemsButtons[i].addEventListener('click', function(event) {
            event.preventDefault();
            cartBlock.classList.add('show-block');
        });
    }

    cartClose.addEventListener('click', function(event) {
        event.preventDefault();
        cartBlock.classList.remove('show-block');
    });

    cartCancel.addEventListener('click', function(event) {
        event.preventDefault();
        cartBlock.classList.remove('show-block');
    });
}

var mapButton = document.querySelector('.about-contacts-map a');
if (mapButton !== null) {
    var mapBlock = document.querySelector('.map');
    var mapClose = document.querySelector('.map .map-close');

    mapButton.addEventListener('click', function(event) {
        event.preventDefault();
        mapBlock.classList.add('show-block');
    });

    mapClose.addEventListener('click', function(event) {
        event.preventDefault();
        mapBlock.classList.remove('show-block');
    });
}

window.addEventListener('keydown', function(event) {
    if (event.keyCode != 27) {
        return false;
    }
    var blocks = [
        feedBackBlock,
        cartBlock,
        mapBlock
    ];
    for (var i = 0; i < blocks.length; ++i) {
        if ((blocks[i] === null || typeof blocks[i] === 'undefined')
            || !blocks[i].classList.contains('show-block')) {
            continue;
        }

        blocks[i].classList.remove('show-block');
    }
});

var serviceBlock = function() {
    var serviceLinks = document.querySelectorAll('.services-categories-list a');
    var serviceBlocks = document.querySelectorAll('.service-details');

    for (var i = 0; i < serviceLinks.length; i++) {
        serviceLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            deactivateLinksAndBlocks(serviceLinks, serviceBlocks);
            for (var i = 0; i < serviceLinks.length; i++) {
                if (serviceLinks[i] == this) {
                    this.classList.add('services-categories-list-active');
                    serviceBlocks[i].classList.add('service-details-active');
                }
            }
        });
    }
};

var deactivateLinksAndBlocks = function(links, blocks) {
    for (var i = 0; i < links.length; ++i) {
        if (!links[i].classList.contains('services-categories-list-active')) {
            continue;
        }
        links[i].classList.remove('services-categories-list-active');
        blocks[i].classList.remove('service-details-active');
    }

    return true;
};

serviceBlock();

function initialize() {
    var x = 59.938969;
    var y = 30.323040;
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(x, y),
        scrollwheel: false,
        disableDefaultUI: true
    }
    var map = new  google.maps.Map(
        document.querySelector(".map-script"),
        mapOptions
    );
    var myLatLng = new google.maps.LatLng(x, y);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
if (typeof google !== 'undefined') {
    google.maps.event.addDomListener(mapButton, "click", initialize);
}