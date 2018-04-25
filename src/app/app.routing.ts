import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {ProfilesComponent} from "./components/profiles.component";
import {AllProfilesComponent} from "./components/allProfiles.component";

const appRoutes: Routes = [
  {
    path:'',
    component: ProfilesComponent
  },
  {
    path: 'allProfiles',
    component: AllProfilesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
