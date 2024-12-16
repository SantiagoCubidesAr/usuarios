import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'users-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchQuery = '';
  @Output() search = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }
  searchUsers(): void {
    this.search.emit(this.searchQuery);
  }

  cleanUsers() {
    this.searchQuery = '';
    this.searchUsers();
  }
}
