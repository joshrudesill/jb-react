

const ImageLink = ({ href, classString, imgId, src, alt, extraStyle }) => (
    <a href={href} className={classString}>
        <img id={imgId} src={src} alt={alt} style={extraStyle}></img>
    </a>
);

export default ImageLink;