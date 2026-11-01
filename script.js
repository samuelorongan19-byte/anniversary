/*
 * BABEH'S LITTLE WORLD
 * Personalize the dates, photos, captions, reasons, and letter in this object.
 * All photo paths are relative to this project folder.
 */
const PERSONALIZATION = {
  nickname: "Babeh",
  anniversaryDate: "2026-11-04", // YYYY-MM-DD; countdown uses local device time
  relationshipStartDate: "2021-11-04",
  featuredPhoto: "assets/images/Couple-Main.jpg",
  hobbies: [
    { title: "Wattpad Reading", icon: "▤", image: "assets/images/hobby-wattpad.jpg", alt: "A stack of story books", description: "For the stories that take you to another world.", detail: "A little world between the pages, waiting to be explored." },
    { title: "Crochet", icon: "✿", image: "assets/images/hobby-crochet.jpg", alt: "Babeh wearing a handmade crochet hat", description: "For the beautiful things you create with your own hands.", detail: "Made with care, one little loop at a time." },
    { title: "Fuzzy Loop", icon: "〰", image: "assets/images/hobby-fuzzyloop.jpg", alt: "Babeh holding a bouquet of flowers", description: "For all the cute and creative things you enjoy making.", detail: "A soft little space for all the things you love to make." },
    { title: "Baking", icon: "♡", image: "assets/images/hobby-baking.jpg", alt: "Babeh in a baker's uniform", description: "For the sweet little creations that come from your creativity.", detail: "For the care and creativity you bring to every little creation." }
  ],
  reasons: [
    { title: "Your laugh", icon: "☼", message: "Your laugh has a way of making even my ordinary days feel special." },
    { title: "Your Personality", icon: "✧", message: "I love your BIG PERSONALITY and the little things that make you who you are. You never have to be anyone else." },
    { title: "The Way You Make Me Feel", icon: "♡", message: "You make me feel loved, appreciated, and lucky to have someone like you." }
  ],
  favoriteThings: [
    { name: "Pizza", image: "assets/images/favourite-funny-01.jpg", alt: "Babeh with pizza", note: " a cheesy favorite", caption: "Pizza time" },
    { name: "Nuts", image: "assets/images/favourite-funny-02.jpg", alt: "A bowl of mixed nuts", note: " a crunchy little snack", caption: "A crunchy favorite" },
    { name: "Soft drinks", image: "assets/images/favourite-funny-03.jpg", alt: "Colorful cans of soft drinks", note: " something fizzy", caption: "Something fizzy" },
    { name: "Tulips", image: "assets/images/favourite-funny-04.jpg", alt: "A playful tulip collage", note: "a flower picked for you", caption: "Tulips for you" }
  ],
  letter: `My dearest Babeh,

Hi babeh my love, Five years. It feels incredible to think about how much time has passed and how many moments have become part of our story.

I made this little website not because I needed a reason, but because I wanted to create something special for someone who means so much to me(kahit dito man lang makabawi ako<3).
I hope this simple gift brings a smile to your face and reminds you of the love and joy we share. I can't afford some of things you deserve, but i forgot that i am an IT yeah thankyou for always being there for me, kahit minsan asot pusa tayo HAHAHAHA so ayun loveyou so much!!
Dagdag ko lang na sorry if I am being not responsible for keeping pictures and videos of yours, I am being too lazy and i am verry sorry for that, forgive me muaaahhh hehe

Thank you for being you.

Happy 5th Anniversary, Babeh.🩵🩵

I love you so much!!!.`
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function escapeAttribute(value) { return escapeHTML(value); }

function renderHobbies() {
  const grid = $("#hobby-grid");
  grid.innerHTML = PERSONALIZATION.hobbies.map((hobby, index) => `
    <button class="hobby-card glass hobby-${index + 1}" type="button"
      data-lightbox="${escapeAttribute(hobby.image)}" data-title="${escapeAttribute(hobby.title)}"
      data-description="${escapeAttribute(`${hobby.description} ${hobby.detail}`)}"
      aria-label="View ${escapeAttribute(hobby.title)}: ${escapeAttribute(hobby.description)}">
      <span class="hobby-image-wrap"><img src="${escapeAttribute(hobby.image)}" alt="${escapeAttribute(hobby.alt)}" loading="lazy"><span class="hobby-image-icon" aria-hidden="true">${escapeHTML(hobby.icon)}</span></span>
      <span class="hobby-copy"><span class="hobby-index">A LITTLE PIECE OF YOU · 0${index + 1}</span><strong>${escapeHTML(hobby.title)}</strong><span class="hobby-description">${escapeHTML(hobby.description)}</span><span class="hobby-action">Open this little world <b aria-hidden="true">↗</b></span></span>
    </button>`).join("");
}

function renderReasons() {
  const grid = $("#reason-grid");
  grid.innerHTML = PERSONALIZATION.reasons.slice(0, 3).map((reason, index) => `
    <button class="reason-card" type="button" aria-pressed="false" aria-label="${escapeHTML(reason.title)}. Tap to reveal the message.">
      <span class="reason-inner">
        <span class="reason-face reason-front glass">
          <span class="reason-number">REASON 0${index + 1}</span>
          <span class="reason-icon" aria-hidden="true">${escapeHTML(reason.icon)}</span>
          <span class="reason-title"><strong>${escapeHTML(reason.title)}</strong></span>
          <span class="reason-hint">TAP TO TURN OVER ↻</span>
        </span>
        <span class="reason-face reason-back glass" aria-hidden="true">
          <span class="reason-number">A LITTLE NOTE FOR YOU</span>
          <span class="reason-message">${escapeHTML(reason.message)}</span>
          <span class="reason-hint">TAP TO TURN BACK ↻</span>
        </span>
      </span>
    </button>`).join("");
  $$(".reason-card", grid).forEach(card => card.addEventListener("click", () => {
    const flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", String(flipped));
    $(".reason-back", card).setAttribute("aria-hidden", String(!flipped));
    card.setAttribute("aria-label", flipped ? "Love note revealed. Tap to turn back." : "Tap to reveal the love note.");
  }));
}

function renderFavorites() {
  const gallery = $("#favorite-gallery");
  gallery.innerHTML = PERSONALIZATION.favoriteThings.map((item, index) => `
    <button class="favorite-photo glass" type="button" data-photo-index="${index}"
      data-lightbox="${escapeAttribute(item.image)}" data-title="${escapeAttribute(item.name)}"
      data-description="${escapeAttribute(item.note)}" aria-label="Open ${escapeAttribute(item.name)} photo">
      <span class="favorite-image-wrap"><img src="${escapeAttribute(item.image)}" alt="${escapeAttribute(item.alt)}" loading="lazy"><span class="favorite-image-placeholder" aria-hidden="true">♡</span></span>
      <span class="favorite-caption"><span><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.note)}</small></span><b aria-hidden="true">♡</b></span>
      <span class="favorite-number">0${index + 1} / 04</span>
    </button>`).join("");
}

function handleMissingImages(root = document) {
  $$('img', root).forEach(image => image.addEventListener("error", () => {
    image.hidden = true;
    const parent = image.closest(".photo-button, .hobby-image-wrap, .favorite-image-wrap");
    if (!parent) return;
    parent.classList.add("image-missing");
    const placeholder = parent.querySelector(".image-placeholder, .favorite-image-placeholder");
    if (placeholder) placeholder.textContent = "a favorite moment goes here";
    const card = parent.closest("[data-lightbox]");
    if (card) {
      card.removeAttribute("data-lightbox");
      card.setAttribute("aria-label", "Photo placeholder — add a local image in assets/images");
    }
  }, { once: true }));
}

function setupCountdown() {
  const [year, month, day] = PERSONALIZATION.anniversaryDate.split("-").map(Number);
  const target = new Date(year, month - 1, day, 0, 0, 0, 0);
  const container = $("#countdown-values");
  const message = $("#anniversary-message");
  let celebrated = false;
  const tick = () => {
    const remaining = target.getTime() - Date.now();
    if (remaining <= 0) {
      container.classList.add("is-celebrating");
      message.hidden = false;
      if (!celebrated) { celebrated = true; celebrate(); }
      return;
    }
    const seconds = Math.floor(remaining / 1000);
    const values = { days: Math.floor(seconds / 86400), hours: Math.floor((seconds % 86400) / 3600), minutes: Math.floor((seconds % 3600) / 60), seconds: seconds % 60 };
    Object.entries(values).forEach(([key, value]) => {
      const node = $(`[data-time="${key}"]`);
      node.textContent = key === "days" ? String(value) : String(value).padStart(2, "0");
    });
  };
  tick();
  window.setInterval(tick, 1000);
}

function celebrate() {
  const layer = $("#heart-layer");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let index = 0; index < 18; index++) {
    window.setTimeout(() => {
      const star = document.createElement("span");
      star.className = "heart-burst";
      star.textContent = index % 3 === 0 ? "✦" : "♡";
      star.style.left = `${5 + Math.random() * 90}%`;
      star.style.top = `${55 + Math.random() * 38}%`;
      star.style.setProperty("--dx", `${Math.round(Math.random() * 100 - 50)}px`);
      layer.append(star);
      window.setTimeout(() => star.remove(), 1500);
    }, index * 110);
  }
}

