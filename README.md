## Table of Content
----
* [Purpose](#Purpose)
* [User Experience Design (UX)](#User-Experience-Design)
 * [User stories](#User-stories)
  * [External users goal](#External-users-goal])
  * [Structure](#Structure)
  * [Design](#Design)
    * [Colour Scheme](#Colour-Scheme)
    * [Typography](#Typography)
    * [Imagery](#Imagery)
    * [Wireframes](#Wireframes)
  * [Limitations](#Limitations)
  * [Features](#Features)
  * [Features Left to Implement](#Features-Left-to-Implement)
* [Technologies](#Technologies)
* [Testing](#Testing)
  * [Summary](#Summary)
  * [High Level Test Cases](#High-Level-Test-Cases)
  *  [Out of Scope](#Out-of-Scope)
  * [Test Result](#Test-Results)
  * [Deployment](#Deployment)
* [Credits](#Credits)
* [Acknowledgements](#Acknowledgements)

# Milestone 2

## Purpose
----
  This memory game was created for the sole purpose of completing the Milestone 2
  Project for the Code Institute’s Full Stack Developer course. It was built using the
  knowledge gained from the HTML, CSS and JavaScript (User Centric Design / interactive frontend development modules). A full
  list of technologies used can be found in the technologies section of this
  document.


A live version of game can be found [here](https://sonicbasedrop.github.io/f1-the-memory-game/)

## Formula 1 - the Memory Game
![Mock Up](assets/images/mock_up_f1.png)

***
## User Experience Design
----

### User Stories
  * The user will se a popup with information on how to play the game. 
  * The user will be able to choose on of three levels  of difficulty before the game starts.
  * The user should see the current time elapsed and moves while playing the game.
  * The user should see an image of the Yas marina formula 1 circuit of Abu Dhabi United Arab Emirates.

  * The user should be able to click any of the cards which are facing down to flip it over and try to find the matching pairs.
  * The user should be able to find pairs by clicking on the cards. If the match, they stay flipped, if they don't match they will flip back.
  * The user should not be able to click on a new card until the two already flipped cards which are not matching and not flipped back.
  * The user should be receiving a message at completion of game.



#### Structure 

* The game header will be vissible at all times, during and after game. The header is the name of the game (Formula 1 the Memory Game)

* Background image will be vissable at all times, during and after game. The images is the Yas marina formula 1 circuit of Abu Dhabi United Arab Emirates.

* The start page will include a pop-up with explanation on how to play the game, and three buttons to choose difficulty level of game.

* Custom CSS will be used to make the game responsive by the use of media queries


* All pages will be responsive and the layouts will change dependent on screen size. This is to ensure content flow is appealing, images are displayed properly and that the content is not shrunk side by side, so small that it is unreadable. The purpose of this is to fulfill user story:

* All pages will contain a Footer section with time elapsed and amout of moves made by the user. The aim of the Footer elements is to fulfill user stories.

* HOW TO PLAY THIS GAME: you complete the game by matching the cards. You do that by clicking on the cards. If they match they stay flipped, if they don't match they will flipp back 
to the starting position.
## Design
---

#### Colour Scheme
The main colours used are shade of Red rgb(248, 94, 94) Two shade of Blue rgba(39, 109, 189, 0.5), #2d56bd,shade of gray #555, shade of orange #fda40d and White #fff. 

#### Typography

The font used throughout the game is the Rubik font, Montserrat and Sans-serif is the fallback font in case for any reason the font isn’t being imported into the site correctly.

#### Imagery
  * Imagery is important. Therefore, the images are chosen in order to catch the users’ attention and create an atmosphere of formula 1.
  *  Images are provided by [Formula 1](https://www.formula1.com) and Abed Ismail, Abed is a contributor to Unsplash, check out his beutyfull images at [Unsplash](https://unsplash.com/@abedismail). Photo credits are further detailed in the credit section.
#### Wireframes
Start page<br>
![Start Page Wireframe](docs/wireframes/choose_level.png)<br> 
Easy Level<br>
![Easy Level Wireframe](docs/wireframes/easy_level.png)<br>
Medium Level<br>
![Medium Level Wireframe](docs/wireframes/medium_level.png)<br>
Hard Level<br>
![Hard Level Wireframe](docs/wireframes/hard_level.png)<br>
End page<br>
![End Page Wireframe](docs/wireframes/chequerd_flag.png)<br> 

For full Size PDF´s of wireframes click links below.<br>
 [Start Page Wireframe](docs/wireframes/choose_level.pdf)<br>
 [Easy Level Wireframe](docs/wireframes/easy_level.pdf)<br>
 [Medium Level Wireframe](docs/wireframes/medium_level.pdf)<br>
 [Hard Level Wireframe](docs/wireframes/hard_level.pdf)<br>
 [End Page Wireframe](docs/wireframes/chequered_flag.pdf)<br>


# Features
---
### Existing Features
  * Three difficulty levels to choose from.
  * Time elapsed while playing the game, and a moves counter so that the playe knows how many moves took to complete the game.
  * A restart game button when game is completed.
### Features Left to Implement
  * Matching the drivers with there teammates and match drivers with there race helmets.
  * A "quit button" incase a the player want quit while playing the game
  ---
  # Technologies
  ---
  ###	HTML
  * This project uses HTML as the main language used to complete the structure of the game.
  ### CSS 
  * This project uses custom written CSS to style the game.  

  ### [jQuery](https://jquery.com)
   * jQuery library was used to simplify HTML DOM tree traversal and manipulation

 ### [Google Fonts ](https://fonts.google.com/)   
   *  Google fonts are used throughout the project to import the Montserrat and Poppins fonts.
### [Gitpod](https://www.gitpod.io)
   *  Gitpod is the Integrated Development Environment used to develop the Website.
### [Github](https://github.com/)
   * GithHub is the hosting site used to store the source code for the Website and [Git Pages](https://pages.github.com/) is used for the deployment of the live site.
### [Git](https://git-scm.com/)
  *  Git is used as version control software to commit and push code to the GitHub repository where the source code is stored.
### [TinyJPG](https://tinypng.com/)
  *  TinyJPG is used to reduce the file sizes of images before being deployed to reduce storage and bandwidth.
### [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/)
   * Google chromes built in developer tools are used to inspect page elements and help debug issues with the site layout and test different CSS styles.

### [Timer](https://www.w3schools.com/howto/howto_js_countdown.asp) 
 * Code used to create timer was taken from w3school
### [Balsamiq Wireframes](https://balsamiq.com/)
  *  This was used to create wireframes for 'The Skeleton Plane' stage of UX design.
### [Techsini](http://techsini.com/multi-mockup/index.php)
   * tecnisih.com Multi Device Website Mockup Generator was used to create the Mockup image in this README.md
    ---
##  Testing
---
### Test Strategy
#### Summary

  * Testing is required on Milestone Project 2 – Formula 1 - the Memory Game.

  * As this project is static and contains no back-end functionality, the testing performed will be on the visual effects and layout of the Website. Testing to be done on at least three    web browsers and all screen sizes.

  * No elements should overlap another container div. All elements should remain on the screen at all sizes above 300px. 

  * All nav links should direct to the correct html pages as per their names. The Home page is the exception, this one will redirect to index.html.

  * All links to external websites must open in a new browser.

  * Testing of form validation will also be required to ensure the correct inputs are taken and that all fields are required.

  * Validation of inclusion for all features included in the Structure of the Website / Wireframes must be performed.

  * The live Project can be found [here](https://sonicbasedrop.github.io/f1-the-memory-game/)

#### Test Results
  ![Test Results](assets/images/readme-images/test-result.png)

   * All Pages were run through the [W3C HTML Validator](https://validator.w3.org/nu/#textarea) Validator and showed no errors.<br>
   ![W3C HTML Validator](docs/validator_w3/index_html_validator.png) <br> 
   * CSS Stylesheet was run through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator) and showed no errors.<br>
   ![W3C CSS Validator](docs/validator_w3/style_css_validator.png)<br>


   * As a First Time user, I want to easily understand the main purpose of the site and learn more about CA. - Testing was performed to ensure CA information was displayed on the Home Page.

   * As a First Time user, I want to be able to easily navigate throughout the site to find content. - Testing was performed on all Navigation links to ensure users can easily navigate the Website.

   * As a First Time user, I want to view the website and content clearly on my mobile device. - Testing was performed to ensure the Website was responsive on all devices, except for iPhone 5SE.

   * As a First Time user, I want to find ways to follow CA on different social media platforms. - Testing was performed to ensure Social Media links had been added to the Website.

   * As a Returning user, I want to contact CA so I can request more information. - Testing was done to ensure there was a functioning contact form on the Website and that the Footer also contained contact information.

   * As a Frequent user, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes. - Testing was to performed to validate newsletter field in footer is functioning. 

   ### Issues and Resolutions to issues found during testing
# Deployment
---
### Project Creation <br>
  * The project was started by me navigating GitHub.com and then i clicked on my repositories. I then clicked on botton for [new repository.](https://github.com/new) <br>
     * After that I clicked on the drop-down menu and clicked on [Code-Institute-Org/gitpod-full-template.](https://github.com/Sonicbasedrop/GitPod-full-template#readme) I then gave my repository a name (f1-the-memory-game). <br>
       * Thereafter I gave the website a description (A JavaScript memory game for my Milestone 2 project). I then checked ‘Public’-botton. I added the README.md file and .gitignore. 
         * Opening a the terminal in Gitpod, I then added my asset folders, CSS folder Images folder Js folder etc etc. The following commands were used throughout the project:
    	   * git add filename - This command was used to add files to the staging area before committing.
             * git commit -m commit message explaining the updates - This command was used to commit changes to the local repository.
               * git push - This command is used to push all committed changes to the GitHub repository.

## Using Github Pages <br>
* Navigate to the [GitHub Repository:](https://sonicbasedrop.github.io/f1-the-memory-game/)
  * Click my current repository. 
    * Click on the 'Settings' Tab.
      * Click on the Git Hub Pages Heading.
        * Select 'Master Branch' as the source.
          * Click the Save button.
            * Click on the link to go to the live deployed page.
  ---
  # Credits
  ---
  ### Code 
 
 * Code used to create timer was taken from w3school.
  ### Content
  * The content of this software was created by Ivan Ulysses based on research done troughout the duration of this course.<br>

  ### Media
  * The photos used as background image for the game was downloaded from Abed Isamil who is a contributor to [Unsplash](https://www.unsplash.com), a free image and photos site.<br>
  * You can download Abed´s photos [Here](https://unsplash.com/@abedismail)
  * The card images and back face image was provided by [Formula 1](https://www.formula1.com)

# Acknowledgements
 * I would like to thank my mentor Daisy McGirr for her guidance and support throughout my project. 
  
        