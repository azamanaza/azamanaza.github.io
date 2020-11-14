import { Component, OnInit } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
