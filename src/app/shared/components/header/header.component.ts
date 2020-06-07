import { Component, OnInit } from '@angular/core';
import { PageSection } from '../../interfaces/page-section';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageSections: PageSection[];

  constructor() {
    this.pageSections = [
      { name: 'intro', link: '/intro' },
      { name: 'about', link: '/about' },
      { name: 'contact', link: '/contact' },
    ];
  }

  ngOnInit(): void {}
}
