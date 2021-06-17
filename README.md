# DoorDash Frontend Interview Project

- *This is a React based Chat Applicaiton*

# Instructions on running the application

## 1. Node 
- Node installation required with version ` v12.18.0 ` or greater. 

## 2. Dependencies
- To install all the required dependencies run `npm install`.

## 3. Running the server
- To run the application, first run the provided server as `node server.js`
- Similarly, also run the added websocket server as `node websocketserver.js`
- Added the websocket server to communicate with 2 users in 2 different browser tabs, to show the new chat messages in both tabs. 

## 4. Serving the Application
- Run `npm start` to start the react script and serve the application from `/public`.

# Design Specs
- All the following design specification from ` ./spec ` directory were met during development process:

    ## Set Username
    - The first screen you should see is the "login" screen. 
    - A user can type a username they'll use, and if they provide some string and hit "Join the DoorDash Chat!" button, we'll save their username for when they add new messages.

    ## Chat
    - When you've submitted a username, we'll load up the chat interface.

    On the left, we have:
    * user info
        * username
        * time that user has been online
        * list of rooms available

    On the right, we have the selected chat room. There, we show:
    * room information
        * room name,
        * list of usernames of users in the room
    * messages
        * message text
        * username of the user that posted it
        * newest messages on the bottom, older on the top
        * scroll the view to see older messages



