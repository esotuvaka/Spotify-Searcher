export type ImageArray = {
	height?: number;
	url: string;
	width?: number;
};

export type ArtistArray = {
	external_urls?: {
		spotify?: string;
	};
	href?: string;
	id?: string;
	name: string;
	type?: string;
	uri?: string;
};

//Each album should have:
export interface IAlbum {
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
export interface IArtist {
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

//ArtistCard Component
export interface IArtistCard {
	activeTheme: string;
	genreNum: number;
	linkPref: string;

	href?: string;
	followers?: number;
	genres?: string[];
	image?: string;
	name?: string;
	uri?: string;
}

//AlbumCard Component
export interface IAlbumCard {
	linkPref: string;
	activeTheme: string;

	image: string;
	name: string;
	href: string;
	uri: string;
	date: string;
	tracks: number;
	artists: ArtistArray[];
}
