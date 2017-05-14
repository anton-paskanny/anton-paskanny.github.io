const getPreloader = function() {
    const preloader = document.createElement('div');

    preloader.className = 'preloader';

    for (let i = 0; i < 4; i++) {
        let span = document.createElement('span');
        preloader.appendChild(span);
    }

    return preloader;
}

export { getPreloader }
