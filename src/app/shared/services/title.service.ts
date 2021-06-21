import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private titleService: Title) { }

    getTitle() {
        this.titleService.getTitle();
    }
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
