Epithet
=======

Native enhancements for ye olde textarea. Does not depend on any other library, and works with native commands out of the box, like copy/paste, undo/redo, and the context menu.


##Features

* 100% native-ish behavior
* Customizable enhancements
* Supports modern browsers and IE9+

##Usage

1. Include Epithet somewhere on your page

  ```html
  <script src="/path/to/epithet.min.js"></script>
  ```

2. Once your page is loaded, you're ready to start using epithet

  ```js
  epithet.on();
  ```

##API

###`.use()`

Set which enhancements are enabled. Also accept `'all'` and `'none'` as parameters to enable/disable all enhancements.

**Default**: `'all'`

**Alias**: `epithet()`

**Example**:


```js
var el = document.getElementById('editor');

epithet.use('textInput').on(el);

epithet.use('textInput', 'tab').on(el);

// or use the alias...
epithet('textInput', 'tab').on(el);

```

