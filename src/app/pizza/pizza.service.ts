import {Injectable} from '@angular/core';
import {PizzaStore} from '../state/pizza.store';
import {ID} from '@datorama/akita';
import {Topping} from '../state/pizza.model';

@Injectable({providedIn: 'root'})
export class PizzaService {
  constructor(private _store: PizzaStore) {

  }

  public add() {
    this._store.addPizza();
  }

  public setActivePizza(pizzaId: ID) {
    this._store.setActive(pizzaId);
  }

  public toggleTopping(topping: Topping, activePizzaID: ID) {
    this._store.toggleTopping(topping, activePizzaID);
  }

}
