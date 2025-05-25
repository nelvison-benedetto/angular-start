import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";  //REQUIRED FOR RUN ON WEB!!
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";

@NgModule({
  declarations: [AppComponent],
    //declarations cannot use standalone components
  bootstrap: [AppComponent],  //angular knows that this is the root component to start the app
  imports: [BrowserModule, HeaderComponent, UserComponent, TaskComponent],  //required 'BrowserModule' only x root module), add 'CommonModule' x direttive pipe funzionalità di base di Angular che tiservono in (quasi) tutti i components
    //the imports can use standalone components!
  exports: [AppComponent]  //avaible components outside only for those that use 'AppModule'
    //IN THIS CASE THIS IS THE ROOT, so normally don't need export anything!!
})

export class AppModule{}
