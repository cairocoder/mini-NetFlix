import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const MOVIES = [
    {
        id: 1,
        title: 'Joker',
        cover: 'https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
        // tslint:disable-next-line: max-line-length
        image: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        year: '2019',
        rated: '8.9',
        released: '4 October 2019',
        runtime: '122 min',
        genre: 'Crime | Drama | Thriller',
        director: 'Todd Phillips',
        writer: 'Todd Phillips, Scott Silver',
        actors: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
        // tslint:disable-next-line: max-line-length
        plot: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck (Joaquin Phoenix), a man disregarded by society, is not only a gritty character study, but also a broader cautionary tale. Written by Warner Bros.',
        language: 'English',
        country: 'USA | Canada',
        awards: 'Golden Trailer Awards 2019, Venice Film Festival 2019'
    },
    {
        id: 2,
        title: 'Maleficent: Mistress of Evil',
        cover: 'https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
        // tslint:disable-next-line: max-line-length
        image: 'https://m.media-amazon.com/images/M/MV5BZjJiYTExOTAtNWU0Yi00NzJjLTkwOTgtOTU2NWM1ZjJmYWVhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        year: '2019',
        rated: '8.9',
        released: '4 October 2019',
        runtime: '122 min',
        genre: 'Crime | Drama | Thriller',
        director: 'Todd Phillips',
        writer: 'Todd Phillips, Scott Silver',
        actors: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
        // tslint:disable-next-line: max-line-length
        plot: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck (Joaquin Phoenix), a man disregarded by society, is not only a gritty character study, but also a broader cautionary tale. Written by Warner Bros.',
        language: 'English',
        country: 'USA | Canada',
        awards: 'Golden Trailer Awards 2019, Venice Film Festival 2019'
    },
    {
        id: 3,
        title: 'Gemini Man',
        cover: 'https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
        // tslint:disable-next-line: max-line-length
        image: 'https://m.media-amazon.com/images/M/MV5BNjI5OTNkMzUtZDYzYy00NWQ5LTg4YzYtZmZjZDI0MGQzNGY2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
        year: '2019',
        rated: '8.9',
        released: '4 October 2019',
        runtime: '122 min',
        genre: 'Crime | Drama | Thriller',
        director: 'Todd Phillips',
        writer: 'Todd Phillips, Scott Silver',
        actors: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
        // tslint:disable-next-line: max-line-length
        plot: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck (Joaquin Phoenix), a man disregarded by society, is not only a gritty character study, but also a broader cautionary tale. Written by Warner Bros.',
        language: 'English',
        country: 'USA | Canada',
        awards: 'Golden Trailer Awards 2019, Venice Film Festival 2019'
    },
    {
        id: 4,
        title: 'It Chapter Two',
        cover: 'https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
        // tslint:disable-next-line: max-line-length
        image: 'https://m.media-amazon.com/images/M/MV5BYTJlNjlkZTktNjEwOS00NzI5LTlkNDAtZmEwZDFmYmM2MjU2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
        year: '2019',
        rated: '8.9',
        released: '4 October 2019',
        runtime: '122 min',
        genre: 'Crime | Drama | Thriller',
        director: 'Todd Phillips',
        writer: 'Todd Phillips, Scott Silver',
        actors: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
        // tslint:disable-next-line: max-line-length
        plot: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck (Joaquin Phoenix), a man disregarded by society, is not only a gritty character study, but also a broader cautionary tale. Written by Warner Bros.',
        language: 'English',
        country: 'USA | Canada',
        awards: 'Golden Trailer Awards 2019, Venice Film Festival 2019'
    }
];

@Injectable()
export class MovieService {

    constructor(private router: Router) {

    }

    getMovies() {
        return MOVIES;
    }

    getMovie(id: number) {
        return MOVIES.find(movie => movie.id === id);
    }

    getMoviesById(ids: number[]) {
        return MOVIES.filter(movie => ids.indexOf(movie.id) > -1);
    }

    handleSearch(searchTerm: string) {
        if (searchTerm !== '') {
            this.router.navigate([`/movies/search/${searchTerm}`]);
        }
    }

    searchMovies(searchTerm: string) {
        const term = searchTerm.toLocaleLowerCase();
        let results = [];
        const matchingMovies = MOVIES.filter(movie => movie.title.toLocaleLowerCase().indexOf(term) > -1);
        results = results.concat(matchingMovies);
        return results;
    }
}
