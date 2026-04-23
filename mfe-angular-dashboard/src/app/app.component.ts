import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navigateToUrl } from 'single-spa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html', 
})
export class AppComponent implements OnInit {
  userName: string = 'Explorer';
  cart: any[] = [];
  cartTotal: number = 0;

  products = [
    { id: 1, name: 'AI Website Generator', price: 4999, icon: '🤖', description: 'Automatically generate landing pages with AI.' },
    { id: 2, name: 'Cloud Database Storage', price: 1499, icon: '☁️', description: 'Secure MongoDB cluster for your applications.' },
    { id: 3, name: 'Premium Analytics', price: 2999, icon: '📊', description: 'Track user behavior and conversion metrics.' },
    { id: 4, name: 'SEO Booster Pack', price: 999, icon: '🚀', description: 'Optimize your project for search engines.' },
     { id:5, name: 'AI Website Generator', price: 4999, icon: '🤖', description: 'Automatically generate landing pages with AI.' },
    { id:6, name: 'Cloud Database Storage', price: 1499, icon: '☁️', description: 'Secure MongoDB cluster for your applications.' },
    { id:7, name: 'Premium Analytics', price: 2999, icon: '📊', description: 'Track user behavior and conversion metrics.' },
    { id:8, name: 'SEO Booster Pack', price: 999, icon: '🚀', description: 'Optimize your project for search engines.' },
  ];

  ngOnInit() {
  const userData = localStorage.getItem('webgen_user');
  if (userData) {
    this.userName = JSON.parse(userData).name;
  }

  const savedCart = localStorage.getItem('mfe_cart_data');
  if (savedCart) {
    this.cart = JSON.parse(savedCart);
    this.calculateTotal();
    
    console.log("Angular restored cart from LocalStorage! 📦");
  }

}

isInCart(productId: number): boolean {
  return this.cart.some(item => item.id === productId);
}


 addToCart(product: any) {
  this.cart.push(product);
  this.calculateTotal();

  localStorage.setItem('mfe_cart_data', JSON.stringify(this.cart));
  
  console.log("Cart synced to LocalStorage! ✅");
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
    alert('Are you sure to logout the session.');
  localStorage.removeItem('webgen_token');
  localStorage.removeItem('webgen_user');
  navigateToUrl('/home'); 
}
}   
