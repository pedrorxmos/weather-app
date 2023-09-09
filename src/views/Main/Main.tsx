import { Days, Header, Highlights, Hours } from '../../components';
import './Main.scss';

export const Main = () => {
	return (
		<>
			<main>
				<Header />
				<section className="main-section">
					<h1 className="hidden">Weather App</h1>
					<h2>Today's highlights</h2>
					<Highlights />

					<h2>Hourly Forecast</h2>
					<Hours />

					<Days />
				</section>
			</main>
		</>
	);
};
