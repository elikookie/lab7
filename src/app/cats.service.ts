import { Injectable } from '@angular/core';
import { CatListing } from './catlisting';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  catListingList: CatListing[] = [
    {
      id: 1111,
      name: 'Stelle',
      photo: 'kitty1.jpg',
      gender: 'Female',
      age: 14, // in weeks
      color: 'Blue', // blue, chocolate, lilac, red, cream
      pattern: 'Bi-Colour Lynx', // bi-colour, seal, mitted, lynx
      status: 'Available',
    },
    {
      id: 1112,
      name: 'Milo',
      photo: 'kitty2.jpg',
      gender: 'Male',
      age: 10,
      color: 'Chocolate',
      pattern: 'Seal',
      status: 'Available',
    },
    {
      id: 1113,
      name: 'Luna',
      photo: 'kitty3.jpg',
      gender: 'Female',
      age: 8,
      color: 'Lilac',
      pattern: 'Mitted',
      status: 'Available',
    },
    {
      id: 1114,
      name: 'Oliver',
      photo: 'kitty4.jpg',
      gender: 'Male',
      age: 12,
      color: 'Red',
      pattern: 'Mitted Lynx',
      status: 'Available',
    },
    {
      id: 1115,
      name: 'Bella',
      photo: 'kitty5.jpg',
      gender: 'Female',
      age: 15,
      color: 'Cream',
      pattern: 'Bi-Colour',
      status: 'Available',
    },
    {
      id: 1116,
      name: 'Simba',
      photo: 'kitty6.jpg',
      gender: 'Male',
      age: 13,
      color: 'Blue',
      pattern: 'Seal',
      status: 'Available',
    },
    {
      id: 1117,
      name: 'Chloe',
      photo: 'kitty7.jpg',
      gender: 'Female',
      age: 9,
      color: 'Chocolate',
      pattern: 'Mitted',
      status: 'Available',
    },
    {
      id: 1118,
      name: 'Leo',
      photo: 'kitty8.jpg',
      gender: 'Male',
      age: 11,
      color: 'Lilac',
      pattern: 'Bi-Colour Lynx',
      status: 'Available',
    },
    {
      id: 1119,
      name: 'Nala',
      photo: 'kitty9.jpg',
      gender: 'Female',
      age: 16,
      color: 'Blue',
      pattern: 'Seal Mitted',
      status: 'Available',
    },
    {
      id: 1120,
      name: 'Zoe',
      photo: 'kitty10.jpg',
      gender: 'Female',
      age: 10,
      color: 'Blue',
      pattern: 'Mitted Lynx',
      status: 'Available',
    },
  ];

  getAllCats(): CatListing[] {
    return this.catListingList;
  }

  getCatsById(id: number): CatListing | undefined {
    return this.catListingList.find((catListing) => catListing.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Cat Adoption Application Recieved: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
  constructor() {}
}
