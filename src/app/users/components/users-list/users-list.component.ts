import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/users.interfaces';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  @Input() users: User[] = [];
  @Input() error: any;

  constructor() { }
  ngOnInit(): void {
  }
}
