
import TextTitle from "../text-title/text-title";
import Wrapper from "../wrapper/wrapper";


export const CardTitleText = ({ cardTitle }) => (
    <Wrapper>
        <TextTitle extraStyle={'display-4'} text={cardTitle.toptext}/>
        <TextTitle extraStyle={'p lead text-muted mb-3'} text={cardTitle.subtext}/>
    </Wrapper>
);



export default CardTitleText;