# Show GPX Tracks

A minimal solution to show collection of GPX tracks on your own web server. 
See [an example](http://konstantin.shemyak.com/tmp/GPX/leppCX-2014-2015.html).

Click '+' icon in the top right corner of the map. 
There are controls to show/hide each particular track and switch the background map (not all maps cover all countries).
For each of your own tracks you can set color and line width.

## How to Show my Tracks Like in the Example

1. Clone this repository to your web server (such as `example.com`)
1. Rename directory `LeppCX-2014-2015` to the name you'd like to address your tracks, let's say to `my-gpx-tracks`. 
Your track collection will be accessible at URL `example.com/my-gpx-tracks`.
1. Delete all `.gpx` files in that directory and upload your own GPX files instead.
1. Edit file `tracklist.js` in that directory accordingly (replace filenames with yours, give titles to the tracks, change color and weight if wanted).
