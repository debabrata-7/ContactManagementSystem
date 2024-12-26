import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Route, Router } from '@angular/router';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  constructor(public customerService: ContactService, private router:Router) { }
  customerArray:any =[];
  showDeletedMessage!:boolean;
  searchText: string = "";
  ngOnInit() {
    this.customerService.getAllContacts().subscribe(
      (list:any) => {
        this.customerArray = list;
        
     });
  }

  Delete(id:any){
    confirm("Do You want to Delete this record ?")
    this.customerService.delete(id).subscribe((res:any)=>{
        alert('Deleted contact successfully.');
        window.location.reload();
    },(err:any)=>{
        console.log(err)
    })
  }
  editContact(id: number): void {
    this.router.navigate(['/update', id]);
  }

//   onDelete($key:any) {
//     if (confirm('Are you sure to delete this record ?')) {
//       this.customerService.deleteCustomer($key);
//       this.showDeletedMessage = true;
//       setTimeout(() => this.showDeletedMessage = false, 3000);
//     }
//   }


//   filterCondition(customer:any) {
//     return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
// }

}