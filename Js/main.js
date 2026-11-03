/* ==========================================
   MORAY - BIRTHDAY WEBSITE
   Created with love by Daniel
========================================== */

const CONFIG = {
  herName: "Motunrayo",
  myName: "Daniel",

  gallery: [
    { src: "Asset/picnew1.jpeg", caption: "New memory", featured: true },
    { src: "Asset/picnew2.jpeg", caption: "Another beautiful moment" },
    { src: "Asset/pic3.jpeg", caption: "My favourite smile", featured: true },
    { src: "Asset/pic5.jpeg", caption: "Pure elegance", featured: true },
    {
      src: "Asset/pic7.jpeg",
      caption: "The one who stole my heart",
      featured: true,
    },
    { src: "Asset/pic2.jpeg", caption: "Effortlessly stunning" },
    { src: "Asset/pic4.jpeg", caption: "Joy in a frame" },
    { src: "Asset/pic6.jpeg", caption: "My peace" },
    { src: "Asset/pic10.jpeg", caption: "Radiant" },
    { src: "Asset/pic12.jpeg", caption: "My world" },
    { src: "Asset/pic13.jpeg", caption: "Unforgettable" },
    { src: "Asset/pic14.jpeg", caption: "Beautiful soul" },
    { src: "Asset/pic15.jpeg", caption: "My jewel" },
    { src: "Asset/pic17.jpeg", caption: "Forever" },
    { src: "Asset/pic18.jpeg", caption: "Love" },
    { src: "Asset/pic20.jpeg", caption: "Home" },
  ],

  videos: [
    { src: "Asset/vic2.mp4", label: "Moments in motion" },
    { src: "Asset/vic3.mp4", label: "Her laughter" },
    { src: "Asset/vic4.mp4", label: "Pure joy" },
    { src: "Asset/15.mp4", label: "Beautiful" },
  ],

  love: [
    {
      icon: "😊",
      title: "Your beautiful smile",
      text: "The kind that lights up rooms and quietly rearranges my entire day.",
    },
    {
      icon: "✨",
      title: "Your amazing personality",
      text: "Warm, witty, and effortlessly magnetic — you make every conversation feel like home.",
    },
    {
      icon: "💪",
      title: "Your strength & determination",
      text: "You face life with courage and grace, and it inspires me more than you know.",
    },
    {
      icon: "🤍",
      title: "Your kindness",
      text: "The gentle way you treat people is the most beautiful thing about you.",
    },
    {
      icon: "🧠",
      title: "Your intelligence",
      text: "Sharp, thoughtful, and endlessly curious — I could listen to you forever.",
    },
    {
      icon: "☀️",
      title: "The happiness you bring",
      text: "You are my favourite part of every single day, without exception.",
    },
    {
      icon: "🌸",
      title: "The little things",
      text: "Your quirks, your habits, your voice — the details that make you uniquely you.",
    },
    {
      icon: "❤️",
      title: "How you love",
      text: "Fully, fiercely, and with your whole heart. I am the luckiest man alive.",
    },
  ],

  wishes: [
    {
      icon: "🌿",
      title: "Good health & long life",
      text: "May your days be long, your body strong, and your spirit always at peace.",
    },
    {
      icon: "🏆",
      title: "Greater achievements",
      text: "May every dream you carry find its way into beautiful reality.",
    },
    {
      icon: "🕊️",
      title: "Peace & happiness",
      text: "May your heart stay light and your mind always at rest.",
    },
    {
      icon: "🙏",
      title: "God's favour & blessings",
      text: "May heaven smile on you in ways words cannot describe.",
    },
    {
      icon: "🌟",
      title: "Success in your dreams",
      text: "May your ambitions be met with open doors and steady grace.",
    },
    {
      icon: "✈️",
      title: "Beautiful experiences",
      text: "May life gift you unforgettable moments and stories worth telling.",
    },
  ],

  letter: `Motunrayo, my precious jewel,

From the moment you walked into my life, everything changed. The ordinary became extraordinary, and the quiet became music. You are not just the woman I love — you are the home my heart has been searching for.

I want you to know how beautiful you are — not only in the way the world sees, but in the way you carry your heart. Your kindness, your strength, your laughter, your quiet resilience — every part of you is a miracle I get to witness daily.

I am endlessly grateful for you. For the way you listen, the way you love, the way you believe in me even when I doubt myself. You bring a happiness into my life that I never knew was possible, and you make me want to be better every single day.

As you step into this new age, my prayer is that God crowns your year with favour, fills your heart with peace, and surrounds you with love. May your dreams blossom, your path stay bright, and your smile never fade.

You deserve the entire world, Motunrayo. And I will spend my whole life trying to give it to you.

Happy Birthday, my love.`,
};

