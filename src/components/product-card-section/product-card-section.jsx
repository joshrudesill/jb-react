import { CardTitleText } from "../card-titletext/card-titletext";
import { createStructuredSelector } from "reselect";
import {
  selectProductCardsTitle,
  selectProductCardsData
} from "../../redux/page/page.selectors";
import { connect } from "react-redux";
import ProductCard from "../product-card/product-card";
import TextTitle from "../text-title/text-title";
import CustomButton from "../custom-button/custom-button";

const ProductCards = ({ cardTitle, cards }) => (
  <div className="container-xl text-center my-5">
    <CardTitleText cardTitle={cardTitle} />
    <div className="row text-start row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">
      {cards.map((card) => (
        <ProductCard {...card} key={card.title} />
      ))}
    </div>
    <TextTitle text={cardTitle.bottomtitle} extraStyle="mt-5 display-5" />
    <CustomButton classes="btn btn-outline-primary mt-2 mb-2 btn-lg" to={'contact'}>
      {cardTitle.button}
    </CustomButton>
    <hr />
  </div>
);

const mapState = createStructuredSelector({
  cardTitle: selectProductCardsTitle,
  cards: selectProductCardsData
});

export default connect(mapState)(ProductCards);
