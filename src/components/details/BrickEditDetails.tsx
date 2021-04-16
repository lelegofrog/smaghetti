import React from 'react';

import { DetailsEditProps } from './index';
import { Brick } from '../../entities/Brick';
import { PayloadEditDetails } from './PayloadEditDetails';
import { EntityType } from '../../entities/entityMap';

function BrickEditDetails({ onEntitySettingsChange }: DetailsEditProps) {
	return (
		<PayloadEditDetails
			payloads={Object.keys(Brick.payloadToObjectId!) as Array<EntityType>}
			onEntitySettingsChange={onEntitySettingsChange}
			canClear={true}
		/>
	);
}

export { BrickEditDetails };
