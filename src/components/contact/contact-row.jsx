import { Children } from "react";
import ColumnEncapsulator from "./col-encapsulator";

const ContactRow = ({ children, rowRules }) => {
  const childrenArray = Children.toArray(children);
  return (
  <div className={rowRules}>
    {
      childrenArray.map(child => 
        <ColumnEncapsulator cols={0}>
          { child }
        </ColumnEncapsulator>
      )
    }
    
  </div>
  );
};

export default ContactRow;