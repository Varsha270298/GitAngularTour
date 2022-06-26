import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { User } from '../model/user.model';

@Component({
<<<<<<< HEAD
  selector: 'app-list-user',
=======
<<<<<<< HEAD
  selector: 'app-list-user',
=======
<<<<<<< HEAD
  selector: 'app-list-user',
=======
  // selector: 'app-list-user',
>>>>>>> 782f62e4934b5d6487f6a5edeb5a949e08fbba8f
>>>>>>> 6081dd6a9d90e5557de711ed2f69006ecadf85fd
>>>>>>> de84bbc533997c2e8c568b35fbd9dc340dbb391e
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users!: User[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers()
      .subscribe( data => {
          this.users = data.result;
      });
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
