import React from 'react';
import "./assets/css/App.css";
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import UserProvider from './contexts/UserProvider';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root"));
root.render(
	<UserProvider>
		<ChakraProvider theme={theme}>
		<ThemeEditorProvider>
			<App />
		</ThemeEditorProvider>
		</ChakraProvider>
	</UserProvider>,
);