import Main from './feature/main/Main';
import PageLayout from './components/PageLayout';
import React from 'react';

export default function App() {
	return (
		<>
			<PageLayout Body={<Main />} />
		</>
	);
}
