<script>

// =========================
// TEXT POPUP (TYPEWRITER)
// =========================

const message = `I wish you a happy birthday, Amyyyyyyyy!💖


Today is your birthday, 14th november 2026 and also making you 13 (6 more till I can legally breed u muhehehehe;])

(I know I asked it again but I was either on february or March so I rathered to ask before saying something wrong to u sowwwy)

I remember pretty much everything, from february 2025, when we first met to now, I remember every little thing we done together, playing, trolling around, sharing memories and more

I also remember some importants day to my eyes between us like in february when we first met on rival via dark, or also june where I finally had the courage to actually tell you I wanted to date you (and breed you one day muhehe, anyways), or also the 18th ‎september ‎2025 where you had finally trusted me enough to show me ur pussy<3 (which i milked a lot but that's another add-on)

I know we keep arguing about random stuff a lot, mostly this year (Mostly due to Vaelie and me), I'm sorry about it but just know that to my eyes you'll always be and be staying my mommy that I gooned so much i probably wasted some millions of sperm for ur beauty

Also quit trash talking about yourself, about being hairy, fat, having a bad hair, looking ugly on pictures, I've already told u many time, hairy or shaved, fat or thin, having a bad hair or good hair, looking ugly on pictures or correct you still be Amy, or my mommy, which makes me like it a lot<3

I also thank you for trusting me enough this year to share more of your body hehe, I dont do it everytime but I do thank you for every pictures u give me of yourself whatever is it, face, feet, pussy, boobies, legs or anything pretty much, just know I've gooned at all of them (or at least over 90% of them) because of how much I love you and I love how you look

I also keep saying I'll eat you, that I'll breed you or fuck you or bother you around gooning asking you to make yourself less tights, I know I may be bothering on that but I really ask it for a reason, I dont want to hurt you or make u bleed if I really do what i say to you (Fingering your pussy, fingering your asshole, fucking ur pussy, Fucking your asshole, I just want u to enjoy it without suffering because doing is it to be pleasured, the both of us.

I also know I'm always asking you for pussy or boobies pictures, a lot, but I'll be honest with you, I do look porn online, a lot, that is hentai or real porn I dont really mind it to me both is equal but, I do promise you one thing, your pussy and breast, they're the only actual sexual bodypart pictures I loved a lot, why you may ask? Because as you're shy and stressed your pictures are not "perfect" as how people would call them, which also makes them have a charm and cute appearance<3

I'm sorry for being a dumbass sometime or acting cold, I dont mean to most of the times by the way

I also sometime troll around to hard making you do stuffs I actually was joking around (As example of the 2 pussy pictures you gave me for the discord nitro which I was just trolling around and wanted to gift you), I'm sorry for it and I do promise I'll try to find ways to refund you on these :3

And also you keep saying "I dont know what to give" "I dont know how to repay you/refund you" but just know that every gift I do to you are gifts I want to do, and if I have to be honest (I'll never sell them but its just for an example), if I make a zip folder of EVERY pictures I've got so far from you (Face, feet, full body, pussy, boobies) it might be Worth above 500 or 600 euros (The 2 pussy picture i told earlier, some people would just sell one for like 40 or 50 euros), know it that everytime I'm saying "I'll let my friends jerk off at you", "I'll leak your pussy" or stuffs like that I dont mean it out of a troll, I'm the only one who has ever seen these pictures (out of one feet pic that I cannot lie onett did see but he doesnt know about its you or wtv (I'm sorry for that its just I wanted to give him a file while streaming and for whatever reason discord opened the downloads folder which had your feet pic (They were not bare, know it)))

But I'm still willing to do what I've said, if one day u ever feel so horny u just straight up want a dick pic from me to jerk off, say it and you'll get one (If you ever decide to goon, and to goon at me ig), me I dont feel like asking you (out of maybe feet/face pics to goon because I love your cute little face and feeties)

But yeah that's pretty much everything I had to say, I hope you'll have a great and happy birthday and that you'll have a great gooning session with me one day (When I ask you to goon on cam I'm deadass willig to jerk off with you btw)

I love you so much Amyyyyyyyyyy (enough to fill your little cutie pussy of warm cum and make a little us <3) and again, Happy birthdayyyyyyyyyy

Hope you'll enjoy the stuffs I made for you, this message and your gifts ;3`;

let i = 0;
const speed = 25;

function typeWriter() {
   if (i < message.length) {
      document.getElementById("typedText").innerHTML += message.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
   }
}

function openTextPopup() {
   document.getElementById("textPopup").style.display = "flex";
   document.getElementById("typedText").innerHTML = "";
   i = 0;
   typeWriter();
}


// =========================
// IMAGE POPUP (GALLERY)
// =========================

