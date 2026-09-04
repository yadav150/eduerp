// Shared JavaScript for all pages

document.addEventListener('DOMContentLoaded', function() {
    // --- Login functionality ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // Demo validation
            if (username === 'admin' && password === 'admin123') {
                showSpinner();
                setTimeout(function() {
                    window.location.href = 'dashboard.html';
                }, 1200);
            } else {
                alert('Invalid credentials. Use admin/admin123');
            }
        });
    }

    // --- Logout ---
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            showSpinner();
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 800);
        });
    }

    // --- Spinner helpers ---
    function showSpinner() {
        const overlay = document.getElementById('spinnerOverlay');
        if (overlay) overlay.style.display = 'flex';
    }

    function hideSpinner() {
        const overlay = document.getElementById('spinnerOverlay');
        if (overlay) overlay.style.display = 'none';
    }

    // Hide spinner on page load if visible (just in case)
    hideSpinner();

    // --- Demo filter buttons (simple UI feedback) ---
    const filterBtns = document.querySelectorAll('.btn-filter');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Filter applied (demo)');
        });
    });

    // --- Auto-close spinner if it's showing due to navigation (should be hidden already) ---
    // Additional: if user comes back to login from dashboard, ensure spinner hidden
    if (window.location.pathname.includes('index.html')) {
        hideSpinner();
    }

    // --- Dynamic academic session in header (already static) ---
    // Could be updated via settings but for demo it's static.
});
