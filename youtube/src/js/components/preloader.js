const getPreloader = () => {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';

    for (let i = 0; i < 4; i += 1) {
        const span = document.createElement('span');
        preloader.appendChild(span);
    }
    return preloader;
};

export default getPreloader;
