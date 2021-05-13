import { entityMap, EntityType } from './entityMap';
import { TILE_SIZE } from '../tiles/constants';

export function getBankParam1(bank: 0 | 1, length: number): number {
	return (bank << 6) | length;
}

export function simpleSpriteBinary(
	x: number,
	y: number,
	objectId: number
): [number, number, number, number] {
	return [0, objectId, x, y];
}

export function scaledEntityRender(entityType: EntityType, scale = 1) {
	const entityDef = entityMap[entityType];
	const widthInTiles = entityDef.width ?? 1;
	const heightInTiles = entityDef.height ?? 1;
	const entityWidth = widthInTiles * TILE_SIZE * scale;
	const entityHeight = heightInTiles * TILE_SIZE * scale;

	return entityDef.simpleRender(entityWidth, entityHeight);
}

export function encodeObjectSets(sets: number[][]): number[] {
	return sets.map((s) => {
		return (s[0] << 16) | s[1];
	});
}

export function decodeObjectSet(set: number): [number, number] {
	const objectSet = set >> 16;
	const objectGraphicSet = set & 0xffff;

	return [objectSet, objectGraphicSet];
}
