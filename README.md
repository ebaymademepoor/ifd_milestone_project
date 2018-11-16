# MILESTONE PROJECT NAME:  INTERACTIVE FRONTEND DEVELOPMENT - TOTALLY RECALLED.COM
## NAME:  GIANCARLO FIORLETTA


## INTRODUCTION:
In this project I have created a frontend website to host my new game which is based on the SIMON memory game.
The game itself needs to be fun and keep the users interest for a few games at least!  It needs to be robust,
unbreakable and give the user different gameplay modes and options.

## UX

### AIMS:
The main aims of the project are as follows...

1)  To allow the user to play a few different game modes for them to enjoy
2)  To give feedback to the user on their performance in the game dependant on how they perform
3)  To use the site as a way of showcasing the music I made for the project using FL Studio
4)  To ensure that I have javascript code that is as fullproof as possible

The website should also be responsive so that it works across all devices and media sizes.  It should be intuitive and easy for the user to use.

### USER STORIES:
To understand why people might choose to use this site and therefore provide direction on its creation, I created a number of user stories as follows...

Story 1:  As a member of the older generation, I want to play a memory game to keep my memory sharp!

Story 2: As a gamer, I want to play a new easy going game to relax.

Story 3:  As a lover of gaming music, I want to play a game that has some ear catching tunes.

Story 4:  As a gaming enthusiast, I want to play a game that tells me how great I am!

A memory game is perfect for the majority of these users.  Memory games have been proven to help keep the memory sharp and are reliably stress and hassle free.  
It will incorporate two game modes to keep it interesting.  'Classic', which will mirror the original SIMON game, and 'Picture', which will allow the user
to see a part of the picture for every square they click correctly.  There will be 12 buttons in this mode and 12 pictures for the user to uncover.  There will be 
a music track for each game mode. There should also be options for the user to experiment with such as game speed and game difficulty.  The game will feature a scoring 
system of sorts and will apply a category to a user dependant on their progress which will then display a message on completion.


### WIREFRAMES:
This will be a Single-Page Application with the game being the only focus.  I have designed it to be very simple and have decided it should be split into 3 sections, the header, the game mode box for selecting
which game to play and the game buttons themselves, which will switch to being the feedback area at the end of each game.  As it is a single page application I would like it to keep the same format on 
all devices and simply scale down to maintain and hold the whole content to the size of the users screen, so what you will see on mobile will be the same as you would see on desktop.  This is a simple
pick up and play on the go game in principle and therefore I have chosen to go with a mobile first approach.  **Please see the Wireframes folder for the design.**

## FEATURES

### EXISTING FEATURES:
#### PAGE 1 - SINGLE PAGE APPLICATION (index.html):

All of the contents of this site will sit within index.html.  As the page loads, a logo that I have designed will appear as it an app was loading on a smartphone to shopw the user who the game is made by.
This logo quickly fades out and displays the main contents of the site.

There is a h1 at the top of the screen which can also be used to redirect to the page, effectively reseting the game.  It spins vertically too, the majority of the boxes have not motion, they just simply
fade in and out in sync with each other, so the animation on the header just provides something interesting and eye catching on the page.  

In the second part of the page is the first sliding box.  At the top of this box are two icons that are utilised as buttons.  When clicked, the first box displays the game settings and allows the user to choose 
the speed and difficulty of the game, as well as whether or not to allow the application to play the sounds or in game music.  The difficulty applies to the classic mode of the game and will set the maximum
number of levels the player needs to complete to win, this is initially set at 6 levels for easy, 10 for normal and 15 for hard (these were chosen after user testing and those numbers felt right).  The second icon will
display the rules of the game when clicked.  Both displays cover the whole screen.

In the center of the first sliding box a welcome message displays and a 'play now' button.  On click, a sound effect plays and changes to the mode selection box.  Here, 'classic' or 'picture' modes can be selected.
If the mode selected is not the same as the game mode ready to be played, the bottom section will change between 4 buttons (classic mode) and 12 (picture mode).  A button will also appear in the first section
for the player to click when ready to start the game.

