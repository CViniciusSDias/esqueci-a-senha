import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {

    public constructor(private firebase: FirebaseAnalytics) {}

    public logPageView(pageName: string) {
        this.firebase.logEvent('page_view', {page: pageName});
    }
}
