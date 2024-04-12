import {withDevtools} from "@angular-architects/ngrx-toolkit";
import {computed} from "@angular/core";
import {patchState, signalStore, withComputed, withMethods, withState} from "@ngrx/signals";
import {withEntities} from "@ngrx/signals/entities";
import {filterQuery, orderQuery, Product, ProductBought} from "@world-peas/domain";

type ProductsState = {
  products: Product[],
  filter: filterQuery,
  order: orderQuery,
  productsView: 'cards' | 'list';
  basket: ProductBought[];
};

const initialState: ProductsState = {
  products: [
    {
      id: 1,
      name: 'Heirloom Tomato',
      price: 5.99,
      typePrice: 'lb',
      origin: 'Grown in San Juan Capistrano, CA',
      imagePath: './assets/img/shop/heirloom-tomato.png',
      maxItems: 2
    },
    {
      id: 2,
      name: 'Organic Ginger',
      price: 12.99,
      typePrice: 'lb',
      origin: 'Grown in Huntington Beach, CA',
      imagePath: './assets/img/shop/organic-ginger.png',
      maxItems: 1
    },
    {
      id: 3,
      name: 'Onion',
      price: 2.99,
      typePrice: 'lb',
      origin: 'Grown in San Francisco, CA',
      imagePath: './assets/img/shop/onion.png',
      maxItems: 3
    },
    {
      id: 4,
      name: 'Cucumber',
      price: 1.99,
      typePrice: 'p',
      origin: 'Grown in Huntington Beach, CA',
      imagePath: './assets/img/shop/cucumber.png'
    }
  ],
  filter: filterQuery.name,
  order: orderQuery.asc,
  productsView: 'cards',
  basket: [
    {
      id: 4,
      name: 'Cucumber',
      price: 1.99,
      typePrice: 'p',
      imagePath: './assets/img/shop/cucumber.png',
      numberItems: 1
    }
  ],
};

const sorts: Map<filterQuery, (products: Product[], direction: number) => Product[]> = new Map([
  [filterQuery.name, (products, direction) => products.sort((a, b) => direction * a.name.localeCompare(b.name))],
  [filterQuery.price, (products, direction) => products.sort((a, b) => direction * (a.price - b.price))]
]);

export const ProductsStore = signalStore(
  {providedIn: 'root'},
  withDevtools('vegetables'),
  withState(initialState),
  withEntities<Product>(),
  withComputed(({products, filter, order, basket}) => ({
    sortedProducts: computed(() => {
      const direction = order() === orderQuery.asc ? 1 : -1;
      let sortedProduct: Product[] = products();
      
      const sort = sorts.get(filter())
      
      if (sort) sortedProduct = sort(products(), direction);
      
      return [...sortedProduct];
    }),
    productsBought: computed(() => ({...basket()})),
    numberItemsBought: computed(() => (basket().reduce<number>((acc, cur) => (acc + cur.numberItems), 0))),
    orderSummary: computed(() => {
      const subtotal = basket().reduce<number>((acc, cur) => (acc + cur.price * cur.numberItems), 0);
      const tax = subtotal * 0.07;
      const shipping = subtotal > 50 ? 0 : 5.99;
      const total = subtotal + tax + shipping;
      
      return {subtotal, tax, total, shipping};
    })
  })),
  withMethods((store) => ({
    changeFilter(filter: filterQuery): void {
      patchState(store, (state) => ({...state, filter}));
    },
    changerOrder(): void {
      const order = store.order() === orderQuery.asc ? orderQuery.desc : orderQuery.asc;
      
      patchState(store, (state) => ({...state, order}))
    },
    changeProductsView(productsView: 'cards' | 'list'): void {
      patchState(store, state => ({...state, productsView}));
    },
    addProduct(product: Product): void {
      const productBoughtPosition: number = store.basket().findIndex(p => p.id === product.id);
      
      if (productBoughtPosition >= 0) {
        const productBought: ProductBought = {...store.basket()[productBoughtPosition]};
        productBought.numberItems++;
        
        const basket = [...store.basket()];
        basket[productBoughtPosition] = productBought;
        
        patchState(store, state => ({...state, basket}));
      } else {
        const productBought = {
          id: product.id,
          name: product.name,
          price: product.price,
          imagePath: product.imagePath,
          typePrice: product.typePrice,
          maxItems: product.maxItems,
          numberItems: 1
        }
        
        patchState(store, state => ({...state, basket: [...state.basket, productBought]}));
      }
    },
    removeProduct(product: Product): void {
      const productBoughtPosition: number = store.basket().findIndex(p => p.id === product.id);
      
      if (productBoughtPosition >= 0) {
        const productBought: ProductBought = {...store.basket()[productBoughtPosition]};
        productBought.numberItems--;
        
        const basket = [...store.basket()];
        
        if (productBought.numberItems === 0) {
          basket.splice(productBoughtPosition, 1);
        } else {
          basket[productBoughtPosition] = productBought;
        }
        
        patchState(store, state => ({...state, basket}));
      }
    }
  }))
);
