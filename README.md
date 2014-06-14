Epithet
=======

Enhanced Native textarea


##Introduction
Epithet turns ye olde textarea in to something akin to basic plain text editors of the 80’s. It does so without messing with other native commands like copy/pase, undo/redo, and the contextmenu. This is as native as it gets.

##Features

* Native `tab` support for modern browsers
* Native undo/redo behavior
* Adjustable tab size


##Usage

1. Include Epithet somewhere on your page

  ```html
  <script src="/path/to/epithet.min.js"></script>
  ```

2. Once your page is loaded, you have 3 ways to use Epithet

  ```js
  // Enhance one textarea
  var element = document.getElementById('textEditor');
  epithet.on(element);
  
  
  // Enhance all textarea with the 'whateverClass' class
  epithet.on('whateverClass');
  
  // Enhance only textareas that were previously enhanced and currently turned off
  // This is a little more involved, read the API section below
  epithet.on();
  ```

##API
###.on(element:HTMLElement)
Enhance the specified element, if it is a textarea element. Otherwise does nothing.

###.on(class:String)
Finds all occurrences of textareas with the specified class name. Then enchance each element that is a textarea and has not been enhanced.

###.on()
Turn on enhancements for all previously enhanced elements. This reverses the affect of `epithet.off()`.

###.off(element:HTMLElement)
Turn off Epithet enhancements for the specified element.

###.off(class:String)
Turn off Epithet enhancements for all elements with the specified class name.

###.off()
Turn off Epithet enhancements for all elements. 

###.reset()
Completely remove any trace of Epithet from all elements.

###Element.$epithet
This is special object added to every enhanced textarea. It offers you a number of useful methods:
