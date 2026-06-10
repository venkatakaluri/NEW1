@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

@keyframes blob1 {
  0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
  33% { transform: translate(40px, -60px) scale(1.15) rotate(120deg); }
  66% { transform: translate(-20px, 30px) scale(0.9) rotate(240deg); }
  100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
}

@keyframes blob2 {
  0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
  33% { transform: translate(-50px, 40px) scale(0.85) rotate(-120deg); }
  66% { transform: translate(40px, -20px) scale(1.1) rotate(-240deg); }
  100% { transform: translate(0px, 0px) scale(1) rotate(-360deg); }
}

@keyframes blob3 {
  0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
  33% { transform: translate(30px, 50px) scale(1.1) rotate(180deg); }
  66% { transform: translate(-40px, -30px) scale(0.9) rotate(0deg); }
  100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
}

.animate-blob-1 {
  animation: blob1 25s infinite ease-in-out;
}
.animate-blob-2 {
  animation: blob2 30s infinite ease-in-out;
}
.animate-blob-3 {
  animation: blob3 28s infinite ease-in-out;
}

/* Glassmorphism utility helpers */
.glass-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
}

.glass-panel-dark {
  background: rgba(15, 17, 23, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
}

.glass-panel-light {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.06);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
