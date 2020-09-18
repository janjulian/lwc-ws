import { LightningElement} from 'lwc';
import greetHello from '@salesforce/apex/WsController.greetHello';
import getAccounts from '@salesforce/apex/WsController.getAllAccounts';

export default class Greeter extends LightningElement {
    name;
    message = 'No message yet';
    accounts;

    async connectedCallback() {
        this.accounts = await getAccounts();
    }

    async handleGreet() {
        this.name = this.template.querySelector('lightning-input').value;
        
        try {
            this.message = await greetHello({name : this.name});
        } catch (error) {

        }
    }
}