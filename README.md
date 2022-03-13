# Event-Explorer-App

## An event explorer app for discovering new events 



https://user-images.githubusercontent.com/29221743/158080191-971705eb-ec19-4a87-b49c-509f99645b36.mp4


Tried using SQLite and Async Storage so i can save the joined events but couldnt get it working on time , plan was to save each new joined event's info into a new row in a table using the event's id from the API as the key , after which i would make a `SELECT *` query and either map through it displaying each joined event or use a flat list to iterate through it .

Also had some problems with the pagination , initially i tried to get the current array of events concatenate the new fetched events to its back , but for some reason the events started to duplicate so instead upon reaching the end of the displayed events i use a reference to a higher up point in the screen to scroll back up and load the next set of events .

## Component structure

![image](https://user-images.githubusercontent.com/29221743/158080578-15afa599-fffa-40d6-8f8b-e4f134b49972.png)
