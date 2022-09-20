import React, { useEffect, useState } from 'react';

import Welcome from './components/Welcome';

import Logo from './assets/S-Logo.png';
import ArtistCard from './components/ArtistCard';

const CLIENT_ID = 'b735756be4674ec08ea99b684cfa966c';
const CLIENT_SECRET = 'd9d47b64576946e3903805ef5be2884e';

function App() {
	const [searchInput, setSearchInput] = useState('');
	const [accessToken, setAccessToken] = useState('');
	const [loading, setLoading] = useState(true);
	const [artistStats, setArtistStats] = useState([]);
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		//API ACCESS TOKEN
		const authParameters = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
		};

		fetch('https://accounts.spotify.com/api/token', authParameters)
			.then((result) => result.json())
			.then((data) => setAccessToken(data.access_token));
	}, []);

	//SEARCH FUNCTION
	async function Search() {
		console.log('Search for ' + searchInput);

		//get request via search to get the artist ID
		const searchParameters = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + accessToken,
			},
		};

		const artistID = await fetch(
			//JUST FOR THE ARTIST ID
			`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
			searchParameters
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data); //General data about artists with similar names to searchInput
				return data.artists.items[0].id;
			});

		const returnedArtistStats = await fetch(
			//JUST FOR THE ARTISTS GENERAL STATS
			`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
			searchParameters
		)
			.then((response) => response.json())
			.then((data) => {
				setArtistStats(data.artists.items[0]);
			});

		//get request with artist ID to get all albums
		const returnedAlbums = await fetch(
			`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`,
			searchParameters
		)
			.then((response) => response.json())
			.then((data) => {
				setAlbums(data.items);
				console.log(data);
			});

		setLoading(false);
	}

	return (
		<main id="main-bg" className="w-full h-screen overflow-x-hidden">
			<header className="w-full z-50 shadow-md fixed top-0 bg-white">
				<div id="outer-container" className="h-24 grid place-items-center">
					<div className="w-full">
						<div className="flex w-4/5 mx-auto items-center justify-between">
							<button className="text-white bg-neutral-800 px-3 h-7 rounded-md pop ">
								<a href="/">HOME</a>
							</button>
							<div className="flex">
								<input
									type="text"
									id="search"
									name="search"
									placeholder="Enter an artist's name"
									className="border focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 pop font-light border-neutral-300 px-2 rounded-l-lg focus:rounded-r-none rounded-r-none h-7 "
									onKeyUp={(e) => {
										if (e.key === 'Enter') {
											Search();
										}
									}}
									onChange={(e) => setSearchInput(e.target.value)}
								/>

								<button
									className="px-3 flex h-7 items-center justify-center bg-neutral-800 text-white pop rounded-r-md"
									onClick={(e) => Search()}
								>
									SEARCH
								</button>
							</div>
							<div />
						</div>
					</div>
				</div>
			</header>
			{loading ? (
				<Welcome />
			) : (
				<div className="pb-32 mt-28 w-full">
					<ArtistCard props={artistStats} />
					<div
						id="albums-array"
						className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-4/5 gap-1 mx-auto"
					>
						{React.Children.toArray(
							albums.map((album, i) => {
								return (
									<>
										<div className="flex flex-col bg-white rounded-lg shadow-md shadow-neutral-500 items-center">
											<img
												src={album.images[0].url}
												alt="/"
												className="rounded-t-lg shadow-sm"
											/>
											<div className="flex w-full flex-col justify-center items-center h-full">
												<p className="pop text-center w-11/12 mx-auto py-2">
													{album.name}
												</p>
											</div>
										</div>
									</>
								);
							})
						)}
					</div>
				</div>
			)}
		</main>
	);
}

export default App;