const images = [
   "photo1.jpg",
   "photo2.jpg",
   "photo3.jpg",
   "photo4.jpg",
   "photo5.jpg",
   "photo6.jpg",
   "photo7.jpg",
   "photo8.jpg",
   "photo9.jpg",
   "photo10.jpg"
];

let currentIndex = 0;

function openImagePopup(index) {
   currentIndex = index;
   document.getElementById("popupImage").src = images[currentIndex];
   document.getElementById("imagePopup").style.display = "flex";
}

function changeImage(step) {
   currentIndex += step;

   if (currentIndex < 0) currentIndex = images.length - 1;
   if (currentIndex >= images.length) currentIndex = 0;

   document.getElementById("popupImage").src = images[currentIndex];
}


// =========================
// CLOSE POPUPS
// =========================

function closePopup(id) {
   document.getElementById(id).style.display = "none";
}

// click outside to close
window.addEventListener("click", function (e) {
   document.querySelectorAll(".popup-overlay").forEach(popup => {
      if (e.target === popup) popup.style.display = "none";
   });
});

</script>
  <!-- FOOTER -->
  <footer>
    <div class="footer-crown">👑</div>
    <p class="footer-text">"Happy Birthday, Amy, the most perfect person we know."</p>
    <p class="footer-gd">All rights reserved, Fenrystudio· Unauthorized use is strictly prohibited</p>
  </footer>

</div>

<script>
/* ══════════════════════════════
   FIREWORKS
══════════════════════════════ */
const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let animId;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const COLORS = [
  '#c084fc', '#fb7185', '#f9c74f', '#818cf8',
  '#ffffff', '#e879f9', '#f472b6', '#a78bfa'
];

class Particle {
  constructor(x, y, color) {
    this.x = x; this.y = y;
    this.color = color;
    const angle = Math.random() * Math.PI * 2;
    const speed = 9 + Math.random() * 5;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.alpha = 1;
    this.decay = 0.012 + Math.random() * 0.015;
    this.radius = 2 + Math.random() * 2.5;
    this.gravity = 0.06;
    this.tail = [];
  }
  update() {
    this.tail.push({ x: this.x, y: this.y });
    if (this.tail.length > 6) this.tail.shift();
    this.vx *= 0.98;
    this.vy = this.vy * 0.98 + this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;
  }
  draw() {
    ctx.save();
    // tail
    for (let i = 0; i < this.tail.length; i++) {
      const t = this.tail[i];
      const a = (i / this.tail.length) * this.alpha * 0.5;
      ctx.globalAlpha = a;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(t.x, t.y, this.radius * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }
    // head
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 8;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function explode(x, y) {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const count = 60 + Math.floor(Math.random() * 40);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(x, y, color));
  }
}

function launchRandom() {
  const x = canvas.width * (0.15 + Math.random() * 0.7);
  const y = canvas.height * (0.05 + Math.random() * 0.55);
  explode(x, y);
}

function animateFireworks() {
  ctx.fillStyle = 'rgba(10,10,24,0.18)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.alpha > 0.01);
  particles.forEach(p => { p.update(); p.draw(); });
  animId = requestAnimationFrame(animateFireworks);
}

animateFireworks();

// Launch fireworks periodically
let launchCount = 0;
const launchInterval = setInterval(() => {
  launchRandom();
  if (Math.random() > 0.5) launchRandom(); // double burst
  launchCount++;
  if (launchCount > 60) clearInterval(launchInterval);
}, 400);

// Auto transition after 7 seconds
const autoTimer = setTimeout(() => skipIntro(), 7500);

function skipIntro() {
  clearTimeout(autoTimer);
  clearInterval(launchInterval);
  // Extra burst on skip
  for (let i = 0; i < 5; i++) launchRandom();

  const intro = document.getElementById('intro');
  intro.classList.add('hidden');

  setTimeout(() => {
    intro.style.display = 'none';
    cancelAnimationFrame(animId);
    const main = document.getElementById('main');
    main.style.display = 'block';
    requestAnimationFrame(() => main.classList.add('visible'));
    initReveal();
  }, 1000);
}

/* ══════════════════════════════
   SCROLL REVEAL
══════════════════════════════ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

/* ══════════════════════════════
   IMAGE UPLOAD
══════════════════════════════ */
function uploadImage(slot) {
  const input = slot.nextElementSibling;
  input._slot = slot;
  input.click();
}

function previewImage(input) {
  const file = input.files[0];
  if (!file) return;
  const slot = input._slot;
  const reader = new FileReader();
  reader.onload = e => {
    slot.innerHTML = '';
    const img = document.createElement('img');
    img.src = e.target.result;
    slot.appendChild(img);
    slot.style.border = 'none';
    slot.style.height = '220px';
  };
  reader.readAsDataURL(file);
}
</script>
