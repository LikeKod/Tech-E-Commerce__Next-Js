"use client"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const ProductGallery = ( { items } ) => {
	// Construct Images.
	const images = items.map( ( item ) => {
			return {
				original: item.src,
				thumbnail: item.src,
			};
		},
	);
	
	return <ImageGallery items={images}  thumbnailPosition="left" showNav={true} />;
};

export default ProductGallery; 

