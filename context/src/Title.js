import React, { useContext } from 'react';
import MyContext from './MyContext';

const Title = props => {
	const data = useContext(MyContext);

	return (
		<h1>{data}</h1>
	);
};

export default Title;
