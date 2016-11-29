import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/about']">About</a>
    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }





@Component({
    selector: 'app-home',
    template: `<h2>Home</h2>`
})
export class HomeComponent { }

@Component({
    selector: 'app-about',
    template: `
      <h2>About</h2>
      <a [routerLink]="['/about']">Home</a>
      <a [routerLink]="['/about/item']">Item</a>
      <div class="inner-outlet">
        <router-outlet></router-outlet>
      </div>
      
        `
})
export class AboutComponent { }


@Component({
    selector: 'about-home',
    template: `<h3>About Home</h3>`
})
export class AboutHomeComponent { }

@Component({
    selector: 'about-item',
    template: `<h3>About Item</h3>`
})
export class AboutItemComponent { }


@Component({
    template: '<h3>Item 1!</h3>'
})
export class Item1 { }

@Component({
    template: '<h3>Item 2!</h3>'
})
export class Item2 { }
