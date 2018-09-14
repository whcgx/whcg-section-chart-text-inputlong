'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var polymerElement_js = require('@polymer/polymer/polymer-element.js');
require('@whcg/whcg-general-styles/grid.js');

class WhcgSectionChartTextInputlong extends polymerElement_js.PolymerElement {
  static get template() {
    return polymerElement_js.html`
    <style include = "style-element-grid">
      
        .section {
            padding-top: 130px;
        }

        .headline {
            padding-top: 32px;
            font-family: var(--parmaco-font-family);
            font-size: var(--parmaco-font-size-xl);
            color: var(--parmaco-base-color-100pct); 
        }

        .content {
            grid-template-rows: 350px auto;
        }

        .content-chart {
            padding-top: 33px;
        }

        .content-text{
            padding-top: 33px;
            font-family: var(--parmaco-font-family);
            font-size: var(--parmaco-font-size-s);
            font-weight: var(--parmaco-font-weight-normal);
            color: var(--parmaco-base-color-100pct);
        }

        .content-inputbox {
            padding-top: 33px;
        }

    </style>



    <div class="col1span12 grid-12 section">
        <div class="col2span2 headline">
            <slot name="title"></slot>
        </div>
        <div class="col4span8 grid-8 content">
            <div class="col1span5 content-chart">
                <slot name="chart"></slot>
            </div>
            <div class="col6span3 content-text">
                <slot name="text"></slot>
            </div>
            <div class="col1span8 content-inputbox">
                <slot name="input"></slot>
            </div>
        </div>
    </div>
  `;
  }
}

window.customElements.define('whcg-section-chart-text-inputlong', WhcgSectionChartTextInputlong);

exports.WhcgSectionChartTextInputlong = WhcgSectionChartTextInputlong;
