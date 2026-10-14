// ============ LINEUP DATA ============
// Source: "ARTIST BIOS" doc in the RIDDIMWORLD WEBSITE Drive folder.
// Order and tiers follow the official poster. Edit here to update the site.
//   photo:  file in assets/artists/ (leave out to show the artist's initial on a brand colour)
//   links:  leave a platform out to hide its icon
const HEADLINERS = [
  { name: "Darkoo", photo: "darkoo.webp",
    spotify: "https://open.spotify.com/artist/4QSTyDpxsKmv3UfavVUImR",
    instagram: "https://www.instagram.com/darkoo/",
    tiktok: "https://www.tiktok.com/@darkooreal",
    youtube: "https://www.youtube.com/c/darkoo" },
  { name: "Jeleel!", photo: "jeleel.webp",
    spotify: "https://open.spotify.com/artist/1FX1BFU0DbHRYgKP83pA0d",
    instagram: "https://www.instagram.com/jeleeeel/",
    tiktok: "https://www.tiktok.com/@jeleelyeah",
    youtube: "https://www.youtube.com/@jeleeeeel" },
  { name: "NSG", photo: "nsg.webp", photoWide: "nsg-wide.webp",  // wide shot used on phones, where this card spans the full row
   
    spotify: "https://open.spotify.com/artist/31Ua7zSTJxegjyd49ujbSA",
    instagram: "https://www.instagram.com/nsg_music/",
    tiktok: "https://www.tiktok.com/@nsg.music",
    youtube: "https://www.youtube.com/@NSG_Music" },
];

const SUPPORT = [
  { name: "Skeete", photo: "skeete.webp",
    spotify: "https://open.spotify.com/artist/7vwwjn0kTEsI82Gj6HGypO",
    instagram: "https://www.instagram.com/skeete_music/",
    tiktok: "https://www.tiktok.com/@skeete_music",
    youtube: "https://www.youtube.com/@skeetemusic1" },
  { name: "Madison B", photo: "madison-b.webp",
    spotify: "https://open.spotify.com/artist/1XQ3jX3mHoD8y32WYCYoYc",
    instagram: "https://www.instagram.com/madisonmbt/",
    tiktok: "https://www.tiktok.com/@madisonmbt",
    youtube: "https://www.youtube.com/@madisonmbt" },
  { name: "RBC", photo: "rbc.webp",
    instagram: "https://www.instagram.com/rbc3x/",
    youtube: "https://youtu.be/6s3VVTB6jPE" },
  { name: "Soli", photo: "soli.webp",
    spotify: "https://open.spotify.com/artist/6yYm7Asdzf0sxI68kAJB0s",
    instagram: "https://www.instagram.com/solitesema/",
    tiktok: "https://www.tiktok.com/@solitesema",
    youtube: "https://www.youtube.com/@SoliTess" },
  { name: "VV-Ace", photo: "vv-ace.webp",
    spotify: "https://open.spotify.com/artist/58oXnUjX5TvylYa3gGNxca",
    instagram: "https://www.instagram.com/vv.ace/",
    tiktok: "https://www.tiktok.com/@vvace",
    youtube: "https://www.youtube.com/@VV-Ace" },
  { name: "Alexandre", photo: "alexandre.webp",
    instagram: "https://www.instagram.com/alexandre.permal/",
    tiktok: "https://www.tiktok.com/@alexandrepermal",
    youtube: "https://www.youtube.com/@alexandre.permal" },
  { name: "PK",
    instagram: "https://www.instagram.com/pk.dade/",
    tiktok: "https://www.tiktok.com/@pklevels",
    youtube: "https://www.youtube.com/@Pkdade" },
];

const HOSTS = [
  { name: "Willzwidavibez", photo: "willzwidavibez.webp",
    instagram: "https://www.instagram.com/willzwidavibez/",
    tiktok: "https://www.tiktok.com/@willzwidavibez",
    youtube: "https://www.youtube.com/watch?v=OUw7JC3bkUY" },
  { name: "Daddy Chulo", photo: "daddy-chulo.webp",
    instagram: "https://www.instagram.com/da_ddychulo/",
    tiktok: "https://www.tiktok.com/@da_ddychulo",
    youtube: "https://youtu.be/DbNtQ4knyIk" },
  { name: "Jazmine Nikitta", photo: "jazmine-nikitta.webp",
    instagram: "https://www.instagram.com/jazminenikitta/",
    tiktok: "https://www.tiktok.com/@jazminenikitta",
    youtube: "https://www.youtube.com/@jazminenikitta" },
];

// Brand colours used behind acts without a photo yet
const SWATCHES = ["var(--aqua)", "var(--navy)", "var(--inferno)", "var(--green)", "var(--magenta)"];
const PLATFORMS = { spotify: "Spotify", instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube" };

function socials(a) {
  const links = Object.keys(PLATFORMS).filter((k) => a[k]).map((k) =>
    `<a class="mask" style="--src:url(assets/icons/${k}.png)" href="${a[k]}" target="_blank" rel="noopener" aria-label="${a.name} on ${PLATFORMS[k]}"></a>`
  ).join("");
  return links ? `<div class="socials">${links}</div>` : "";
}

function card(a, i, headliner) {
  const media = a.photo
    ? `<picture>${a.photoWide ? `<source media="(max-width: 720px)" srcset="assets/artists/${a.photoWide}">` : ""}<img src="assets/artists/${a.photo}" alt="${a.name}" loading="lazy"></picture>`
    : `<span class="initial" aria-hidden="true">${a.name[0]}</span>`;
  return `<article class="card">
    <div class="photo" style="--c:${SWATCHES[i % SWATCHES.length]}">
      ${media}
      ${headliner ? `<span class="badge">${a.name}</span>` : ""}
    </div>
    <h3${headliner ? ' class="sr-only"' : ""}>${a.name}</h3>
    ${socials(a)}
  </article>`;
}

document.getElementById("headliners").innerHTML = HEADLINERS.map((a, i) => card(a, i, true)).join("");
document.getElementById("support").innerHTML = SUPPORT.map((a, i) => card(a, i)).join("");
document.getElementById("hosts").innerHTML = HOSTS.map((a, i) => card(a, i + 2)).join("");

// ---------- Slide-in: headliners first, then the rest of the bill, then hosts ----------
// Each tier animates when it scrolls into view; cards alternate entering from left and right.
if ("IntersectionObserver" in window) {
  document.querySelector(".lineup").classList.add("js-slide");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      [...e.target.children].forEach((c, i) => {
        c.style.setProperty("--from", i % 2 ? "110vw" : "-110vw");
        c.style.setProperty("--delay", `${i * 0.15}s`);
        c.classList.add("in");
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.2 });
  ["headliners", "support", "hosts"].forEach((id) => io.observe(document.getElementById(id)));
}
