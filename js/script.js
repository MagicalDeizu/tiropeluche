const gallery = document.getElementsByClassName("fanarts");

lightGallery(gallery[0], {
    plugins: [lgThumbnail, lgZoom, lgFullscreen],

    speed: 500,
    thumbnail: true,
    zoom: true,
    download: false,
    fullscreen: true
});