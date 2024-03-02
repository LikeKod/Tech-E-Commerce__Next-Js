"use client"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const ProductGallery = ( { imageList, loading } ) => {
	// Construct Images.
	const images = imageList.map( ( item ) => {
			return {
				original: item.src,
				thumbnail: item.src,
			};
		},
	);
	
return <ImageGallery lazyload={true} loading={loading} items={images}  thumbnailPosition="left" showNav={true} />;
};

export default ProductGallery; 

