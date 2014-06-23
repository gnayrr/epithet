Epithet
=======

Native enhancements for ye olde textarea. Does not depend on any other library, and works with native commands out of the box, like copy/paste, undo/redo, and the context menu.


##Features

* 100% native-ish behavior
* Customizable enhancements
* Plays well with other libraries


##Usage

1. Include Epithet somewhere on your page

  ```html
  <script src="/path/to/epithet.min.js"></script>
  ```

2. Once your page is loaded, you're ready to start using epithet

  ```js
  // Enable all enhancements on textareas
  epithet.on();

  // Enable all enhancements on textareas with class 'foobar'
  epithet.on('foobar');

  // Enable the 'textInput' feature only on textareas
  epithet.on({
    textInput: true
  });
  
  // Enable the 'textInput' and 'tab' features on textareas with class 'crimson'
  epithet.on('crimson', {
    textInput: true,
    tab: true
  });

  ```

##API

###.on

1. `.on(class:String, config:Object)`

  if `class` is omitted, every textarea in the current document will be enhanced. 



###.off

1. `.off(element:HTMLElement)`

  Turn off Epithet enhancements for the specified element.

2. `.off(class:String)`

  Turn off Epithet enhancements for all elements with the specified class name.

3. `.off()`

  Turn off Epithet enhancements for all elements. 


###.reset()
Completely remove any trace of Epithet from all elements.