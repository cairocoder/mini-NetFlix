import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './shared/movie.service';
import { MovieDetailsComponent } from './components/movie.details/movie.details.component';
import { appRoutes } from '../routes';
import { RouterModule } from '@angular/router';
import { OuterSliderComponent } from './components/outer.slider/outer.slider.component';
import { MoviesListComponent } from './components/movies.list/movies.list.component';
import { MovieThumbComponent } from './components/movie.thumb/movie.thumb.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieSearchResultsComponent } from './components/movie.search.results/movie.search.results.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    OuterSliderComponent,
    MoviesListComponent,
    MovieThumbComponent,
    HeaderComponent,
    MovieSearchResultsComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ MovieService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
