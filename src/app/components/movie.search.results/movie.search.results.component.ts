import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MovieService } from '../../shared/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'movie-search-result',
  template: `
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a [routerLink]="['/movies']">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Search</li>
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

export class MovieSearchResultsComponent implements OnInit {
    movies: any;
    constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.params.subscribe(params => {
            this.ngOnInit(); // reset and set based on new parameter this time
        });
    }

    ngOnInit() {
        this.movies = this.movieService.searchMovies(this.route.snapshot.params.searchTerm);
    }
}
