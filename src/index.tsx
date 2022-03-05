import './index.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import store from './store/store';
import theme from './styles/theme';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
