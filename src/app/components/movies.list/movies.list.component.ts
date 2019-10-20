import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/movie.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'movies-list',
    template: `
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page">Home</li>
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

export class MoviesListComponent implements OnInit {
    movies: any[];
    constructor(private movieService: MovieService) {

    }

    ngOnInit() {
        this.movies = this.movieService.getMovies();
    }
}
