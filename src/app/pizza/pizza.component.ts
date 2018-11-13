import {Component} from '@angular/core';
import {PizzaQuery} from '../state/pizza.query';
import {PizzaService} from './pizza.service';
import {Observable} from 'rxjs';
import {Pizza, Topping, toppingList} from '../state/pizza.model';
import {ID} from '@datorama/akita';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {

  public pizzas: Observable<Pizza[]>;
  public activePizzaToppings: Observable<Topping[]>;
  public availableToppings = toppingList;
  public activePizzaId: Observable<ID>;

  constructor(private _query: PizzaQuery, private _service: PizzaService) {
    this.pizzas = _query.selectAll();
    this.activePizzaToppings = _query.selectPizzaToppings();
    this.activePizzaId = this._query.selectActiveId();
  }

  public addPizza() {
    this._service.add();
  }

  public toggleTopping(topping: Topping) {
    this._service.toggleTopping(topping, this._query.getActiveId());
  }

  public setActivePizza(id: ID) {
    this._service.setActivePizza(id);
  }
}

