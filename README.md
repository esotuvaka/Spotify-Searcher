# Spotify Search App!

## Allows users to search artists on spotify and view data about them, their albums, etc.

### Changelog:

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

- Add suggested search results to enable finding exact artists amongst similar names (e.g: Anders vs Anderson .Paak, Dave vs Dave Matthews Band)
- Add Day of release to album card
- Possibly add a song / album playback option
- Add album modals that will show more info (release date, number and name of tracks, etc)
