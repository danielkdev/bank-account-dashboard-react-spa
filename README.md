# React SPA  and API SERVER 

There are two directories in this repository.

## Server Setup:

For server setup:

```bash
cd server
```
then you have to install dependencies.
```bash
npm install
```
Now your API server can be served using this command. We are using dev environment. 
```bash
npm run start:dev
```

## React SPA Setup:
For react SPA setup:

```bash
cd jaroop
```
then you have to install dependencies.
```bash
npm install
```
Now can to serve react app using this command. 
```bash
npm start
```
## Usage:
After starting the server and react app you can then visit [http://127.0.0.1:3000 ](http://127.0.0.1:3000 ) to view you page.

## Architecture:
   The API server is written using express in typescript using MOCK database. 
The REACT app SPA using using `fetch` library to make HTTP requests. The API is served on post `5000`. Alert message is showed containing error message in case of any error. Have'nt used any store for state management because state was not to complex there. Otherwise would have gone for `Redux Sagas`.

I have not broken the app into too much components. Just the one main page and two sub components. Pages are in views directory and components are in components directory.
Used functional components using hooks. Have not gone for class based components. Because React itself is encouraging developers to use functional components more often. 