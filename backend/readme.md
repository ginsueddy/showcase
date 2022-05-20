# INFO 441 Final Project - Itinerary Planner

__Authors:__ Jason Jung, [Arjun Srivastava](https://github.com/a-r-j-u-n-s), Tony Choi, Ginsu Eddy

# Website
Frontend - React.js (Heroku)

Backend - Node.js (Heroku)

# Project Description

## Problem Statement

How might young adults discover new forms of entertainment so that they can have fun while supporting indie creators/vendors and transition into normalcy after the pandemic?

## Background

With the pandemic lasting nearly two years, previously popular forms of digital entertainment like online games, Zoom calls, and Netflix watch parties have grown stale. As vaccination rates increase, people eagerly seek new ways to have fun with their friends in person while still being COVID-conscious. However, vaccines led to a rapid return to in-person, large-scale activities like concerts, clubs, and sporting events, many of which can be unsafe with the emergence of new COVID strains. Additionally, as the line blurs between COVID-safe habits and pre-pandemic lifestyles, more and more people struggle to readjust and adapt to a “normal” social life. Young people especially are ready to return to living life together. Although our target audience is directed towards young adults between the age of 20-25, we envision our platform being used by multiple demographics (older & younger populations) as we scale our project.

## Purpose

As college students and developers, we had to embrace the negative social effects of COVID-19 for the past two years. Now that we are returning to “normalcy”, we wanted to provide a convenient solution to the inevitable, awkward social transition. By providing a platform that creates a curated itinerary to explore Seattle, we hope to supplement users with an avenue to smoothly socialize with friends and beat the Seattle Freeze.


# Technical Description

## Architecture and Action Diagram

![architecture diagram](diagrams/architecture.jpg)


## User Stories

| Priority | User                | Description                                                                                                       | Technical Implementation                                                                                                                                                                                |
|----------|---------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| P0       | As a User           | I want to be able to plan new activities my friends and I could do on a Friday night.                             | Maintain a database of events that we can use to recommend activities to users                                                                                                                          |
| P0       | As a user           | I want the ability to save multiple itineraries so I can keep track of different plans                            | Allow users to generate as many itineraries as they want by keeping the quiz open                                                                                                                       |
| P0       | As a user           | I want to be able to remove itineraries from my account after I’ve used them or if I no longer want them          | Allow users to remove itineraries from their profile page by assigning them to divs with a unique ID based on the ID of the itinerary (to avoid deleting multiple itineraries at once)                  |
| P0       | As a user           | I want to easily find activities and events that align with my interests                                          | Have users take a quiz/survey with preferences and send them a customized itinerary based on their answers                                                                                              |
| P1       | As a business owner | I want my business to be found by young people looking to have fun on the weekends                                | Allow business owners to boost their activity or establishment to increase foot traffic by doing promotions exclusive to our app.                                                                       |
| P1       | As a business       | I want my business to be able to work with other businesses in the same industry for combo itinerary activities.  | Create a database where we match businesses with the same background. Businesses can talk with each other so they can create a combo deal where if you went to x before you get one item free and etc.  |
| P2       | As a Provider       | I want to be the database that helps the app organize its data                                                    | We will be the service the app uses to create the app and its databases, we are MongoDB and will help create models that organize each activity into their respective category.                         |
| P2       | As a new business   | I want to be included in the new app seeing how other businesses are getting success off of it                    | We will look to get integrated into the app database by contacting the creators of the app so we could be added to the database and also be added onto people’s itiniarys.                              |


## API Endpoints

### Authentication
- /signin
  - Handle user authentication through Azure
  - If account does not exist in database, prompt user to enter first time login information
- /signout
  - Destroy the users current session and sign them out
- /error
  - Handle login/signup errors
- /unauthorized
  - Deny access to saving an itinerary and other features if not logged in

### Users : /users/
- GET
  - /
    - Gets display information for currently logged in user
  - /{id}
    - Get display information of user {id}

- POST
    - /update
        - updates logged users preferred displayname/itineraries
- DELETE
    - /
        - Deletes currently logged in user and their itineraries from database

### Itineraries : /itineraries/

- GET:
    - /
        - Get logged in user’s itineraries
    - /{id}
        - Get specific itinerary if it belongs to logged in user
- POST:
    - /{id}
        - Post new itinerary to database with reference to logged in user
- DELETE
    - /{id}
        - Delete itinerary from currently logged in users account with given ID


## Database Schemas

We will be hosting all of our data on MongoDB Atlas (NoSQL)

### User
Represents a single user

- ___id__: Key
- __username__: String
- __name__: String
- __last_updated__: Date
- __birth_date__: Date


### Preference Quiz
Users take this quiz to help specify what they are looking for in their itinerary

- __username__: String
- __Questions__: Object
  - __q_0__: String
  - __q_1__: String
  - __q_2__: String
  - __q_3__: String
  - __q_4__: String
- __Responses__: Object
  - __r_0__: String
  - __r_1__: String
  - __r_2__: String
  - __r_3__: String
  - __r_4__: String

### Event
Events represent individual activities on an itinerary

- ___id__: String
- __name__: String
- __address__: String
- __city__: String
- __state__: String
- __zip__: String
- __neighborhood__: String
- __categories__: [String]
- __price__: Number
- __business_img_url__: String
- __phone__: String
- __hours_of_operation__: String

### Itinerary
A plan involving multiple events

- ___id__: Key
- __username__: String
- __created_date__: Date
- __Event_0__: Event
- __Event_1__: Event
- __Event_2__: Event