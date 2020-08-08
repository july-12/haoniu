(function () {
    const articleWrap = document.getElementById('article-wrap');
    if (articleWrap) {
        articleWrap.onscroll = () => {
            offsetTop = articleWrap.scrollTop;
            const tableOfContent = document.getElementById('TableOfContents');
            const bounding = tableOfContent.getBoundingClientRect();
            const overTopClass = 'fix-table-content';
            const marginTop = 20;
            if (offsetTop > bounding.top + marginTop) {
                tableOfContent.classList.add(overTopClass);
            } else {
                tableOfContent.classList.remove(overTopClass);
            }
        };
    }
})();
