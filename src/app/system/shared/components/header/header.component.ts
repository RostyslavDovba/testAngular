import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../../../shared/services/auth.service';

import { User } from '../../../../shared/models/user.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: User;

  constructor(
    private authService: AuthService,
    private router: Router
) { }

ngOnInit() {
  this.user = JSON.parse(window.localStorage.getItem('user'));
}

onLogout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}

}
