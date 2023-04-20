# Final Project

Upload and post images in specific locations.

## Getting Started

<!-- Link: https://aux-app.herokuapp.com/song -->

## ScreenShots

First lets Login/Sign Up
<img src="./images/login.png">

Then you'll be taken to the home page where you can see everyones images on the map
<img src="./images/home.png">

If you go to your page on the top navigation you will see only your posts and be able to delete posts there
<img src="./images/userpage.png">

To post a new post, go to post and upload an image and add a caption. Soon will be adding a location as well
<img src="./images/newpost.png">

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
