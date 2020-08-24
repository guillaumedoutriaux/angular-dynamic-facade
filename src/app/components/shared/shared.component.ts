import { Component, OnInit, Injector, Input } from "@angular/core";
import { Observable } from 'rxjs';

import { FeatureAFacade, FeatureBFacade, listOfFacades } from "../../+store/facades";

@Component({
  selector: "app-shared",
  templateUrl: "./shared.component.html",
  styleUrls: ["./shared.component.css"]
})
export class SharedComponent implements OnInit {
  
  @Input() facadeName: string;

  private facade: FeatureAFacade | FeatureBFacade;
  public datas$:Observable<string[]>;

  constructor(private injector: Injector) {}

  private injectFacade() {
    if (listOfFacades.hasOwnProperty(this.facadeName)) {
      this.facade = this.injector.get<FeatureAFacade | FeatureBFacade>(
        listOfFacades[this.facadeName]
      );
    } else {
      throw new Error(`There's no facade as '${this.facadeName}'`);
    }
  }

  ngOnInit() {
    this.injectFacade();
    this.datas$ = this.facade.getUsersFromStore();
  }
}