On start, a series of messages will be displayed before the player can click a game button.  When the 'repeat' mesage is displayed, the player cn then chose the button/s they wish to click.  When the game is over,
a message is displayed in the upper box as well as an option to try either mode again, and a feedback box is displayed in the bottom section to tell the player how they have performed.

### FUTURE FEATURES:

#### Endless game mode:
Another mode that could be incorporated for the classic mode is endless mode where the player keeps playing to clock upo the highest score.  This could then lead to a leaderboard and provide more incentive to return to 
the game.  This would work best of a database was added so that the score could be stored permanently as currently they would be reset everytime the user refreshes the site but this could be incorporated in the future.

#### Picture Game difficulty:
To make the picture game more accessable a difficult level could be set to dictate how many boxes covered the picture.  12 boxes is currently moderately difficult so an 8 and 15 box version could be applied.

#### All out memory game:
If the scoring system was improved and the endless mode was incorporated, the game could be used as an all out memory game and users could be score from E to A+ on their memory abilities with additional feedback on
their performance.  Tips could also be displayed on how to sharpen your memory at each grading which the user may find generally useful and hopefully help them with the game.

## TECHNOLOGIES USED:

1:
NAME - JQuery
LINK - https://jquery.com/
REASON - Jquery has been used as it provides some very useful methods when working with javascript and these have often been utilised throughout my javascript code.

2:
NAME - Google Fonts
LINK - https://fonts.google.com/
REASON - Used to style the two types of fonts incorporated into the style of the site.

3:  
NAME - Font Awesome
LINK - https://fontawesome.com/
REASON - Font awesome has been used to incorporate its icons onto the site as it has multiple options to ensure that the icon used is relevant to the content it is being used for, in this case a cog for the settings box
and a question mark for the instructions box.

4: 
NAME - Howler.JS
LINK - https://howlerjs.com/
REASON - I wanted to incorporate resposive sounds and music into my game.  Having played around with this in vanilla javascript I found there were delays when playing sounds which didn't allow them to sync with the 
things that were happening in the game.  After some research I found howler js and started experimenting.  Not only does this audio library allow sounds to be played when required, it also allows attributes like volume 
to be easily amended and helped these settings to be implemented easily.

5:
NAME - SASS
LINK - https://sass-lang.com/
REASON - Sass has really helped me to organise my css code and has some really useful features such as the way it handles media queries which makes this part of styling much less painfull.  It also helps the site to load 
faster through the use of placeholders which are only used when called upon.

WEBSITE TESTING:

The website has been designed to meet the needs of the users described in the user stories section.  Here is a brief run down of how each has been met - 

Story 1:  

REQUIREMENT MET - 

Story 2: 

REQUIREMENT MET - 

Story 3:  

REQUIREMENT MET - 

Story 4:  

REQUIREMENT MET - 

The functionality of the site is fairly basic and mainly consists of ensuring that the links work to each page, that the modals fire up, and that the animations activate correctly where applicable.
These have all been manually tested page by page as follows:

HOME PAGE...
Test 1 - Sign Up modal clicked - Sign up modal activates and appears - SUCCESS
Test 2 - Monkees Logo is clicked - Logo initially grows and site is redirected to home page. Welcome picture animation activates - SUCCESS
Test 3 - Listen now clicked on navbar - link initially grows and redirects site to Listen Now page - SUCCESS
Test 4 - Video clicked on navbar - link initially grows and redirects site to Video page - SUCCESS
Test 5 - Gallery clicked on navbar - link initially grows and redirects site to Pictures page - SUCCESS
Test 6 - Hire us clicked on navbar - link grows, modal activates and appears - SUCCESS
Test 7 - Circular album cover is clicked in music section - link grows but is interrupted somewhat but shake animation, however does feedback to user on hover, redirects to listen now page - SUCCESS
Test 8 - Band photo is clicked in video section - link grows but is interrupted somewhat but shake animation, however does feedback to user on hover, redirects to video page - SUCCESS
Test 9 - Alternating picture changes in gallery section - link grows on hover, redirects to pictures page - SUCCESS
Test 10 - 'Book Now' button is clicked in Hire Us section - link grows but is interrupted somewhat but shake animation, however does feedback to user on hover, modal activates and appears - SUCCESS
Test 11 - Facebook icon clicked on footer - on hover icon turns blue, redirects to the bands Facebook page (separate tab)
Test 12 - Twitter icon clicked on footer - on hover icon turns blue, redirects to the bands Twitter page (separate tab)
Test 13 - YouTube icon clicked on footer - on hover icon turns red, redirects to the bands YouTube page (separate tab)
Test 14 - (Mobile Only) - Burger Icon appears and when clicked lowers navbar menu and highlights.  Upon second click navbar recedes - SUCCESS

