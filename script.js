      // Matrix animation
      const canvas = document.getElementById('cmatrix');
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const letters = 'アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops = Array(columns).fill(1);
    
      function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#d7ff00';
        ctx.font = fontSize + 'px monospace';
    
        for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }
    
      setInterval(drawMatrix, 33);
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    
      let A = 0, B = 0;
      const donut = document.getElementById("donut");
    
      function renderDonut() {
        let b = new Array(1760).fill(" ");
        let z = new Array(1760).fill(0);
        
        for (let j = 0; j < 6.28; j += 0.07) {
          for (let i = 0; i < 6.28; i += 0.02) {
            let c = Math.sin(i), d = Math.cos(j), e = Math.sin(A), f = Math.sin(j),
                g = Math.cos(A), h = d + 2, D = 1 / (c * h * e + f * g + 5),
                l = Math.cos(i), m = Math.cos(B), n = Math.sin(B),
                t = c * h * g - f * e, x = 40 + 30 * D * (l * h * m - t * n),
                y = 12 + 15 * D * (l * h * n + t * m),
                o = Math.floor(x) + 80 * Math.floor(y),
                N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
    
            if (22 > y && y > 0 && x > 0 && 80 > x && D > z[o]) {
              z[o] = D;
              b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
            }
          }
        }
    
        let output = "";
        for (let k = 0; k < 1760; k++) {
          output += k % 80 === 79 ? "\n" : b[k];
        }
    
        donut.textContent = output;
        A += 0.04;
        B += 0.02;
      }
    
      setInterval(renderDonut, 0.5);