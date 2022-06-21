import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Dramas } from "src/app/models/dramas.model";

@Injectable({
  providedIn: 'root'
})
export class TdramaStore{

  private _selectedTwdrama = new BehaviorSubject<Dramas>(Object.create(null));

  public readonly selectedTwdrama$ = this._selectedTwdrama as Observable<Dramas>;

  setNextValue(twdrama: Dramas){
    this._selectedTwdrama.next(twdrama);
  }
}
