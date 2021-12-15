import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserPipe } from '../user.pipe';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    UserComponent,
    UserPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxPaginationModule
  ]
})
export class UserModule { }
