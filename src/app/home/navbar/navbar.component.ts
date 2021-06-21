import { SearchService } from './../../shared/services/search.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchResultsArray: any[];

  navSearchForm = this.fb.group({
    searchText: ['']
  });
  constructor(private fb: FormBuilder, private searchService: SearchService) {
    this.searchResultsArray = [];
    this.setupForm();
  }
  ngOnInit(): void {
  }
  setupForm() {
    // Subscribe to search field changes
    this.navSearchForm.controls.searchText.valueChanges.subscribe(
      (search) => {
        this.searchResultsArray = this.searchService.BuildSearchArray(search);
      });
  }
  calculateStyles() {
    if (this.searchResultsArray.length === 0) {
      return {
        display: 'none'
      };
    }
  }
}
