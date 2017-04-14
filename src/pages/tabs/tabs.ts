import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AdicionarPage } from '../adicionar/adicionar';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AdicionarPage;
  tab3Root: any = ConfiguracoesPage;

  constructor() {

  }
}