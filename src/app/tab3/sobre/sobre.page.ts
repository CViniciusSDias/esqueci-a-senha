import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
  public versao = 'latest';

  public constructor(private appVersion: AppVersion) { }

  ngOnInit(): void {
    this.appVersion.getVersionNumber().then(version => this.versao = version);
  }
}
