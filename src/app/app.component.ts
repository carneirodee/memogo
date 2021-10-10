import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'clipboard' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Help', url: '/folder/Help', icon: 'help-circle' },
    { title: 'About', url: '/folder/About', icon: 'information-circle' },

  ];

  public languages = [
    { title: 'Deutsch', url: '/language/Deutsch', icon: '🇩🇪' },
    { title: 'English', url: '/language/English', icon: '🇺🇸' },
    { title: 'Korean', url: '/language/Korean', icon: '🇰🇷' },
    { title: 'Japanese', url: '/language/Japanese', icon: '🇯🇵' },
    { title: 'Russian', url: '/language/Russian', icon: '🇷🇺' },
    { title: 'Spanish', url: '/language/Spanish', icon: '🇪🇸' },

  ];
  constructor() {}
}
