import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { version } from 'punycode';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
  public versao = '1';
  
  public constructor(private appVersion: AppVersion) { }
  
  ngOnInit(): void {
    this.appVersion.getVersionNumber().then(version => this.versao = version);
  }
}
