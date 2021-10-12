import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  public language: string;
  public data : any[];
  constructor(private activatedRoute : ActivatedRoute, public modalController: ModalController, public loadingController: LoadingController) { }
  public isLoading;

  async presentModal(p) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: { 
        p: p
      }
    });
    return await modal.present();
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalPage,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await modal.present();
  // }

  ngOnInit() {
    this.present();
    this.language = this.activatedRoute.snapshot.paramMap.get('id');
    fetch('./assets/data/deutsch.json').then(res => res.json())
    .then(json => {
      this.dismiss();
      this.data = json;
      this.data = Object.keys(this.data).map(e=>this.data[e]);
      console.log("JSON", this.data)
    });
  }

}
