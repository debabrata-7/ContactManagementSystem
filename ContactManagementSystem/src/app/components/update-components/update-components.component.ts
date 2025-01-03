import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/login.model';

@Component({
  selector: 'app-update-components',
  templateUrl: './update-components.component.html',
  styleUrl: './update-components.component.css'
})
export class UpdateComponentsComponent implements OnInit {
  updateForm!: FormGroup;
  contactId!: number;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form group
    this.updateForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });

    // Retrieve the contact ID from the route
    this.contactId = +this.route.snapshot.paramMap.get('id')!;
    
    // Fetch the contact details by ID
    this.contactService.getAllContacts().subscribe((contacts:any[]) => {
      console.log(contacts)
      console.log(this.contactId)
      const contact = contacts.find(c => c.id === this.contactId);
      console.log(contact)
      if (contact) {
        this.updateForm.get('firstName')?.setValue(contact.firstName)
        this.updateForm.get('lastName')?.setValue(contact.lastName)
        this.updateForm.get('email')?.setValue(contact.email)
        // this.updateForm.setValue({
        //   firstName: contact.FirstName,
        //   lastName: contact.LastName,
        //   email: contact.Email,
        // });
      }
    });
  }

  updateContact(): void {
    if (this.updateForm.valid) {
      const updatedContact: Contact = {
        id: this.contactId,
        firstName: this.updateForm.get('firstName')?.value,
        lastName: this.updateForm.get('lastName')?.value,
        email: this.updateForm.get('email')?.value,
      };

      this.contactService.updateContact(this.contactId, updatedContact).subscribe(() => {
        alert('Contact updated successfully!');
        this.router.navigate(['/list']);
      }, (error:any) => {
        console.error('Error updating contact:', error);
        alert('Failed to update contact.');
      });
    }
  }

  cancelUpdate(): void {
    this.router.navigate(['/list']);
  }

}
