
    const section = document.querySelector('.star-background');

    // Generate 150 stars
    for (let i = 0; i < 250; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      section.appendChild(star);
    }

    // Make nearby stars glow on hover
    section.addEventListener('mousemove', e => {
      const rect = section.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      document.querySelectorAll('.star').forEach(star => {
        const starX = parseFloat(star.style.left) / 100 * rect.width;
        const starY = parseFloat(star.style.top) / 100 * rect.height;
        const dist = Math.hypot(mouseX - starX, mouseY - starY);

        if (dist < 120) {
          star.style.boxShadow = "0 0 8px 4px white";
          star.style.transform = "scale(1.5)";
        } else {
          star.style.boxShadow = "";
          star.style.transform = "";
        }
      });
    });
