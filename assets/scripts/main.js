

// Select the mobile menu button and the mobile menu

// accordion

function loadHTML(file, target) {
    // Determine the base path based on the current location
    const basePath = location.pathname.includes('/pages/') ? '../../common/' : './common/';
    fetch(basePath + file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
            return response.text();
        })
        .then(data => {
            document.querySelector(target).innerHTML = data; // Insert the fetched content
        })
        .catch(error => {
            console.error(`Error loading ${file}:`, error);
            document.querySelector(target).innerHTML = `<p style="color: red;">Error loading ${file}</p>`;
        });
}

// Load the header and footer after the window has loaded
window.onload = () => {
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');
};
