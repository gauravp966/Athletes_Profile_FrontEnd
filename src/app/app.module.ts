import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


import { AppComponent }  from './app.component';
import {ProfilesComponent} from "./components/profiles.component";
import {AllProfilesComponent} from "./components/allProfiles.component";
import {routing} from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, ProfilesComponent, AllProfilesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
