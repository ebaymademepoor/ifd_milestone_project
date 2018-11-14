# MILESTONE PROJECT NAME:  INTERACTIVE FRONTEND DEVELOPMENT - THE MONKEES.COM
## NAME:  GIANCARLO FIORLETTA


## INTRODUCTION:
In this project I have created a frontend website to meet the needs of my clients, The Monkees.
The website should be fun and allow fans the opportunity to enjoy various forms of media to promote the band and remind people of their 
qualities.  In turn this should encourage people to invest in the band in the form of hiring them for gigs or buying new material which
they will be informed about via a mailing list.

## UX

### AIMS:
The main aims of the project are as follows...

1)  To make a website that appeals to fans of the Monkees 
2)  To allow fans to get access to music, video and pictures from the band
3)  To allow users to be contacted and informed of any new music from the band
4)  To enable users to hire the band for events

The website should also be responsive so that it works across all devices and media sizes.  It should be intuitive and easy for the user to use.

USER STORIES:
To understand what fans of the Monkees might be looking for from the band I have created a number of user stories to help guide the content of 
the website.

Story 1:  As a fan of the Monkees, I want to see pictures of the band because I was fond of how they looked in their early career and am interested 
to see how they've changed.

Story 2: As a music lover, I want to hire a famous band so that I can have a memorable anniversary party and impress my friends.

Story 3:  As a fan of the Monkees, I want to listen to some of their music and see their videos because they make me happy.

Story 4:  As a fan of the Monkees, I want to know if the Monkees release any new material as I loved their old tracks.

The above user stories justify the proposed content requested by the band and on the basis of the above it will be important to include a
landing page that highlights all of the content available, a page to host their music, one containing their video supplied, another to showcase their
photos and a method for fans to both sign up to their mailing list and get in touch to request them for hire.  Having access to all of this media 
should help fans relive fond memories and want more of the same, as well as encouraging new fans to want to find out more about this band.

WIREFRAMES:
I have created a number of wireframe sketches (see Monkees UX Wireframes folder) to try to get an idea of what the layout of the landing page might look like, 
both mobile and desktop formats.  The landing page would be broken into multiple sections, a sign up section call out above the navbar, the navbar itself, the 
title header consisting of a picture of the four band members and a welcome statement.  This would be followed by a section to introduce the music available, 
followed by the video and then the pictures.  There would be a section that followed to highlight the bands availability and finally a footer with some 
information about the band and links to their social media.

Having mapped out the landing page, I considered how I might use the media provided on the featured pages and created wireframes for each one of these including the 
music page, pictures page and video page.  As there are 4 music tracks to use, on desktop these will be lined up two by two in the form of records that spin on playback.
The video will be kept simple and will be displayed as a large screen for visitors to playback.  The pictures page will have each picture lined up 3 by 3 with the 
opportunity to view each one individually on selection.

Having viewed these pages via the wireframes, I have decided that on mobile, the content will stack on item per line which seems like a more straight forward method than 
having multiple items on each line via the desktop and therefore I have decided to take a mobile first approach, focusing on the desktop styles once I am happy with 
the positioning of the mobile content.

EXISTING FEATURES:
PAGE 1 - LANDING PAGE (index.html):

The landing page provides access to all of the sites content and introduces both the website and each individual section.  Importantly, a sign up modal has been added to the top of the site
to allow users to provide their details so that they can be contacted with updates.  Please note - this modal cannot submit data as it is not part of this module.  The navbar has been positioned as 'sticky'
both on mobile and desktop to enable users to easily select other content at any time without overly obscuring the content on view.  On mobile a burger icon has been added using bootstrap to 
condense the navbar.

Animation has been used to capture the users attention.  A picture of each member of the band flies and fades in upon loading and a beating heart has been used as the band were seen as heart-throbs 
in their day.  Each icon moves to capture the users glance at the top of each section and the links move to encourage being clicked.  They are also responsive and grow on hover to allow the user to know 
they are there to be clicked.  The picture in the gallery section changes intermittently to display a photo of the band in their hay day and a more recent photo.

The footer has links that change to brand colours when hovered on and redirect you to the social media sites the band is associated with.

PAGE 2 - MUSIC CATALOGUE (listen-now.html):

This page contains 4 music tracks that users can listen to.  Upon hovering over the play button, an animation will activate and the records will spin.  This works particularly well on 
mobile as when the play button is clicked the pointer effectively stays in the box and the record will continue to spin unless the user clicks elsewhere.  On desktop the record will stop spinning 
if the user moves their mouse out of the media box.  This could be improved using javascript but appears difficult to improve via pure css.  However, this does not cause the user any 
particular issues and works as a nice visual feature if not perfectly.

PAGE 3 - VIDEO (video.html):

The video page is simple and follows the design of each of the other pages.  It has a video with an 'ipad' style border around it which when clicks plays the video provided.
This can be enlarged to full screen on all devices where required.

PAGE 4 - GALLERY (gallery.html):
The gallery consists of 12 pictures of the band both past and present.  The user can click on each of these to view them at their original aspect ratio.

HIRE US MODAL

On every page there is a modal which can be accessed from the navbar that allows a user to send some details requesting the band to play at their event.  It is also accessible in the Hire Us section 
of the landing page. Please note - this modal cannot submit data as it is not part of this module.  This is an essential part of the website as it will allow the band to pick up extra revenues directly
from the functionality of the website.

FUTURE FEATURES:
The website already has included everything requested by the band in the spec but it would be easy to add additional content as and when it became available.
In terms of ideas for future additions there could be the potential to add a message board and perhaps a Monkees interactive music based game in the future, should the client be interested in further
heightening interest in their site.

TECHNOLOGIES USED:

1:
NAME - Bootstrap
LINK - https://getbootstrap.com/
REASON - Bootstrap was mainly used for the modal and as a template for the default navbar but both have been amended to suit layout and style. It has also assisted in the structuring of some sections
via the columns and rows classes.

2:
NAME - JQuery
LINK - https://jquery.com/
REASON - Although Javascript is not part of this module, jquery has been used as it is essential to the functionality of the Bootstrap modal.

3:
NAME - Google Fonts
LINK - https://fonts.google.com/
REASON - Used to style the two types of fonts incorporated into the style of the site.

4:  
NAME - Font Awesome
LINK - https://fontawesome.com/
REASON - Font awesome has been used to incorporate its icons onto the site as it has multiple options to ensure that the icon used is relevant to the content it is being used for.

WEBSITE TESTING:

The website has been designed to meet the needs of the users described in the user stories section.  Here is a brief run down of how each has been met - 

Story 1:  As a fan of the Monkees, I want to see pictures of the band because I was fond of how they looked in their early career and am interested 
to see how they've changed.

REQUIREMENT MET - The site has an easily accessable pictures page that can be selected at any time via the navbar.

Story 2: As a music lover, I want to hire a famous band so that I can have a memorable anniversary party and impress my friends.

REQUIREMENT MET - The site has an easily accessible 'hire us' modal that can be selected at any time via the navbar or any the bottom of the landing page.

Story 3:  As a fan of the Monkees, I want to listen to some of their music and see their videos because they make me happy.

REQUIREMENT MET - The site has an easily accessible music page and video page that can be selected at any time via the navbar.

Story 4:  As a fan of the Monkees, I want to know if the Monkees release any new material as I loved their old tracks.

REQUIREMENT MET - The site has a 'sign up' modal that can be selected on the landing page and is visible immediately upon the first visit.

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