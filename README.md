# Palm Tree Travels 🌴

Palm Tree Travels is a web application designed to inspire users to discover warm, palm-worthy travel destinations without needing to choose a specific city or country upfront. Instead of starting with a place, the app focuses on what the user wants to experience — temperature, city vibes, or a particular atmosphere — and uses weather data and relevant destination information to guide personalized suggestions.

Users can freely explore destinations, save their favorites, and quickly gain insights into what each place has to offer. Palm Tree Travels is built to be an intuitive and inspiring tool for anyone looking to discover their next warm getaway in an easy and engaging way.

## Features

- **Search by preferences** — Filter destinations by temperature, date, vibes and experiences
- **Weather & Wikipedia API** — Current weather and short destination info for each place
- **Favorites** — Save destinations to a list for later
- **Map view** — See destinations on an interactive map
- **Curated suggestions** — Browse a set of warm, palm-worthy destinations

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

## User testing

The application was tested with 4 users. Key findings:

- Users found navigation intuitive and easy
- Some confusion with results in correlation with the "best travel time"

See [USER_TESTING.md](./USER_TESTING.md) for full results and reflections.

## Accessibility

Throughout the development of the webpage, accessibility has been considered and evaluated using Lighthouse and manual testing.

- Semantic HTML
- Keyboard-friendly navigation
- Responsive design
- Clear typography and accessible color contrast
- Alt text for images and appropriate ARIA attributes for icons

## Screenshots

#### Front page:

![front_page](/src/assets/palm-tree-travels_frontpage.webp)

<details>
<summary><strong>See more</strong> <i>(3 images)</i></summary>

##### Search page:

![search_page](/src/assets/palm-tree-travels_search-destination.webp)

#### Destination page:

![destination_page](/src/assets/palm-tree-travels_destination_19.webp)

#### Favorite page:

![favorite_page](/src/assets/palm-tree-travels_favorites.webp)

</details>

## Installation / Setup

```shell
  npm install
  npm run dev

```

### Environment variables:

The app uses OpenWeather via VITE_OPENWEATHER_BASE_URL and VITE_OPENWEATHER_API_KEY in src/services/weatherService.ts. Without these, weather won’t work. Get an API key from [OpenWeather](https://openweathermap.org/api)

- Create a .env
- Required variables:
  - VITE_OPENWEATHER_BASE_URL – OpenWeather API base URL
  - VITE_OPENWEATHER_API_KEY – OpenWeather API key

## Authors

- [@skogblad](https://www.github.com/skogblad)
