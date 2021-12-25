## Scrum-Masters

This is an airline reservation system website that provides an equitable yet useful user experience, configured with interactive features and a simple, consistent, and intuitive user interface.

## Build Status
Working.

## This project is built using the following frameworks/runtime environemnts
1- Node.js
2- Express.js
3- React.js
4- Mongoose

## Code style 
This project was built using the standard coding conventions in JavaScript to facilitate documentation & enable smooth future contributions.

## Installation
In each directory (root,frontend,backend) containing the **`package.json`** you should write `npm i` to install all the dependencies in each file  

## Getting Started

The project has 3 **`package.json`** files in the following Tree (note: it's just a high level explanation for the main directories, the words between barckets are not real directorires/files)

```
+-- backend
|   +-- (different files and directories including the main file "app.js") 
|   +-- package.json
+-- _frontend
|   +-- (different files and directories including the main file "App.js")
|   +-- package.json
+-- package.json

```
## The project has two main parts 
>**Admin Components**:
>>The Admin is able to add round trip flights and specify their full features: dates & times of departure and return flights, departure and arrival airports, number of seats per each flight cabin(economy, business, and first class), alongside with specific prices for each seat in mentioned cabins. 
Admin is also able to perform the rest of CRUD operations on these created flights (RUD in this case :smiley: ). 

>**User Components**:
>>The guest user has the closest thing to the common user experience while using any of the famous airline reservation systems; the user starts by searching for the desirable round trip by inserting the desired dates, cabin class, number of adults, number of children,and departure and arrival airports. Then the user is presented with compatible flights with different prices to choose from, once a flight is chosen; the user is presented with the return flight of chosen departure flight. 
>>>After choosing both flights, the user is then presented with a summary of their choices: departure and arrival airports and flight numbers, number of tickets, trips dates and times, and the total price of reservation. The user later has to log in (or sign up then login) to be able to confirm & move forward with the reservation process. 
>The logged in user is later asked to fill passenger details for each traveler, then is moved to the itenirary page that displays all tickets in this reservation (both departure and return tickets) with the names of passengers displayed on them. The logged in user is then asked to pay for this reservation and automatically receives mentioned itenirary in the billing email provided while paying as a confirmation for said payment.
>

## Technical Details
**The backend includes the mongoose models & routes for both the admin related & user related components in the following hierarchy**
>backend

>> Models 
>>>Flight.js  
>>>Reservation.js  
>>>Ticket.js  
>>>User.js

>>Routes
>>>admin   
>>>>adminController.js

>>> user  
>>>> userController.js

>>>authenticationController.js  
>>>**Note**: *authenticationController contains all APIs related to session creation & maintenance*  
>
**The frontend includes all the react files that are responsible for the  admin related & user related components in the following hierarchy**
>frontend  
>>src  
>>>components  
>>>>admin  
>>>>layout  
>>>>user  

*Each subfolder in the component folder includes the necessary .js react files for said folder's name related component* 

>>>images  
>>>pages  
>>>styles

 

*The images folder includes images that were used in different positions throughout the website*
*The pages folder includes files that are responsible for calling the APIs (if applicable), and retrieves "props" from the server side *  
*The styles folder includes the css (styling) for some of the components
>>>App.js  
<font size='0.75'>*Includes the routes of react files (the URLs that should be visited to view certain components)*</font>






  





