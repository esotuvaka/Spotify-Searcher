import React from 'react';

const AlbumCard = ({ image, name, browserLink, appLink, links }) => {
	return (
		<>
			<div
				// href={links === 'browser' ? browserLink : appLink}
				className="flex flex-col bg-white rounded-lg shadow-md shadow-neutral-700 items-center hover:cursor-pointer hover:shadow-lg hover:shadow-neutral-700 hover:-translate-y-1 transition-all duration-300    "
			>
				<img src={image} alt="/" className="rounded-t-lg shadow-sm" />
				<div className="flex w-full flex-col justify-center items-center h-full">
					<p className="pop text-center w-11/12 mx-auto py-2">{name}</p>
				</div>
			</div>
		</>
	);
};

export default AlbumCard;
