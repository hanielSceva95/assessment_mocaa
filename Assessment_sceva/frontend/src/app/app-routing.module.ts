import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HomeSearchComponent } from './home-search/home-search.component';
import { ResultFilterComponent } from './result-filter/result-filter.component';


const routes: Routes = [
  { path: '', component: HomeSearchComponent },
  { path: 'searchResult', component: ResultFilterComponent },
  { path: 'searchResult/:keyWord', component: ResultFilterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
