# Project  Introduction 

The project is an interactive front-end website with educational purpose. The website has an introduction homepage, a quiz game with a score section at the end of the quiz, a Google map Api and a JS-mail Api to register. 

The purpose of this project is to create a website that give to the users the opportunity to learn about Italy aspects and culture by simply taking an actual quiz game, checking the Italy map with the main cities highlighted and giving the chance also to the user to receive updates from the website or cooperate by entering their details and a text message.The website has been created also to test the Javascript knowledge and the implementation of Api's.
The title of the project is "Knowledge Quiz about Italy".

## Description Ux design 
The project consist of 3 html pages linked to three JS.files, all easy to navigate using the Bootstrap Navigation bar, any link of the page when clicked open in a new tab using the attribute target= "_blank" to avoid that the user leave our page when doing so.

1. index.html  linked to index.js   
2. mail.html linked to mails.js
3. map.html linked to map.js

# UX
## User stories
As user I want to enjoy myself taking the quiz game and learning something new at the same time, be able to see my score at the end of the quiz, be able to learn more about italian geography checking the italy google map page and be able to sing up to receive updates or to cooperate to improve the website.

## As developer I want to:
Learn more on JavaScript and Api's.
Learn something new to improve my personal knowledge and enjoy my time at the same time by taking the quiz. 

## Features implemented 
- All the project pages display a Bootstrap navbar for better navigation experience.
- The Homepage "index.html" contains text that gives an ideas of some of the most interesting aspects of Italy. After reading the text, the bottom of the page has a start quiz button that allow the user to take the quiz after clicking on it. This button will hide entirely the homepage after clicked, and will start to display the quiz questions written inside the js array in the index.js.
- Each question will display after choosing an answer a next button to move to the next random question on the click, also each answer button will change color to red if the answer is wrong or green if the answer is correct at the end of the quiz after the score displaying, the quiz will show also a Try Again button to retake the quiz again, reloading the quiz from a random question. 
At the end of the quiz the user has two different outcomes related to his score.

 -The quiz result will show two different outcomes
 IF and Else Statement:

One outcome ***If*** the user result is **> than 6 correct answers**: 
- A Youtube documentary "History of Rome" specific on the capital.
Otherwise **(Else)**, if the user has any other score lower than 6 the outcome would be: 
- A Youtube documentary "History of Italy".

map.html is linked to a google map cluster Api that let the user visualize all world map highlighting the most important cities in the Italian territory.The user can also zoom in and zoom out of the map to any point to see better the interested locations.

mail.html is linked to JS mail Api, after registering and entering the Api Key, the user can send his details for updates to my contact e-mail or send messages to cooperate to improve the website. 
I can receive the name,surname and contact e-mail of any user that decide to fill the form with the purpose of receiving updates or cooperate. 

## Technologies Applied:
* HTML5, CSS, JavaScript programming languages
* Jquery(a Javasctip library) very popular and used to simplify Javascrip
* Bootstrap 4.5.0 to make the website responsive for all users
* Balsamiq Wireframes to draw my project ideas
* Google Fonts: 'Nerko One', 'cursive', sans-serif.
* Gitpod I used it as editor to create my code.
* Git/GitHub platform for the deployment to keep the project in repositories with frequent commits and informative messages.

## Deployment
The project is deployed to this link <https://github.com/Iacopo454/Quiz-Knowledge>. 
In order to make the project live on the internet, first I have checked that I used all the Git commands: git status,git add, git commit -m, git push to create the relevant repositories on Github.  
After this, from the GitHub page of my project, I clicked at the top right of the page on "Settings" link, then I scroll down to the GitHub Pages section that is designed to host our project pages from the GitHub repositories, and selected the relevant branch then I have selected the relevant button to make the  project live and waited to receive the active link.
* The active link of my project is <https://iacopo454.github.io/Quiz-Knowledge/>

## Testing
* I used the google chrome Dev Tool to check, modify and test my code thorugh this tool, using the command "python3 -m http.server" and checking if the console reported any errors.
The console does not report any errors anymore, execpt one in regard of a favi.icon which does not effect the functionality in any way.
* I have checked my project using Google Chrome, Mozilla Firefox, Safari, I also tested it on a Macbook, my highphone 8 and asked to family and friends to test it too.
* I have checked if my code contains any errors and validate my HTML and CSS code using W3C validator "World Wide Consortium" technology, this the link for the HTML <https://validator.w3.org> and this the link used for the CSS <https://jigsaw.w3.org/css-validator/>.
* I used this technology to beautify my style.css code <https://www.prettifier.net/css/>, and instead to beautify my HTML pages I used the keyboard commands alt+shift+f.  
* I have used https://jshint.com/ to check if the javascript code had any errors and it does not.

## Errors and difficulties
* I have not exerienced anymore errors inside the console or of any kind except from the favicon error that it is not anything to worry about as it does not effect the fucntionality of the website.
* I have modified the images sizes before loading using my computer preview 
* I have not beign able to position in a better place the next button and so the user as to scroll down the page in order to click on it.
 
## Credits 
All the images are taken from https://pxhere.com/ and http://pexel.com (they both provide free domain images)

The two youtube documentary are the following:
https://www.youtube.com/watch?v=WKpQRXdvAqM
https://www.youtube.com/watch?v=JUK8j4ZovQs

Project inspiration and tutorial examples: https://www.youtube.com/watch?v=49pYIMygIcU and https://www.sitepoint.com/simple-javascript-quiz/

The text on the homepage is taken from the following link: 
<https://www.kids-world-travel-guide.com/italy-facts.html> 

The questions and the quiz answers are written by me.

## Future improvements and considerations
I plan to improve the website introducing better content on the homepage, and replacing the homepage text with the information needed to answer the quiz questions, in away to give at the user the opportunity to test his memory after taking the quiz and checking the score.
This kind of exercise of reading and then testing the memory it would be beneficial not only to who wants to exercise his memory but might be beneficial for who is experiencing memory issues. The score would reflect more the memory strenght of the user rather than test his knowledge. 
I also would like to implement as I watched on the inspirational video on youtube that I have credited, a timer in a way that the user has a limited timeframe to answer of 6-7 seconds, after that the answer will be counted as a mistake. 






































