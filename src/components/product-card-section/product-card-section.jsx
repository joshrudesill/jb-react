import { CardTitleText } from "../card-titletext/card-titletext";
import { createStructuredSelector } from "reselect";
import { selectProductCardsTitle } from "../../redux/page/page.selectors";
import { connect } from 'react-redux';

const ProductCards = ({ cardTitle }) => (
    <div className="container-xl text-center my-5">
        <CardTitleText cardTitle={cardTitle}/>
    </div>
);

const mapState = createStructuredSelector({
    cardTitle: selectProductCardsTitle 
 });

export default connect(mapState)(ProductCards);