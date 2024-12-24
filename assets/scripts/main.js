// mobile menu

const mobileMenuButton = document.querySelector('button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

console.log('Hello from  main script.js!');


// Function to fetch and load page content
async function loadPageContent(page) {
    try {
        const response = await fetch(`./assets/pages/${page}/index.html`);
        if (!response.ok) {
            throw new Error(`Page not found: ${page}`);
        }
        const content = await response.text();
        document.querySelector("#content").innerHTML = content;
    } catch (error) {
        console.error(error);
        document.querySelector("#content").innerHTML = `
            <h1>Error 404</h1>
            <p>Sorry, the page "${page}" could not be loaded.</p>
        `;
    }
}

// Function to handle navigation
function navigateTo(url) {
    history.pushState(null, null, url); // Change the browser URL
    const page = url.substring(1) || "home"; // Get the page name from the URL
    loadPageContent(page); // Load the corresponding page content
}

// Set up event listeners for navigation links
function setupRouting() {
    document.body.addEventListener("click", (event) => {
        const target = event.target;
        if (target.matches("[data-link]")) {
            event.preventDefault(); // Prevent full page reload
            const url = target.getAttribute("href"); // Get the link URL
            navigateTo(url); // Handle navigation
        }
    });

    // Handle browser back/forward buttons
    window.addEventListener("popstate", () => {
        const page = location.pathname.substring(1) || "home";
        loadPageContent(page); // Load the page content for the current URL
    });
}

// Initialize the app
window.addEventListener("DOMContentLoaded", () => {
    const defaultPage = location.pathname.substring(1) || "home"; // Default to 'home'
    loadPageContent(defaultPage); // Load the default or current page
    setupRouting(); // Set up routing listeners
});
