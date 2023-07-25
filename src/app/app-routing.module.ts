import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { ReportComponent } from './pages/report/report.component';
import { FormComponent } from './pages/form/form.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "report", component: ReportComponent },
  { path: "form", component: FormComponent },
  { path: "about", component: AboutComponent },
  { path: "**", redirectTo: "main" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
