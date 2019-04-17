import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../office.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
angForm: FormGroup;
  constructor(private router: Router,private fb: FormBuilder,private os:OfficeService) { 
  this.createForm();
}

 createForm() {
    this.angForm = this.fb.group({
      client_name: ['', Validators.required ] 
    });
  }


addOffice(client_name ) {
	console.log("in create component");
    this.os.addOffice(client_name );
    console.log("in create component");
    this.router.navigate(['get']);
  }

  ngOnInit() {
  }

}
