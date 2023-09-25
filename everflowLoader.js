// Load the pym library dynamically
(function() {
    var pymScript = document.createElement('script');
    pymScript.src = 'https://pym.nprapps.org/pym.v1.min.js';
    pymScript.onload = function() {
        if (window.everflowURL) {
            loadIframe(window.everflowURL);
        }
    };
    document.head.appendChild(pymScript);

    window.loadIframe = function(everflowURL) {
        // Parse the existing URL
        var url = new URL(everflowURL);

        // Parse the search parameters from the current window location
        var searchParams = new URLSearchParams(window.location.search);

        // Append the search parameters to the URL
        for (var pair of searchParams.entries()) {
            // If the parameter already exists in the URL, update it, otherwise add it
            url.searchParams.set(pair[0], pair[1]);
        }

        // Load the iframe with the modified URL
        var pymParent = new pym.Parent('pym-container', url.toString(), {});
    };
})();
