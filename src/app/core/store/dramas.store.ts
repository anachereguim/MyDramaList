import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Dramas } from "src/app/models/dramas.model";

@Injectable({
  providedIn: 'root'
})
export class DramasStore{

  private _selectedDrama = new BehaviorSubject<Dramas>(Object.create(null));

  public readonly selectedDrama$ = this._selectedDrama as Observable<Dramas>;

  setNextValue(dramas: Dramas){
    this._selectedDrama.next(dramas);
  }
}
