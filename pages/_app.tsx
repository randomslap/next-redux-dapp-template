import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"

import store from "../redux/store"
import GlobalStyles from "../styles/globalStyles"
import theme from "../styles/theme"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default MyApp
