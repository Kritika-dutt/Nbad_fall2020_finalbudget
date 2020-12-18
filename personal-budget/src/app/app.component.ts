import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { title } from 'process';

@Component({
  selector: 'pb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'personal-budget-application';
  constructor(
    public router: Router,
    private titleBudget: Title,
    private meta: Meta
) {}


ngOnInit() {
  this.titleBudget.setTitle(this.title);
  this.meta.addTag({name: 'author', content: 'budget'});
  this.meta.addTag({name: 'robot', content: 'index, follow'});
  this.meta.updateTag({ name: 'Keywords', content: 'personal-expense-budget, application' });
  this.meta.updateTag({ name: 'description', content: 'creating personal budget application to monitor monthly expenses' });
}

}
