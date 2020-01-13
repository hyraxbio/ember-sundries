ember-extended-fields
==============================================================================

Simply a collection of components which can be used in any Ember app.

Installation
------------------------------------------------------------------------------

```
ember install ember-extended-fields
```

## Required addons

There are some supporting addons which may or may not need to be installed, depending on which components you want to use.

**ember-extended-elements/ember-perfect-scrollbar-container**
 
`ember install ember-perfect-scrollbar`

**ember-extended-elements/power-calendar**

`ember install ember-power-calendar`

If the installation does not automatically add this line to your `app.scss` file, then add it, before importing `ember-extended-elements.scss`.

`@import "ember-power-calendar";`

**ember-extended-elements/power-datetime-picker**
**ember-extended-elements/power-dateramge-picker**

`ember install ember-power-calendar`

`ember install ember-power-datepicker`

If the installation does not automatically add this line to your `app.scss` file, then add it, before importing `ember-extended-elements.scss`.

`@import "ember-power-calendar";`

**ember-extended-elements/tag-selector**

`ember install ember-power-select`

If the installation does not automatically add these line to your `app.scss` file, then add them, before importing `ember-extended-elements.scss`.

`@import "ember-basic-dropdown";`

`@import "ember-power-select";`

**ember-extended-elements/labelled-radio-button**

`ember install ember-radio-button`

## Components

### Animated Accordion

Wraps content in a single accordion. Accordions cannot be grouped.

    {{#ember-extended-elements/animated-accordion title="Title" open=true toggleWithCss=true}}
      ...Content here
    {{/ember-extended-elements/animated-accordion}}

#### Options

* `title` - Displays on the accordion header.
* `open` - If true, the accordion will be open to begin with.
* `toggleWithCss` - If true, the content of the accordion will be inserted into the DOM even if then accordion is closed, but the class of `open` will not be given to the accordion, and so the content is hedden by CSS. If not true, the accordion content of removed from the DOM when the accordion is closed.
* `accordionHeaderComponent` - The path to a component to display in the header, after the title.
* ` accordionHeaderProps` - Only relevent where `accordionHeaderComponent` is used. Accepts a hash of values which are passed to the component specified for `accordionHeaderComponent`.