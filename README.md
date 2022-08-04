# Simple PSP Attendance Website

## App Summary 
Website designed to make it easy to manage attendance for all events for Phi Sigma Pi at UNC - Chapel Hill. 

## Getting Started

### Initial Install of Development Workspace
1. Clone this repo
2. `cd` into the `attendancetaker` directory, this is a React project. 
3. Run `npm install` to install all of the dependencies. 
 	- View the `package.json` for a full list of dependencies.
### Setting up Firebase (Jan 2022)
1. Create a new firebase project.
2. Under "General" in project settings, add a new web app to your project. Web app is denoted by the "</>" symbol.
4. Using your app's firebase SDK, update the firebase config code in `attendancetaker/src/utils/firebase.js`. The configuation data can be obtained anytime in the console if you already register the app. 
5. Navigate to the "Authentication" tab on the left side of your firebase console. Add a new sign-in method using email/password.
6. Navigate to the "Realtime Database" tab on the left side of your firebase console and create a new database. Start the database locked mode.
7. Navigate to the rules section of your database. Obtain the rules from `/attendanceTaker/firebaseRealtimeDatabaseRules.json` and paste them into your firebase project. These rules are set up to only allow authenticated to write under their own user ID and read the database. Refer to the firebase rules docs for more information
 	
### Running a Local Server
1. Simply run `npm start` in the `attendancetaker` directory. This will launch a local instance of the website.

## Deployment (Jan 2022)
If you are going to deploy this application, you are first going to need to fork the repo. This is because you are going to connect the repo to a site like Netlify, and you need to own the repo for that. Netlify is easy to set up and free for low traffic, so it's my recommendation and what I used. They also do live deployment after a commit to the main branch which makes things super easy. They pretty much hold your hand when connecting the Github repo to their site but there are a couple settings to tweak right after. Under "Build and Deploy" in site settings, you need to set the "base directory" to `attendancetaker`. Next, you need to set the "build command" to `npm run build`. Lastly, you need to set the "publish directory" to `attendancetaker/build/`. There could be different things in the future that need to be changed too so just follow docs and any guides online. 

## Technologies 
This projects makes use of the following technologies. If you need to make changes, please familiarize yourself with their respected documentary first. Keeping the dependencies low for this project was a high-priority to ensure that it would be easy to maintain for a long time. I didn't even use a CSS library because there aren't complex styles going on. We don't want to get caught in an situation similar to what happened with [kik](https://dev.to/chaitanyasuvarna/how-a-developer-broke-the-internet-by-un-publishing-his-package-containing-11-lines-of-code-31ei).
- React
- React-Router-Dom
- Firebase Auth
- Firebase Real Time Database
    
## Contributing
When making changes to the codebase, it is very important to provide comments along with your code. This project is design to be passed down to new technology chairs in Phi Sigma Pi and the codebase will need to be understood by a lot of different people. If you make a significant change, please add your name to the author section of the `README.md`. You deserve the recognition and your contact will be valuable if there are issues down the road.

## Authors
William Bucher, <wjbucher3@gmail.com>
Brandon Hall, brandon@hokiehalls.com

## License
This is an open-source project. Feel free to fork this and use it with your own organization if you'd like. 
