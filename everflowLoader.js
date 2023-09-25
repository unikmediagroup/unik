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
        var pymParent = new pym.Parent('pym-container', everflowURL, {});
    };
})();
