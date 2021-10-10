import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  public language: string;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.language = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
