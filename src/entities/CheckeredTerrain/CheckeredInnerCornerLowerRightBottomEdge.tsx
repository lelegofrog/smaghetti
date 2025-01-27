import React from 'react';
import type { Entity } from '../types';
import { encodeObjectSets, parseSimpleObject } from '../util';
import { TILE_SIZE } from '../../tiles/constants';
import { ANY_SPRITE_GRAPHIC_SET } from '../constants';

const CheckeredInnerCornerLowerRightBottomEdge: Entity = {
	paletteCategory: 'terrain',
	paletteInfo: {
		subCategory: 'terrain-checkered',
		title: 'Checkered Inner Corner - Lower Right, Bottom Edge',
	},

	layer: 'stage',
	editorType: 'cell',
	dimensions: 'none',
	param1: 'other',
	param2: 'width',
	objectId: 0x4f,
	emptyBank: 1,
	objectSets: encodeObjectSets([
		[1, 12],
		[1, 1],
		[1, 4],
		[1, 9],
		[11, 12],
		[11, 1],
		[11, 4],
		[11, 9],
	]),
	spriteGraphicSets: ANY_SPRITE_GRAPHIC_SET,

	resource: {
		palettes: [
			[
				32662,
				32767,
				0,
				17932,
				23185,
				28469,
				32731,
				4531,
				10808,
				15036,
				8800,
				10952,
				15180,
				18352,
				8552,
				6645,
			],
		],
		tiles: [
			[
				{
					romOffset: 1584308,
					tileIndex: 381,
				},
				477,
			],
			[486, 487],
		],
		romOffset: 1486172,
	},

	toObjectBinary({ x, y }) {
		// this is totally different from just about all objects
		// in the entire game
		// docs: https://github.com/city41/smaghetti/wiki/Checkered-terrain
		return [0, y, x, this.objectId];
	},

	parseObject(data, offset) {
		return parseSimpleObject(data, offset, 7, this);
	},

	simpleRender(size) {
		return (
			<div
				className="CheckeredInnerCornerLowerRightBottomEdge-bg bg-cover"
				style={{ width: size, height: size }}
			/>
		);
	},

	render() {
		return this.simpleRender(TILE_SIZE);
	},
};

export { CheckeredInnerCornerLowerRightBottomEdge };
