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

##Examples from the website
>Examples from User Trip  
>>Searching for appropriate flight

![2021-12-25](https://user-images.githubusercontent.com/78305151/147393724-b7c2131d-00ef-48ae-83db-0f9706441eb3.png)  

>>Entering Passenger Info  
>>


![2021-12-25 (8)](https://user-images.githubusercontent.com/78305151/147393775-4501e174-b2aa-422c-a332-61f4ecf17905.png)
  
>>Flight Summary 
>>

  ![2021-12-25 (4)](https://user-images.githubusercontent.com/78305151/147393788-ccd3431f-a71f-4c02-ad5a-4e2111142177.png)


>>Making Payment!



![2021-12-25 (27)](https://user-images.githubusercontent.com/78305151/147393832-05a45283-0331-443b-aecd-956dac272881.png)
![2021-12-25 (28)](https://user-images.githubusercontent.com/78305151/147393836-0b8d2320-0f25-4fd9-b0c1-1042ad354023.png)
>>Reflects in the users reservations!!  
>>Deleting Reservation  
>>
![2021-12-25 (30)](https://user-images.githubusercontent.com/78305151/147393918-b68043ac-74f7-460d-a02b-2340e05fea21.png)  

![2021-12-25 (31)](https://user-images.githubusercontent.com/78305151/147393929-7bb515b8-0265-4eff-b3ad-4d8dd555026a.png)  
>>Cancellation gets reflected!!


![2021-12-25 (32)](https://user-images.githubusercontent.com/78305151/147393934-2a0e6899-66dc-4cf8-93a6-4c71793e1b23.png)

>Examples from Admin Trip
>
!![2021-12-25 (17)](https://user-images.g![2021-12-25 (18)](https://user-images.githubusercontent.com/78305151/147393979-e401b538-8fc6-4a31-9ace-3dda107fa0a5.png)
ithubusercontent.com/78305151/147393970-eac1d676-ee69-4ee8-8985-49e25deaaad0.png)

![2021-12-25 (21)](https://user-images.githubusercontent.com/78305151/147393982-617c1dc1-5734-4e89-aec2-4a0f2b435de3.png)  
>Editing flight details 
>![2021-12-25 (33)](https://user-images.githubusercontent.com/78305151/147394026-270255d3-388b-406f-8e9a-256543e2822e.png)

