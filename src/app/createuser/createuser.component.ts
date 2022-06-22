import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
user=new User()
  constructor(private router:Router,
    private service: DataService) { }

  ngOnInit(): void {
  }
  onSubmit(){

    this.service.registerUserForRemote(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/registersuccess']);
     },
       error => {
         console.log("error");

       }
     );
  }
}
