import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatListingComponent } from '../cat-listing/cat-listing.component';
import { CatListing } from '../catlisting';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CatListingComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Find your new kitty" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-cat-listing
        *ngFor="let catListing of filteredColorList"
        [catListing]="catListing"
      ></app-cat-listing>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  catListingList: CatListing[] = [];
  catService: CatsService = inject(CatsService);
  filteredColorList: CatListing[] = [];
  constructor() {
    this.catListingList = this.catService.getAllCats();
    this.filteredColorList = this.catListingList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredColorList = this.catListingList;
      return;
    }
    this.filteredColorList = this.catListingList.filter((catListing) =>
      catListing?.color.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
