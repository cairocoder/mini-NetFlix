import { Routes } from '@angular/router';
import { MoviesListComponent } from './app/components/movies.list/movies.list.component';
import { MovieDetailsComponent } from './app/components/movie.details/movie.details.component';
import { MovieSearchResultsComponent } from './app/components/movie.search.results/movie.search.results.component';
import { FavouritesComponent } from './app/components/favourites/favourites.component';

export const appRoutes: Routes = [
    { path: 'movies', component: MoviesListComponent },
    { path: 'movies/favourites', component: FavouritesComponent },
    { path: 'movies/:id', component: MovieDetailsComponent },
    { path: 'movies/search/:searchTerm', component: MovieSearchResultsComponent },
    { path: '', redirectTo: '/movies', pathMatch: 'full' }
];
