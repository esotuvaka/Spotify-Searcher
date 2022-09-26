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
					? 'w-80 h-screen bg-neutral-800 pop text-lg transition-all duration-300 text-white'
					: 'w-80 h-screen transition-all duration-300 text-black bg-neutral-50 pop text-lg'
			}
		>
			<div>
				<div className="flex w-4/5 mx-auto justify-between items-center my-8">
					<h2
						className={
							theme === '#262626'
								? 'px-3 text-white text-3xl border-b-2 border-white pop mx-auto transition-all duration-300'
								: 'px-3 text-black text-3xl border-b-2 border-black pop mx-auto transition-all duration-300'
						}
					>
						OPTIONS
					</h2>
					<div
						onClick={() => props.changeOptionsOpen(false)}
						className={
							theme === '#262626'
								? 'bg-white text-black px-3 h-7 rounded-md pop hover:cursor-pointer'
								: 'bg-neutral-800 text-white px-3 h-7 rounded-md pop hover:cursor-pointer'
						}
					>
						X
					</div>
				</div>
				<ul className="m-8 ">
					<li>
						<p className="text-xl">Theme:</p>
						<div
							id="color-selector"
							className="grid grid-cols-4 mx-auto w-3/5 justify-between my-2 place-items-center"
						>
							<div
								onClick={() => {
									setTheme('#f5f5f4');
									props.changeTheme('#f5f5f4');
								}}
								className={
									theme === '#f5f5f4'
										? 'w-6 h-6 m-1 rounded-full bg-stone-200 ring-black ring-2'
										: 'w-6 h-6 m-1 rounded-full bg-stone-200 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#262626');
									props.changeTheme('#262626');
								}}
								className={
									theme === '#262626'
										? 'w-6 h-6 m-1 rounded-full bg-neutral-800 ring-black ring-2'
										: 'w-6 h-6 m-1 rounded-full bg-neutral-800 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#ef4444');
									props.changeTheme('#ef4444');
								}}
								className={
									theme === '#ef4444'
										? 'w-6 h-6 m-1 rounded-full bg-red-500 ring-black ring-2'
										: 'w-6 h-6 m-1 rounded-full bg-red-500 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#818cf8');
									props.changeTheme('#818cf8');
								}}
								className={
									theme === '#818cf8'
										? 'w-6 h-6 m-1 rounded-full bg-indigo-400 ring-black ring-2'
										: 'w-6 h-6 m-1 rounded-full bg-indigo-400 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#1d4ed8');
									props.changeTheme('#1d4ed8');
								}}
								className={
									theme === '#1d4ed8'
										? 'w-6 h-6 m-1 rounded-full bg-blue-700 ring-black ring-2'
										: 'w-6 h-6 m-1 rounded-full bg-blue-700 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#059669');
									props.changeTheme('#059669');
								}}
								className={
									theme === '#059669'
										? 'w-6 h-6 m-1 rounded-full bg-emerald-600 ring-black ring-2'
										: 'w-6 h-6 m-1 rounded-full bg-emerald-600 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#f97316');
									props.changeTheme('#f97316');
								}}
								className={
									theme === '#f97316'
										? 'w-6 h-6 m-1 rounded-full bg-orange-500 ring-black ring-2'
										: 'w-6 h-6 m-1 rounded-full bg-orange-500 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#eab308');
									props.changeTheme('#eab308');
								}}
								className={
									theme === '#eab308'
										? 'w-6 h-6 m-1 rounded-full bg-yellow-500 ring-black ring-2'
										: 'w-6 h-6 m-1 rounded-full bg-yellow-500 hover:cursor-pointer'
								}
							/>
						</div>
					</li>
					<li className="">
						<p className="text-xl mt-4">Genres:</p>
						<div>
							<ul className="flex flex-row my-4 items-center justify-center">
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
						<p className="text-xl mt-4">Open Links In:</p>
						<div className="flex flex-row justify-center items-center my-4">
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
