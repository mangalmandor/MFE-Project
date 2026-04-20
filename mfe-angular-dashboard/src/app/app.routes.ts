import { Routes } from '@angular/router';

export const routes: Routes = [
  // Yeh ek "Catch-All" route hai. 
  // Iska matlab Angular kisi bhi URL par crash nahi hoga aur chup-chap UI dikhayega.
  { path: '**', children: [] } 
];