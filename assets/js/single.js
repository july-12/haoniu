(function () {
    const getScroll = function () {
        if (window.pageYOffset != undefined) {
            return [pageXOffset, pageYOffset];
        } else {
            var sx,
                sy,
                d = document,
                r = d.documentElement,
                b = d.body;
            sx = r.scrollLeft || b.scrollLeft || 0;
            sy = r.scrollTop || b.scrollTop || 0;
            return [sx, sy];
        }
    };
    document.onscroll = () => {
        const [, offsetTop] = getScroll();
        const tableOfContent = document.getElementById('TableOfContents');
        const bounding = tableOfContent.getBoundingClientRect();
        const overTopClass = 'fix-table-content';
        const marginTop = 40;
        if (offsetTop > bounding.top + marginTop) {
            tableOfContent.classList.add(overTopClass);
        } else {
            tableOfContent.classList.remove(overTopClass);
        }
    };
})();
