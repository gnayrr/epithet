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

###`.use(,enhancement)`

Select the enhancements to use. Also accepts `'all'`/`'none'` to enable/disable all enhancements. If not specified, defaults to `'all'`.

**Alias:** `epithet()`

**Example**:

```js
epithet.use('textInput').on();

epithet.use('textInput', 'tab').on();

// or use the alias...
epithet('textInput', 'tab').on();
```

---


###`.on(element)`

Enable selected enhancements on textarea elements. If not specified, all textarea elements are targeted. Invoking this method on already enhanced elements reconfigures the element.

**Example:**

```js
// enable all enhancements for all textarea
epithet.on()

// enable 'textInput' enhancement for all textarea
epithet('textInput').on();

// enable all enhancements for one textarea
var el = document.getElementById('editor');
epithet.on(el);
```

---


###`.off(element)`

Disables all enhancements. If not specified, all textarea elements are targeted.

**Example:**

```js
// disable all enhancements for all textarea
epithet.off()

// disable all enhancements for one textarea
var el = document.getElementById('editor');
epithet.off(el);
```

---


###`.reset()`

Removes any trace of epithet enhancements.

**Example:**

```js
// remove epithet from all textarea
epithet.reset()

// remove epithet from one textarea
var el = document.getElementById('editor');
epithet.reset(el);
```