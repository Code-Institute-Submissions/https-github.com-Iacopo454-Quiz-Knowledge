# Project  Introduction 

The project is an interactive front-end website with educational purpose. The website has an introduction homepage, a quiz game with a score section at the end, a Google map Api and a JS-mail Api. 

The purpose of this project is to create a website that give to the users the opportunity to learn about Italy aspects and culture by simply taking an actual quiz game, checking the Italy map with the main cities highlighted and giving the chance also to the user to receive updates from the website or cooperate by entering their details and a text message.The website has been created also to test the Javascript knowledge and the implementation of Api's.
The title of the project is "Knowledge Quiz about Italy".

## Description Ux design 
The project consist of 3 html pages linked to three JS.files, all easy to navigate using the Bootstrap Navigation bar, any link of the page when clicked open in a new tab using the attribute target= "_blank" to avoid that the user leave our page when doing so.

1. index.html  linked to index.js   
2. mail.html linked to mails.js
3. map.html linked to map.js

## User stories

As user I want to enjoy myself taking the quiz game and learning something new at the same time, be able to see my score at the end of the quiz, be able to learn more about italian geography checking the italy google map page and be able to sing up to receive updates or to cooperate to improve the website.

## As developer I want to:

Learn more on JavaScript and Api's.
Learn something new to improve my personal educaiton and enjoy my time taking the quiz. 

## Features implemented 

All the project pages display a Bootstrap navbar for better navigation experience.

The Homepage "index.html" contains text that gives an ideas of some of the most interesting aspects of Italy. The bottom of the page has a start quiz button that allow the user to take the quiz after hiding the homepage, a next button to move to the next random question on the click, and at the end of the quiz a Try Again button to retake the quiz again after the score results and reloading the quiz from a random question and going back to the homepage. At the end of the quiz the user has two different outcomes related to his score.

At the end of quiz, two different outcomes:

One outcome ***If*** the user result is **> than 6 correct answers**: 
- A Youtube documentary 

Otherwise **(Else)**, if the user has any other score lower than 6 the outcome would be: 
- A Nationalgeographic documentary

map.html is linked to a google map cluster Api that let the user visualize all world map highlighting the most important cities in the Italian territory.The user can also zoom in and zoom out of the map to any point to see better the interested locations.

mail.html is linked to JS mail Api, after registering and entering the Api Key, the user can send his details for updates to my contact e-mail or send messages to cooperate to improve the website. 
I can receive the name,surname and contact e-mail of any user that decide to fill the form with the purpose of receiving updates or cooperate. 

## Technologies Applied:

* HTML5, CSS, JavaScript programming languages
* Bootstrap 4.5.0 to make the website responsive for all users
* Balsamiq Wireframes to draw my project ideas
* Jquery(a Javasctip library) very popular and used to simplify Javascript
* Google Fonts: Fjalla One', 'Roboto', sans-serif
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
* I used this technology to beautify my style.css code <https://www.freeformatter.com/css-beautifier.html#ad-output>, and instead to beautify my HTML pages I used the keyboard commands alt+shift+f.  
* I have used https://jshint.com/ to check if the javascript code had any errors and it does not.

## Credits 
All the images are taken from https://pxhere.com/
The youtube documentary video is from the National Geographic youtube channel:
<https://www.youtube.com/watch?v=GXoEpNjgKzg>

The project idea and tutorial taken as samle have been  https://www.youtube.com/watch?v=49pYIMygIcU */ and ....


the second documentary is from the official National Geographic website at this page: <https://www.nationalgeographic.com/travel/destinations/europe/italy/>

The text on the homepage is taken from the following link: 
<https://www.kids-world-travel-guide.com/italy-facts.html> 





































