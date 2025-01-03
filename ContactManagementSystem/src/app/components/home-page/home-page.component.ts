import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Route, Router } from '@angular/router';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditComponentComponent } from '../add-edit-component/add-edit-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  customerArray: any = [];
  showDeletedMessage!: boolean;

  constructor(
    public customerService: ContactService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.customerService.getAllContacts().subscribe((list: any) => {
      this.customerArray = list;
    });
  }

  Delete(id: any) {
    if (confirm("Do you want to delete this record?")) {
      this.customerService.delete(id).subscribe(
        () => {
          this.showDeletedMessage = true;
          this.ngOnInit();
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

  openModal(contactId?: number): void {
    const dialogRef = this.dialog.open(AddEditComponentComponent, {
      width: '500px',
      data: { contactId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'updated' || result === 'added') {
        if(result==='updated')
        {
        alert('Contact updated successfully!');
        }
        else if(result==='added')
        {
          alert('Contact added successfully!');
        }
        this.ngOnInit();
      }
    });
  }

  // Listening to the contactUpdated event
  handleContactUpdate(contact: any) {
    // Here, you can handle the updated or new contact (e.g., add to the array or refresh data)
    this.customerArray.push(contact); // For simplicity, pushing the new contact
    this.ngOnInit(); // Refresh data
  }

}