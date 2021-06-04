import React from 'react';
import type { Entity } from './types';
import { TILE_SIZE } from '../tiles/constants';
import { TileSpace } from './TileSpace';
import { ANY_OBJECT_SET } from './constants';
import { KoopalingViewDetails } from './detailPanes/KoopalingViewDetails';
import { KoopalingEditDetails } from './detailPanes/KoopalingEditDetails';

const Roy: Entity = {
	paletteCategory: 'enemy',
	paletteInfo: {
		subCategory: 'enemy-boss',
		title: 'Roy',
	},

	objectSets: ANY_OBJECT_SET,
	spriteGraphicSets: [-1, -1, 2, -1, -1, 4],
	layer: 'actor',
	editorType: 'entity',
	dimensions: 'none',
	settingsType: 'single',
	defaultSettings: { stompCount: 3, fireballCount: 10 },
	objectId: 0x14,
	koopalingId: 5,

	resource: {
		romOffset: 0x1724f0,
		palette: [
			0x7f96,
			0x0,
			0x7fff,
			0x3d39,
			0x4ddd,
			0x625f,
			0x4a52,
			0x5ef7,
			0x6f7b,
			0x76ff,
			0x11b7,
			0x223c,
			0x2edf,
			0x31d,
			0x237f,
			0x37df,
		],
		tiles: [
			[136, 137, 156],
			[152, 153, 144],
			[195, 196, 197],
			[211, 212, 213],
		],
	},

	toSpriteBinary(x, y, _w, _h, settings) {
		const fireballCount = (settings.fireballCount ??
			this.defaultSettings!.fireballCount) as number;
		const stompCount = (settings.stompCount ??
			this.defaultSettings!.stompCount) as number;

		const stompParam = (this.koopalingId! << 4) | (stompCount & 0xf);

		return [1, this.objectId, x, y, stompParam, fireballCount & 0xff];
	},

	simpleRender(size) {
		const style = { width: size, height: size, backgroundSize: '75% 100%' };

		return (
			<div className="relative Roy-bg bg-center bg-no-repeat" style={style} />
		);
	},

	render(showDetails, settings, onSettingsChange) {
		const stompCount = (settings.stompCount ??
			this.defaultSettings!.stompCount) as number;
		const fireballCount = (settings.fireballCount ??
			this.defaultSettings!.fireballCount) as number;

		const style = {
			width: TILE_SIZE * 1.5,
			height: TILE_SIZE * 2,
		};

		const wandStyle = {
			width: TILE_SIZE,
			height: TILE_SIZE,
			top: 8,
			left: -11,
		};

		const spaceStyle = {
			width: TILE_SIZE,
			height: TILE_SIZE,
			top: 0,
			left: 0,
		};

		const body = (
			<div className="relative Roy-bg bg-cover" style={style}>
				<div className="absolute KoopalingWand-bg" style={wandStyle} />
				<div className="absolute" style={spaceStyle}>
					<TileSpace />
				</div>
				<KoopalingViewDetails
					stompCount={stompCount}
					fireballCount={fireballCount}
				/>
			</div>
		);

		if (showDetails) {
			return (
				<KoopalingEditDetails
					currentStompCount={stompCount}
					currentFireballCount={fireballCount}
					onSettingsChange={onSettingsChange}
				>
					{body}
				</KoopalingEditDetails>
			);
		} else {
			return body;
		}
	},
};

export { Roy };