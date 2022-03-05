import { Route, Switch } from 'react-router-dom';

import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
`;

export default function Main() {
	return (
		<StyledMain>
			<Switch>
				<Route>
					<h1>Hello World</h1>
				</Route>
			</Switch>
		</StyledMain>
	);
}
