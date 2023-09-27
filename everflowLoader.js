(function() {
    var pymScript = document.createElement('script');
    pymScript.src = 'https://cdn.jsdelivr.net/gh/unikmediagroup/unik@main/pym.v1.min.js';
    pymScript.onload = function() {
        if (window.everflowURL) {
            // Capture the specified URL parameters from the parent page
            var params = ['fbclid', 'gclid', 'sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'source_id'];
            var queryParams = new URLSearchParams(window.location.search);
            var newParams = new URLSearchParams();
            params.forEach(function(param) {
                if (queryParams.has(param)) {
                    newParams.set(param, queryParams.get(param));
                }
            });

            // Append the captured parameters to the everflowURL
            var everflowURL = new URL(window.everflowURL);
            everflowURL.search ? newParams.forEach((value, key) => everflowURL.searchParams.append(key, value)) : everflowURL.search = newParams.toString();

            // Load the iframe with the modified URL
            loadIframe(everflowURL.toString());
        }
    };
    document.head.appendChild(pymScript);

    window.loadIframe = function(everflowURL) {
        var pymParent = new pym.Parent('pym-container', everflowURL, {});
    };
})();
