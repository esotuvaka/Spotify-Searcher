import React from 'react';

const Header = () => {
	return (
		<header className="w-full">
			<div id="outer-container" className="h-32 grid place-items-center">
				<div className="flex items-center justify-center">
					<form className="flex flex-col">
						<input
							type="text"
							id="search"
							name="search"
							placeholder="Enter an artist' name"
							className="border border-neutral-300"
							tabIndex={0}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									console.log('success');
								}
							}}
						/>
					</form>
					<button
						className="px-2 flex bg-red-500 rounded-r-md"
						onClick={(e) => {
							console.log('clicked button');
						}}
					>
						SEARCH
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
