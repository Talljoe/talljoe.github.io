function displayToast() {
    iziToast.show({
        id: 'haduken',
        theme: 'dark',
        icon: 'far fa-rss-square',
        title: 'New site coming soon',
        message: 'Subscribe via <a href="atom.xml">RSS</a> for blog updates',
        closeOnEscape: true,
        progressBar: false,
        position: 'topCenter',
        transitionIn: 'bounceInDown',
        transitionOut: 'fadeOutDown',
        image: 'https://www.gravatar.com/avatar/905779f710a2d296b9f011db3e350c65?s=70',
        timeout: false,
        imageWidth: 70,
        layout: 2,
        iconColor: '#fd7e14'
    });
}

// toast
setTimeout(displayToast, 2000);