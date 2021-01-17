const Element = props => {
	return ( 
		<ul>
			<li>Item One</li>
			<li>Item Two</li>
			<li>Item Three</li>
			<li>Item Four</li>
			<li>Item Five</li>
		</ul>
	);
}

ReactDOM.render(
	<Element />,
	document.getElementById("app")
)