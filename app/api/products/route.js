import { NextResponse } from "next/server"

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
	url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
	consumerKey: process.env.WC_CONSUMER_KEY,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	version: "wc/v3"
});

/**
 * Geting Products form Wordpress Woocomerce RestApi.
 *
 * Endpoint /api/products or '/api/products?perPage=2'
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */



export async function GET (req, res) {
	
	const responseData = {
		success: false,
		products: []
	}
	
	const { perPage } = req?.query ?? {};
	
	try {
		const { data } = await api.get(
			'products',
			{
				per_page: 20
			}
		);
		
		responseData.success = true;
		responseData.products = data;
		
		return NextResponse.json( responseData );
		
	} catch ( error ) {
		responseData.error = error.message;
		res.status( 500 ).json( responseData  );
	}
}