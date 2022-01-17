import React from 'react';
import type { Entity } from './types';
import { TILE_SIZE } from '../tiles/constants';
import { ANY_OBJECT_SET } from './constants';
import { GeneratorFrame } from './components/GeneratorFrame';
import { parseSimpleSprite } from './util';

const ParaBobombGeneratorCanceler: Entity = {
	paletteCategory: 'enemy',
	paletteInfo: {
		subCategory: 'enemy-generator',
		title: 'Bob-omb - Parachute, Canceler',
		description:
			'Once Mario goes to the right and above it, any active Para Bob-omb generators will stop. They will turn on again if he goes back left of the canceler.',
	},

	objectSets: ANY_OBJECT_SET,
	spriteGraphicSets: [-1, -1, 0, -1, -1, 6],
	layer: 'actor',
	editorType: 'entity',
	dimensions: 'none',
	objectId: 0x6c,

	toSpriteBinary({ x, y }) {
		if (x % 2 === 0) {
			// if not at an odd x, don't emit it, otherwise it will
			// be a galoomba canceler. The user gets a warning so it's ok
			// to emit nothing here.
			// this does matter as sure the canceler will cancel the bobombs regardless,
			// but if Mario goes back to the left, galoombas will spawn, not bobombs
			return [];
		}

		return [1, this.objectId, x, y];
	},

	parseSprite(data, offset) {
		const result = parseSimpleSprite(data, offset, 1, this);

		if (result && result.entity.x % 2 === 1) {
			return result;
		}
	},

	simpleRender(size) {
		const style = {
			backgroundPositionX: '25%',
			backgroundPositionY: 'center',
			backgroundSize: '45% 90%',
		};

		return (
			<GeneratorFrame
				canceler
				size={size}
				resourceClassName="ParaBobombGenerator-bg bg-no-repeat"
				resourceStyle={style}
			/>
		);
	},

	render() {
		return this.simpleRender(TILE_SIZE);
	},

	getProblem({ entity }) {
		const tx = entity.x / TILE_SIZE;

		if (tx % 2 === 0) {
			return 'Must be placed on an odd x tile';
		}
	},
};

export { ParaBobombGeneratorCanceler };
