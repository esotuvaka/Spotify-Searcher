import React, { useEffect, useState } from 'react';

import Welcome from './components/Welcome';
import Options from './components/Options';
import ArtistCard from './components/ArtistCard';
import AlbumCard from './components/AlbumCard';

import { ArtistArray, ImageArray } from './Types';

//Each album should have:
interface IAlbum {
	album_group?: string;
	album_type?: string;
	artists: ArtistArray[];
	external_urls: {
		spotify: string;
	};
	href: string;
	id?: string;
	images: ImageArray[];
	name: string;
	release_date: string;
	release_date_precision?: string;
	total_tracks: number;
	type?: string;
	uri: string;
}

//Each artist should have:
interface IArtist {
	external_urls: {
		spotify: string;
	};
	followers: {
		total: number;
	};
	genres: string[];
	href?: string; //artist href is used for spotify web playback
	id?: string;
	images: ImageArray[];
	name: string;
	popularity?: number;
	type?: string;
	uri: string;
}

function App() {
	const [accessToken, setAccessToken] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);

	const [searchInput, setSearchInput] = useState<string>('');
	const [openOptions, setOpenOptions] = useState<boolean>(false);

	const [theme, setTheme] = useState<string>('#262626');
	const [genreNum, setGenreNum] = useState<number>(3);
	const [linkPref, setLinkPref] = useState<string>('app');

	const [artist, setArtist] = useState<IArtist>();

	const [albums, setAlbums] = useState<[]>([]);

	useEffect(() => {
		//API ACCESS TOKEN
		const authParameters = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
		};

		fetch('https://accounts.spotify.com/api/token', authParameters)
			.then((result) => result.json())
			.then((data) => setAccessToken(data.access_token));
	}, []);

	//SEARCH FUNCTION
	async function Search() {
		//get request via search to get the artist ID
		const searchParameters = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + accessToken,
			},
		};

		let artistID = '';

		const returnedartist = await fetch(
			//JUST FOR THE ARTISTS GENERAL STATS
			`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
			searchParameters
		)
			.then((response) => response.json())
			.then((data) => {
				//artist is an OBJECT
				//here, artist is set to the 0 index of an array of objects
				setArtist(data.artists.items[0]);
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
				<div id="outer-container" className="flex  items-center justify-center">
					<div className="w-full">
						<div className="mx-auto flex w-4/5 flex-col items-center justify-between py-8 sm:flex-row lg:w-2/3">
							<div />
							<div className="flex ">
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
									onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
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
									onClick={() => {
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
								<div className={openOptions ? 'flex' : 'hidden'}>
									<Options
										changeTheme={(data) => {
											return setTheme(data);
										}}
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
				<Welcome activeTheme={theme} />
			) : (
				<div
					style={{
						background:
							theme === '#262626'
								? `linear-gradient(${theme}, #000000)`
								: `linear-gradient(#ffffff, ${theme})`,
					}}
					className={`mt-32 w-full pb-32 pt-8 sm:mt-24  `}
				>
					<ArtistCard
						activeTheme={theme}
						genreNum={genreNum}
						linkPref={linkPref}
						href={artist?.external_urls?.spotify}
						followers={artist?.followers?.total}
						genres={artist?.genres}
						image={artist?.images[0].url}
						name={artist?.name}
						uri={artist?.uri}
					/>
					<div
						id="albums-array"
						className="mx-auto grid w-4/5 grid-cols-2 gap-1  sm:grid-cols-3 lg:w-2/3 lg:grid-cols-4"
					>
						{React.Children.toArray(
							albums?.map((album: IAlbum) => (
								<>
									{album && (
										<>
											<AlbumCard
												activeTheme={theme}
												linkPref={linkPref}
												image={album.images[0].url}
												name={album.name}
												href={album.external_urls.spotify}
												uri={album.uri}
												date={album.release_date}
												tracks={album.total_tracks}
												artists={album.artists}
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
