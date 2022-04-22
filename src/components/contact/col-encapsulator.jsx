
const ColumnEncapsulator = ({ children, cols }) => (
  <div className={ `col${ cols > 0 ? '-' + cols.toString() : '' }` }>
    { children }
  </div>
);

export default ColumnEncapsulator;