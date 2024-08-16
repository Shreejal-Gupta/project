import { Component } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  headerVisible: boolean = false;
  handleSearch(event: Event) {
    
  }

  checkValue(){
    this.headerVisible = true;
    console.log('Checking value')
  }
}
