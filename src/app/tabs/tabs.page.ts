import {Component, OnDestroy, OnInit} from '@angular/core';
import {buffer, debounceTime, filter, map, tap} from 'rxjs/operators';
import {SubscriptionLike} from 'rxjs';
import {NavController, Platform} from '@ionic/angular';
import {ToastFactoryService} from '../providers/toast-factory.service';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {
    private backButtonSubscription: SubscriptionLike;

    constructor(private platform: Platform, private toast: ToastFactoryService, private navCtrl: NavController) {
    }

    ngOnDestroy(): void {
        this.backButtonSubscription.unsubscribe();
    }

    ngOnInit(): void {
        const stream = this.platform.backButton.pipe(debounceTime(300));
        const ctrl: any = this.navCtrl;

        this.backButtonSubscription = this.platform.backButton
            .pipe(tap(() => {
                if (ctrl.topOutlet.stackCtrl.views.length > 1) {
                    return;
                }

                this.toast.showToast('Para sair da aplicação clique 2x rapidamente em voltar');
            }))
            .pipe(buffer(stream))
            .pipe(map(list => list.length))
            .pipe(filter(count => count === 2))
            .subscribe(_ => navigator['app'].exitApp());
    }
}
