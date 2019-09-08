import {Injectable} from '@angular/core';
import {Toast} from '@ionic-native/toast/ngx';

@Injectable({
    providedIn: 'root'
})
export class ToastFactoryService {

    constructor(private toast: Toast) {
    }

    public showToastWithButton(message: string, closeButtonText: string, duration: number = 5000) {
        this.showToast(message, duration, 'bottom');
    }

    public showToast(message: string, duration: number = 3000, position: 'bottom' | 'top' | 'center' = 'bottom') {
        this.toast.showWithOptions({
            message,
            duration,
            position,
            styling: {
                backgroundColor: '#000000'
            }
        }).subscribe();
    }
}
