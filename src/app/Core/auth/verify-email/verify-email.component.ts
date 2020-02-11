import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.sass']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
    if (this.authService.isEmailVerifeid) {
      window.alert("Email já foi verificado!");
      this.router.navigate(['/']);
    }
  }

}
