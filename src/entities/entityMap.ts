import { ObjectEntity, SpriteEntity } from './types';

import { AceCoin } from './AceCoin';
import { Bobomb } from './Bobomb';
import { BoomBoom } from './BoomBoom';
import { Brick } from './Brick';
import { BuzzyBeetle } from './BuzzyBeetle';
import { CapeFeather } from './CapeFeather';
import { CardSlotMachine } from './CardSlotMachine';
import { Coin } from './Coin';
import { FireFlower } from './FireFlower';
import { Goomba } from './Goomba';
import { GreenKoopaTroopa } from './GreenKoopaTroopa';
import { GreenParaTroopa } from './GreenParaTroopa';
import { IndestructibleBrick } from './IndestructibleBrick';
import { Key } from './Key';
import { Lakitu } from './Lakitu';
import { Mushroom } from './Mushroom';
import { OneUpMushroom } from './OneUpMushroom';
import { Player } from './Player';
import { QuestionBlock } from './QuestionBlock';
import { QuestionMark } from './QuestionMark';
import { RedKoopaTroopa } from './RedKoopaTroopa';
import { RedParaTroopa } from './RedParaTroopa';
import { ShoeGoomba } from './ShoeGoomba';
import { Spiny } from './Spiny';
import { SpringBoard } from './SpringBoard';
import { StarMan } from './StarMan';

type SpriteType =
	| 'AceCoin'
	| 'Bobomb'
	| 'BoomBoom'
	| 'BuzzyBeetle'
	| 'CapeFeather'
	| 'CardSlotMachine'
	| 'FireFlower'
	| 'Goomba'
	| 'GreenKoopaTroopa'
	| 'GreenParaTroopa'
	| 'Key'
	| 'Lakitu'
	| 'Mushroom'
	| 'OneUpMushroom'
	| 'Player'
	| 'QuestionMark'
	| 'RedKoopaTroopa'
	| 'RedParaTroopa'
	| 'ShoeGoomba'
	| 'Spiny'
	| 'SpringBoard'
	| 'StarMan';

type ObjectType = 'Brick' | 'Coin' | 'IndestructibleBrick' | 'QuestionBlock';

const spriteMap: Record<SpriteType, SpriteEntity> = {
	AceCoin,
	Bobomb,
	BoomBoom,
	BuzzyBeetle,
	CapeFeather,
	CardSlotMachine,
	FireFlower,
	Goomba,
	GreenKoopaTroopa,
	GreenParaTroopa,
	Key,
	Lakitu,
	Mushroom,
	OneUpMushroom,
	Player,
	QuestionMark,
	RedKoopaTroopa,
	RedParaTroopa,
	ShoeGoomba,
	Spiny,
	SpringBoard,
	StarMan,
};

const objectMap: Record<ObjectType, ObjectEntity> = {
	Brick,
	Coin,
	IndestructibleBrick,
	QuestionBlock,
};

export { spriteMap, objectMap };
export type { SpriteType, ObjectType };
