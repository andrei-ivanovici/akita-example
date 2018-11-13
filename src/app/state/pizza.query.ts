import {QueryEntity} from '@datorama/akita';
import {PizzaState, PizzaStore} from './pizza.store';
import {Pizza, Topping} from './pizza.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PizzaQuery extends QueryEntity<PizzaState, Pizza> {
  constructor(store: PizzaStore) {
    super(store);
  }

  public selectPizzaToppings(): Observable<Topping[]> {
    return this.selectActive().pipe(map(pizza => pizza.toppings));
  }
}
