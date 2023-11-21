import {Routes} from '@angular/router';
import {OurServicesComponent} from "./routes/our-services/our-services.component";

export const routes: Routes = [
  { path: '', redirectTo: 'services', pathMatch: "full" },
  { path: 'services', component: OurServicesComponent }
];
