# Spotify Search App!

## Allows users to search artists on spotify and view data about them, their albums, etc.

### Changelog:

10/5/2022

- Began conversion to TypeScript
- Created multiple custom types and successfully converted most files to TSX format
- Fixed small UI bugs at 1440px screen sizes

9/26/2022

- Fixed dark mode UI issues on AlbumCard component
- Improved Options component UI
- Fixed Mobile UI for AlbumCard
- Fixed 4K UI for AlbumCard
- Added new Modal for each album that shows album name, release date, a link to listen on spotify, the artists, and the number of tracks

9/24/2022

- Created Options component that enables color theme choice, genre numbers displayed, and linking to browser URL or in-app URI
- Created Genre component for improved code readability and smoother .map method
- Refactored app to properly use AlbumCard component in .map rather than raw JSX inside the .map
- Added full dark mode option (not automatic / based on device settings, but is toggled via the options feature)
- Refactored some repeating CSS styling to reduce file size and limit repeated code

9/21/2022

- Added URI links to album cards that open spotify
- Added Auth via login
- Began work on adding playback SDK

9/19/2022

- FIXED ASYNC AWAIT LOADING ERROR
- Added Genres to ArtistCard
- Converted some of App.js file into components
- Added link that opens Spotify app on the artist's page
- Added Followers number to ArtistCard
- Improved Header UI
- Added Home button
- Responsive design fixes

9/15/2022

- Dev dependencies added (tailwind, react)
- Successful connection to spotify API
- Basic app layout and info display
- Made monolith App.js file (will break down into components later)

### Working changes:

CONVERSION TO TYPESCRIPT

Need to destructure the artistStats OBJECT and give it types.
