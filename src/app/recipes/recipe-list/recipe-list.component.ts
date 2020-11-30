import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cookies', 'chocolate chip', 'https://c.pxhere.com/photos/b1/b3/CC0_Photos_cf_choc_chip_Chocolate_chocolate_chip_Cookies_Free_Images_Free_Photos-1616507.jpg!d')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
