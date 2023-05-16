import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'options', component: OptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //
}
