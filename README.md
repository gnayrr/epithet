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
  // enable all enhancements for each textarea elements
  epithet.on();
  ```

##API

###`.use()`

Set which enhancements are enabled.

> **Alias:** `epithet()`


> **Parameters:**
>
> Enhancements to use, 'or `'all'`/`'none'` to enable/disable all enhancements
>
> Default: `'all'`


> **Example**:

> ```js
> epithet.use('textInput').on();

> epithet.use('textInput', 'tab').on();

> // or use the alias...
> epithet('textInput', 'tab').on();
> ```

###`.on()`

Enable enhancements on textarea elements. Invoking this method on already enhanced elements reconfigures the element.


