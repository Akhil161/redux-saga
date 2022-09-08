import { addToCart, removeToCart, emptyToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.productData;
  });
  console.warn("data in main component from saga  ", data);

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(emptyToCart());
          }}
        >
          Empty cart
        </button>
      </div>

      <div className="product-container">
        {data.map((item) => (
          <div className="product-item" key={item.id}>
            <img src={item.src} alt="prouct" />
            <div>name: {item.name}</div>
            <div>color: {item.color}</div>
            <div>Brand: {item.brand}</div>
            <div>Price: {item.price}</div>
            <div>Category: {item.category}</div>
            <div>
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  dispatch(removeToCart(item.id));
                }}
              >
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
