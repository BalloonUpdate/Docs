// 自动将第一个标题作为网页Title
(function(){
    var plugin = function(hook) {
        hook.afterEach(function(html) {
            var parser = new DOMParser()
            var root = parser.parseFromString(html, 'text/html')
            var dom = root.querySelectorAll('h1,h2,h3,h4,h5,h6')
            if(dom.length > 0) {
                setTimeout(() => {
                    document.querySelector('title').innerHTML = dom[0].innerText
                }, 5);
            } else {
                document.querySelector('title').innerHTML = window.DocsifyAutoTitle.defaultTitle
            }
            return html;
        });
    }

    window.DocsifyAutoTitle = {
        defaultTitle: '',
        create: function(defaultTitle) {
            // 获取默认标题
            var title = defaultTitle ?? document.querySelector('title').innerHTML
            window.DocsifyAutoTitle.defaultTitle = title

            return plugin
        }
    }
})();