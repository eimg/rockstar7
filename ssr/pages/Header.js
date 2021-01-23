const Header = props => {
	return (
		<div style={{ padding: 20, textAlign: 'center', background: 'teal', color: 'white' }}>
			<h1>{props.title}</h1>
		</div>
	);
};

export default Header;
