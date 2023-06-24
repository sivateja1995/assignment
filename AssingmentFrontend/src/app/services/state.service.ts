import { Injectable } from '@angular/core';
import { State } from '../core/models/state.model';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(private http: HttpService) {}

  // method for the posting of the state
  public saveState(state: State): Observable<any> {
    return this.http.post('/states', state);
  }

  // get states
  public getStates(code: string): Observable<any> {
    return this.http.get('/states', { params: { code: code } });
  }
}
