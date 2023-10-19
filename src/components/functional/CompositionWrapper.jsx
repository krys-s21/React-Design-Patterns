import { DangerButton, BigSuccessButton } from './composition';


export const CompositionWrapper = () => {
	return (
		<>
		<DangerButton text="Don't do it!" />
		<BigSuccessButton text="Yes!!!" />
		</>
	);
}
