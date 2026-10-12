const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='#c9d6e2'/><text x='50%' y='50%' text-anchor='middle' font-family='sans-serif' font-size='26' fill='#4a5d70'>Photo on broker page</text></svg>");
const M = "https://www.maklarhuset.ax/objekt-till-salu/", MI = "https://www.maklarhuset.ax/sites/default/files/styles/object_list/public/object/main_image/";

const HOUSES = [
    { 
        addr: "Framnäsvägen 2", 
        town: "Mariehamn", 
        area: "Västra Klinten", 
        price: 118000, 
        kind: "detached", 
        rooms: "4 rooms, utility room, sauna, 2 baths", 
        m2: 98.9, 
        plot: 924, 
        year: 1983, 
        broker: "Aktia", 
        img: "https://d372r717gpt3jp.cloudfront.net/1600x1200,fit/kivimedia/images/realty/27904/4307424/1763551875480-9054.jpg", 
        url: "https://www.aktialkv.fi/sv/bostad-till-salu/mariehamn/21981906", 
        energy: "Class E (E2018)", 
        heating: "Electric radiators & air-to-air heat pump", 
        note: "Well-planned Myresjö house near center. Leased plot from city (optional purchase available)." 
    },
    { 
        addr: "Blomstervägen 21", 
        town: "Mariehamn", 
        area: "Hindersböle", 
        price: 150000, 
        kind: "detached", 
        rooms: "5 rooms + kitchen", 
        m2: 155, 
        plot: 1294, 
        year: 1971, 
        broker: "Lyyski", 
        img: "https://lyyski.winter.ax/cdn-cgi/image/quality=80,format=auto,width=2000/https://lyyski.wntr.io/uploads/2026/06/jankarlsson-260624-dji-0323-2-e1782381703741.jpg", 
        url: "https://lyyski.ax/objekt/blomstervagen-21/", 
        energy: "Class E", 
        heating: "Direct electricity, air-to-air heat pump & fireplace", 
        note: "Homely single-level house with detached garage. Part can be separated with private entrance." 
    },
    { 
        addr: "Söderhägnan 34 A", 
        town: "Jomala", 
        area: "Önningeby", 
        price: 167000, 
        kind: "shared", 
        rooms: "7 rooms + kitchen", 
        m2: 197, 
        plot: 1968, 
        year: 1974, 
        broker: "Lyyski", 
        img: "https://lyyski.winter.ax/cdn-cgi/image/quality=80,format=auto,width=2000/https://lyyski.wntr.io/uploads/2025/08/soderhagnan-parhus-jomala-dji-0746.jpg", 
        url: "https://lyyski.ax/objekt/soderhagnan-34-a/", 
        energy: "Class C", 
        heating: "Air-to-water heat pump (luft-vattenvärmepump)", 
        note: "Spacious semi-detached home with garage and sea view. Bathroom needs finishing." 
    },
    { 
        addr: "Askuddsvägen 13", 
        town: "Mariehamn", 
        area: "Backeberg", 
        price: 179000, 
        kind: "detached", 
        rooms: "Kitchen, living room, dining, 3–4 bedrooms", 
        m2: 120, 
        plot: 677, 
        year: 1978, 
        broker: "Mäklarhuset", 
        img: MI + "DSC02309_edited.jpg.webp?itok=gyZ_S3Tj", 
        url: M + "trivsamt-bostadshus-fristaende-garage", 
        energy: "Class B", 
        heating: "Ground-source heat pump (bergvärme)", 
        note: "About 50 m² extra outbuildings plus detached garage. Ground-source heating." 
    },
    { 
        addr: "Dalgränd 1", 
        town: "Mariehamn", 
        area: "Dalkarby", 
        price: 250000, 
        kind: "detached", 
        rooms: "5 rooms + kitchen", 
        m2: 125, 
        plot: 1600, 
        year: 1955, 
        broker: "Din Fastighet", 
        img: "https://www.dinfastighet.ax/wp-content/uploads/2025/04/johannebo-121-768x512.jpg", 
        url: "https://www.dinfastighet.ax/till-salu/dalgrand1/", 
        energy: "Class C", 
        heating: "Ground-source heat pump (bergvärme)", 
        note: "Renovated 2012–2025. Upstairs bathroom not yet finished. Listing header says €250,000, text says €255,000; confirm with broker.", 
        warn: 1 
    },
    { 
        addr: "Tegelbruksvägen 17", 
        town: "Jomala", 
        area: "Ingby", 
        price: 257000, 
        kind: "detached", 
        rooms: "7 rooms + kitchen", 
        m2: 174, 
        plot: 1132, 
        year: 1988, 
        broker: "Lyyski", 
        img: "https://lyyski.winter.ax/cdn-cgi/image/quality=80,format=auto,width=2000/https://lyyski.wntr.io/uploads/2026/09/tegelbruksvagen-egnahemshus-jomala-dji-0216.jpg", 
        url: "https://lyyski.ax/objekt/tegelbruksvagen-17/", 
        energy: "Class B", 
        heating: "Ground-source heat pump (water-borne floor heating) & fireplace", 
        note: "Well-maintained split-level house with glazed veranda, jacuzzi, and garage in Ingby." 
    }
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
      <dt>Energy</dt><dd>${esc(h.energy)}</dd>
      <dt>Heating</dt><dd>${esc(h.heating)}</dd>
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