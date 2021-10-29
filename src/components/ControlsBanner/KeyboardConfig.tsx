import React, { ReactNode, useState, useEffect } from 'react';
import {
	IconArrowDown,
	IconArrowLeft,
	IconArrowRight,
	IconArrowUp,
	IconKeyboard,
} from '../../icons';
import { Button } from '../Button';

function keyCodeToString(keyCode: number): ReactNode {
	if (keyCode >= 112 && keyCode <= 123) {
		return 'F' + (keyCode - 111);
	}

	switch (keyCode) {
		case 37:
			return <IconArrowLeft />;
		case 38:
			return <IconArrowUp />;
		case 39:
			return <IconArrowRight />;
		case 40:
			return <IconArrowDown />;
		case 17:
			return 'CTRL';
		case 92:
			return 'meta';
		case 16:
			return 'shift';
		case 32:
			return 'space';
		case 13:
			return 'enter';
		case 27:
			return 'del';
		case 9:
			return 'tab';
		case 187:
			return '=';
		case 189:
			return '-';
		default:
			return String.fromCharCode(keyCode);
	}
}

function Kbd({ children }: { children: ReactNode }) {
	return (
		<kbd className="inline-block text-center px-2 py-1 bg-gray-500 text-white font-bold rounded-md">
			{children}
		</kbd>
	);
}

const keycodeToName = {
	GBA_KEYCODE_LEFT: 'left',
	GBA_KEYCODE_RIGHT: 'right',
	GBA_KEYCODE_UP: 'up',
	GBA_KEYCODE_DOWN: 'down',
	GBA_KEYCODE_A: 'A (jump)',
	GBA_KEYCODE_B: 'B (run)',
};

const keySteps = Object.keys(keycodeToName) as Array<
	keyof typeof keycodeToName
>;

function KeyboardConfig() {
	const [keyConfigStep, setKeyConfigStep] = useState<null | number>(null);

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			e.stopPropagation();
			e.preventDefault();

			const keycode = keySteps[keyConfigStep!];
			window[keycode] = e.keyCode;
			localStorage[keycode] = e.keyCode;

			setKeyConfigStep((s) => {
				if (s === keySteps.length - 1) {
					return null;
				} else {
					return (s ?? 0) + 1;
				}
			});
		}

		if (keyConfigStep !== null) {
			window.addEventListener('keydown', handleKeyDown, { capture: true });
		}

		return () =>
			window.removeEventListener('keydown', handleKeyDown, { capture: true });
	}, [keyConfigStep, setKeyConfigStep]);

	let body;

	if (keyConfigStep === null) {
		body = (
			<>
				<div
					className="grid gap-x-2 gap-y-2 items-center mx-auto"
					style={{ gridTemplateColumns: 'repeat(3, min-content)' }}
				>
					<Kbd>{keyCodeToString(window.GBA_KEYCODE_LEFT)}</Kbd>
					<div>-</div>
					<div>left</div>
					<Kbd>{keyCodeToString(window.GBA_KEYCODE_RIGHT)}</Kbd>
					<div>-</div>
					<div>right</div>
					<Kbd>{keyCodeToString(window.GBA_KEYCODE_UP)}</Kbd>
					<div>-</div>
					<div>up</div>
					<Kbd>{keyCodeToString(window.GBA_KEYCODE_DOWN)}</Kbd>
					<div>-</div>
					<div>down</div>
				</div>
				<div
					className="grid gap-x-2 gap-y-2 items-center mx-auto"
					style={{ gridTemplateColumns: 'repeat(3, min-content)' }}
				>
					<Kbd>{keyCodeToString(window.GBA_KEYCODE_A)}</Kbd>
					<div>-</div>
					<div>jump</div>
					<Kbd>{keyCodeToString(window.GBA_KEYCODE_B)}</Kbd>
					<div>-</div>
					<div>run</div>
				</div>
			</>
		);
	} else {
		body = <div>Press a key for {keycodeToName[keySteps[keyConfigStep]]}</div>;
	}

	return (
		<div className="bg-gray-600 p-4 flex flex-col gap-y-4 items-center">
			<IconKeyboard className="text-4xl mx-auto mb-4" />
			<div className="flex flex-row gap-x-4 items-center justify-center">
				{body}
			</div>
			{keyConfigStep === null && (
				<Button onClick={() => setKeyConfigStep(0)}>reassign</Button>
			)}
		</div>
	);
}

export { KeyboardConfig };