import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Article, searchServices } from './pages/search/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles$ !: Observable<Article[]>;
  constructor(private readonly searchSvc: searchServices) {
    
  }
  onSearch(term: string): void {
    this.articles$ = this.searchSvc.search(term)
  }
}