// ==========================================
// UTILITIES
// ==========================================

const $ = (selector, root = document) => root.querySelector(selector);

const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

let launchConfetti = () => {};

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function scrollToSection(element) {
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - 85;

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

function unlockSection(section) {
  if (!section) return;

  section.hidden = false;
  section.style.display = "";
  section.classList.remove("chapter-gated");
  section.classList.add("chapter-unlocked");

  section.setAttribute("aria-hidden", "false");

  $$(".reveal", section).forEach((element) => {
    revealObserver.observe(element);
  });
}

function addChapterButton(target, label, callback) {
  if (!target) return null;

  // Prevent duplicate buttons.
  if (target.querySelector(".chapter-continue")) {
    return target.querySelector(".chapter-continue");
  }

  const button = document.createElement("button");

  button.type = "button";
  button.className = "btn btn-primary chapter-continue";
  button.textContent = label;

  button.addEventListener("click", callback);

  target.appendChild(button);

  return button;
}

// ==========================================
// SCROLL REVEAL
// ==========================================

const revealObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -50px 0px",
        },
      )
    : {
        observe: (element) => element.classList.add("in"),
        unobserve: () => {},
      };

function observeReveals(root = document) {
  $$(".reveal", root).forEach((element) => {
    revealObserver.observe(element);
  });
}

// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = $("#loader");

    if (loader) {
      loader.classList.add("hidden");
      loader.setAttribute("aria-hidden", "true");
    }
  }, 900);
});

// ==========================================
// CHAPTER LOCKING
// ==========================================

// These sections remain hidden until the visitor
// reaches the appropriate point in the experience.

const loveSection = $("#love");
const wishesSection = $("#wishes");
const surpriseSection = $("#surprise");

[loveSection, wishesSection, surpriseSection].forEach((section) => {
  if (!section) return;

  section.hidden = true;
  section.style.display = "none";

  section.classList.add("chapter-gated");
  section.setAttribute("aria-hidden", "true");
});

// ==========================================
// NAVIGATION
// ==========================================

const header = $("#siteHeader");
const navToggle = $("#navToggle");
const navLinks = $("#navLinks");

window.addEventListener(
  "scroll",
  () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 40);
    }
  },
  { passive: true },
);

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navLinks.classList.remove("open");

      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================

$$('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");

    if (!id || id === "#") return;

    const target = document.querySelector(id);

    if (!target) return;

    // Do not navigate to a chapter that is still locked.
    if (target.hidden) {
      event.preventDefault();
      return;
    }

    event.preventDefault();

    scrollToSection(target);
  });
});

// ==========================================
// LETTER FUNCTION
// ==========================================

const envelope = $("#letterEnvelope");
const letterCard = $("#letterCard");

let letterHasOpened = false;

function openLetter() {
  // Prevent repeated clicks from restarting the animation.
  if (letterHasOpened) return;

  letterHasOpened = true;

  if (envelope) {
    envelope.classList.add("open");
  }

  if (letterCard) {
    letterCard.setAttribute("aria-hidden", "true");
  }

  setTimeout(
    () => {
      if (envelope) {
        envelope.classList.add("hidden");
        envelope.setAttribute("aria-hidden", "true");
      }

      if (letterCard) {
        letterCard.classList.add("open");

        letterCard.setAttribute("aria-hidden", "false");

        addChapterButton(letterCard, "Continue to Chapter Three ♥", () => {
          unlockSection(loveSection);
          scrollToSection(loveSection);
        });
      }
    },
    prefersReducedMotion ? 0 : 800,
  );
}

// ==========================================
// HERO SURPRISE BUTTON
// ==========================================

const openBtn = $("#openSurpriseBtn");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    launchConfetti(100);

    // Take her to the letter.
    // She must click Read My Letter herself.
    scrollToSection($("#letter"));
  });
}

// ==========================================
// GALLERY
// MESSAGE FIRST, IMAGE AFTER CLICK
// ==========================================

const galleryEl = $("#gallery");

