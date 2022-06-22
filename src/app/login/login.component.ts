import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message=false
  user=new User();
  constructor(
    private router:Router,
    private service: DataService
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', Validators.required),


  });
  loginUser() {

    this.service.loginUserForRemote(this.user).subscribe(data => {
     console.log(data);
     this.router.navigate(['/loginsucess'])



    },
      error => {
        console.log("error");

      }
    );
  }

  onSubmit(){
    this.service.loginUserForRemote(this.user).subscribe((data)=>{
      console.log(this.loginForm.value);
      console.log(data);
    },
    (error)=>{
      console.log(error)
    })
  }
  ngOnInit(): void {
  }
onClose(){

}
}


