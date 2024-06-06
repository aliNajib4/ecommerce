import { useAppSelector, useAppDispatch } from "@store/hooks";
import { actGetProductsWhislist, cleanUp } from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";

const useWishlist = ()=>{
    const {
    loadingProducts: loading,
    error,
    productsFullInfo,
  } = useAppSelector((state) => state.wishlist);
  const items = useAppSelector((state) => state.cart.items);
  const products = productsFullInfo.map((el) => {
    return {
      ...el,
      quantity: items.find((id) => id.id === el.id)?.quantity || 0,
    };
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actGetProductsWhislist());
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch]);
  return { loading, error, products }
}

export default useWishlist;