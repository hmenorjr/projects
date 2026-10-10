const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='#c9d6e2'/><text x='50%' y='50%' text-anchor='middle' font-family='sans-serif' font-size='26' fill='#4a5d70'>Photo on broker page</text></svg>");
const M = "https://www.maklarhuset.ax/objekt-till-salu/", MI = "https://www.maklarhuset.ax/sites/default/files/styles/object_list/public/object/main_image/";
const A = "https://www.aktialkv.fi/sv/bostad-till-salu/jomala/", AI = "https://d372r717gpt3jp.cloudfront.net/600x,fit/kivimedia/images/realty/27904/";

const HOUSES = [
    { addr: "Överbyvägen 26", town: "Jomala", area: "Överby", price: 108000, kind: "detached", rooms: "6+ rooms + kitchen (5 bedrooms)", m2: 183, plot: 1784, year: 1913, broker: "Aktia", img: AI + "4335012/1782141554312-10429.jpg", url: A + "21845912", note: "Turn-of-the-century log house; condition listed as fair. Own well, municipal sewage. Can be bought without right of domicile." },
    { addr: "Ringvägen 17", town: "Mariehamn", area: "Sveden", price: 125000, kind: "detached", rooms: "4 bedrooms, living room + kitchen", m2: 157, plot: 1021, year: 1965, broker: "Mäklarhuset", img: MI + "DSC01424_edited.jpg.webp?itok=CpBvMxvo", url: M + "valplanerat-bostadshus-pa-privat-horntomt", note: "Needs extensive modernisation. Basement radon above the limit; living floor within limits.", warn: 1 },
    { addr: "Lönnelundsgatan 9", town: "Jomala", area: "Möckelö (postal address Mariehamn)", price: 175000, kind: "detached", rooms: "4 rooms + kitchen", m2: 170, plot: 2300, year: 1962, broker: "Aktia", img: AI + "4333694/1781088417959-77896.jpg", url: A + "9762395", note: "Sea view, about 60 m from the shore. Basement with sauna and garage. Radon measured, good values." },
    { addr: "Askuddsvägen 13", town: "Mariehamn", area: "Backeberg", price: 179000, kind: "detached", rooms: "Not stated: kitchen, living room, dining, 3–4 bedrooms", m2: 120, plot: 677, year: 1978, broker: "Mäklarhuset", img: MI + "DSC02309_edited.jpg.webp?itok=gyZ_S3Tj", url: M + "trivsamt-bostadshus-fristaende-garage", note: "About 50 m² extra outbuildings plus detached garage. Ground-source heating." },
    { addr: "Alfågelgränd 13", town: "Mariehamn", area: "Västernäs", price: 185000, kind: "detached", rooms: "Not stated: kitchen, living/dining, 3 bedrooms", m2: 130, plot: 805, year: 1974, broker: "Mäklarhuset", img: MI + "DSC00758_edited.jpg.webp?itok=smEnEoie", url: M + "enplanshus-vid-atervandsgrand", note: "One-storey house on a cul-de-sac next to a green area. Attached garage. Energy class G." },
    { addr: "Gudingsgränd 4", town: "Mariehamn", area: "Västernäs", price: 185000, kind: "detached", rooms: "Not stated: kitchen, living/dining, 2 bedrooms", m2: 140, plot: 683, year: 1979, broker: "Mäklarhuset", img: MI + "DSC01985_edited.jpg.webp?itok=UJs9IXIT", url: M + "familjevanligt-bostadshus-lugnt-omrade", note: "South-facing garden, fireplace, garage and carport. Original windows." },
    { addr: "Nybondasvägen 8 C", town: "Jomala", area: "Sviby", price: 198000, kind: "shared", rooms: "3 rooms + kitchen", m2: 75, plot: null, year: 2017, broker: "Aktia", img: AI + "4344738/1789395196397-10973.jpg", url: A + "20291606", note: "Row house in a housing company, single floor, large terrace and carport. Monthly charge €225." },
    { addr: "Småholmavägen 3 A 6", town: "Jomala", area: "Möckelö Strand", price: 218000, kind: "shared", rooms: "3 rooms + kitchen", m2: 79.3, plot: null, year: 2019, broker: "Mäklarhuset", img: MI + "IMG_0738.jpg.webp?itok=iefz7zSt", url: M + "modern-och-stilren-radhustrea", note: "Row-house-style flat in a housing company, leased plot. Carport with engine heater. Monthly charge €158.60." },
    { addr: "Flygfältsvägen 13 (flat 1)", town: "Jomala", area: "Sviby", price: 235000, kind: "shared", rooms: "4 rooms + kitchen", m2: 100, plot: null, year: 1956, broker: "Mäklarhuset", img: MI + "DJI_0529_edited.jpg.webp?itok=ybcC2uDM", url: M + "modern-parhusfyra-fint-lage", note: "Semi-detached, two floors, fully renovated 2021. Housing-company share on a leased plot. Monthly charge €432.", warn: 1 },
    { addr: "Knappelstensvägen 28", town: "Mariehamn", area: "Johannebo", price: 240000, kind: "detached", rooms: "Not stated: kitchen, living/dining, 3 bedrooms + guest room", m2: 214, plot: 773, year: 1980, broker: "Mäklarhuset", img: MI + "DSC02179_edited.jpg.webp?itok=twwxBCTJ", url: M + "enplanshus-barnvanligt-villakvarter", note: "Area includes outbuildings and garage. Ground-source heat pump, energy class B." },
    { addr: "Hagtornsvägen 9", town: "Mariehamn", area: "Ytternäs", price: 250000, kind: "detached", rooms: "Not stated: kitchen, dining, living room, 3 bedrooms + loft room", m2: 149, plot: 1200, year: 1952, broker: "Mäklarhuset", img: MI + "DJI_0804_edited.jpg.webp?itok=JC_pTOTv", url: M + "egnahemshus-attraktivt-villakvarter", note: "Largely original condition, modernisation needed. Plot not yet surveyed by the city, so a building ban applies until it is (about €1,110 survey cost).", warn: 1 },
    { addr: "Ringvägen 64", town: "Mariehamn", area: "Sveden", price: 250000, kind: "detached", rooms: "5 rooms + kitchen", m2: 165, plot: 651, year: 1964, broker: "Mäklarhuset", img: MI + "RIngv%C3%A4gen%2064.jpg.webp?itok=bnS8qRfY", url: M + "modernt-och-bekvamt-enplanshus", note: "Four bedrooms, kitchen renovated 2012, glazed veranda, district heating." },
    { addr: "Dalgränd 1", town: "Mariehamn", area: "Dalkarby", price: 250000, kind: "detached", rooms: "5 rooms + kitchen", m2: 125, plot: 1600, year: 1955, broker: "Din Fastighet", img: "https://www.dinfastighet.ax/wp-content/uploads/2025/04/johannebo-121-768x512.jpg", url: "https://www.dinfastighet.ax/till-salu/dalgrand1/", note: "Renovated 2012–2025. Upstairs bathroom not yet finished. The listing header says €250,000 but its text says €255,000; confirm with the broker.", warn: 1 }
];

