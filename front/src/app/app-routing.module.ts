import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CommonLayoutComponent,
        pathMatch: 'full',
        loadChildren: () =>
          import('./modules/main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'auth',
        component: CommonLayoutComponent,
        loadChildren: () =>
          import('./modules/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
