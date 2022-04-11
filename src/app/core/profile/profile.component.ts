import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { CakesService } from 'src/app/services/cakes.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User();

  userForm: FormGroup;

  edit: boolean = false;

  constructor(private service: CakesService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.service.getUser(1).subscribe({
      next: (user: any) => {
        console.log(user)
        this.user = user;
        this.userForm.patchValue(this.user);
        this.edit = true;
      }
    })
  }

  postNewUser() {
    // console.log(this.user)
  }

  editUser() {

    this.edit = !this.edit;

  }

  onSubmit() { }


  
  resetForm() {
    this.userForm.patchValue(this.user);
    this.userForm.controls['firstName'].disable();
    this.userForm.controls['lastName'].disable();
    this.userForm.controls['email'].disable();
  }

  updateUser() {
    // let id = Number(this.route.snapshot.params['id']);
    let id = 1;
    this.user = new User(this.userForm);
    this.user._id = id;

    this.service.updateUser(this.user).subscribe({
      next: (ok:any) => alert("OK"),
      error: (err:any) => alert("Error updating user!")
    })
  }

}
