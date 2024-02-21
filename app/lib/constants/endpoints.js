export const HEADER_FOOTER_ENDPOINT = `${ process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL }/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`;

export const GET_POSTS_ENDPOINT = `${ process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL }/wp-json/rae/v1/posts`;
export const GET_POST_ENDPOINT = `${ process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL }/wp-json/wp/v2/posts`;
export const GET_PAGES_ENDPOINT = `${ process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL }/wp-json/wp/v2/pages`;
export const COMMENTS_ENDPOINT = `${ process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL }/wp-json/wp/v2/comments`;


export const GET_PRODUCTS_ENDPOINT = `${ process.env.NEXT_PUBLIC_SITE_URL }/api/products`;
export const GET_SINGLE_PRODUCT_ENDPOINT = `${ process.env.NEXT_PUBLIC_SITE_URL }/api/product`;
export const GET_PRODUCT_TAGS_ENDPOINT = `${ process.env.NEXT_PUBLIC_SITE_URL }/api/tags`;

export const POST_USERS_ENDPOINT = `${ process.env.NEXT_PUBLIC_SITE_URL }/api/users`;

/**
 * Cart
 * @type {string}
 */
export const CART_ENDPOINT = `${ process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL }/wp-json/rae/v1/cart/items/`;