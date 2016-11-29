
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.route';
import { AppComponent } from './app.component';
import { AboutComponent, AboutHomeComponent, AboutItemComponent } from './app.component';
import { HomeComponent, Item1, Item2 } from './app.component';

let helloState = { name: 'item 1', url: '/item1', component: Item1 };
let aboutState = { name: 'item 2', url: '/item2', component: Item2 };

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
        
    ],
    declarations: [
        AboutComponent,
        HomeComponent,
        AboutItemComponent,
        AboutHomeComponent,
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
