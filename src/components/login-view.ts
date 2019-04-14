import { html, customElement } from 'lit-element'
import { PageViewElement } from './page-view-element.js'
import { SharedStyles } from './shared-styles.js'

@customElement('login-view')
export class LoginView extends PageViewElement {
  static get styles() {
    return [SharedStyles]
  }

  protected render() {
    return html`
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
    `
  }
}
