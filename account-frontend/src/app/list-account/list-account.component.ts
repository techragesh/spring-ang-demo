import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Account } from '../model/account';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  accounts: Account[];

  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(res => {
      this.accounts =  res;
    });
  }

  deleteAccount(account: Account): void {
    this.accountService.deleteAccount(account.accountId).subscribe(res => {
      this.accounts = this.accounts.filter(acc => acc !== account);
    });
  }

  editAccount(account: Account): void {
    localStorage.removeItem('editAccountId');
    localStorage.setItem('editAccountId', account.accountId.toString());
    this.router.navigate(['edit-account']);
  }

  addAccount(): void {
    this.router.navigate(['add-account']);
  }

}
