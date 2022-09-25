import React, { useEffect, useState } from 'react';

import Welcome from './components/Welcome';
import Options from './components/Options';
import ArtistCard from './components/ArtistCard';
import AlbumCard from './components/AlbumCard';

// environment variables are embedded into the build, so can't store secrets securely without calling a backend that then calls the spotify API. Will let these secrets stay here for now
const CLIENT_ID = 'b735756be4674ec08ea99b684cfa966c';
const CLIENT_SECRET = 'd9d47b64576946e3903805ef5be2884e';
const REDIRECT_URI = 'http://localhost:3000';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';

function App() {
	const [accessToken, setAccessToken] = useState('');
	const [loading, setLoading] = useState(true);

	const [searchInput, setSearchInput] = useState('');
	const [openOptions, setOpenOptions] = useState(false);

	//OPTIONS (Look into refactoring into a single state object since they're all derived from Options component)
	const [theme, setTheme] = useState('#f5f5f4');
	const [genreNum, setGenreNum] = useState(3);
	const [linkPref, setLinkPref] = useState('app');
	//

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

		let artistID = '';

		const returnedArtistStats = await fetch(
			//JUST FOR THE ARTISTS GENERAL STATS
			`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
			searchParameters
		)
			.then((response) => response.json())
			.then((data) => {
				setArtistStats(data.artists.items[0]);
				artistID = data.artists.items[0].id;
				changeColor(data.artists.items[0]);
				console.log(data);
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

	function changeColor(item) {
		let a = '';
		for (const value of item.genres) {
			if (item.genres.includes('metal')) {
				a = '#ef4444';
			} else if (item.genres.includes('rap')) {
				a = '#ff33ff';
			}
		}
		console.log('a here: ' + a);

		return;
	}

	const handleChange = (e) => {
		setSearchInput(e.target.value);
		console.log('this changed');
	};

	return (
		<main
			style={{
				background:
					theme === '#262626'
						? `linear-gradient(#262626, #000000)`
						: `linear-gradient(#ffffff, ${theme})`,
			}}
			id="main-bg"
			className="w-full h-screen overflow-x-hidden transition-all duration-300"
		>
			<header
				style={{ background: theme === '#262626' ? `#262626` : `#ffffff` }}
				className={
					theme === '#262626'
						? 'w-full bg-neutral-800 text-white z-50 shadow-md fixed top-0 transition-all duration-300  '
						: 'w-full bg-white text-neutral-800 z-50 shadow-md fixed top-0 transition-all duration-300  '
				}
			>
				<div id="outer-container" className="h-24 grid place-items-center ">
					<div className="w-full">
						<div className="flex w-4/5 lg:w-2/3 mx-auto items-center justify-between ">
							<button
								className={
									theme === '#262626'
										? 'bg-stone-200 text-black px-3 h-7 flex justify-center items-center rounded-md pop'
										: 'bg-neutral-800 text-white px-3 h-7 flex justify-center items-center rounded-md pop'
								}
							>
								<a
									href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
								>
									LOGIN
								</a>
							</button>
							<div className="flex">
								<input
									type="text"
									id="search"
									name="search"
									placeholder="Enter an artist's name"
									className={
										theme === '#262626'
											? 'border focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 pop font-light border-neutral-700 px-2 rounded-l-lg focus:rounded-r-none rounded-r-none h-7 bg-black'
											: 'border focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 pop font-light border-neutral-300 px-2 rounded-l-lg focus:rounded-r-none rounded-r-none h-7'
									}
									onKeyUp={(e) => {
										if (e.key === 'Enter') {
											Search();
										}
									}}
									onChange={handleChange}
								/>

								<button
									className={
										theme === '#262626'
											? 'px-3 flex h-7 items-center justify-center bg-stone-200 text-black pop rounded-r-md'
											: 'px-3 flex h-7 items-center justify-center bg-neutral-800 text-white pop rounded-r-md'
									}
									onClick={(e) => {
										Search();
									}}
								>
									SEARCH
								</button>
							</div>
							<button
								onClick={() => setOpenOptions(true)}
								className={
									theme === '#262626'
										? 'bg-stone-200 text-black px-3 h-7 flex justify-center items-center rounded-md pop'
										: 'bg-neutral-800 text-white px-3 h-7 flex justify-center items-center rounded-md pop'
								}
							>
								OPTIONS
							</button>
							<div className="absolute top-0 right-0 z-50">
								<div className={openOptions ? 'flex' : 'hidden'}>
									<Options
										activeTheme={theme}
										changeTheme={(data) => setTheme(data)}
										changeOptionsOpen={(data) => setOpenOptions(data)}
										changeGenreNum={(data) => setGenreNum(data)}
										changeLinkPref={(data) => setLinkPref(data)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			{loading ? (
				<Welcome themeColor={theme} />
			) : (
				<div
					style={{
						background:
							theme === '#262626'
								? `linear-gradient(${theme}, #000000)`
								: `linear-gradient(#ffffff, ${theme})`,
					}}
					className="pb-32 mt-24 pt-8 w-full"
				>
					<ArtistCard
						props={artistStats}
						activeTheme={theme}
						genresNum={genreNum}
						links={linkPref}
					/>
					<div
						id="albums-array"
						className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-4/5  lg:w-2/3 gap-1 mx-auto"
					>
						{React.Children.toArray(
							albums?.map((album) => (
								<>
									{album && (
										<AlbumCard
											links={linkPref}
											image={album.images[0].url}
											name={album.name}
											browserLink={album.external_urls.spotify}
											appLink={album.uri}
										/>
									)}
								</>
							))
						)}
					</div>
				</div>
			)}
		</main>
	);
}

export default App;
