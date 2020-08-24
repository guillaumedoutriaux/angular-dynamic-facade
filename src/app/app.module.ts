import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { FacadeModule } from "./+store/facades/facade.module";
import { AppComponent } from "./containers/app.component";
import { SharedComponent } from './components/shared/shared.component';

@NgModule({
  imports: [BrowserModule, FormsModule, FacadeModule],
  declarations: [AppComponent, SharedComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
