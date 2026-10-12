// ============ LINEUP DATA ============
// Edit these lists to update the lineup. Order and tiers follow the official poster.
// Photos load from assets/artists/<slug>.jpg; until a photo is added, the card shows the initial.
// A social link left as "" hides that icon. Bios are placeholders until official copy arrives.
// Links marked "CHECK" were found by search but not confirmed as the artist's official account.
const BIO = "Artist bio coming soon.";

const HEADLINERS = [
  { name: "Darkoo", slug: "darkoo", bio: BIO,
    spotify: "https://open.spotify.com/artist/4QSTyDpxsKmv3UfavVUImR",
    instagram: "https://www.instagram.com/darkoo/",
    tiktok: "https://www.tiktok.com/@darkoo106" },
  { name: "Jeleel!", slug: "jeleel", bio: BIO,
    spotify: "https://open.spotify.com/artist/1FX1BFU0DbHRYgKP83pA0d",
    instagram: "https://www.instagram.com/jeleeeel/",
    tiktok: "https://www.tiktok.com/@jeleelyeah" },
  { name: "NSG", slug: "nsg", bio: BIO,
    spotify: "https://open.spotify.com/artist/31Ua7zSTJxegjyd49ujbSA",
    instagram: "",   // not found yet
    tiktok: "" },    // not found yet
];

const SUPPORT = [
  { name: "Skeete", slug: "skeete",
    spotify: "https://open.spotify.com/artist/7vwwjn0kTEsI82Gj6HGypO",
    instagram: "",   // not found yet
    tiktok: "https://www.tiktok.com/@skeete_music" },
  { name: "Madison B", slug: "madison-b",
    spotify: "",     // CHECK: https://open.spotify.com/artist/62YKr6THeghBuptOMjEf4w
    instagram: "",
    tiktok: "" },    // CHECK: https://www.tiktok.com/@madisonmbt
  { name: "RBC", slug: "rbc", spotify: "", instagram: "", tiktok: "" }, // not found yet
  { name: "Soli", slug: "soli", spotify: "", instagram: "", tiktok: "" }, // not found yet
  { name: "VV-Ace", slug: "vv-ace",
    spotify: "https://open.spotify.com/artist/58oXnUjX5TvylYa3gGNxca",
    instagram: "https://www.instagram.com/vv.ace/", // CHECK
    tiktok: "" },
  { name: "Alexandre", slug: "alexandre",
    instagram: "",   // CHECK: possibly @alexandrepermal
    tiktok: "" },
  { name: "PK", slug: "pk", instagram: "", tiktok: "" }, // not found yet
];

const HOSTS = [
  { name: "Willzwidavibez", slug: "willzwidavibez",
    instagram: "https://www.instagram.com/willzwidavibez/",
    tiktok: "https://www.tiktok.com/@willzzc" }, // CHECK
  { name: "Daddy Chulo", slug: "daddy-chulo",
    spotify: "", instagram: "", tiktok: "" },    // not found yet
  { name: "Jazmine Nikitta", slug: "jazmine-nikitta",
    instagram: "https://www.instagram.com/jazminenikitta/",
    tiktok: "https://www.tiktok.com/@jazminenikitta" },
];

const ICONS = {
  spotify: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm4.8 15.2a.7.7 0 0 1-1 .2c-2.7-1.6-6-2-10-1.1a.7.7 0 1 1-.3-1.4c4.3-1 8-.6 11 1.3.3.2.4.7.3 1Zm1.3-3a.9.9 0 0 1-1.2.3c-3-1.9-7.7-2.4-11.3-1.3a.9.9 0 1 1-.5-1.7c4.1-1.2 9.2-.6 12.7 1.5.4.3.6.8.3 1.2Zm.1-3.1C14.6 8.4 8.7 8.2 5.3 9.2a1 1 0 1 1-.6-2c3.9-1.2 10.4-1 14.5 1.5a1 1 0 1 1-1 1.9Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 2h-3.3v13.2a2.9 2.9 0 1 1-2-2.8V9a6.3 6.3 0 1 0 5.3 6.2V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7a4.4 4.4 0 0 1-4.4-4.7Z"/></svg>',
};

function photo(a) {
  return `<div class="photo">
    <span class="initial">${a.name[0]}</span>
    <img src="assets/artists/${a.slug}.jpg" alt="${a.name}" loading="lazy" onerror="this.remove()">
  </div>`;
}

function socials(a) {
  const links = ["spotify", "instagram", "tiktok"]
    .filter((k) => a[k])
    .map((k) => `<a href="${a[k]}" target="_blank" rel="noopener" aria-label="${a.name} on ${k}">${ICONS[k]}</a>`)
    .join("");
  return links ? `<div class="socials">${links}</div>` : "";
}

function card(a) {
  return `<article class="card">
    ${photo(a)}
    <h3>${a.name}</h3>
    ${a.bio ? `<p>${a.bio}</p>` : ""}
    ${socials(a)}
  </article>`;
}

document.getElementById("headliners").innerHTML = HEADLINERS.map(card).join("");
document.getElementById("support").innerHTML = SUPPORT.map(card).join("");
document.getElementById("hosts").innerHTML = HOSTS.map(card).join("");
