const pixelToRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
	title: pixelToRem(60),
	subtitle: pixelToRem(30),
	paragraph: pixelToRem(16),
	info: pixelToRem(12),
};

const spacing = {
	xxs: pixelToRem(12),
	xs: pixelToRem(15),
	s: pixelToRem(18),
	m: pixelToRem(24),
	l: pixelToRem(40),
	xl: pixelToRem(48),
};

const colors = {
	primary: '#438eff',
	background: '#ffffff',
	disabledPrimary: '#3571CC',
	border: 'rgba(0, 0, 0, 0.12);',
	placeholder: 'rgba(0, 0, 0, 0.6)',
	danger: 'red',
	text: 'rgba(0, 0, 0, 0.82)',
};

const common = {
	flexCenter: `
    display: flex;
    align-items: center;
    `,
	boxShadow: `
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.18);
  `,
	font: `
    font-family:Roboto;
    font-weight:normal;
  `,
	pixelToRem,
};

const theme = {
	fontSizes,
	colors,
	common,
	spacing,
} as const;

export type Theme = typeof theme;

export default theme;
