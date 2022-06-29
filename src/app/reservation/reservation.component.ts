import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RdvService} from '../rdv.service';
import {Rdv} from '../model/rdv.model';
import {data} from 'jquery';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss',
    './assets/css/style.css',
    './assets/css/animate.css',
    './assets/css/owl.theme.default.min.css',
    './assets/css/magnific-popup.css',
    './assets/css/aos.css',
    './assets/css/owl.carousel.min.css',
    './assets/css/ionicons.min.css',
    './assets/css/bootstrap-datepicker.css',
    './assets/css/jquery.timepicker.css',
    './assets/css/flaticon.css',
    './assets/css/icomoon.css']
})
export class ReservationComponent implements OnInit {
  addRdvFormGroup: FormGroup;

  constructor(private fb: FormBuilder,private Service:RdvService,private router:Router) { }

  ngOnInit(): void {
    this.addRdvFormGroup=this.fb.group(
        {
          Motif:this.fb.control(null),
          Date:this.fb.control(null),
          Time:this.fb.control(null)
        }
    )
  }
  SaveRdv() {
    let rdv:Rdv=this.addRdvFormGroup.value;
    this.Service.saveRdv(rdv).subscribe({
      next:data=>{alert("RDV AJOUTER") ,this.router.navigateByUrl("/dashboard") }
    })
  }
}
