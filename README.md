# CCookie


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

CCookie is a custom cookie consent library to instantly implement cookie consent popup.

  - Easy to use
  - Easy to setup

### New Features!

  - Please ask for new features through issues


### Usage

This is a simple to use library.

Include our ccookie.js file and initialize ccookie object.

```sh
<script src="https://cdn.jsdelivr.net/gh/dipanshumahla/ccookie@1.0.0/src/ccookie.js"></script>
<script>
    var ccookie = new ccookie();
</script>
```
And you are done.

#### Custom properties
There are multiple properties you can change.

 | Property | Description |
 | -------- | ----------- |
 | text | The text to display |
 | html | Custom html desing for cookie consent popup |
 | time | Time to delay before executing default function |
 | OK_FN | Function to execute when user clicks ok button |
 | CANCEL_FN | Function to execute when user clicks cancel button |
 | DEFAULT_FN | Default function to execute after x seconds of time |
    

### usage

Create a config json object.

``` sh
var config = {
    text : "the text to display",
    html : "cusotm design html code [Follow rules for custom html]",
    time : 30,
    OK_FN : function(){
            console.log('custom ok function');
        },
    CANCEL_FN : function(){
            console.log('custom cancel function');
        },
    DEFAULT_FN : function(){
            console.log('custom default function');
        }
}
var ccookie = new ccookie(config);
```
**Note:** Every property is optional.

### HTML Rules for custom HTML design

 - Main container should have id="ccookie"
 - Text container should have id="cc-text"
 - OK Button should have id="cc-ok"
 - CANCEL Button should have id="cc-cancel"

**NOTE:** Everything is optional, but always follow rule while adding it.

License
----

MIT
