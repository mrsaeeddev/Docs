# Getting Started

## Server Requirements
- [NodeJs](https://nodejs.org/en/)
- [Database Server](#)


## Installation
First Step Clone our latest repository
```bash
git clone https://github.com/opshit/opshit.git
```

Next install NPM Dependencies
```bash
npm install
```

### Local Development Server
If you have NodeJS installed locally and you would like to use NodeJS's built-in development server to serve your application, you may use the serve opshit command. This command will start a development server at http://localhost:5000:

```bash
node opshit serve
```
additionally you need automatic refreshing server you must install _nodemon_ globally
```bash
npm install -g nodemon
```
Now you will run opshit using _nodemon_
```bash
nodemon opshit serve
```
## Structure of Folder Tree
```
|--app
  |--controllers
  |--middleware
  |--modals
  |--providers
  |--kernal.js
|--config
|--database
|--resources
  |-- u can use static site for build in files 
      Otherwise use vuejs framework inner opshit
|--routes
```
