# Simple PSP Attendance Wesbite

## App Summary 
Website designed to make it easy to manage attendance for all events for Phi Sigma Pi at UNC - Chapel Hill. 

## Getting Started

### Initial Install of Development Workspace
1. Clone this repo
2. `cd` into the `attendancetaker` directory, this is a React project. 
3. Run `npm install` to install all of the dependencies. 
 	- View the `package.json` for a full list of dependencies.
4. Update the firebase config code in `attendancetaker/src/utils/firebase.js`. The configuation data can be obtained in the console of your firebase project. 
 	
### Running a Local Server
1. Simply run `npm start` in the `attendancetaker` directory. This will launch a local instance of the website.

## Deployment
Will update after deployment is handled.

## Technologies 
This projects makes use of the following technologies. If you need to make changes, please familiarize yourself with their respected documentary first. Keeping the dependencies low for this project was a high-priority to ensure that it would be easy to maintain for a long time. We don't want to get caught in an situation similar to what happened with [kik](https://dev.to/chaitanyasuvarna/how-a-developer-broke-the-internet-by-un-publishing-his-package-containing-11-lines-of-code-31ei).
    - React
    - React-Router-Dom
    - Firebase Auth
    - Firebase Real Time Database
    
## Contributing
When making changes to the codebase, it is very important to provide comments along with your code. This project is design to be passed down to new technology chairs in Phi Sigma Pi and the codebase will need to be understood by a lot of different people. If you make a significant change, please add your name to the author section of the `README.md`. You deserve the recognition and your contact will be valuable if there are issues down the road. 

## Authors
William Bucher, <wjbucher@gmail.com>

## License
This is an open-source project. Feel free to fork this and use it with your own organization if you'd like. 