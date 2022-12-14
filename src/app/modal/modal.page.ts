import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  public playing: boolean = false;

  public recording: boolean = false;

  constructor(public modalController: ModalController) {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  play(): void {
    if (this.recording == false) {
      this.playing = !this.playing;
    }
  }

  record(): void {
    if (this.playing == false) {
      this.recording = !this.recording;
    }
  }

  ngOnInit() {}
}
