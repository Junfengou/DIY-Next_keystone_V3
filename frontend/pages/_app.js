import React from "react";
import withData from "../lib/withData";
import Page from "../components/Page";
import { ApolloProvider } from "@apollo/client";
// import { CartStateProvider } from "../lib/CartState";

function MyApp({ Component, pageProps, apollo }) {
	return (
		<ApolloProvider client={apollo}>
			<Page>
				<Component {...pageProps} />
			</Page>
		</ApolloProvider>
	);
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
	let pageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	pageProps.query = ctx.query;
	return { pageProps };
};

export default withData(MyApp);
