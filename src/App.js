import { useEffect, useState } from 'react';

const CLIENT_ID = 'b735756be4674ec08ea99b684cfa966c';
const CLIENT_SECRET = 'd9d47b64576946e3903805ef5be2884e';

function App() {
	const [searchInput, setSearchInput] = useState('');
	const [accessToken, setAccessToken] = useState('');
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
		console.log('artist id is ' + artistID);

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
			});

		//display those albums

		//get request with artist ID to get artist stats
	}
	console.log(albums);

	const follNum = `${artistStats.followers.total
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Followers`;

	return (
		<main className="w-full h-screen overflow-x-hidden bg-neutral-300">
			<header className="w-full">
				<div id="outer-container" className="h-20 grid place-items-center">
					<div className="flex items-center justify-center">
						<div className="flex">
							<input
								type="text"
								id="search"
								name="search"
								placeholder="Enter an artist' name"
								className="border pop font-light border-neutral-300 px-2 rounded-l-lg focus:rounded-r-none rounded-r-none h-7 "
								onKeyUp={(e) => {
									if (e.key === 'Enter') {
										Search();
									}
								}}
								onChange={(e) => setSearchInput(e.target.value)}
							/>
						</div>
						<button
							className="px-3 flex h-7 items-center justify-center bg-neutral-900 text-white pop rounded-r-md"
							onClick={(e) => Search()}
						>
							SEARCH
						</button>
					</div>
				</div>
			</header>
			<div id="artist-info" className="pb-32 w-full">
				<div id="artist-link" className="w-4/5 mx-auto py-4">
					<div
						id="artist-stats"
						className="bg-white hover:shadow-md transition-all duration-300 hover:cursor-pointer hover:-translate-y-0.5 hover:shadow-neutral-500 shadow-sm shadow-neutral-500 rounded-lg flex"
					>
						<div className="">
							<h1 className="pop text-4xl pb-0 p-2">{artistStats.name}</h1>
							<p className="pop text-xl p-2 py-0">{follNum}</p>
						</div>
						<div id="artist-image" className>
							<img
								src={artistStats.images[0].url}
								alt="/"
								className="rounded-r-lg"
							/>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-4/5 gap-1 mx-auto">
					{albums.map((album, i) => {
						return (
							<>
								<div className="flex flex-col bg-white rounded-lg shadow-sm shadow-neutral-500">
									<img
										src={album.images[0].url}
										alt="/"
										className="rounded-t-lg shadow-sm"
									/>
									<p className="p-2 pop">{album.name}</p>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</main>
	);
}

export default App;
