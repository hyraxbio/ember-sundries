import { tracked } from '@glimmer/tracking';
import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/animated-accordion';
import { htmlSafe } from '@ember/template';

@templateLayout(layout)
@tagName('')
export default class AnimatedAccordion extends Component {
  @service
  emberSundries;
  @tracked open = null;
  @tracked headerLevel;
  @tracked title;

  get parsedTitle() {
    var headerLevel = this.headerLevel || 2;
    return htmlSafe(
      `<h${headerLevel} class="margin-0">${this.title}</h${headerLevel}>`
    );
  }

  get expandCollapseIcon() {
    return this.open
      ? 'svg-repo/icons/icon-arrow-up'
      : 'svg-repo/icons/icon-arrow-down';
  }

  get openDefaultClasses() {
    if (!this.open) {
      return;
    }
    return this.emberSundries.accordionItemOpenDefaultClasses;
  }

  get closedDefaultClasses() {
    if (this.open) {
      return;
    }
    return this.emberSundries.accordionItemClosedDefaultClasses;
  }

  @action
  toggleAccordion() {
    this.open = !this.open;
  }
}
