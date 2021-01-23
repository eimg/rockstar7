import Header from './Header';
import Nav from './Nav';

const Home = props => {
	return (
		<div style={{ width: 800, margin: '20px auto' }}>
			<Header title="Home" />
			<Nav />
			<div>
				<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempore enim eius repellendus! Illum, minima. Ad vitae quibusdam quaerat odit inventore dicta neque, natus, beatae totam ut porro eaque nostrum?
				</p>
			</div>
		</div>
	);
};

export default Home;
