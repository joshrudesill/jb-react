import { Link } from "react-router-dom";


const ImageLink = ({ href, classString, imgId, src, alt, extraStyle, to }) => (
    <Link to={to}>
        <a href={href} className={classString}>
            <img id={imgId} src={src} alt={alt} style={extraStyle}></img>
        </a>
    </Link>
    
);

export default ImageLink;