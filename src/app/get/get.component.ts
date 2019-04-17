import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../office.service';
import Office from '../Office';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.sass']
})
export class GetComponent implements OnInit {

 businesses: Office[];
  constructor(private os:OfficeService) { }

  ngOnInit() {
  this.os
      .getBusinesses()
      .subscribe((data: Office[]) => {
        this.businesses = data;
    });
  }
  deleteBusiness(id) {
    this.os.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');

    });
    this.os
      .getBusinesses()
      .subscribe((data: Office[]) => {
        this.businesses = data;
    });
  }

}
