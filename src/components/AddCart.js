// import { connect } from "react-redux";
// import Cart from "./Cart";

// const mapStateToProps = (state) => ({
//   CartList: state.cart,
// });

// function AddCart(props) {
//   const { CartList } = props;
//   console.log(props);
//   return (
//     <div>
//       {CartList
//         ? CartList.map((cart) => {
//             console.log(cart);
//             return <Cart cart={cart} key={cart} addcart={true} />;
//           })
//         : "NO ADD"}
//     </div>
//   );
// }

// export default connect(mapStateToProps, {})(AddCart);
