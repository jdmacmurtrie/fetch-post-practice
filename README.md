This is meant to be extra-curricular practice in writing `fetch` calls that post to an existing data file.


## Setup Instructions
```
$ npm install
$ npm start
# in a new tab
$ bundle
$ ruby server.rb

Navigate to localhost:4567
```

Currently, the app uses `fetch` to make a GET request for the existing data.  However, it has no functionality to POST new data.  The form is already set up, but has no way of persisting user input.  Missing code should be written into:
- App.js
- FormContainer.js
