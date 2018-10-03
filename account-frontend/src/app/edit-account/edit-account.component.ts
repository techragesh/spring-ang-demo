import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  account: Account;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    const accountId = localStorage.getItem('editAccountId');
    if (!accountId) {
      alert ('Invalid Submit');
      this.router.navigate(['list-account']);
      return;
    }
    this.editForm = this.formBuilder.group({
      accountId: [],
      accountName: ['', Validators.required],
      bankName: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.accountService.getAccountById(+accountId).subscribe(res => {
      this.editForm.setValue(res);
    });
  }

  onUpdate() {
    this.accountService.updateAccount(this.editForm.value)
    .pipe(first())
    .subscribe(res => {
        this.router.navigate(['list-account']);
    },
    error => {
        alert('error');
    });
  }
}
