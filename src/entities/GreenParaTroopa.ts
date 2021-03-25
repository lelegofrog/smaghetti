import type { SpriteEntity } from './types';
import { simpleSpriteBinary } from './util';

const OBJECT_ID = 0x6e;

const GreenParaTroopa: SpriteEntity = {
	type: 'GreenParaTroopa',
	mode: 'Sprite',

	palette: [
		0x7f96,
		0x7fff,
		0x18c6,
		0x26b,
		0x1b10,
		0x13b4,
		0x25fd,
		0x369e,
		0x475f,
		0x1abf,
		0x1c,
		0x253f,
		0x463f,
		0x7ad1,
		0x6e2c,
		0x59a6,
	],
	tiles: [
		[
			{ romOffset: 0x2282e4, tileIndex: 322 },
			{ romOffset: 0x1724f0, tileIndex: 967 },
		],
		[
			{ romOffset: 0x2282e4, tileIndex: 354 },
			{ romOffset: 0x1724f0, tileIndex: 983 },
		],
		[
			{ romOffset: 0x2282e4, tileIndex: 386 },
			{ romOffset: 0x2282e4, tileIndex: 387 },
		],
		[
			{ romOffset: 0x2282e4, tileIndex: 418 },
			{ romOffset: 0x2282e4, tileIndex: 419 },
		],
	],
	toBinary(x, y) {
		return simpleSpriteBinary(x, y, OBJECT_ID);
	},
};

export { GreenParaTroopa };