import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../models/login.model';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  ContactForm!: FormGroup;

  constructor(public contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.ContactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  Clear() {
    this.ContactForm.reset(); // Reset the entire form
  }

  Save() {
    if (this.ContactForm.valid) {
      const contact: Contact = new Contact();
      contact.firstName = this.ContactForm.get('firstName')?.value;
      contact.lastName = this.ContactForm.get('lastName')?.value;
      contact.email = this.ContactForm.get('email')?.value;

      console.log(contact);

      this.contactService.save(contact).subscribe(
        (res: any) => {
          console.log(res);
          alert('Contact added successfully!');
          this.router.navigate(['/list']);
        },
        (err: any) => {
          console.error(err);
          alert('An error occurred while adding the contact.');
        }
      );
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
