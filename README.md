# flickr-consumer

An awesome application for checking on random photos from Flickr. "Current state 
of amateur photography: is also a pretty good description.

## Core functionalities

* Random photos retrieved from Flickr publkic feed.
* Ability to mark/unmark any photo as a favourite one.
* Favourited photos get remembered, so after page refresh they're displayed.

## Browser compatibility

As of 2016-01-31:

* current version of Vivaldi,
* current version of desktop Opera
* current version of desktop Chrome,
* current version of desktop Mozilla Firefox,
* Internet Explorer versions: 9, 10, 11,
* current version of Android Opera, tested on phone,
* current version of Android Chrome, tested on phone & tablet,
* current version of Mobile Safari, tested on iPhone.

## Browser incompatibility

As of 2016-01-31:

* IE 8 and less,
* JS disabled browsers (e.g. Lynx ;)).

## Build & development

Download the repository, assuming you have Node.js, Grunt and Bower installed, 
run `npm install` & `bower install`. Shall this fail, there's an already built 
version of app, residing in `dist` directory.

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
Test coverage is not too great, mostly positive scenarios are considered. Not
that any crucial data is being taken into consideration, right?
