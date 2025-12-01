<script>
    // Select existing cursor elements
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    // Select the new light blob
    const gelLight = document.querySelector('.gel-light-blob');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // 1. The small dot follows instantly
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        // 2. The outline follows with a slight delay (existing animation)
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });

        // 3. The new gel light follows. 
        // Its smoothness is handled by the CSS transition we added.
        gelLight.style.left = `${posX}px`;
        gelLight.style.top = `${posY}px`;
    });
</script>