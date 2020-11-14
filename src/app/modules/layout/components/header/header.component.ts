import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  linkedInUrl: SafeUrl;
  githubUrl: SafeUrl;

  constructor(domSanitizer: DomSanitizer) {
    const { linkedInUrl, githubUrl } = environment;
    this.linkedInUrl = domSanitizer.bypassSecurityTrustUrl(linkedInUrl);
    this.githubUrl = domSanitizer.bypassSecurityTrustUrl(githubUrl);
  }

  ngOnInit(): void {
  }

}
