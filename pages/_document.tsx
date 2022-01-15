// Dependencies
import React, { Fragment } from "react"
import Document, { DocumentContext } from "next/document"
import { ServerStyleSheet } from "styled-components"

// Extend document
class MyDocument extends Document {
	// Expose getInitialProps
	static async getInitialProps(ctx: DocumentContext) {
		// Prepare styled-components stylesheet
		const sheet = new ServerStyleSheet()

		// Save original renderPage method
		const originalRenderPage = ctx.renderPage

		try {
			// Render page
			ctx.renderPage = () => {
				return originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})
			}

			// Call getInitialProps
			const initialProps = await Document.getInitialProps(ctx)

			// Return a combination of collected styled and initial props
			return {
				...initialProps,
				styles: (
					<Fragment>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</Fragment>
				),
			}
		} finally {
			// Seal the deal!
			sheet.seal()
		}
	}
}

export default MyDocument
