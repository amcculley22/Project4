# Final Project

Upload and post images in specific locations.

## Getting Started

<!-- Link: https://aux-app.herokuapp.com/song -->

## ScreenShots

<!-- The home screen shows all of your songs added to the playlist
<img src="./images/Home.png">

Clicking on a song will spin the record and "play" the song
<img src="./images/play.png">
Using the seach bar you can look for all music in the Dicogs API database
<img src="./images/search.png">
You can then add these songs to your playlist
Once a song is on your playlist you can remove or click the song title for more details
<img src="./images/show.png">
Depending on your mood you can filter using the slider
<img src="./images/Filter.png"> -->

## Restful Routes

| RESTful Routes | HTML     | Verb   |
| -------------- | -------- | ------ |
| Index          | /        | GET    |
| New            | //:query | GET    |
| Delete         | //\_:id  | DELETE |
| Create         | /        | POST   |
| Show           | //:\_id  | GET    |

## Next Steps

Add in GoogleMaps API and connect each image to a location on the map

## Technology Used

<li>
MongoDB
express
JavaScript
TailWind
express-session
jsx-view-engine
Cloudinary
React
</li>

```mermaid
sequenceDiagram
Project ->> Mongoose: Store data
Mongoose ->> Project: Get data
Project -->> Cloudinary: Upload images to URL
Cloudinary-->>Project: Display URL


```