const $ = id => document.getElementById(id);
const eur = n => "€" + n.toLocaleString("en-FI").replace(/,/g, " ");
const num = n => n.toLocaleString("en-FI").replace(/,/g, " ");
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function card(h) {
    const typeLabel = h.kind === "detached" ? "Detached house" : "Row / semi-detached";
    return `<article class="card">
  <img src="${esc(h.img)}" alt="${esc(h.addr)}, ${esc(h.town)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src=PLACEHOLDER">
  <div class="body">
    <div class="top"><span class="price">${eur(h.price)}</span><span class="type">${typeLabel}</span></div>
    <h2 class="addr">${esc(h.addr)}, <span class="town">${esc(h.town)}</span></h2>
    <dl>
      <dt>Rooms</dt><dd>${esc(h.rooms)}</dd>
      <dt>Living area</dt><dd>about ${num(h.m2)} m²</dd>
      ${h.plot ? `<dt>Plot</dt><dd>about ${num(h.plot)} m²</dd>` : ""}
      <dt>Built</dt><dd>${h.year}</dd>
      <dt>Area</dt><dd>${esc(h.area)}</dd>
      <dt>Broker</dt><dd>${esc(h.broker)}</dd>
    </dl>
    <p class="note${h.warn ? " warn" : ""}">${esc(h.note)}</p>
    <a class="link" href="${esc(h.url)}" target="_blank" rel="noopener noreferrer">View listing at ${esc(h.broker)}</a>
  </div>
</article>`;
}

function render() {
    const t = $("town").value, k = $("type").value, max = +$("max").value, s = $("sort").value;
    $("maxv").textContent = eur(max);
    let r = HOUSES.filter(h => (!t || h.town === t) && (!k || h.kind === k) && h.price <= max);
    r.sort((a, b) => s === "pd" ? b.price - a.price : s === "a" ? b.m2 - a.m2 : a.price - b.price);
    $("count").textContent = r.length + " of " + HOUSES.length + " homes";
    $("list").innerHTML = r.length ? r.map(card).join("") : '<p class="empty">No homes match these filters. Raise the maximum price or change the town or type.</p>';
}
["town", "type", "max", "sort"].forEach(id => $(id).addEventListener("input", render));
render();