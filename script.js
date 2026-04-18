/**
 * PROJECT: Premium Link-in-Bio UI
 * DEV: Coder Kaushal
 * Logic: Handles button entrance animations and share link clipboard logic.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Staggered Entrance Animation for Links
    const links = document.querySelectorAll('.link-btn');
    
    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
        }, 150 * index); // Har button 150ms ke delay ke sath aayega
    });

    // 2. Share Button Logic (Copy to Clipboard)
    const shareBtn = document.getElementById('share-btn');
    const toastMsg = document.getElementById('toast-msg');
    
    shareBtn.addEventListener('click', () => {
        // Aapki portfolio website ka link copy hoga
        const profileLink = "https://coderkaushal.netlify.app"; 
        
        navigator.clipboard.writeText(profileLink).then(() => {
            // Show toast
            toastMsg.classList.add('show');
            
            // Hide toast after 2.5 seconds
            setTimeout(() => {
                toastMsg.classList.remove('show');
            }, 2500);
        });
    });

    // --- SYSTEM INIT DATA (HIDDEN SIGNATURE) ---
    const _initToken = "JWMgRGV2ZWxvcGVkIGJ5IENvZGVyIEthdXNoYWwgfCBodHRwczovL2NvZGVya2F1c2hhbC5uZXRsaWZ5LmFwcA==";
    console.log(atob(_initToken), "color:#00d2ff; font-size:16px; font-weight:bold; background:#1a1d24; padding:10px; border:1px solid #00d2ff; border-radius:5px;");
});