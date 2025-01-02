import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'users-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  searchQuery = '';

  private searchSubject = new Subject<string>();
  private destroy = new Subject<void>();

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(300),
        takeUntil(this.destroy)
      )
      .subscribe(query => {
        this.search.emit(query);
      });
  }

  onInputChange(query: string): void {
    this.searchSubject.next(query);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
