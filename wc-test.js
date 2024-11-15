import { css, html, LitElement } from "lit";

export class WcTest extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html` <span class="${"></span> `;
  }

  static get styles() {
    return [
      skeletonStyles,
      css`
        :host {
          display: inline-block;
        }
      `,
    ];
  }
}

window.customElements.define("cc-badge", CcBadge);
