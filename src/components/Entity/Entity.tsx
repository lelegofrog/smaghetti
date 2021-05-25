import React, { CSSProperties, Ref, RefObject } from 'react';
import clsx from 'clsx';
import { entityMap } from '../../entities/entityMap';

import focusedStyles from '../../styles/focused.module.css';
import { RoomState } from '../make/editorSlice';

type EntityProps = {
	className?: string;
	entity: EditorEntity;
	room?: RoomState;
	scale?: number;
	id?: number;
	style?: CSSProperties;
	settings?: EditorEntitySettings;
	focused?: boolean;
	soleFocused?: boolean;
	dragging?: boolean;
	onEntitySettingsChange: (settings: EditorEntitySettings) => void;
	ref?: RefObject<HTMLDivElement> | Ref<HTMLDivElement> | null;
};

function Entity(props: EntityProps) {
	const {
		className,
		style,
		entity,
		room,
		settings,
		focused,
		soleFocused,
		dragging,
		onEntitySettingsChange,
	} = props;
	const entityDef = entityMap[entity.type];

	const body = entityDef.render(
		!!soleFocused && !dragging,
		settings ?? {},
		onEntitySettingsChange,
		entity,
		room
	);

	return (
		<div
			className={clsx(className, { [focusedStyles.focused]: focused })}
			style={style}
		>
			{body}
		</div>
	);
}

export { Entity };
