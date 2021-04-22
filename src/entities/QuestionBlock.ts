import type { Entity } from './types';
import { getBankParam1 } from './util';

const QuestionBlock: Entity = {
	editorType: 'cell',
	gameType: 'object',
	settingsType: 'single',
	defaultSettings: {},
	dimensions: 'x',
	objectId: 0x10,
	param1: 'width',
	payloadToObjectId: {
		CapeFeather: 0x44,
		CoinCache: 0x14,
		CoinSnake: 0x47,
		Leaf: 0x11,
		FireFlower: 0x10,
		PWing: 0x55,
		Shoe: 0x43,
	},
	emptyBank: 1,
	payloadBank: 0,

	resource: {
		palette: [
			0x7f96,
			0x7fff,
			0x0,
			0x209,
			0x228e,
			0x3732,
			0x47b7,
			0x1f4,
			0x29a,
			0x37f,
			0x15,
			0xd9d,
			0x2bf,
			0x3600,
			0x4aa5,
			0x5b29,
		],
		romOffset: 0x131fe0,
		tiles: [
			[280, 282],
			[281, 283],
		],
	},

	toBinary(x, y, w, h, settings) {
		const payloadToObjectId = this.payloadToObjectId!;

		if (settings.payload in payloadToObjectId) {
			// if there is a payload then need to split this up into individual QuestionBlock objects

			let binaries: number[] = [];
			const objectId = payloadToObjectId[
				settings.payload as keyof typeof payloadToObjectId
			]!;

			for (let by = 0; by < h + 1; ++by) {
				for (let bx = 0; bx < w + 1; ++bx) {
					binaries = binaries.concat([0, y + by, x + bx, objectId]);
				}
			}

			return binaries;
		} else {
			return [getBankParam1(1, w), y, x, this.objectId!];
		}
	},
};

export { QuestionBlock };
