import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

import { FacadeModule } from "./facade.module";

@Injectable({ providedIn: FacadeModule })
export class FeatureBFacade {
  constructor() {}

  public getUsersFromStore(): Observable<string[]> {
    return of(["Stacy", "Lila", "Isabelle"]);
  }
}
