# Project Title
BusyToddlerMum

## Overview
The BusyToddlerMum app aims to assist super busy moms in delivering nutritious food to their babies. It provides a convenient solution for managing baby feeding schedules, meal planning, and nutritional information.



### Problem

Super busy moms often struggle to find time to prepare and deliver nutritious meals to their toddlers. Ensuring that toddlers receive balanced and healthy meals is crucial for their growth and development. Juggling work, household chores, and parenting leaves little time for meal planning and preparation.

### User Profile
Super Busy Moms: Moms with hectic schedules who need assistance in managing their toddlers’ meals. Additionally, any child caregiver who cares about providing nutritious meals for the welfare of their child will find this application useful.

### Features

Customized Meal Planning: Moms can create weekly meal plans, considering their toddlers’ preferences and nutritional needs.
Nutritional Insights: The app provides information on essential nutrients and age-appropriate foods, utilizing AI to suggest meal types and combinations based on dietary requirements, allergens, and available ingredients.
Shopping Requirements/Pantry Organizer: Users can track their pantry inventory and generate shopping lists based on meal plans and current pantry stock.

## Implementation

### Tech Stack

Frontend: React.js
Backend: Node.js with Express
Database: MySQL
Deployment: Terraform, AWS (S3, Route 53, and Cloudfront)

### APIs

Nutrition API: Integrating with Spoonacular or similar services for nutritional data.
Pantry API: Potential integration with Instacart or similar services for shopping 

### Sitemap

Home: Overview and login
Meal Planner: Create and manage meal plans
Pantry Restock: Manage pantry inventory and generate shopping lists
Favorites: Save favorite recipes
Profile: User settings and preferences
### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

The application will store data related to user profiles, meal plans, pantry inventory, and favorite recipes. These will be relational in nature, with connections between users and their respective data sets.

### Endpoints

//api/meal-plans:
GET: Retrieve meal plans
POST: Create new meal plans
PUT: Update existing meal plans
/api/user-profile:
GET: Retrieve user profile information
PUT: Update user profile settings

### Auth

The authentication mechanism for the application is yet to be decided. Options include traditional username/password authentication, social media login integration, or JWT-based authentication.

## Roadmap

Sprint 1
Set up basic project structure (frontend and backend)
Create database schema
Implement basic CRUD operations for user profiles and meal plans

Sprint 2
Integrate nutrition API for providing meal suggestions and nutritional insights
Develop frontend components for meal planning and pantry organization

Sprint 3
Implement shopping requirement feature, integrating with external shopping APIs if necessary
Add user authentication functionality

Sprint 4
Finalize UI/UX design and polish frontend components
Conduct thorough testing and bug fixing

Sprint 5 (Nice-to-haves)
Implement additional features such as user authentication, integration with Instacart for shopping, and any other desired enhancements.

## Nice-to-haves

Authentication: Implement robust user authentication mechanisms to ensure data security.
Integration with External Services: Integrate with Instacart or similar services for seamless shopping experience.
Enhanced Meal Planning Features: Implement features like recipe suggestions, meal prep tips, and nutritional tracking for advanced meal planning capabilities.

