import { Component } from '@angular/core';
import { MovieService } from '../../shared/movie.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['../../app.component.css']
})

export class HeaderComponent {
    searchTerm = '';
    foundMovies: any;

    constructor(private movieService: MovieService) {

    }

    searchMovies(searchTerm: string) {
        this.foundMovies = this.movieService.handleSearch(searchTerm);
    }
}
