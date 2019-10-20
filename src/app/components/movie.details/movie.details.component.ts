import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MovieService } from '../../shared/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './movie.details.component.html',
  styleUrls: ['../../app.component.css']
})

export class MovieDetailsComponent implements OnInit {
    movie: any;
    constructor(private movieService: MovieService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.movie = this.movieService.getMovie(+this.route.snapshot.params.id);
    }

    addToStorage(id: number) {
      const storedArray = JSON.parse(sessionStorage.getItem('favMovies'));
      if (storedArray.indexOf(id) === -1) {
        storedArray.push(id);
        sessionStorage.setItem('favMovies', JSON.stringify(storedArray));
      }
    }

    removeFromStorage(id: number) {
      let storedArray = JSON.parse(sessionStorage.getItem('favMovies'));
      if (storedArray.indexOf(id) > -1) {
        storedArray = storedArray.filter(arrayItem => arrayItem !== id);
        sessionStorage.setItem('favMovies', JSON.stringify(storedArray));
      }
    }

    addToFav(id: number) {
      if (sessionStorage.getItem('favMovies')) {
        this.addToStorage(id);
      } else {
        sessionStorage.setItem('favMovies', JSON.stringify([id]));
      }
    }

    removeFromFav(id: number) {
      if (sessionStorage.getItem('favMovies')) {
        this.removeFromStorage(id);
      } else {
        sessionStorage.setItem('favMovies', JSON.stringify([id]));
      }
    }
}
