import { Style } from '@raster-system/types';

export const rhythm = ({ space }: { space: string }): Style => {
	return {
		[`& > * + * `]: {
			marginTop: space,
		},
	};
};

export const rhythmY = ({ space }: { space: string }): Style => {
	return {
		[`& > * + * `]: {
			marginTop: space,
		},
	};
};

export const rhythmX = ({ space }: { space: string }): Style => {
	return {
		[`& > * + * `]: {
			marginLeft: space,
		},
	};
};