LISTEN NOW PAGE...
Test 1 - Monkees Logo is clicked - Logo initially grows and site is redirected to home page. Welcome picture animation activates - SUCCESS
Test 2 - Listen now clicked on navbar - link initially grows and redirects site to Listen Now page - SUCCESS
Test 3 - Video clicked on navbar - link initially grows and redirects site to Video page - SUCCESS
Test 4 - Gallery clicked on navbar - link initially grows and redirects site to Pictures page - SUCCESS
Test 5 - Hire us clicked on navbar - link grows, modal activates and appears - SUCCESS
Test 6 - Record 1 spins on hover of the audio player.  On click the 1st song plays - SUCCESS
Test 7 - Record 2 spins on hover of the audio player.  On click the 2nd song plays - SUCCESS
Test 8 - Record 3 spins on hover of the audio player.  On click the 3rd song plays - SUCCESS
Test 9 - Record 4 spins on hover of the audio player.  On click the 4th song plays - SUCCESS
Test 10 - Facebook icon clicked on footer - on hover icon turns blue, redirects to the bands Facebook page (separate tab)
Test 11 - Twitter icon clicked on footer - on hover icon turns blue, redirects to the bands Twitter page (separate tab)
Test 12 - YouTube icon clicked on footer - on hover icon turns red, redirects to the bands YouTube page (separate tab)
Test 13 - (Mobile Only) - Burger Icon appears and when clicked lowers navbar menu and highlights.  Upon second click navbar recedes - SUCCESS

VIDEO PAGE...
Test 1 - Monkees Logo is clicked - Logo initially grows and site is redirected to home page. Welcome picture animation activates - SUCCESS
Test 2 - Listen now clicked on navbar - link initially grows and redirects site to Listen Now page - SUCCESS
Test 3 - Video clicked on navbar - link initially grows and redirects site to Video page - SUCCESS
Test 4 - Gallery clicked on navbar - link initially grows and redirects site to Pictures page - SUCCESS
Test 5 - Hire us clicked on navbar - link grows, modal activates and appears - SUCCESS
Test 6 - On click, media player plays the video of the Monkees, fullscreen mode works when clicked - SUCCESS
Test 7 - Facebook icon clicked on footer - on hover icon turns blue, redirects to the bands Facebook page (separate tab)
Test 8 - Twitter icon clicked on footer - on hover icon turns blue, redirects to the bands Twitter page (separate tab)
Test 9 - YouTube icon clicked on footer - on hover icon turns red, redirects to the bands YouTube page (separate tab)
Test 10 - (Mobile Only) - Burger Icon appears and when clicked lowers navbar menu and highlights.  Upon second click navbar recedes - SUCCESS

GALLERY PAGE...
Test 1 - Monkees Logo is clicked - Logo initially grows and site is redirected to home page. Welcome picture animation activates - SUCCESS
Test 2 - Listen now clicked on navbar - link initially grows and redirects site to Listen Now page - SUCCESS
Test 3 - Video clicked on navbar - link initially grows and redirects site to Video page - SUCCESS
Test 4 - Gallery clicked on navbar - link initially grows and redirects site to Pictures page - SUCCESS
Test 5 - Hire us clicked on navbar - link grows, modal activates and appears - SUCCESS
Test 6 - Each individual picture grows larger on hover - SUCCESS
Test 7 - Each individual picture is opened on a separate tab in its original resolution when clicked on - SUCCESS
Test 8 - Facebook icon clicked on footer - on hover icon turns blue, redirects to the bands Facebook page (separate tab)
Test 9 - Twitter icon clicked on footer - on hover icon turns blue, redirects to the bands Twitter page (separate tab)
Test 10 - YouTube icon clicked on footer - on hover icon turns red, redirects to the bands YouTube page (separate tab)
Test 11 - (Mobile Only) - Burger Icon appears and when clicked lowers navbar menu and highlights.  Upon second click navbar recedes - SUCCESS

