import React from 'react';
import { useState } from 'react';

const Options = (props, activeTheme) => {
	const [theme, setTheme] = useState('#ffffff');
	const [genNum, setGenNum] = useState('3');
	const [linkPref, setLinkPref] = useState('app');

	return (
		<aside
			className={
				theme === '#262626'
					? 'pop flex h-screen w-80 flex-col justify-center bg-neutral-800 text-lg text-white shadow-md shadow-black transition-all duration-300'
					: 'pop flex h-screen w-80 flex-col justify-center bg-white text-lg text-black shadow-md shadow-neutral-600 transition-all duration-300'
			}
		>
			<div className="">
				<div className="mx-auto my-8 flex w-4/5 items-center justify-between">
					<h2
						className={
							theme === '#262626'
								? 'pop rounded-lg text-3xl text-white transition-all duration-300'
								: 'pop rounded-lg text-3xl text-black transition-all duration-300'
						}
					>
						Options
					</h2>
					<div
						onClick={() => props.changeOptionsOpen(false)}
						className={
							theme === '#262626'
								? 'pop flex h-9 items-center justify-center rounded-md border border-transparent bg-black px-3 font-bold text-white transition-all duration-300 hover:cursor-pointer hover:border-red-500 hover:text-red-500'
								: 'pop flex h-9 items-center justify-center rounded-md border border-transparent bg-black px-3 text-white transition-all duration-300 hover:cursor-pointer hover:border-red-500 hover:text-red-500'
						}
					>
						X
					</div>
				</div>
				<ul className="m-8 ">
					<li>
						<p className="text-xl">Theme</p>
						<div
							id="color-selector"
							className="mx-auto my-2 grid w-3/5 grid-cols-4 place-items-center justify-between"
						>
							<div
								onClick={() => {
									setTheme('#f5f5f4');
									props.changeTheme('#f5f5f4');
								}}
								className={
									theme === '#f5f5f4'
										? 'theme-button-on bg-stone-200  '
										: 'theme-button-off bg-stone-200  '
								}
							/>
							<div
								onClick={() => {
									setTheme('#262626');
									props.changeTheme('#262626');
								}}
								className={
									theme === '#262626'
										? 'theme-button-on bg-neutral-800  '
										: 'theme-button-off bg-neutral-800  '
								}
							/>
							<div
								onClick={() => {
									setTheme('#ef4444');
									props.changeTheme('#ef4444');
								}}
								className={
									theme === '#ef4444'
										? 'theme-button-on bg-red-500 '
										: 'theme-button-off bg-red-500  '
								}
							/>
							<div
								onClick={() => {
									setTheme('#818cf8');
									props.changeTheme('#818cf8');
								}}
								className={
									theme === '#818cf8'
										? 'theme-button-on bg-indigo-400  '
										: 'theme-button-off bg-indigo-400  '
								}
							/>
							<div
								onClick={() => {
									setTheme('#1d4ed8');
									props.changeTheme('#1d4ed8');
								}}
								className={
									theme === '#1d4ed8'
										? 'theme-button-on bg-blue-700  '
										: 'theme-button-off bg-blue-700  '
								}
							/>
							<div
								onClick={() => {
									setTheme('#059669');
									props.changeTheme('#059669');
								}}
								className={
									theme === '#059669'
										? 'theme-button-on bg-emerald-600  '
										: 'theme-button-off bg-emerald-600  '
								}
							/>
							<div
								onClick={() => {
									setTheme('#f97316');
									props.changeTheme('#f97316');
								}}
								className={
									theme === '#f97316'
										? 'theme-button-on bg-orange-500  '
										: 'theme-button-off bg-orange-500  '
								}
							/>
							<div
								onClick={() => {
									setTheme('#eab308');
									props.changeTheme('#eab308');
								}}
								className={
									theme === '#eab308'
										? 'theme-button-on bg-yellow-500'
										: 'theme-button-off bg-yellow-500'
								}
							/>
						</div>
					</li>
					<li className="">
						<p className="mt-4 text-xl">Genres</p>
						<div>
							<ul className="my-4 flex flex-row items-center justify-center">
								<li
									onClick={() => {
										setGenNum(1);
										props.changeGenreNum(1);
									}}
									className={genNum === 1 ? 'button-on' : 'button-off'}
								>
									1
								</li>
								<li
									onClick={() => {
										setGenNum(2);
										props.changeGenreNum(2);
									}}
									className={genNum === 2 ? 'button-on ' : 'button-off '}
								>
									2
								</li>
								<li
									onClick={() => {
										setGenNum(3);
										props.changeGenreNum(3);
									}}
									className={genNum === 3 ? 'button-on ' : 'button-off '}
								>
									3
								</li>
								<li
									onClick={() => {
										setGenNum(25);
										props.changeGenreNum(25);
									}}
									className={genNum === 25 ? 'button-on ' : 'button-off '}
								>
									ALL
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p className="mt-4 text-xl">Open Links In</p>
						<div className="my-4 flex flex-row items-center justify-center">
							<button
								onClick={() => {
									setLinkPref('browser');
									props.changeLinkPref('browser');
								}}
								className={linkPref === 'browser' ? 'button-on' : 'button-off'}
							>
								Browser
							</button>
							<button
								onClick={() => {
									setLinkPref('app');
									props.changeLinkPref('app');
								}}
								className={linkPref === 'app' ? 'button-on' : 'button-off'}
							>
								App
							</button>
						</div>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Options;
