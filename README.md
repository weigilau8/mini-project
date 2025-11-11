1. Install the full Express required and recommended dependencies: 
 - Install Express 
 - Install Nodemon

2. Add a folder named “data” inside the project folder. Inside the “data” folder add a JSON file with at least 6 items (objects)
3. Adding a "public" folder for a full well-designed HTML website (static website):
  a. 3 HTML pages at least
  b. images/media and professional (nice and elegant) CSS
  c. One of the HTML pages will be a demo for using API (Application Programming Interface) request to a back-end side (server-side) to load the JSON data (using Express with Node for sure):
    i. This page should include a button to communicate with Express URL Route to call (fetch) JSON data. When the user click this button, the JSON data will be fetched.
    ii. The JSON data that you will grab/load from the server-side should be displayed in a nicely formatted and professional layout to the end user (clients) in this page
  d. you will need a JavaScript file to handle the front-end interactions with the user where you will attach an event listener to the button of the page. When the user clicks the button you will call function with Async/Await* to fetch the data according to the URL that you specified (or will specify) in your application JS file.
    * Async/Await is the syntactic sugar of using promises 
4. For sure, you will have to add the JavaScript file for running Express application using the local virtual server "localhost" with the port number:
  a. Use any name you prefer to this Express application JavaScript file (by default, programmers use app.js or you can use index.js)
  b. Write the full template/boilerplate of Express from you repos code examples or the express documentations
    i. https://expressjs.com/en/starter/hello-world.html
  c. Import or require the JSON file to be saved into a variable of any name of your choice
  d. Add the .get() method with a specific route to send the JSON Data which the variable that you have created that contains the JSON content. Notice that the URL and the end-point of this get() method will be used in your client-side JavaScript file.
