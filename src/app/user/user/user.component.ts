import {Component, OnInit} from '@angular/core';
import {PruebaService} from "../../services/prueba.service";
import {Address, User} from "../../interfaces/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] =[];
  p: number = 1;

  constructor(private _user: PruebaService) {
    this._user.getUser().subscribe((res:any) => {
      this.users = res;
      console.log(this.users);
    })
  }

  ngOnInit(): void {
  }

}
