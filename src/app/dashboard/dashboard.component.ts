import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {AuthentificationService} from '../services/authentification.service';
import {any} from 'codelyzer/util/function';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',
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
      './assets/css/icomoon.css'   ]
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthentificationService, private router: Router,private service:LoginService) { }

    username: string;
    password: string;
    message: any;
  ngOnInit() {
  }

    onLogin(value: any) {
        this.auth.login(value.username, value.password);
        if (this.auth.isAuthenticated) {
            this.router.navigateByUrl('reservation');
        }
    }

}
