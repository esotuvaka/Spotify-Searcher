import React, { useEffect, useState } from 'react';

import Welcome from './components/Welcome';
import Options from './components/Options';
import ArtistCard from './components/ArtistCard';
import AlbumCard from './components/AlbumCard';

// environment variables are embedded into the build, so can't store secrets securely without calling a backend that then calls the spotify API. Will let these secrets stay here for now

// CLIENT ID and SECRET are used for base artist album search
const CLIENT_ID = 'b735756be4674ec08ea99b684cfa966c';
const CLIENT_SECRET = 'd9d47b64576946e3903805ef5be2884e';

function App() {
	const [accessToken, setAccessToken] = useState('');
	const [loading, setLoading] = useState(true);

	const [searchInput, setSearchInput] = useState('');
	const [openOptions, setOpenOptions] = useState(false);

	const [theme, setTheme] = useState('#f5f5f4');
	const [genreNum, setGenreNum] = useState(3);
	const [linkPref, setLinkPref] = useState('app');

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

	const handleChange = (e) => {
		setSearchInput(e.target.value);
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
			className="fixed h-screen w-full overflow-y-scroll transition-all duration-300"
		>
			<header
				style={{ background: theme === '#262626' ? `#262626` : `#ffffff` }}
				className={
					theme === '#262626'
						? 'fixed top-0 z-10 w-full bg-neutral-800 text-white shadow-sm shadow-black transition-all duration-300'
						: 'fixed top-0 z-10 w-full bg-white text-neutral-800 shadow-md transition-all duration-300'
				}
			>
				<div
					id="outer-container"
					className="flex h-28 items-center justify-center"
				>
					<div className="w-full">
						<div className="mx-auto flex w-4/5 flex-col items-center justify-between sm:flex-row lg:w-2/3 ">
							<div />
							<div className="flex">
								<input
									type="text"
									id="search"
									name="search"
									placeholder="Enter an artist's name"
									className={
										theme === '#262626'
											? 'pop h-7 w-2/3 rounded-l-lg rounded-r-none border border-neutral-700 bg-black px-2 font-light focus:rounded-r-none focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:w-64'
											: 'pop h-7 w-2/3 rounded-l-lg rounded-r-none border border-neutral-300 px-2 font-light focus:rounded-r-none focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:w-64'
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
											? 'pop flex h-7 items-center justify-center rounded-r-md bg-black px-3 text-white transition-all duration-300 hover:text-green-400'
											: 'pop flex h-7 items-center justify-center rounded-r-md bg-neutral-800 px-3 text-white transition-all duration-300 hover:text-green-400'
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
										? 'pop mt-4 flex h-7 items-center justify-center rounded-md bg-black px-3 text-white transition-all duration-300 hover:text-green-500 sm:mt-0'
										: 'pop mt-4 flex h-7 items-center justify-center rounded-md bg-neutral-800 px-3 text-white transition-all duration-300 hover:text-green-500 sm:mt-0'
								}
							>
								OPTIONS
							</button>
							<div
								className={
									openOptions ? 'absolute top-0 right-0 z-50' : 'hidden'
								}
							>
								<div className={openOptions ? 'flex  ' : 'hidden  '}>
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
					className="mt-24 w-full pb-32 pt-8"
				>
					<ArtistCard
						props={artistStats}
						activeTheme={theme}
						genresNum={genreNum}
						links={linkPref}
					/>
					<div
						id="albums-array"
						className="mx-auto grid w-4/5 grid-cols-2 gap-1  sm:grid-cols-3 lg:w-2/3 lg:grid-cols-4"
					>
						{React.Children.toArray(
							albums?.map((album) => (
								<>
									{album && (
										<>
											<AlbumCard
												image={album.images[0].url}
												name={album.name}
												browserLink={album.external_urls.spotify}
												appLink={album.uri}
												links={linkPref}
												date={album.release_date}
												tracks={album.total_tracks}
												artists={album.artists}
												activeTheme={theme}
											/>
										</>
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
