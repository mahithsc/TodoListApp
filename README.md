# TodoListApp

## What Was The Tech Stack I Used and Why
The front end technology I used was **React Native**. I like RN mainly because I can work with JavaScript/TypeScript. There are whispers that Flutter will be the king of cross platform development in the future, but after working with Dart for a little while before I got to RN, I disagree for 2 main reasons.
1. Flutter uses Dart which just feels awkard, like the ugly twin for Java which frankly I am not a fan of
2. Waaaaay to much boilerplate goes along with Flutter whereas JavaScript uses simple arrow functions.

Unlike Dart, JavaScript just makes sense, for me at least. That being said, there are aspects of RN that I dislike, namely the sparse UI library which doesnt come close to the rich one which is provided by Flutter. 

Moving onto the backend, my wepon of choice was **Firebase**. I feel that Firebase was a great choice because it had everything that I would want for now in one place. It handles auth with ease, a database which works very well, storage functionality, and the ability to write rules for the database and storage.

## Why a TodoList App?
One line answer: I have not worked with databases yet and thought that working on a small and simple project like this one would give me some practice and experience working with data-managemnt. 

## Problems I Encountered
The largest problem I encountered was retrieving data from the Firestore database and displaying it without the tasks repeating. This was baisically my first time working with an actual database so there was a little but of a learning curve that went with it. The problem stemmed from the fact that when there was a call to read from the database, it would itterate through ALL the tasks and ALL the tasks to the local state variable. This resulted in duplicates of the the same task appearing on UI. Although the database mantained its data, there would likr 50 tasks on the UI because of all the duplicated tasks.

My first fix: My first fix was to set the state of the local varibale to an empty array when calling for the data from the database, and then have the functions which calls for the data itterate through every document from the database containing tasks and add them. While this worked and felt like an achievment, it wasn by the no stretch of the imagonation the best solution.

My second fix: This solution involved storing the document ID as circled below upon making a new task. Another function would then go and fetch the document with that specific docId from the database, and add it to the local state. This solution worked better and was notably smoother when using in app.

<img width="824" alt="Screen Shot 2022-02-22 at 5 13 22 PM" src="https://user-images.githubusercontent.com/61169546/155228662-39f7ec7a-6672-46e5-b86f-8986b84e5889.png">

## Overall Experience
Overall I think for I wanted to achieve this small project was a sucess. I wanted to get more familiar with data managemnt and I think this project helped. It also refreshed my front end skills through using React Native Elements.

## A Couple Flicks of the Final Product
  <img width="200" alt="Screen Shot 2022-02-22 at 5 13 22 PM" src="https://user-images.githubusercontent.com/61169546/155229081-49333c81-3523-4b1d-ab8c-20b6f001a930.png">     <img width="200" alt="Screen Shot 2022-02-22 at 5 13 22 PM" src="https://user-images.githubusercontent.com/61169546/155229096-53b65315-38ce-4ddd-9e8d-726e72f51f4e.png">     <img width="200" alt="Screen Shot 2022-02-22 at 5 13 22 PM" src="https://user-images.githubusercontent.com/61169546/155229320-e864af45-d0b2-497d-b494-f3c5d2f84f31.png">

ps: I will save anyone who tries to meddle my firestore database some time. I have locked the database so anyone who tries to read or write from it will not be able to do so. 

