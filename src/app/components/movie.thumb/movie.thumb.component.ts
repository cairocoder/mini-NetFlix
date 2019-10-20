import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'movie-thumb',
    templateUrl: './movie.thumb.component.html',
    styleUrls: ['../../app.component.css']
})

export class MovieThumbComponent {
    @Input() movie: any;
}
