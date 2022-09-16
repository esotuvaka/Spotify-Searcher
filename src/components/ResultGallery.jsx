import React from 'react';
import ResultCard from './ResultCard';

const ResultGallery = () => {
	return (
		<div id="results-grid" className="w-full">
			<div className="w-2/3 grid grid-cols-4 justify-center items-center mx-auto">
				<ResultCard />
				<ResultCard />
				<ResultCard />
				<ResultCard />
				<ResultCard />
			</div>
		</div>
	);
};

export default ResultGallery;
