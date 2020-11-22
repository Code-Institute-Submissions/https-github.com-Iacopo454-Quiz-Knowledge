# Project  Introduction 

The project is an interactive front-end website with educational purpose. The project has an introction homepage, a quiz game with a score section at the end, a Google map Api and a JS-mail Api. 

The purpose of this project is to create a website that give to the users the opportunity to learn about Italy aspects and culture by simply taking an actual quiz game, checking the Italy map with the main cities highlighted and giving the chance also to the user to receive updates from the website or cooperate by entering their details and a text message.The website has been created also to test the Javascript knowledge and the implementation of Api's.
The title of the project is "Knowledge Quiz about Italy".


## Description Ux design 
The project consist of 3 html pages linked to three JS.files, all easy to navigate using the Bootstrap Navigation bar, any link of the page when clicked open in a new tab using the attribute target= "_blank" to avoid that the user leave our page when doing so.

1. index.html  linked to index.js   
2. mail.html linked to mails.js
3. map.html linked to map.js

## User stories

As user I want to enjoy myself taking the quiz game and learning something new at the same time.See my score at the end of the quiz, be able to learn more about italian geography checking the italy google map page, be able to sing up for updates or cooperate to improve any aspect of the website.

## As developer I want to:

Learn more on JavaScript and Api's.
Learn something new to improve my personal educaiton and enjoy my time taking the quiz. 


## Features implemented 

All the project pages display a Bootstrap navbar for better navigation experience.

The Homepage "index.html" contains text that gives an ideas of some of the most interesting aspects of Italy. The bottom of the page has a start quiz button that allow the user to take the quiz, a next button to move to the nexr question, and at thed end of the quiz a restart button to retake the quiz again after the score results and reloading the quiz from a random question and going back to the homepage. At the end of the quiz the user has two different outcomes related to his score.

At the end of quiz, two different outcomes:

One outcome if the user result is > than 6 correct answers: 
- A Youtube documentary 

Otherwise if the user has any score lower than 6 the outcome would be: 
- A Nationalgeographic documentary

map.html is linked to a google map cluster Api that let the user visualize all world map highlighting the most important cities in the Italian territory.The user can also zoom in and zoom out of the map to any point to see better the interested locations.


mail.html is linked to JS mail Api, after registering and entering the Api Key, the user can send his details for updates to my contact e-mail or send messages to cooperate to improve the website. 
I can receive the name,surname and contact e-mail of any user that decide to fill the form with the purpose of receiving updates or cooperate. 

## Technologies Applied:

* HTML5, CSS, JavaScript programming languages
* Bootstrap 4.5.0 to make the website responsive for all users
* Jquery(a Javasctip library) very popular and used to simplify Javascript
* Google Fonts: Fjalla One', 'Roboto', sans-serif
* Gitpod I used it as editor to create my code.
* Git/GitHub platform for the deployment to keep the project in repositories with frequent commits and informative messages.

## Credits 
All the images are taken from https://pxhere.com/
The youtube documentary video is from the National Geographic youtube channel:
<https://www.youtube.com/watch?v=GXoEpNjgKzg>

the second documentary is from the official National Geographic website at this page: <https://www.nationalgeographic.com/travel/destinations/europe/italy/>

The text on the homepage is taken from the following link: 
<https://www.kids-world-travel-guide.com/italy-facts.html> 


































## Deployment
The project is deployed to this link <https://github.com/Iacopo454/Body-Fashion-3>.
In order to make the project live on the internet, first I have checked that I used all the Git commands: git status,git add, git commit -m, git push to create the relevant repositories on Github.  
After this, from the GitHub page of my project, I clicked at the top right of the page on "Settings" link, then I scroll down to the GitHub Pages section that is designed to host our project pages from the GitHub repositories, and selected the "Master branch" in my case as it is what I been provided from Code Institute for this project, but the project may have many branches to choose, then I been provided with a link that might take few minutes to be active and when it is our site is published at that link. 
* The active link of my project is <https://iacopo454.github.io/Body-Fashion-3/>


* Google Chrome Dev Tool 
I have used this technology to Edit my HTML and CSS code.
* Balsamiq Wireframes 
I have used this software to create the wireframe, this file is called Body Fashion wireframe and so my first project ideas.
* Jquery 
I have copy and pasted his link from Bootstrap to the bottom of my page, It helps to develop most browser compatible web page.
* Cdnjs
I have copy and paste the link to the bottom of my page.
Cdnjs it is a "Content Delivery Network" improves the performance of my website making sure that it is fast delivery content 
##Issues 
* I tried to link a Facebook page as I done for Youtube to load a video that advertise the gym but apparently after my attempt with Facebook I got an error in the console "X-frames-Options to deny" and searching on Google the error, I find out on <https://stackoverflow.com> that it is not possible to add a facebook page because Facebook does not allowed it and block it", perhaps it might be possible to do it with some other code configuration to go around it.
Inside the console in the DevTools I have two errors one showing a message of Dev Tool failed to load SourceMap, error status 404 and the other is about font-awesome showing this message: A cookie associated with a cross-site resource at http://fontawesome.com/ was set without the `SameSite` attribute.
I believe that both the error do not effect the performance of my project, the first one is only related to cookies and instead the second is related to the loading of a Js functionality I assume from the message that refers to the SourceMap.

## Testing
* I have checked my project using Google Chrome, Mozilla Firefox, Safari, I also tested it on a Macbook and on my highphone 8.
* I have checked if my code contains any errors and validate my HTML and CSS code using W3C validator "World Wide Consortium" technology, this the link for the HTML <https://validator.w3.org> and this the link used for the CSS <https://jigsaw.w3.org/css-validator/>.
* I used this technology to beautify my style.css code <https://www.freeformatter.com/css-beautifier.html#ad-output>, and instead to beautify my HTML pages I used the keyboard commands alt+shift+f.  
## External Sources
1. Most of the Images are taken from Yahoo search engine: Michael.jpg, Our.team.jpg, maxresdefault, blonde-jpg-jpg, Arnold.jpg, palestra.jpg, Richard.jpg, Laura.jpg, Martin.jpg, sereno.jpg, silvy-image.jpg, instead unsplash.jpg and unsplash3.jpg are taken from <https://unsplash.com/>, pexels-2.jpg and pexels.jpg images are taken from the free licence website <https://www.pexels.com/>.
2. The two iframe videos in [learn-more.html](learn-more.html) are taken from Youtube and their username sources are Valrocky and Criticalbench.
3. The text used from other sources are the [index.html](index.html), is taken from <https://www.ourgym.co.uk>, part of the text in [learn-more.html](learn-more.html) is taken from <https://resources.workable.com/>, the text of [rules.html](rules.html) is taken from <http://247fitness.co>.
The pricing card in the [pricing.html] (prcing.html) is taken from the Bootstrap documentation and then modified, instead the rest of the text as on [meet.html] (meet.html) is written by me. 