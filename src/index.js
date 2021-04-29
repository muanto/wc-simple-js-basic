


class SimpleComponent extends HTMLElement {
  constructor() {
    super();
    const div = document.createElement("div");
    div.innerHTML=  `
    <style>
      div { 
        color: red;
        font-family: Arial;
        font-size: 18px;
        }
    </style>
    <div>I am a simple component</button>
  `;
  this.appendChild(div);
  }
 
}

/* Custom elements */
customElements.define("simple-component", SimpleComponent);