DEVICES:

The website has been designed to effectively stack all content one item per row on mobile devices but to group rows together when using larger screens such as ipads and laptops.

Using Google Chromes toggle device toolbar, I have extensively viewed each page on each of the following devices to ensure that the website looks as it was intended at each media size.  I have also 
tested the website on some live devices through the github published github pages link.  The following table signifies which tests have been carried out on each device and the status of each based on 
how the site looks visually:

DEVICE NAME         VIRTUAL/DEVICE TESTED           PAGE VISITED            STATUS
iPhone 5            Virtual(chrome)                 Home Page               Renders as intended
iPhone 5            Virtual(chrome)                 Listen Now Page         Renders as intended
iPhone 5            Virtual(chrome)                 Video Page              Renders as intended
iPhone 5            Virtual(chrome)                 Gallery Page            Renders as intended
iPhone 5            Virtual(chrome)                 Modals                  Render as intended
iPhone 6/7/8        Virtual(chrome)                 Home Page               Renders as intended
iPhone 6/7/8        Virtual(chrome)                 Listen Now Page         Renders as intended
iPhone 6/7/8        Virtual(chrome)                 Video Page              Renders as intended
iPhone 6/7/8        Virtual(chrome)                 Gallery Page            Renders as intended
iPhone 6/7/8        Virtual(chrome)                 Modals                  Render as intended
iPhone 6/7/8 Plus   Virtual(chrome)                 Home Page               Renders as intended
iPhone 6/7/8 Plus   Virtual(chrome)                 Listen Now Page         Renders as intended
iPhone 6/7/8 Plus   Virtual(chrome)                 Video Page              Renders as intended
iPhone 6/7/8 Plus   Virtual(chrome)                 Gallery Page            Renders as intended
iPhone 6/7/8 Plus   Virtual(chrome)                 Modals                  Render as intended
iPhone X            Virtual(chrome)                 Home Page               Renders as intended
iPhone X            Virtual(chrome)                 Listen Now Page         Renders as intended
iPhone X            Virtual(chrome)                 Video Page              Renders as intended
iPhone X            Virtual(chrome)                 Gallery Page            Renders as intended
iPhone X            Virtual(chrome)                 Modals                  Render as intended
Galaxy S5           Virtual(chrome)                 Home Page               Renders as intended
Galaxy S5           Virtual(chrome)                 Listen Now Page         Renders as intended
Galaxy S5           Virtual(chrome)                 Video Page              Renders as intended
Galaxy S5           Virtual(chrome)                 Gallery Page            Renders as intended
Galaxy S5           Virtual(chrome)                 Modals                  Render as intended
Galaxy S7 Edge      Actual device                   Home Page               Renders as intended
Galaxy S7 Edge      Actual device                   Listen Now Page         Renders as intended
Galaxy S7 Edge      Actual device                   Video Page              Renders as intended
Galaxy S7 Edge      Actual device                   Gallery Page            Renders as intended
Galaxy S7 Edge      Actual device                   Modals                  Render as intended
Pixel 2             Virtual(chrome)                 Home Page               Renders as intended
Pixel 2             Virtual(chrome)                 Listen Now Page         Renders as intended
Pixel 2             Virtual(chrome)                 Video Page              Renders as intended
Pixel 2             Virtual(chrome)                 Gallery Page            Renders as intended
Pixel 2             Virtual(chrome)                 Modals                  Render as intended
Pixel 2 XL          Virtual(chrome)                 Home Page               Renders as intended
Pixel 2 XL          Virtual(chrome)                 Listen Now Page         Renders as intended
Pixel 2 XL          Virtual(chrome)                 Video Page              Renders as intended
Pixel 2 XL          Virtual(chrome)                 Gallery Page            Renders as intended
Pixel 2 XL          Virtual(chrome)                 Modals                  Render as intended
iPhone X            Virtual(chrome)                 Home Page               Renders as intended
iPhone X            Virtual(chrome)                 Listen Now Page         Renders as intended
iPhone X            Virtual(chrome)                 Video Page              Renders as intended
iPhone X            Virtual(chrome)                 Gallery Page            Renders as intended
iPhone X            Virtual(chrome)                 Modals                  Render as intended
iPad                Actual device                   Home Page               Renders as intended
iPad                Actual device                   Listen Now Page         Renders as intended
iPad                Actual device                   Video Page              Renders as intended
iPad                Actual device                   Gallery Page            Renders as intended
iPad                Actual device                   Modals                  Render as intended
iPad Pro            Virtual(chrome)                 Home Page               Renders as intended
iPad Pro            Virtual(chrome)                 Listen Now Page         Renders as intended
iPad Pro            Virtual(chrome)                 Video Page              Renders as intended
iPad Pro            Virtual(chrome)                 Gallery Page            Renders as intended
iPad Pro            Virtual(chrome)                 Modals                  Render as intended
Laptop (15.4 inch)  Actual device                   Home Page               Renders as intended
Laptop (15.4 inch)  Actual device                   Listen Now Page         Renders as intended
Laptop (15.4 inch)  Actual device                   Video Page              Renders as intended
Laptop (15.4 inch)  Actual device                   Gallery Page            Renders as intended
Laptop (15.4 inch)  Actual device                   Modals                  Render as intended
Desktop (24 inch)   Actual device                   Home Page               Renders as intended
Desktop (24 inch)   Actual device                   Listen Now Page         Renders as intended
Desktop (24 inch)   Actual device                   Video Page              Renders as intended
Desktop (24 inch)   Actual device                   Gallery Page            Renders as intended
Desktop (24 inch)   Actual device                   Modals                  Render as intended

