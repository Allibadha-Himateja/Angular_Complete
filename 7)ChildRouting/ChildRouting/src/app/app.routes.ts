import { Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { Deposit1Component } from './deposit/deposit1/deposit1.component';
import { Deposit2Component } from './deposit/deposit2/deposit2.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: "home", component: AppComponent },
  { path: "balance", component: BalanceComponent },
  { path: "withdraw", component: WithdrawComponent },
  {
    path: "deposit", component: DepositComponent, children: [
      { path: "deposit1", component: Deposit1Component },
      { path: "deposit2", component: Deposit2Component }
  ] }
];
