import { LevelObject } from '../levelData/parseObjectsFromLevelFile';

type TileExtractionSpec = {
	romOffset: number;
	tileIndex: number;
	flip?: 'h' | 'v' | 'hv';
	uncompressed?: boolean;
	shift?: number;
};

type BaseEntity = {
	type: string;
	romOffset?: number;
	palette: number[];
	tiles: Array<Array<number | TileExtractionSpec>>;
};

type ObjectEntity = BaseEntity & {
	mode: 'Object';
	dimensions: 'x' | 'y' | 'xy';
	settingsType: 'none' | 'single' | 'grouped';
	defaultSettings: Record<string, any>;
	toBinary: (
		x: number,
		y: number,
		w: number,
		h: number,
		settings: Record<string, any>
	) => number[];

	// only need to implement this if parsing is different from the basic
	// parsing provided in parseObjectsFromLevelFile
	parseBinary?: (bytes: number[]) => LevelObject;
};

type SpriteEntity = BaseEntity & {
	mode: 'Sprite';
	toBinary: (
		x: number,
		y: number,
		settings: Record<string, any>
	) =>
		| [number, number, number, number]
		| [number, number, number, number, number];

	// only need to implement this if parsing is different from the basic
	// parsing provided in parseSpritesFromLevelFile
	parseBinary?: (bytes: number[]) => LevelObject;
};

type ResourceEntity = ObjectEntity | SpriteEntity;

export type {
	TileExtractionSpec,
	ResourceEntity,
	BaseEntity,
	ObjectEntity,
	SpriteEntity,
};
