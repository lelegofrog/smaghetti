import React from 'react';

import type { Entity } from './types';
import { TILE_SIZE } from '../tiles/constants';
import { PayloadViewDetails } from './detailPanes/PayloadViewDetails';
import { ResourceType } from '../resources/resourceMap';
import { PayloadEditDetails } from './detailPanes/PayloadEditDetails';
import { encodeObjectSets, parsePayloadObject } from './util';
import { objectSets } from './QuestionBlock/objectSets';
import invert from 'lodash/invert';

const payloadToObjectId = {
	MusicBlock: 0x20,
	OneUpMushroom: 0x1f,
	Coin: 0x1e,
};

const objectIdToPayload = invert(payloadToObjectId) as Record<
	number,
	ResourceType
>;

const HiddenBlock: Entity = {
	paletteCategory: 'object',
	paletteInfo: {
		title: 'Hidden Block',
		description: 'Basically an invisible question block',
	},

	objectId: 0,
	objectSets: encodeObjectSets(objectSets),
	spriteGraphicSets: [-1, 0, -1, -1, -1, 1],
	layer: 'stage',
	editorType: 'cell',

	defaultSettings: { payload: 'MusicBlock' },
	dimensions: 'none',
	payloadBank: 0,

	resource: {
		palettes: [],
		romOffset: 0x16ea40,
		tiles: [
			// HACK: since this block is hidden, it doesn't actually
			// have any graphics, so these are empty tiles, just to
			// satisfy the current constraints
			[250, 250],
			[250, 250],
		],
	},

	toObjectBinary({ x, y, settings }) {
		const objectId =
			payloadToObjectId[settings.payload as keyof typeof payloadToObjectId];

		return [0, y, x, objectId!];
	},

	parseObject(data, offset) {
		return parsePayloadObject(data, offset, 0, objectIdToPayload, this);
	},

	simpleRender(size) {
		const style = { width: size, height: size };
		return (
			<div
				className="border-green-400 border-2 border-dashed grid place-items-center font-xl font-bold"
				style={style}
			>
				?
			</div>
		);
	},

	render({ showDetails, settings, onSettingsChange }) {
		const body = (
			<div
				className="relative border-green-400 border-2 border-dashed grid place-items-center font-bold selectable"
				style={{ width: TILE_SIZE, height: TILE_SIZE }}
			>
				<PayloadViewDetails payload={settings.payload} />
			</div>
		);

		if (showDetails) {
			const payloads = Object.keys(payloadToObjectId) as Array<
				EntityType | ResourceType
			>;

			return (
				<PayloadEditDetails
					width={TILE_SIZE}
					height={TILE_SIZE}
					onPayloadChange={(payload) => onSettingsChange({ payload })}
					payloads={payloads}
				>
					{body}
				</PayloadEditDetails>
			);
		} else {
			return body;
		}
	},
};

export { HiddenBlock };
