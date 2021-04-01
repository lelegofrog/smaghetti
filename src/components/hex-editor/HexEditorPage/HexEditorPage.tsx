import React, { useState } from 'react';
import { FileLoaderModal } from '../../FileLoader/FileLoaderModal';
import { GBAPlayer } from '../../LevelPlayer/GBAPlayer';
import { HexEditor } from './HexEditor';
import {
	getBios,
	getEmptySave,
	getRom,
	getSaveState,
} from '../../FileLoader/files';
import { Button } from '../../Button';
import { createLevelData } from '../../../levelData/createLevelData';

type HexEditorPageProps = {
	allFilesReady: boolean;
};

function HexEditorPage({ allFilesReady }: HexEditorPageProps) {
	const [editMode, setEditMode] = useState<'empty' | 'full'>('full');
	const [levelData, setLevelData] = useState<Uint8Array | null>(null);
	const [editState, setEditState] = useState<'editing' | 'running'>('editing');

	function handleLevelFile(e: React.ChangeEvent<HTMLInputElement>) {
		const reader = new FileReader();

		reader.onloadend = (ole) => {
			setLevelData(new Uint8Array(ole.target!.result as ArrayBuffer));
		};

		reader.readAsArrayBuffer(e.target.files![0]);
	}

	function handleRunningEditToggle() {
		setEditState((e) => (e === 'editing' ? 'running' : 'editing'));
	}

	function handleStartEmpty() {
		setLevelData(createLevelData([], { width: 0, height: 0, data: [] }));
		setEditMode('empty');
	}

	return (
		<>
			<FileLoaderModal isOpen={!allFilesReady} />
			<div className="h-screen overflow-hidden">
				<div className="bg-white shadow-lg w-full space-x-2 p-1">
					<label className="text-black">
						level file
						<input type="file" accept=".level" onChange={handleLevelFile} />
					</label>

					<Button onClick={handleStartEmpty}>start empty</Button>
					<Button onClick={handleRunningEditToggle}>{editState}</Button>
				</div>
				{allFilesReady && levelData && (
					<GBAPlayer
						className="inline-block"
						romFile={getRom()!}
						biosFile={getBios()!}
						emptySaveFile={getEmptySave()!}
						saveState={getSaveState()!}
						levelData={levelData}
						isPlaying={editState === 'running'}
						scale={1}
					/>
				)}
				<div
					className="overflow-y-auto"
					style={{ height: 'calc(100% - 200px)' }}
				>
					<HexEditor data={levelData} />
				</div>
			</div>
		</>
	);
}

export { HexEditorPage };
