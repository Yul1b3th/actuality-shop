import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Product } from '../features/products/card/card.component';

export interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

// Esta es la parte central de toda la gestion del estado
export const CartStore = signalStore(
  { providedIn: 'root'},
  withState(initialState),
  withMethods(({ products, ...store }) => ({
    addToCart(product: Product): void {
      const updatedProducts = [...products(), product];
      patchState(store, { products: updatedProducts });
    },

    removeItemFromCart(id: number): void {
      const updatedProducts = products().filter((product) => product.id !== id);
      patchState(store, { products: updatedProducts });
    },



  }))
);

