import { Injectable } from '@angular/core';
import { aspnetmenu } from 'src/app/core/aspnet/aspnet-menu';
import { csharpmenu } from 'src/app/core/csharp/csharp-menu';
import { angularmenu } from 'src/app/core/angular/angular-menu';
import { miscmenu } from 'src/app/core/misc/misc-menu';
import { sqlmenu } from 'src/app/core/sql/sql-menu';
import { ISearchInterface } from 'src/app/home/navbar/search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  aspnetmenu = aspnetmenu;
  csharpmenu = csharpmenu;
  angularmenu = angularmenu;
  miscmenu = miscmenu;
  sqlmenu = sqlmenu;
  searchText: string;
  searchResultsArray: ISearchInterface[];
  searchSourceArray: ISearchInterface[];


  constructor() {
    this.searchText = '';
    this.searchResultsArray = [];
    this.searchSourceArray = [];
    this.BuildSourceArray();
  }

  TestMethod(): string {
    return 'Hello World!';
  }

  BuildSourceArray() {
    this.csharpmenu.oops.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.csharpmenu.individual.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.csharpmenu.advanced.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.csharpmenu.misc.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.aspnetmenu.webforms.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.aspnetmenu.webapi.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.aspnetmenu.mvc.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.aspnetmenu.core.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.angularmenu.individual.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.angularmenu.forms.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.angularmenu.misc.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.sqlmenu.groups.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.sqlmenu.individual.forEach(element => {
      this.searchSourceArray.push(element);
    });
    this.miscmenu.individual.forEach(element => {
      this.searchSourceArray.push(element);
    });
  }

  BuildSearchArray(searchText: string): ISearchInterface[] {
    this.searchResultsArray = [];
    if (searchText.length >= 3) {
      this.searchSourceArray.forEach(element => {
        if (element.name.toLowerCase().includes(searchText.toLowerCase())) {
          this.searchResultsArray.push(element);
        }
      });
    }
    return this.searchResultsArray;
  }
}