function openGalleryCard(card, item) {
  const flipped = card.classList.toggle("is-flipped");

  card.setAttribute("aria-pressed", String(flipped));

  card.setAttribute(
    "aria-label",
    flipped
      ? `Photo revealed: ${item.caption}. Activate to hide photo`
      : `Reveal photo: ${item.caption}`,
  );
}

if (galleryEl) {
  CONFIG.gallery.forEach((item, index) => {
    const card = document.createElement("div");

    card.className =
      "gallery-item gallery-flip-card" + (item.featured ? " featured" : "");

    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");

    card.setAttribute("aria-label", `Reveal photo: ${item.caption}`);

    card.innerHTML = `
      <div class="gallery-flip-inner">

        <div class="gallery-face gallery-message-front">

          <span class="flip-heart" aria-hidden="true">♥</span>

          <p>${item.caption}</p>

          <span class="flip-hint">
            TAP TO REVEAL THE PHOTO
          </span>

        </div>

        <div class="gallery-face gallery-photo-back">

          <img
            src="${item.src}"
            alt="${item.caption}"
            loading="lazy"
          >

          <div class="g-overlay">

            <span>${item.caption}</span>

            <button
              type="button"
              class="gallery-view-photo"
            >
              View photo
            </button>

          </div>

        </div>

      </div>
    `;

    card.addEventListener("click", (event) => {
      if (event.target.closest(".gallery-view-photo")) {
        event.stopPropagation();

        openLightbox(index);

        return;
      }

      openGalleryCard(card, item);
    });

    card.addEventListener("keydown", (event) => {
      // Let the nested View Photo button handle its own keyboard events.
      if (event.target !== card) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        openGalleryCard(card, item);
      }
    });

    galleryEl.appendChild(card);
  });
}

// ==========================================
// VIDEO GALLERY
// ==========================================

const videoGrid = $("#videoGrid");

let currentlyPlaying = null;

if (videoGrid) {
  CONFIG.videos.forEach((video, index) => {
    const card = document.createElement("article");

    card.className = "video-card reveal";

    card.innerHTML = `
      <div class="video-frame">

        <video
          src="${video.src}"
          playsinline
          preload="metadata"
          controls
        ></video>

        <span class="video-number">
          MEMORY ${String(index + 1).padStart(2, "0")}
        </span>

      </div>

      <div class="video-info">

        <span class="video-heart" aria-hidden="true">♥</span>

        <div>
          <h3>${video.label}</h3>

          <p>
            A beautiful moment worth keeping forever.
          </p>
        </div>

      </div>
    `;

    const vid = $("video", card);

    vid.addEventListener("play", () => {
      // Pause the previous video when another starts.
      if (currentlyPlaying && currentlyPlaying !== vid) {
        currentlyPlaying.pause();
      }

      currentlyPlaying = vid;

      card.classList.add("video-playing");
    });

    vid.addEventListener("pause", () => {
      card.classList.remove("video-playing");

      if (currentlyPlaying === vid) {
        currentlyPlaying = null;
      }
    });

    vid.addEventListener("ended", () => {
      card.classList.remove("video-playing");

      if (currentlyPlaying === vid) {
        currentlyPlaying = null;
      }
    });

    videoGrid.appendChild(card);
  });
}

// ==========================================
// LOVE CARDS - CHAPTER THREE
// ==========================================

const loveGrid = $("#loveGrid");

if (loveGrid) {
  CONFIG.love.forEach((item) => {
    const card = document.createElement("article");

    card.className = "love-card reveal";

    card.innerHTML = `
      <span class="love-icon">${item.icon}</span>

      <h3>${item.title}</h3>

      <p>${item.text}</p>
    `;

    loveGrid.appendChild(card);
  });

  // Button appears after the love cards.
  addChapterButton(
    loveGrid.parentElement,
    "Continue to Birthday Wishes ♥",
    () => {
      unlockSection(wishesSection);
      scrollToSection(wishesSection);
    },
  );
}

// ==========================================
// BIRTHDAY WISHES
// ==========================================

const wishesGrid = $("#wishesGrid");

