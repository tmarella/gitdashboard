import { SearchService } from './../../shared/services/search.service';
import { ISearchInterface } from './../navbar/search.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  searchResultsArray: ISearchInterface[];

  SearchForm = this.fb.group({
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
    this.SearchForm.controls.searchText.valueChanges.subscribe(
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
