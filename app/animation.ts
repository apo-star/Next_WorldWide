export const slideUp = {
	initial: {
		y: "100%",
	},
	open: (i: any) => ({
		y: "0%",
		transition: { duration: 1.0, delay: 0.01 * i },
	}),
	closed: {
		y: "100%",
		transition: { duration: 1.0 },
	},
};

export const opacity = {
	initial: {
		opacity: 0,
	},
	open: {
		opacity: 1,
		transition: { duration: 0.5 },
	},
	closed: {
		opacity: 0,
		transition: { duration: 0.5 },
	},
};

export const fadeIn = {
	initial: {
		opacity: 0,
	},
	open: {
		opacity: 1,
		transition: { duration: 0.5 },
	},
	closed: {
		opacity: 0,
		transition: { duration: 0.5 },
	},
};
