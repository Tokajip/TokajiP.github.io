var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';
let LoginView = class LoginView extends PageViewElement {
    static get styles() {
        return [SharedStyles];
    }
    render() {
        return html `
      <h2>Login</h2>
      <section>
        <div>
          <mwc-formfield label="Username">
            <input type="text" aria-label="Enter the username" />
          </mwc-formfield>
          <mwc-formfield label="Password">
            <input type="password" aria-label="Enter the password" />
          </mwc-formfield>
        </div>
        <div>
          <mwc-button unelevated label="Login"></mwc-button>
        </div>
      </section>
    `;
    }
};
LoginView = __decorate([
    customElement('login-view')
], LoginView);
export { LoginView };
