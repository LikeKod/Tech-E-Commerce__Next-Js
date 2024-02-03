import { NextResponse } from "next/server"

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

export const wooApi = new WooCommerceRestApi({
	url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
	consumerKey: process.env.WC_CONSUMER_KEY,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	version: "wc/v3"
});


export async function GET (req, res) {
	
	const responseData = {
		// success: false,
		products: []
	}
	
	const { perPage, slug } = req?.query ?? {};
	
	try {
		const { data } = await wooApi.get('products', { per_page: 30 });
		responseData.products = data;		
        // console.log(responseData)
		return NextResponse.json( responseData );
		
	} catch ( error ) {
		responseData.error = error.message;
		res.status( 500 ).json( responseData  );
	}
}