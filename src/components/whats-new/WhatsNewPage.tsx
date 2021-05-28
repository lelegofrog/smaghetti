import React, { ReactNode } from 'react';
import { Root } from '../layout/Root';

function dateToHumanString(input: string): string {
	const date = new Date(input);

	const month = date.toLocaleDateString('en-us', {
		month: 'short',
	});

	const day = date.toLocaleDateString('en-us', {
		day: 'numeric',
	});

	const year = date.toLocaleDateString('en-us', {
		year: 'numeric',
	});

	return `${day} ${month} ${year}`;
}

function NewEntry({
	title,
	date,
	children,
}: {
	title: string;
	date: string;
	children: ReactNode;
}) {
	return (
		<div className="mt-16 pb-16 px-4 sm:px-0 border-b border-dotted border-gray-500 last:border-0">
			<h3 className="text-gray-400 font-bold mb-4 text-xl flex flex-row justify-between items-baseline">
				<span className="flex-1">{title}</span>
				<time className="text-sm" dateTime={date}>
					{dateToHumanString(date)}
				</time>
			</h3>
			<div className="space-y-4 text-gray-50">{children}</div>
		</div>
	);
}

function WhatsNewPage() {
	return (
		<Root
			title="What’s New"
			metaDescription="A list of the latest features and additions to smaghetti.com"
		>
			<div className="max-w-2xl mx-auto pt-16">
				<h1 className="font-bold text-5xl text-center mb-8">What&apos;s new</h1>
				<NewEntry title="New Entities" date="2021-05-27">
					<ul className="ml-8 list-disc">
						<li>Wood Floor</li>
						<li>Pool of Water renamed to Choppy Water</li>
						<li>new Pool of Water which is still/sparkly water</li>
					</ul>
				</NewEntry>
				<NewEntry title="Conveyor Belt and Thwomp details" date="2021-05-27">
					<p>Conveyor belts can now be configured to go in either direction</p>
					<p>Thwomp&apos;s pursuit direction can now be configured</p>
				</NewEntry>
				<NewEntry title="New Entities" date="2021-05-26">
					<ul className="ml-8 list-disc">
						<li>Flying Piranha Plant</li>
						<li>Grass - Horizontal</li>
						<li>Grass - Upper Left Corner</li>
						<li>Grass - Upper Right Corner</li>
						<li>Grass - Vertical Left</li>
						<li>Grass - Vertical Right</li>
					</ul>
				</NewEntry>
				<NewEntry title="Save a copy of a level" date="2021-05-26">
					<p>
						When editing one of your levels, the save button now has an option
						to save a copy.
					</p>
				</NewEntry>
				<NewEntry title="New Entities" date="2021-05-25">
					<ul className="ml-8 list-disc">
						<li>Pool of Water</li>
						<li>Vine</li>
						<li>Waterfall</li>
					</ul>
				</NewEntry>
				<NewEntry title="Coin Challenge Details Pane" date="2021-05-24">
					<p>
						You can now decide how many coins a Coin Challenge will require the
						player to collect.
					</p>
				</NewEntry>
				<NewEntry title="Fire Bar Details Pane" date="2021-05-24">
					<p>Fire Bar can now be fully configured.</p>
					<ul className="ml-8 list-disc">
						<li>Rotate clockwise or counter-clockwise</li>
						<li>Pivot point at the end or in the center</li>
						<li>Number of fireballs</li>
					</ul>
					<p>
						The details pane is pretty ugly, but that&apos;s true of all detail
						panes :) Making them look nicer is on the TODO list.
					</p>
				</NewEntry>
				<NewEntry title="New Entities" date="2021-05-22">
					<ul className="ml-8 list-disc">
						<li>Hopping Bowser Statue</li>
					</ul>
				</NewEntry>
				<NewEntry title="Layers" date="2021-05-22">
					<p>The editor is now divided into two layers: actors and stage</p>
					<p>
						Often these layers don&apos;t matter much, but they become important
						when working with large objects such as the black backdrop at the
						end of levels and large terrain. The layers enable working with
						these large entities without smaller things like enemies getting in
						the way, and vice versa
					</p>
					<p>
						Now that layers are in place, large terrain is the next thing to add
					</p>
				</NewEntry>
				<NewEntry title="New Entities" date="2021-05-16">
					<ul className="ml-8 list-disc">
						<li>Ceiling Buzzy Beetle</li>
						<li>Ceiling Spiny</li>
					</ul>
				</NewEntry>
				<NewEntry title="Lakitu payloads" date="2021-05-15">
					<p>
						Lakitu can now be set to either throw an orange egg, which becomes a
						spiny upon landing. Or a green egg, which stays an egg upon landing
						and is more aggressive than spinies.
					</p>
					<p>
						Possibly can configure Lakitu to throw coins as well, but so far
						have not been able to find that setting.
					</p>
				</NewEntry>
				<NewEntry title="New Entity" date="2021-05-14">
					<ul className="ml-8 list-disc">
						<li>Fluffy Cloud</li>
					</ul>
				</NewEntry>
				<NewEntry title="Compatibility Pages" date="2021-05-13">
					<p>
						If the palette says an entity can&apos;t be added, it&apos;s because
						that entity is not compatible with another entity you&apos;ve
						already added to the room. Now if you click on the &quot;see
						compatibility chart&quot; link in the palette, it will show you a
						breakdown of which entities work and don&apos;t work together. For
						example,{' '}
						<a
							className="text-blue-500"
							href="/compatibility/GrandGoomba"
							target="_blank"
							rel="noreferrer"
						>
							here is Grand Goomba&apos;s compatibility page
						</a>
						.
					</p>
				</NewEntry>
				<NewEntry title="Object Sets" date="2021-05-13">
					<p>
						Smaghetti now understands object sets. That means it knows which
						objects can be in the same room together and how to load them.
					</p>
					<p>
						With object sets now in place, these new entities have now been
						added:
					</p>
					<ul className="ml-8 list-disc">
						<li>Cactus</li>
						<li>Cement Block</li>
						<li>Flower Bush</li>
						<li>Lakitu Cloud</li>
					</ul>
				</NewEntry>
				<NewEntry title="New Entities" date="2021-05-7">
					<ul className="ml-8 list-disc">
						<li>Beached Cheep Cheep</li>
						<li>Fishbone</li>
						<li>Galoomba</li>
						<li>Invisible Block</li>
						<li>One Way Door</li>
						<li>River Cheep Cheep</li>
						<li>Winged Platform</li>
						<li>Baby Cheep Cheep</li>
						<li>Bowser Fire Statue</li>
						<li>Dolphin Pod</li>
						<li>Fall Away Spike</li>
						<li>Flutter</li>
						<li>Hothead</li>
						<li>Water Cheep Cheep</li>
					</ul>
					<p>
						Fishbone and Flutter are unused entities, now usable for the first
						time in SMA4!
					</p>
				</NewEntry>
				<NewEntry title="New Entities" date="2021-05-7">
					<p>
						Both of these are unused entities that Nintendo left in the game,
						now usable for the first time in SMA4!
					</p>
					<ul className="ml-8 list-disc">
						<li>Floating Block</li>
						<li>Arrow Lift</li>
					</ul>
				</NewEntry>
			</div>
		</Root>
	);
}

export { WhatsNewPage };