if (wishesGrid) {
  CONFIG.wishes.forEach((item) => {
    const card = document.createElement("article");

    card.className = "wish-card reveal";

    card.innerHTML = `
      <span class="wish-icon">${item.icon}</span>

      <h3>${item.title}</h3>

      <p>${item.text}</p>
    `;

    wishesGrid.appendChild(card);
  });

  // Button appears after the birthday wishes.
  addChapterButton(
    wishesGrid.parentElement,
    "Continue to the Final Surprise ♥",
    () => {
      unlockSection(surpriseSection);
      scrollToSection(surpriseSection);
    },
  );
}

// ==========================================
// LOVE LETTER CONTENT
// ==========================================

const letterBody = $("#letterBody");

if (letterBody) {
  letterBody.innerHTML = "";

  CONFIG.letter.split(/\n\n+/).forEach((paragraph) => {
    const p = document.createElement("p");

    paragraph.split("\n").forEach((line, index) => {
      if (index > 0) {
        p.appendChild(document.createElement("br"));
      }

      p.appendChild(document.createTextNode(line));
    });

    letterBody.appendChild(p);
  });
}

// ==========================================
// LETTER DATE
// ==========================================

const letterDate = $("#letterDate");

if (letterDate) {
  const date = new Date();

  letterDate.textContent = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ==========================================
// READ LETTER BUTTON
// ==========================================

const readBtn = $("#readLetterBtn");

if (readBtn) {
  readBtn.addEventListener("click", openLetter);
}

// ==========================================
// LIGHTBOX
// ==========================================

const lightbox = $("#lightbox");
const lbImg = $("#lbImg");
const lbCaption = $("#lbCaption");
const lbCounter = $("#lbCounter");

const lbClose = $("#lbClose");
const lbPrev = $("#lbPrev");
const lbNext = $("#lbNext");

let lbIndex = 0;
let previousFocus = null;

function openLightbox(index) {
  if (!lightbox) return;

  lbIndex = index;

  previousFocus = document.activeElement;

  renderLightbox();

  lightbox.classList.add("open");

  lightbox.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  if (lbClose) {
    lbClose.focus();
  }
}

function closeLightbox() {
  if (!lightbox) return;

  lightbox.classList.remove("open");

  lightbox.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }
}

function renderLightbox() {
  const item = CONFIG.gallery[lbIndex];

  if (!item) return;

  if (lbImg) {
    lbImg.src = item.src;
    lbImg.alt = item.caption;
  }

  if (lbCaption) {
    lbCaption.textContent = item.caption;
  }

  if (lbCounter) {
    lbCounter.textContent = `${lbIndex + 1} / ${CONFIG.gallery.length}`;
  }
}

function navigateLightbox(direction) {
  lbIndex =
    (lbIndex + direction + CONFIG.gallery.length) % CONFIG.gallery.length;

  renderLightbox();
}

if (lbClose) {
  lbClose.addEventListener("click", closeLightbox);
}

if (lbPrev) {
  lbPrev.addEventListener("click", () => {
    navigateLightbox(-1);
  });
}

