import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { DailyLogFormComponent } from './components/dailylogform/dailylogform.component';
import { DailyLogDetailsComponent } from './components/dailylogdetails/dailylogdetails.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        DailyLogFormComponent,
        DailyLogDetailsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'dailylog', component: DailyLogFormComponent },
            { path: 'dailylog/:id', component: DailyLogDetailsComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ]
})

export class AppModuleShared {
}
