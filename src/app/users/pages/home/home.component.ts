import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users.interfaces';

@Component({
  selector: 'users-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  users: User[] = [];
  allUsers: User[] = [];
  text = '';
  error:any;

  constructor(private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response: User[]) => {
      this.users = response;
      this.allUsers = response.sort((a, b) => a.name.localeCompare(b.name));
    },
    (error: any) => {
      this.error = error
    });
  }

  searchUsers(text: string): void {
    this.text = text.toLocaleLowerCase().trim().replace(" ","");
      this.users = this.allUsers.filter(user => user.name.toLowerCase().trim().replace(" ","").includes(this.text) || user.email.toLowerCase().trim().replace(" ","").includes(this.text) || user.address.city.toLowerCase().trim().replace(" ","").includes(this.text)).sort((a, b) => a.name.localeCompare(b.name));
  }
}
