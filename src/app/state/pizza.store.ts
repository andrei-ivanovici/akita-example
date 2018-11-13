import {Injectable} from '@angular/core';
import {ActiveState, EntityState, EntityStore, getInitialActiveState, ID, StoreConfig, toggle, transaction} from '@datorama/akita';
import {createPizza, Pizza, Topping} from './pizza.model';

export interface PizzaState extends EntityState<Pizza>, ActiveState {
}

const state = {
  ...getInitialActiveState()
};

@Injectable({ providedIn: 'root' })
@StoreConfig({name: 'pizzas'})
export class PizzaStore extends EntityStore<PizzaState, Pizza> {
  constructor() {
    super(state);
  }

  @transaction()
  public addPizza() {
    const newPizza = createPizza();
    this.add(newPizza);
    this.setActive(newPizza.id);
  }

  public toggleTopping(topping: Topping, activePizza: ID) {
    this.update(activePizza, pizza => {
      return {
        ...pizza,
        toppings: toggle(pizza.toppings, topping)
      };
    });
  }
}
