import { Message } from './../../model/message.model';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CakesService } from 'src/app/services/cakes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;

  message: Message = new Message();
  messageList: Message[] = [];

  constructor(private service: CakesService, private fb: FormBuilder, private router: Router) {
    this.messageForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    this.message = new Message(this.messageForm.value);
    //da li se id iz selekta poklapa sa selektom koji je izabrao, po id.
    for (let i = 0; i < this.messageList.length; i++) {
      if (this.messageForm.value == this.messageList[i]) {
        this.message = this.messageList[i];
        break;
      }
    }
    this.service.addMessage(this.message).subscribe({
      next: (data: any) => {
        alert("Successfully added ! ")
        this.router.navigate(["/home"]);
        //["/persons", this.vaccination.personal_number]
      }
    });
  } 
   }


