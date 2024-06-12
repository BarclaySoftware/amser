// This controls which app is on top.
let highestZIndex = 1;
    
// When the user clicks an icon, the app gets opened.
function openWindow(id) {
    var win = document.getElementById(id);
    var appIcon = document.getElementById('app-' + id);

    if (win) {
        win.style.display = 'flex';
        win.style.zIndex = highestZIndex++;
        if (appIcon) {
            appIcon.classList.add('active-appbar-icon');
        }
    }
}

// When the user clicks the close button, the app gets closed.
function closeWindow(id) {
    var win = document.getElementById(id);
    var appIcon = document.getElementById('app-' + id);

    if (win) {
        win.style.display = 'none';
        if (appIcon) {
            appIcon.classList.remove('active-appbar-icon');
        }
    }
}

// This controls how the user can move the app window.
document.querySelectorAll('.window').forEach(windowElement => {
    const header = windowElement.querySelector('.window-header');
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - windowElement.offsetLeft;
        offsetY = e.clientY - windowElement.offsetTop;
        windowElement.style.zIndex = highestZIndex++;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;

            // This prevents the user from dragging the app window off the screen, potentially losing it.
            newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - windowElement.offsetWidth));
            newTop = Math.max(0, Math.min(newTop, window.innerHeight - windowElement.offsetHeight));

            windowElement.style.left = `${newLeft}px`;
            windowElement.style.top = `${newTop}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});

// This disables the user's ability to use the right-click or 'context' menu.
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

// This opens the Welcome app when the web desktop loads completely.
// Change the app ID to make a different app be the default one to open.
window.onload = function () {
    openWindow('welcome');
}