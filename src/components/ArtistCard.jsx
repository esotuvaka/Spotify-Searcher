import React from 'react';
import Logo from '../assets/S-Logo.png';

const ArtistCard = ({ props }) => {
	return (
		<div id="artist-card" className="w-4/5 mx-auto pb-4">
			<div className="bg-white transition-all duration-300 shadow-md shadow-neutral-500 rounded-lg flex sm:flex-row flex-col sm:h-96 justify-between">
				<div className="mx-[5%] my-[5%]">
					<h1 id="artist-name" className="pop text-4xl text-black">
						{props.name}
					</h1>
					<p id="artist-followers" className="pop text-xl text-neutral-800">
						{props.followers.total
							.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
						Followers
					</p>
					<div id="artist-links" className="flex mt-2">
						<button className="px-2 py-1 bg-green-600 flex text-white pop w-[90px] justify-between items-center rounded">
							<a target="_blank" rel="noreferrer" href={props.uri}>
								Open
							</a>
							<img src={Logo} alt="Spotify logo" className="h-6" />
						</button>
					</div>
					<div id="artist-genres" className="w-full flex flex-col mt-4 ">
						{React.Children.toArray(
							props.genres.slice(0, 3).map((genre, i) => {
								return (
									<>
										<div className="pop bg-neutral-800 text-white flex px-2 py-1 m-[1px] text-sm rounded whitespace-nowrap w-min">
											<p>{genre}</p>
										</div>
									</>
								);
							})
						)}
					</div>
				</div>
				<div id="artist-image" className>
					<img
						src={props.images[0].url}
						alt="/"
						className="rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none w-full sm:h-96"
					/>
				</div>
			</div>
		</div>
	);
};

export default ArtistCard;
