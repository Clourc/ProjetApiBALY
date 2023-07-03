import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentionsComponent } from './mentions/mentions.component';
import { CguComponent } from './cgu/cgu.component';
import { RouterModule, Routes } from '@angular/router';

const miscRoutes: Routes = [
  { path: 'notices', component: MentionsComponent },
  { path: 'tos', component: CguComponent }
]

@NgModule({
  declarations: [
    MentionsComponent,
    CguComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(miscRoutes)
  ]
})
export class MiscModule { }
