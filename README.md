# Aland Home Finder

A lightweight, static web app for browsing houses for sale in Mariehamn and Jomala, Åland, at or below a chosen price threshold. It pulls together listings from several local brokers into a single, filterable view so you can quickly compare options without navigating each broker website separately.

## What this project does

- Shows residential listings in Mariehamn and Jomala
- Filters by town, property type, and maximum price
- Sorts by price or living area
- Displays key details such as rooms, size, year built, plot size, broker, and notes
- Links directly to each broker listing for more information
- Highlights cautionary notes such as renovation needs, leasehold considerations, and other important caveats

## Project structure

- `aland-home-finder.html` — main page and browser entry point
- `css/aland-home-finder.css` — page styling and layout
- `js/aland-home-finder.js` — listing data, filter logic, sorting, and rendering

## Quick start

This project does not require a build step or package installation.

1. Clone the repository.
2. Open `aland-home-finder.html` in a browser, or serve the folder locally:

```bash
cd /path/to/projects
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/aland-home-finder.html
```

## Data and accuracy

The app is intended as a convenience tool, not an official real-estate database. Listings are collected from broker pages and include notes that may matter for decision-making, such as:

- renovation requirements
- housing-company charges
- plot or leasehold differences
- transfer tax and registration fees
- local residency or domicile considerations

Always verify current prices, availability, legal status, and conditions directly with the relevant broker before making any purchase decision.

## Notes

- Prices are asking prices and may change without notice.
- Some listings are shares in a housing company, which is legally different from owning a detached house on its own plot.
- Photos and listing details are sourced from broker pages and may vary in quality or freshness.

## License

This repository is a personal project and is shared for informational and experimental use.