function setupNavigation() {
  const links = $$(".nav-link");
  const sectionIds = ["home", "her-world", "reasons", "favorites", "letter"];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(link => {
      const active = link.dataset.nav === visible.target.id;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-25% 0px -55% 0px", threshold: [0, .15, .4] });
  sections.forEach(section => observer.observe(section));
}

function setupLightbox() {
  const dialog = $("#lightbox");
  const image = $("#lightbox-image");
  const title = $("#lightbox-title");
  const description = $("#lightbox-description");
  const openImage = button => {
    if (dialog.open || !button.dataset.lightbox) return;
    image.src = button.dataset.lightbox;
    image.alt = button.querySelector("img")?.alt || button.dataset.title || "A favorite photo";
    title.textContent = button.dataset.title || "A little moment";
    description.textContent = button.dataset.description || "";
    dialog.showModal();
  };
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-lightbox]");
    if (button && !button.classList.contains("favorite-photo")) openImage(button);
  });
  // Delay a favorite-photo single tap briefly so a second tap can trigger the heart burst.
  $$(".favorite-photo").forEach(button => {
    let timer;
    let lastTap = 0;
    button.addEventListener("click", event => {
      event.stopImmediatePropagation();
      if (event.detail === 0) {
        window.clearTimeout(timer);
        openImage(button);
        return;
      }
      const now = Date.now();
      if (event.detail > 1 || now - lastTap < 420) {
        window.clearTimeout(timer);
        timer = undefined;
        lastTap = 0;
        burstHearts(event.clientX, event.clientY, button);
        return;
      }
      lastTap = now;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => openImage(button), 420);
    });
  });
  $("#close-lightbox").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => image.removeAttribute("src"));
}

