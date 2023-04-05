# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?

- What values can be stored in context?

- How do you create context and make it available to the components?

- How do you access the context values?

- When would you use context? (in addition to the best answer: "rarely")


## Notes

All student notes should be written here.

User can sign up
First the database is created to contain all information from the sign up portion. All data that was sent in if they fit the parameters is filed into a data file on pgweb
on the server side the app.post method is used to translate all the information filled in the form.
from the client side the client inputs data into the authPage where the data from the sign up form is moved from forms and translated onto the app.post method where the data uis then sent to the pgweb where it is to be stored in the data base for futrue use.
data flows from client info to server to database and displayed back from db to sever to client to have proper response

user can sign in

First the request is made on the client side of things and request is made and sent to the server where the server process the data with the app.post method and send a signal to the pgweb database. This request checks the user information that is parsed into a specific key sop the data cannot be stolen. That data determines if the inputed details are correct and if they match any of the users information they will log the user in and swith the user to the current homepage of the code. information moves from the client -> inputs informaiton then to the server where the info is parsed correctly and then the datbase where the information is checked for any incorrect reponses if an incorrect repsonse is given the error message is sent back up the directories and makes its way back up the client where they will recieve the error message.

user can stay signed in
When the user signs in the state of the application is changed and the user state is changed to the current user that exists. This data is then saved to the sevrer with local storage and keeps the state of the user even through refresh of the browser. As the local storage will not be changed unless the data directly effects it the user can stay logged in the entirer time with no interuptions in their experience. the data moved from the database to the server and from the sevrer the infromation is stored into the local sotrage where the data will stay until the user needs to sign out.

user can sign out
When the user is signed in the data is within the local storage so the button that in the client poriton of the app is used  to send data down from the app to local storage to clear out the data then the user is set back to undefined refreshing the satte all around the application the data is then sent backdown to the serve rwhere the use effect is occured to the change in the user state and it causes the page to be change bck ot the sign in home page. the data moves from homepage to the signout button from the signout button to local storage then to the user state in all the applicaitgon that contain it then to the server where the state is refreshed and all sent back to the client where the page changes to the sign in page.

How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
