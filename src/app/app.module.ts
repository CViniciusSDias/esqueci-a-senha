import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdicionarPage } from '../pages/adicionar/adicionar';
import { TabsPage } from '../pages/tabs/tabs';
import { SlidesPage } from '../pages/slides/slides';
import { PerguntaPage } from '../pages/pergunta/pergunta';
import { LoginPage } from '../pages/login/login';
import { EditarPage } from '../pages/editar/editar';
import { AlterarDadosPage } from '../pages/alterar-dados/alterar-dados';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { SobrePage } from '../pages/sobre/sobre';
import { SenhaDao } from '../daos/senha.dao';
import { ConnectionFactory } from '../providers/connection-factory';
import { StringHelper } from '../providers/string-helper';
import { ToastFactory } from '../providers/toast-factory';
import { Login } from '../providers/login';
import { AlertFactory } from '../providers/alert-factory';
import { AcessoService } from '../providers/acesso-service';
import { RecuperacaoService } from '../providers/recuperacao-service';
import { FormSenha } from '../components/form-senha/form-senha';
import { BtSubmit } from '../components/bt-submit/bt-submit';
import { Header } from '../components/header/header';
import { FormAcesso } from '../components/form-acesso/form-acesso';

@NgModule({
    declarations: [
        MyApp,
        AdicionarPage,
        HomePage,
        TabsPage,
        SlidesPage,
        PerguntaPage,
        LoginPage,
        EditarPage,
        AlterarDadosPage,
        ConfiguracoesPage,
        SobrePage,
        FormSenha,
        BtSubmit,
        Header,
        FormAcesso
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        FormsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AdicionarPage,
        HomePage,
        TabsPage,
        SlidesPage,
        PerguntaPage,
        LoginPage,
        EditarPage,
        AlterarDadosPage,
        ConfiguracoesPage,
        SobrePage
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        ConnectionFactory,
        SenhaDao,
        StringHelper,
        ToastFactory,
        Login,
        AlertFactory,
        AcessoService,
        RecuperacaoService
    ]
})
export class AppModule {}
