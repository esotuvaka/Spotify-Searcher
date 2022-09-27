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
					? 'pop h-screen w-80 bg-neutral-900 text-lg text-white transition-all duration-300'
					: 'pop h-screen w-80 bg-neutral-50 text-lg text-black transition-all duration-300'
			}
		>
			<div>
				<div className="mx-auto my-8 flex w-4/5 items-center justify-between">
					<h2
						className={
							theme === '#262626'
								? 'pop mx-auto border-b-2 border-white px-3 text-3xl text-white transition-all duration-300'
								: 'pop mx-auto border-b-2 border-black px-3 text-3xl text-black transition-all duration-300'
						}
					>
						OPTIONS
					</h2>
					<div
						onClick={() => props.changeOptionsOpen(false)}
						className={
							theme === '#262626'
								? 'pop h-7 rounded-md bg-white px-3 text-black hover:cursor-pointer'
								: 'pop h-7 rounded-md bg-neutral-800 px-3 text-white hover:cursor-pointer'
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
							className="mx-auto my-2 grid w-3/5 grid-cols-4 place-items-center justify-between"
						>
							<div
								onClick={() => {
									setTheme('#f5f5f4');
									props.changeTheme('#f5f5f4');
								}}
								className={
									theme === '#f5f5f4'
										? 'm-1 h-6 w-6 rounded-full bg-stone-200 ring-2 ring-black'
										: 'm-1 h-6 w-6 rounded-full bg-stone-200 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#262626');
									props.changeTheme('#262626');
								}}
								className={
									theme === '#262626'
										? 'm-1 h-6 w-6 rounded-full bg-neutral-800 ring-2 ring-black'
										: 'm-1 h-6 w-6 rounded-full bg-neutral-800 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#ef4444');
									props.changeTheme('#ef4444');
								}}
								className={
									theme === '#ef4444'
										? 'm-1 h-6 w-6 rounded-full bg-red-500 ring-2 ring-black'
										: 'm-1 h-6 w-6 rounded-full bg-red-500 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#818cf8');
									props.changeTheme('#818cf8');
								}}
								className={
									theme === '#818cf8'
										? 'm-1 h-6 w-6 rounded-full bg-indigo-400 ring-2 ring-black'
										: 'm-1 h-6 w-6 rounded-full bg-indigo-400 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#1d4ed8');
									props.changeTheme('#1d4ed8');
								}}
								className={
									theme === '#1d4ed8'
										? 'm-1 h-6 w-6 rounded-full bg-blue-700 ring-2 ring-black'
										: 'm-1 h-6 w-6 rounded-full bg-blue-700 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#059669');
									props.changeTheme('#059669');
								}}
								className={
									theme === '#059669'
										? 'm-1 h-6 w-6 rounded-full bg-emerald-600 ring-2 ring-black'
										: 'm-1 h-6 w-6 rounded-full bg-emerald-600 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#f97316');
									props.changeTheme('#f97316');
								}}
								className={
									theme === '#f97316'
										? 'm-1 h-6 w-6 rounded-full bg-orange-500 ring-2 ring-black'
										: 'm-1 h-6 w-6 rounded-full bg-orange-500 hover:cursor-pointer'
								}
							/>
							<div
								onClick={() => {
									setTheme('#eab308');
									props.changeTheme('#eab308');
								}}
								className={
									theme === '#eab308'
										? 'm-1 h-6 w-6 rounded-full bg-yellow-500 ring-2 ring-black'
										: 'm-1 h-6 w-6 rounded-full bg-yellow-500 hover:cursor-pointer'
								}
							/>
						</div>
					</li>
					<li className="">
						<p className="mt-4 text-xl">Genres:</p>
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
						<p className="mt-4 text-xl">Open Links In:</p>
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
