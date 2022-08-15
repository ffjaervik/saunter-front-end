# Saunter - The Solo Travelling App

Hello, we're Team Saunter. We created this app as our School of Code final four week project (https://www.schoolofcode.co.uk/) (Bootcamp 12, 25 April - 16th August 2022).
<br/>
<br/>
# List of Contents
1. Meet The Team
2. The Problem
3. The Solution
4. How Our App Works
5. Features
6. Tech Stack
7. Getting Started
8. Running Tests
9. Appendix

# Meet the Team
- Anastasia Starostina
- Emily Vickery
- Fabian Deckmann Fjaervik
- Mogool Maya Abas Bafo
- Owen Ahmed
- Sadie Goddard

# The Problem
As a team with mixed experiences of travelling alone, we found that current travelling apps are often not tailored to solo travellers. These apps often focus on mainstream attractions rather than smaller, independent businesses, and user personalisation is often limited. Other apps utilise wish list systems, but do not allow the user to save iteneraries or create personalised day plans. Creating iteneraries can be stressful for those travelling alone and can impact negatively on their travelling experience.

# Our Solution
We decided to create a app to enable solo travellers to create saved day plans from a selection of attractions, from larger landmarks to smaller businesses. We endeavoured to make this app as streamlined and easy to navigate as possible for the user to minimise the friction of solo travelling.

We have implemented a filtration system that allows users to narrow down their activity options. These filters include those not commonly seen on other travelling apps such as energy level (low, medium and high) and whether the location is dog friendly, whilst still remaining simple for the user to navigate 

# How Our App Works
Our app opens with a boldly styled home screen, with options to log in and to click through to our Get-Started page. From here, the user can filter the kinds of activities they wish to see, and be sent to a new page to view a personalised selection of activities on a carousel, pulled from our database. They have the option to change their filters, favourite activities for later or to add activities to their final day plan. Once all chosen activities have been selected, the user will be redirected to their own personalised and unique day plan, complete with descriptions of each activity and links to view on Google Maps. 

Day plans can be created with or without logging in, but if the user chooses to log in, they are also able to access a user page containing favourited activities and previously saved day plans. 

# Features
- Login and Authorisation through Auth0
- Filtration System to Personalise Activity Results 
- Interactive Carousel to View Results
- Plus Icon to Add Chosen Activities
- Heart Icon to Favourite Activities
- Links to Google Maps for Activities
- Personalised Day Plan with Activity Descriptions and Links to Google Maps
- Option to Save and Name Day Plan on a Pop Out Screen
- User Page to View Favourited Activities and Previously Saved Day Plans (When Logged In) 
- All Activity Options Stored in Database 
- Saved Day Plans Stored in Database
- Bold Neobrutalist Inspired Styling Throughout

# Tech Stack
- Client: Next.js, CSS, Auth0, Chakra Component Library, React Icons, Babel, ES Lint, Vercel
- Server: Node.js, PostgreSQL, Axios, Heroku, Postman, Express
- Client-Side Testing: Jest, React Testing Library, Cypress
- Server-Side Testing: SuperTest

# Getting Started

## Front-End

View our deployed front-end here: https://final-project-front-end-team-saunter.vercel.app/

To run the front-end locally follow the steps below:

- Git clone the front-end repository by pasting the following into your terminal:

```bash
  git clone https://github.com/SchoolOfCode/final-project_front-end-team-saunter.git
```

- Install all required dependencies by running:

```bash
  npm i
```

- Start the app using the following:

```bash
  npm run dev
```

## Back-End

The back-end is deployed on Heroku, however if you would like to run locally you will need to follow the steps below:

- Git clone the back-end repository by pasting the following into your terminal:

```bash
  git clone https://github.com/SchoolOfCode/final-project_back-end-team-saunter.git
```

- Install all required dependencies by running:

```bash
  npm i
```

- To run the server locally use the following script within your terminal:

```bash
  npm run dev
```

# Running Tests
To run front-end testing, ensure you have installed dependencies using npm i (see above) and then run the following:

```bash
  npm run test
```

# Appendix
Please find resources below for further guidance:
- Next.js - https://nextjs.org/docs/getting-started
- Auth0 - https://auth0.com/docs/
- Chakra Component Library - https://chakra-ui.com/getting-started
- React Icons - https://react-icons.github.io/react-icons/ 
- Vercel - https://vercel.com/docs 
- Node.js - https://nodejs.org/en/docs/
- PostgreSQL - https://www.postgresql.org/docs/
- Heroku - https://devcenter.heroku.com/
- Postman - https://learning.postman.com/docs/getting-started/introduction/
- Express - https://expressjs.com/en/resources/glossary.html
- Jest - https://jestjs.io/docs/getting-started
- React Testing Library - https://testing-library.com/docs/react-testing-library/intro/
- Cypress - https://docs.cypress.io/guides/overview/why-cypress
- SuperTest - https://docs.npmjs.com/getting-started
