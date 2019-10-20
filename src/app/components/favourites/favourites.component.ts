import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MovieService } from '../../shared/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-favourites',
  template: `
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a [routerLink]="['/movies']">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Favourites</li>
                    </ol>
                </nav>
                <div class="row mt-5 mb-2">
                    <div *ngFor="let movie of movies" class="col-md-6">
                        <movie-thumb [movie]="movie"></movie-thumb>
                    </div>
                </div>
            `,
  styleUrls: ['../../app.component.css']
})

export class FavouritesComponent implements OnInit {
    movies: any;
    constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        if (window.sessionStorage.getItem('favMovies')) {
            const storedArray = JSON.parse(sessionStorage.getItem('favMovies'));
            this.movies = this.movieService.getMoviesById(storedArray);
            console.log(storedArray);
        }
    }
}
