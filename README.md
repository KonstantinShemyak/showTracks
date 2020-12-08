# Show GPX Tracks

A minimal solution to show collection of GPX tracks on your own web server. 
See [an example](http://konstantin.shemyak.com/showTracks/LeppCX-2014-2015/) (that's one season of winter season evening city bike rides in Espoo, Finland).

Click '+' icon in the top right corner of the map. 
There are controls to show/hide each particular track and switch the background map (not all maps cover all countries).

## How to Show my Tracks Like in the Example

1. Clone this repository to your web server (such as `example.com`)
1. Delete all `.gpx` files in directory `tracks` and upload your own GPX files instead.
1. Edit file `tracklist.json` accordingly (replace filenames with yours, give titles to the tracks, change color and weight if wanted).
