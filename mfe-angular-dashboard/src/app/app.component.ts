import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navigateToUrl } from 'single-spa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  // 👇 Yahan humne HTML file ka rasta de diya
  templateUrl: './app.component.html', 
})
export class AppComponent implements OnInit {
  // --- STATE ---
  userName: string = 'Explorer';
  cart: any[] = [];
  cartTotal: number = 0;

  // Mock Data
  products = [
    { id: 1, name: 'AI Website Generator', price: 4999, icon: '🤖', description: 'Automatically generate landing pages with AI.' },
    { id: 2, name: 'Cloud Database Storage', price: 1499, icon: '☁️', description: 'Secure MongoDB cluster for your applications.' },
    { id: 3, name: 'Premium Analytics', price: 2999, icon: '📊', description: 'Track user behavior and conversion metrics.' },
    { id: 4, name: 'SEO Booster Pack', price: 999, icon: '🚀', description: 'Optimize your project for search engines.' },
     { id: 1, name: 'AI Website Generator', price: 4999, icon: '🤖', description: 'Automatically generate landing pages with AI.' },
    { id: 2, name: 'Cloud Database Storage', price: 1499, icon: '☁️', description: 'Secure MongoDB cluster for your applications.' },
    { id: 3, name: 'Premium Analytics', price: 2999, icon: '📊', description: 'Track user behavior and conversion metrics.' },
    { id: 4, name: 'SEO Booster Pack', price: 999, icon: '🚀', description: 'Optimize your project for search engines.' },
  ];

  // --- LIFECYCLE ---
  ngOnInit() {
    const userData = localStorage.getItem('webgen_user');
    if (userData) {
      this.userName = JSON.parse(userData).name;
    }
  }


  // --- FUNCTIONS ---
  addToCart(product: any) {
    this.cart.push(product);
    this.calculateTotal();
  }

  goToCart() {
    if (this.cart.length === 0) {
      alert("Your cart is empty! Add some products first.");
      return;
    }
    navigateToUrl('/cart'); 
  }

  calculateTotal() {
    this.cartTotal = this.cart.reduce((total, item) => total + item.price, 0);
  }
  logout() {
  localStorage.removeItem('webgen_token');
  localStorage.removeItem('webgen_user');
  
  // Yeh page refresh kiye bina Host App ko batayega ki React ko mount karo!
  navigateToUrl('/login'); 
}
}   