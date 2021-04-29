class SimpleComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
    /*html*/
    `
    <style>
      div { 
        color: red;
        font-family: Arial;
        font-size: 18px;
        }
    </style>
    <div>I am a simple component</button>
  `;
  }

}
/* Custom elements */


customElements.define("simple-component", SimpleComponent);