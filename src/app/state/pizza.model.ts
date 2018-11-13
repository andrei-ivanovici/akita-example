import {ID} from '@datorama/akita';
import * as uuid from 'uuid/v1';

export interface Pizza {
  id: ID;
  toppings: Topping [];
}

export function createPizza(): Pizza {
  return {
    id: uuid(),
    toppings: []
  };
}

export type Topping =
  | 'basil'
  | 'chili peppers'
  | 'mozzarella'
  | 'mushrooms'
  | 'olives'
  | 'tomatoes';

export const toppingList: Topping[] = ['basil', 'chili peppers', 'mozzarella', 'mushrooms', 'olives', 'tomatoes'];
