import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { 
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class LayoutIconsModule { 
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faGithubSquare,
      faLinkedin,
    );
  }
}
