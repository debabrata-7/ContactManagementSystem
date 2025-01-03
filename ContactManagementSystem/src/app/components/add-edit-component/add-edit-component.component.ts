import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../models/login.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-component',
  templateUrl: './add-edit-component.component.html',
  styleUrl: './add-edit-component.component.css'
})
export class AddEditComponentComponent {
  contactForm!: FormGroup;
  isEditMode: boolean = false;
  contactData?: Contact;

  @Output() contactUpdated: EventEmitter<any> = new EventEmitter(); // Event emitter for sending data back

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private dialogRef: MatDialogRef<AddEditComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.isEditMode = !!this.data.contactId;

    if (this.isEditMode) {
      // Fetch contact details for editing
      this.contactService.getAllContacts().subscribe((contacts: Contact[]) => {
        this.contactData = contacts.find(c => c.id === this.data.contactId);
        console.log(this.contactData)
        this.contactForm = this.fb.group({
          firstName: [this.contactData?.firstName || '', Validators.required],
          lastName: [this.contactData?.lastName || '', Validators.required],
          email: [this.contactData?.email || '', [Validators.required, Validators.email]],
        });
      });
    } else {
      // Initialize the form for adding a new contact
      this.contactForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      });
    }
  }

  saveContact(): void {
    if (this.contactForm.invalid) return;

    const formValue = this.contactForm.value;
    if (this.isEditMode) {
      const updatedContact: Contact = {
        id: this.contactData?.id || 0,
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
      };
      this.contactService.updateContact(updatedContact.id, updatedContact).subscribe(() => {
        this.contactUpdated.emit(updatedContact);
        this.dialogRef.close('updated');
      });
    } else {
      const newContact: Contact = {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        id: 0,
      };
      this.contactService.save(newContact).subscribe(() => {
        this.contactUpdated.emit(newContact); 
        this.dialogRef.close('added');
      });
    }
  }

  clearForm(): void {
    this.contactForm.reset();
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}