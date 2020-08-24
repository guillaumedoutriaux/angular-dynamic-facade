import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

import { FacadeModule } from "./facade.module";

@Injectable({ providedIn: FacadeModule })
export class FeatureAFacade {
  constructor() {}

  public getUsersFromStore(): Observable<string[]> {
    return of(["Guillaume", "John", "Mike", "Jason"]);
  }
}