if (lbNext) {
  lbNext.addEventListener("click", () => {
    navigateLightbox(1);
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

// Keyboard controls for lightbox.

document.addEventListener("keydown", (event) => {
  if (!lightbox || !lightbox.classList.contains("open")) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "ArrowLeft") {
    navigateLightbox(-1);
  }

  if (event.key === "ArrowRight") {
    navigateLightbox(1);
  }
});

// ==========================================
// FINAL SURPRISE
// ==========================================

const surpriseBtn = $("#surpriseBtn");

if (surpriseBtn) {
  surpriseBtn.addEventListener("click", () => {
    launchConfetti(220);

    const reveal = $("#surpriseReveal");

    if (reveal) {
      reveal.classList.add("show");

      reveal.setAttribute("aria-hidden", "false");

      setTimeout(() => {
        scrollToSection(reveal);
      }, 150);
    }

    surpriseBtn.disabled = true;
    surpriseBtn.textContent = "A little surprise, just for you ♥";
  });
}

// ==========================================
// FLOATING HEARTS AND PARTICLES
// ==========================================

const canvas = $("#particles");

if (canvas && !prefersReducedMotion) {
  const ctx = canvas.getContext("2d");

  let W;
  let H;

  let particles = [];

  function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  resizeCanvas();

  window.addEventListener("resize", resizeCanvas);

  const HEARTS = ["❤", "♥", "❀", "✦"];

  function spawnParticle() {
    particles.push({
      x: Math.random() * W,
      y: H + 20,
      size: 10 + Math.random() * 16,
      speed: 0.3 + Math.random() * 0.7,
      drift: (Math.random() - 0.5) * 0.4,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      alpha: 0.15 + Math.random() * 0.35,
      char: HEARTS[Math.floor(Math.random() * HEARTS.length)],
      color: Math.random() > 0.5 ? "rgba(247,201,212," : "rgba(212,175,55,",
    });
  }

  function particleLoop() {
    ctx.clearRect(0, 0, W, H);

    if (particles.length < 28 && Math.random() < 0.04) {
      spawnParticle();
    }

    particles = particles.filter((particle) => particle.y > -40);

    particles.forEach((particle) => {
      particle.y -= particle.speed;
      particle.x += particle.drift;
      particle.rot += particle.rotSpeed;

      ctx.save();

      ctx.globalAlpha = particle.alpha;

      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rot);

      ctx.font = `${particle.size}px serif`;

      ctx.fillStyle = particle.color + particle.alpha + ")";

      ctx.fillText(particle.char, 0, 0);

      ctx.restore();
    });

    requestAnimationFrame(particleLoop);
  }

  particleLoop();
}

// ==========================================
// CONFETTI ANIMATION
// ==========================================

const confettiCanvas = $("#confetti");

let confettiPieces = [];
let confettiRunning = false;

if (confettiCanvas) {
  const cctx = confettiCanvas.getContext("2d");

  function resizeConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }

  resizeConfetti();

  window.addEventListener("resize", resizeConfetti);

  launchConfetti = function (count = 150) {
    const colors = [
      "#f7c9d4",
      "#d4af37",
      "#e8a0b4",
      "#ffffff",
      "#5c1a2a",
      "#fce4ea",
    ];

    for (let i = 0; i < count; i++) {
      confettiPieces.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,

        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.5) * 14 - 4,

        size: 6 + Math.random() * 8,

        color: colors[Math.floor(Math.random() * colors.length)],

        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.3,

        life: 1,
        decay: 0.008 + Math.random() * 0.006,

        shape: Math.random() > 0.5 ? "rect" : "circle",
      });
    }

    if (!confettiRunning) {
      runConfetti();
    }
  };

  function runConfetti() {
    confettiRunning = true;

    function frame() {
      cctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

      confettiPieces.forEach((piece) => {
        piece.x += piece.vx;
        piece.y += piece.vy;

        piece.vy += 0.25;
        piece.vx *= 0.99;

        piece.rot += piece.rotSpeed;
        piece.life -= piece.decay;

        cctx.save();

        cctx.globalAlpha = Math.max(0, piece.life);

        cctx.translate(piece.x, piece.y);
        cctx.rotate(piece.rot);

        cctx.fillStyle = piece.color;

        if (piece.shape === "rect") {
          cctx.fillRect(
            -piece.size / 2,
            -piece.size / 2,
            piece.size,
            piece.size * 0.6,
          );
        } else {
          cctx.beginPath();

          cctx.arc(0, 0, piece.size / 2, 0, Math.PI * 2);

          cctx.fill();
        }

        cctx.restore();
      });

      confettiPieces = confettiPieces.filter(
        (piece) => piece.life > 0 && piece.y < window.innerHeight + 40,
      );

      if (confettiPieces.length > 0) {
        requestAnimationFrame(frame);
      } else {
        confettiRunning = false;

        cctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      }
    }

    requestAnimationFrame(frame);
  }
} else {
  launchConfetti = () => {};
}

// ==========================================
// HERO PARALLAX EFFECT
// ==========================================

const heroVisual = $(".hero-visual");
const heroFlorals = $(".hero-florals");

if (!prefersReducedMotion) {
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;

      if (heroVisual && y < window.innerHeight) {
        heroVisual.style.transform = `translateY(${y * 0.12}px)`;
      }

      if (heroFlorals && y < window.innerHeight) {
        heroFlorals.style.transform = `translateY(${y * 0.2}px)`;
      }
    },
    { passive: true },
  );
}

// ==========================================
// INITIALISE WEBSITE
// ==========================================

function initialiseWebsite() {
  observeReveals();

  // Observe cards created dynamically.
  $$(".love-card, .wish-card, .video-card").forEach((element) => {
    revealObserver.observe(element);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialiseWebsite);
} else {
  initialiseWebsite();
}

// ==========================================
// GLOBAL CONFIGURATION
// ==========================================

window.MORAY_CONFIG = CONFIG;
