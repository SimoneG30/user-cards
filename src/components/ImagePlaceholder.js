import React from "react";
import ContentLoader from "react-content-loader";

const ImagePlaceholder = () => (
    <ContentLoader
        speed={2}
        width={400}
        height={300}
        viewBox="0 0 400 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="2" y="2" rx="0" ry="0" width="400" height="300" />
    </ContentLoader>
);

export default ImagePlaceholder;