The wide range of devices test showed no visual concerns and should prove a good platform to ensure that it displays well on all devices.

Please note - When running the website directly from Cloud9 via the RUN button link, the resolution appears to be much higher than intended making all aspects of the page appear smaller than intended.  
This issue does not happen via the preview option or when the pages are viewed where they are hosted via github which leads me to the conclusion that the issue is restricted to when developing only
and should not repeat for a user.

DEPLOYMENT:

My code has simply been deployed via github pages at the following link - https://ebaymademepoor.github.io/ucfd_milestone_project/

It can also be run via preview in the Cloud9 IDE.

All commits have been made to the same master git branch.  No additional configuration files are required.

CREDITS:

Content - 
1)  The about us text was copied from the following Wikipedia link - https://en.wikipedia.org/wiki/The_Monkees

Media - 
1) The photos for the spinning records were obtained from the following link - http://colgems.blogspot.com/2010/08/this-month_06.html
2) A number of the photos, all of the music tracks and the video for this project were provided by Code Institute and accessed via the following link - https://github.com/Code-Institute-Org/project-assets
3) A number of photos were taken from Google images (before I knew that credits should be listed) and unfortunately the credits cannot be provided individually.

Acknowledgements - 
1) No specific inspiration was taken to create this website

AREAS FOR IMPROVEMENT:

1) The wireframe models could have been created digitally instead of by hand to give them a more professional look and feel.  I did try a free program called Pencil but found this difficult to 
get across some of the ideas I had and opted to sketch by hand.  In the future, investing in a paid application would be better when affordable.

2)  Every effort has been made to use clean semantic code and also to keep the code DRY.  There are areas where it may have been possible to use some generic classes to avoid repetition, and 
this project has helped me to understand that and be more aware when coding my next assignment.

3)  Although it has a few nice touches, the design of the website feels a little plain.  This was partly due to the site being my first project and wanting to keep it basic, but going forward 
the design could definately be improved to make it more eye catching to users.

4)  Although I have used the readme template example at the following link - https://github.com/Code-Institute-Solutions/readme-template/blob/master/README.md, I am still uncertain as to whether
the quality of this readme file meets expectations.  I will be happy to use any feedback I get from this project to influence any future readme files!

Thank you for reviewing my website!  I hope you liked it as much as I did creating it!  :)