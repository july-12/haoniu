(function () {
    const openPlaylistClassName = 'vjs-playlist-wrap-open';
    const playlistWrap = document.getElementById('vjs-playlist-wrap');

    const trigger = document.getElementById('playlist-trigger');

    trigger.addEventListener('click', function () {
        const opening = playlistWrap.classList.contains(openPlaylistClassName);
        opening
            ? playlistWrap.classList.remove(openPlaylistClassName)
            : playlistWrap.classList.add(openPlaylistClassName);
    });
})();
