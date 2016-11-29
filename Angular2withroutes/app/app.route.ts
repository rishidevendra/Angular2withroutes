
import { Routes } from '@angular/router';
import { AboutComponent, AboutHomeComponent, AboutItemComponent } from './app.component';
import { HomeComponent } from './app.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'about', component: AboutComponent,
        children: [{
            path: '', component: AboutHomeComponent
        }, { path: 'item', component: AboutItemComponent }]
    }
];