function burstHearts(x, y, target) {
  const layer = $("#heart-layer");
  const bounds = target.getBoundingClientRect();
  const originX = x || bounds.left + bounds.width / 2;
  const originY = y || bounds.top + bounds.height / 2;
  for (let index = 0; index < 9; index++) {
    const heart = document.createElement("span");
    heart.className = "heart-burst";
    heart.textContent = index % 3 === 0 ? "✦" : "♡";
    heart.style.left = `${originX}px`;
    heart.style.top = `${originY}px`;
    heart.style.setProperty("--dx", `${Math.round(Math.random() * 130 - 65)}px`);
    layer.append(heart);
    window.setTimeout(() => heart.remove(), 1400);
  }
}

function applyPersonalization() {
  $("#welcome-title em").textContent = PERSONALIZATION.nickname;
  $("#anniversary-message strong").textContent = `Happy 5th Anniversary, ${PERSONALIZATION.nickname}!`;
  $(".closing-signature").firstChild.nodeValue = `Happy 5th Anniversary, ${PERSONALIZATION.nickname}. `;
  $(".envelope-label").textContent = `for my ${PERSONALIZATION.nickname}`;
  document.title = `${PERSONALIZATION.nickname}'s Little World | Five Years Together`;
  const image = $(".featured-photo");
  const button = $(".photo-button");
  image.src = PERSONALIZATION.featuredPhoto;
  button.dataset.lightbox = PERSONALIZATION.featuredPhoto;
  $("#letter-body").textContent = PERSONALIZATION.letter;
}

function setupLetter() {
  const envelope = $("#envelope");
  const dialog = $("#letter-dialog");
  envelope.addEventListener("click", () => {
    envelope.classList.add("is-open");
    window.setTimeout(() => { if (!dialog.open) dialog.showModal(); }, 430);
  });
  const close = () => {
    if (dialog.open) dialog.close();
    envelope.classList.remove("is-open");
  };
  $("#close-letter").addEventListener("click", close);
  dialog.addEventListener("click", event => { if (event.target === dialog) close(); });
  dialog.addEventListener("close", () => envelope.classList.remove("is-open"));
}

function setupWelcome() {
  const welcome = $("#welcome");
  const loader = $("#loader");
  window.setTimeout(() => loader.classList.add("is-gone"), 650);
  window.setTimeout(() => { if (!welcome.classList.contains("is-gone")) $("#enter-button").focus({ preventScroll: true }); }, 800);
  $("#enter-button").addEventListener("click", () => {
    welcome.classList.add("is-gone");
    document.body.classList.remove("locked");
    window.setTimeout(() => welcome.remove(), 850);
  });
  welcome.addEventListener("keydown", event => {
    if (event.key === "Tab" && !welcome.classList.contains("is-gone")) {
      event.preventDefault();
      $("#enter-button").focus();
    }
  });
  document.body.classList.add("locked");
}

renderHobbies();
renderReasons();
renderFavorites();
applyPersonalization();
handleMissingImages();
setupCountdown();
setupNavigation();
setupLightbox();
setupLetter();
setupWelcome();
$("#back-home").addEventListener("click", () => document.getElementById("home").scrollIntoView({ behavior: "smooth" }));
