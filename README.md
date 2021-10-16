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


A live version of website can be found [here](https://sonicbasedrop.github.io/ms1-core-athletics/index.html)

## Core Athletics (CA) Responsive Website
![Mock Up](assets/images/readme-images/mock-up.png)

***
## User Experience Design
----

### User Stories
  * The user will se a popup with information on how to play the game. 
  * The user will be able to choose on of three levels  of difficulty before the game starts.
  * The user should see the current time elapsed and moves while playing the game.
  * The user should see an image of the Yas marina formula 1 circuit of Abu Dhabi United Arab Emirates

  * The user should be able to click any of the cards which are facing down to flip it over and try to find the matching pairs.
  * The user should be able to find pairs by clicking on the cards. If the match, they stay flipped, if they don't match they will flip back.
  * The user should not be able to click on a new card until the two already flipped cards which are not matching and not flipped back.
  * The user should be receiving a message at completion of game.



#### Structure
All Pages will contain a Navigation menu at the top of the Webpage that directs them to a new Page to allow users to easily navigate the site. 

* As a First Time user, I want to be able to easily navigate throughout the site to find content.

The Home Page will contain appealing visuals and brief information of CA. The purpose of this is to fulfill user story:

*	As a First Time user, I want to easily understand the main purpose of the site and learn more about CA.

Custom CSS and/or Bootstrap will be used to make the Website responsive by the use of media queries and/or the Bootstrap Grid system.

All pages will be responsive and the layouts will change dependent on screen size. This is to ensure content flow is appealing, images are displayed properly and that the content is not shrunk side by side, so small that it is unreadable. The purpose of this is to fulfill user story:

* As a First Time user, I want to view the website and content clearly on my mobile device.

All pages will contain a Footer Element with contact information, a field to sign up for newsletters, and social media. The icons used will be from font-awesome. These are referenced below in the Frameworks-Libraries-and-Programs-Used section of this document. The aim of the Footer elements is to fulfill user stories:

*	As a First Time user, I want to find ways to follow CA on different social media platforms.
*	As a First Time user, I want to know where CA is located
*	As a Returning user, I want to contact CA so I can request more information


The Pricing Page will contain prices of CA’s various services. The purpose of this is to fulfill user stories:
*	As a First Time user, I want to get an overview of the price of CA’s services. 
*	As a Frequent user, I want to check for discounts and VIP offers. 

The Contact Page will contain a form that can be used to contact CA through the website. The purpose of this Page is to fulfill user stories:

*	As a Returning user, I want to contact CA so that I can request more information.
*	As a Frequent user, I want to sign up to the Newsletter so that I am emailed about any major updates and/or changes to the website or CA.

### Design

#### Colour Scheme
The four main colours used are shade of Red #F85E5E, shade of Blue #276dbd, Gray #696666 and White #fff. 

#### Typography

The headers on all pages throughout the Website are using the Monserrat font, while the main text is using the Poppins font. Sans-serif is the fallback font in case for any reason the font isn’t being imported into the site correctly. 

#### Imagery
Imagery is important. Therefore, the hero and background images are chosen in order to catch the users’ attention and create a feel good atmosphere and sense of the aspiration towards a healthy, holistic life style that CA offers its clients. 

Images are provided by contributors to [Unsplash.](https://unsplash.com/) Photo credits are further detailed in the credit section.
#### Wireframes
Home page<br>
![Home Page Wireframe](docs/wireframes/home-wf.png)<br> 
Pricing Page<br>
![Pricing Page Wireframe](docs/wireframes/pricing-wf.png)<br>
Contact Page<br>
![Contact Page Wireframe](docs/wireframes/contact-wf.png)<br>

For full Size PDF´s of wireframes click links below.
* ![Home Page Wireframe](docs/wireframes/home-wf.pdf)<br>
* ![Pricing Page Wireframe](docs/wireframes/pricing-wf.pdf)<br>
* ![Contact Page Wireframe](docs/wireframes/contact-wf.pdf)<br>

* ### Limitations
Due to no JavaScript functionality, apart from Bootstraps, the contact forms will not store data or send email requests. This includes the newsletter input field.
---
# Features
---
## Existing Features
  * 	Newsletter input field on all pages. This allows users to sign up for CA’s latest updates.  
  * 	Bootstrap cards with information about CA services, with sign-up bottons.
  *  On contact page – contact form, for users to be able to get in touch with CA.
## Features Left to Implement
  * 	A Bootstrap calendar, in order for users to be kept up to date and schedule participation in C | A activities and fitness classes.
  *   In order to implement the calendar, sign-up and logins would have to be added, along with necessary backend resources.
  ---
  # Technologies
  ---
  ###	HTML
  * This project uses HTML as the main language used to complete the structure of the Website.
  ### CSS 
  * This project uses custom written CSS to style the Website.  
  ### [Bootstrap](https://getbootstrap.com/)
  * The Bootstrap framework is used throughout this website for layouts and styling. 
  * Bootstrap has also been used to create cards on conatct.html and the footer.
 ### [Fontawsome](https://fontawesome.com/)
  *  Fontawesome Icons are used for the Social media links contained in the Footer section of the website.
 ### [Google Fonts ](https://fonts.google.com/)   
   *  Google fonts are used throughout the project to import the Montserrat and Poppins fonts.
### [Gitpd](https://www.gitpod.io)
   *  Gitpod is the Integrated Development Environment used to develop the Website.
### [Github](https://github.com/)
   * GithHub is the hosting site used to store the source code for the Website and [Git Pages](https://pages.github.com/) is used for the deployment of the live site.
### [Git](https://git-scm.com/)
  *  Git is used as version control software to commit and push code to the GitHub repository where the source code is stored.
### [TinyJPG](https://tinypng.com/)
  *  TinyJPG is used to reduce the file sizes of images before being deployed to reduce storage and bandwidth.
### [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/)
   * Google chromes built in developer tools are used to inspect page elements and help debug issues with the site layout and test different CSS styles.
### [Balsamiq Wireframes](https://balsamiq.com/)
  *  This was used to create wireframes for 'The Skeleton Plane' stage of UX design.
### [Techsini](https://techsini.com/multi-mockup/index.php)
   * tecnisih.com Multi Device Website Mockup Generator was used to create the Mockup image in this README.md
    ---
##  Testing
---
### Test Strategy
#### Summary

  * Testing is required on Milestone Project 1 – Core Athletics Responsive Website.

  * As this project is static and contains no back-end functionality, the testing performed will be on the visual effects and layout of the Website. Testing to be done on at least three    web browsers and all screen sizes.

  * No elements should overlap another container div. All elements should remain on the screen at all sizes above 300px. 

  * All nav links should direct to the correct html pages as per their names. The Home page is the exception, this one will redirect to index.html.

  * All links to external websites must open in a new browser.

  * Testing of form validation will also be required to ensure the correct inputs are taken and that all fields are required.

  * Validation of inclusion for all features included in the Structure of the Website / Wireframes must be performed.

  * The live Project can be found [here](https://sonicbasedrop.github.io/ms1-core-athletics/index.html)

  #### High Level Test Cases
  ![High Level Test](assets/images/readme-images/high-level-test.png)
#### Out of Scope
  * Testing form validation for phone number is out of scope. No regexp has been implemented. 

#### Test Results
  ![Test Results](assets/images/readme-images/test-result.png)

   * All Pages were run through the [W3C HTML Validator](https://validator.w3.org/) Validator and showed no errors.
     CSS Stylesheet was run through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) and showed no errors

   * As a First Time user, I want to easily understand the main purpose of the site and learn more about CA. - Testing was performed to ensure CA information was displayed on the Home Page.

   * As a First Time user, I want to be able to easily navigate throughout the site to find content. - Testing was performed on all Navigation links to ensure users can easily navigate the Website.

   * As a First Time user, I want to view the website and content clearly on my mobile device. - Testing was performed to ensure the Website was responsive on all devices, except for iPhone 5SE.

   * As a First Time user, I want to find ways to follow CA on different social media platforms. - Testing was performed to ensure Social Media links had been added to the Website.

   * As a Returning user, I want to contact CA so I can request more information. - Testing was done to ensure there was a functioning contact form on the Website and that the Footer also contained contact information.

   * As a Frequent user, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes. - Testing was to performed to validate newsletter field in footer is functioning. 

   ### Issues and Resolutions to issues found during testing
      * Dragging down website to 400px made the Contact form on contact.html become slightly off-centered (slightly to the right). 
      working flat out to resolve issue, 3h to project submition.<br>

      * had a issue with footer not stycking to bottom of page, resolved the problem with a short-page class in style.css

      * found a issue with contact form not aligning as expected in contact.html page working to resolve issue.


# Deployment
---
### Project Creation <br>
  * The project was started by me navigating GitHub.com and then I clicked on my repositories. I then clicked on botton for [new repository.](https://github.com/new) <br>
  * After that I clicked on the drop-down menu and clicked on [Code-Institute-Org/gitpod-full-template.](https://github.com/Sonicbasedrop/GitPod-full-template#readme) I then gave my repository a name (ms1-core-athletics). <br>
  *  Thereafter I gave the website a description (A responsive website for my MS1). I then checked ‘Public’-botton. I added the README.md file and .gitignore. 
  * Opening a the terminal in Gitpod, I then added my asset folders, CSS folder etc. The following commands were used throughout the project:
	* git add filename - This command was used to add files to the staging area before committing.
  * git commit -m commit message explaining the updates - This command was used to commit changes to the local repository.
  * git push - This command is used to push all committed changes to the GitHub repository.

## Using Github Pages <br>
  1.	Navigate to the [GitHub Repository:](https://github.com/Sonicbasedrop/ms1-core-athletics)
  2.	Click my current repository. 
  3.	Click on the 'Settings' Tab.
  4.	Click on the Git Hub Pages Heading.
  5.  Select 'Master Branch' as the source.
  6.  Click the Save button.
  7.  Click on the link to go to the live deployed page.
  ---
  # Credits
  ---
  ### Code 
  * The code to style the footer, including newsletter input field was taken from:[akashyap2013 youtube-page](https://www.youtube.com/channel/UCrG2Z0usOCCdUTAr4D1A8mw)<br>
  * Cards in contact.html taken from [Bootstrap](https://getbootstrap.com/)<br>

  ### Content
  * The content of this software was created by Ivan Ulysses based on research discussion with Stina Nilsson, EGS/T.<br>

  ### Media
  * The photos used on the website were downloaded from contributors to unsplash.com, a free image and photos site. 
  * Hero image on index.html was supplied by [Anastase Maragos](https://unsplash.com/photos/HyvE5SiKMUs)
  * Background cover image on index.html was supplied by [Hayley Kim Design](https://unsplash.com/photos/eot-ka5dM7Q)<br>
  * Background image on contact.html was supplied by [John Arano](https://unsplash.com/photos/h4i9G-de7Po)<br>
  * Backround image on pricing.html was supplied by [Victor Freitas](https://unsplash.com/photos/hOuJYX2K5DA)<br>

# Acknowledgements
 * I would like to thank my mentor Daisy McGirr for her guidance, patience and support throughout my project. 
 * I would like  to thank my fellow student Matt Bodden for helping me with some issue encountered with some of my code. 
        