import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CatListing } from '../catlisting';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cat-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cat-listing.component.html',
  styleUrl: './cat-listing.component.css'
})
export class CatListingComponent {
  @Input() catListing!: CatListing;

}
