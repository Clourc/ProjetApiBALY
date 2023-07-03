import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies-consent',
  templateUrl: './cookies-consent.component.html',
  styleUrls: ['./cookies-consent.component.css']
})
export class CookiesConsentComponent implements OnInit{
  showCookieConsent: boolean = true

  ngOnInit(): void {
      this.showCookieConsent = !sessionStorage.getItem('cookiesAccepted');
  }

  acceptCookies(){
    sessionStorage.setItem('cookieAccepted', 'true');
    this.showCookieConsent = false;
  }
}
