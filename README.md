# Stencil Select

A styleable, accessible `<select>` component for [Mobify’s AdaptiveJS framework](http://adaptivejs.mobify.com/).

**[View demo](#)**

## Requirements

- AdaptiveJS 2.1 or greater

## Installation

```shell
cd my-adaptive-project
grunt component:install:select
```

## Usage

During installation, AdaptiveJS will register a Dust helper for the component which can be used in any template.

### With a pre-existing select element

```html
{@c-select element=selectMarkupOrElement /}
```

### With literal options

```html
{@c-select id="foo" name="foo"}
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
{/c-select}
```

### With options from data

Assuming a context of the form:

```javascript
var context = {
    mySelectData: {
        id: 'something',
        name: 'something',
        options: [
            {value: '1', textContent: 'Option 1'},
            {value: '2', textContent: 'Option 2'},
        ],
    },
};
```

```html
{#mySelectData}
    {@c-select id=id name=name}
        {#options}
            <option value="{value}">{textContent}</option>
        {/ptions}
    {/c-select}
{/mySelectData}
```

### Calling methods from view scripts

```javascript
// Call the update method on an instance.
$('#something .c-select').data('component').update();
```


## API

### Dust helper parameters

Param name | Type          | Description
:--------- | :------------ | :----------
class      | String        | Adds values to the `class` attribute of the root element
id         | String        | Sets the `id` attribute of the underlying select element
name       | String        | Sets the `name` attribute of the underlying select element
element    | DOM, String   | Accepts the underlying select element as a DOM node or HTML string
label      | String        | Creates an inline label within the Select component

### Dust helper bodies

Body name | Accepts             | Description
:-------- | :------------------ | :----------
body      | `<option>` elements | Format as you would options for a native `<select>` element

### Sass configurable variables

Variable name             | Type      | Description
:------------------------ | :-------- | :----------
$select__draw-caret       | Boolean   | Whether to draw the default down-arrow icon. Set `false` to render your own.

### UI options

_none_

### UI methods

The component’s UI script instance is available via `$('.c-select').data('component')`.

Method name | Parameters | Description
:---------- | :--------- | :----------------
update      | _none_     | Force update the displayed value; call this if you programmatically change the value of the underlying `<select>` element.

### UI events

Event name        | Data object keys     | Event description
:---------------- | :------------------- | :----------------
select:update     | value (after update) | Emitted when the underlying native select changes.

## Contributing

First, read the Adaptive component documentation, especially the pages on creating components and the Stencil authoring guide. Then, clone the repo:

- `git clone git@github.com:mobify/stencil-select.git`
- `cd stencil-select`
- `npm install && bower install`
- Create a branch for your changes and begin development.
- Run the test server during development to check your work (see below).

### Testing

Visual tests provide a way to describe the features of a component in a spec format and manually check functionality of a component. To run tests:

- `grunt serve`
- Note the local port on which the test server is running (defaults to 3000)
- Navigate to [localhost:{port}/tests/visual](http://localhost:3000/tests/visual)
