
# Contacts Management Application

This is a full-stack Contacts Management Application developed using Angular 17 for the frontend and .NET Core 8 for the backend. The application allows users to perform CRUD operations on contact information stored in a mock JSON file.

## Setup Instructions

### Prerequisites

1. **Install Node.js** (v14+): [Download Node.js](https://nodejs.org/)
2. **Install Angular CLI** (latest version compatible with Angular 13+):
   bash
   npm install -g @angular/cli
   
3. **Install .NET Core SDK** (version 6+): [Download .NET Core SDK](https://dotnet.microsoft.com/download/dotnet)
4. **Install Bootstrap** (via npm for Angular frontend):
   bash
   npm install bootstrap

### Setting up the Backend (API)

1. Navigate to the `backend` folder.
2. Run the following command to restore the dependencies:
   bash
   dotnet restore
   
3. Run the backend API:
   bash
   dotnet run
   
   The API will be available at `http://localhost:5249` by default.

### Setting up the Frontend (Angular)

1. Navigate to the `frontend` folder.
2. Install the required dependencies:
   bash
   npm install
   
3. Run the Angular development server:
   bash
   ng serve
   
   The frontend will be available at `http://localhost:4200`.

## How to Run the Application

- Start the backend API.
- Start the frontend application (`ng serve` in the `frontend` directory).
- Open your browser and navigate to `http://localhost:4200` to use the application.

## Application Structure

### Frontend (Angular)

- **src/app/services/contact.service.ts**: Provides API interaction functions for performing CRUD operations on contacts.
- **src/app/models/contact.model.ts**: Defines the structure of a contact object with fields like `id`, `firstName`, `lastName`, and `email`.
- **src/app/app.module.ts**: Main Angular module where all components, services, and other necessary modules are imported.

### Backend (.NET Core)

- **Controllers/ContactController.cs**: Contains the API endpoints for performing CRUD operations on contacts.
- **Models/Contact.cs**: Defines the contact data model used for both the API and frontend.
- **Startup.cs**: Configures services, middleware, and error handling.

## Design Decisions

- **Frontend (Angular)**: 
  - **Reactive Forms**: Implemented for form handling due to their flexibility and ease of validation.
  - **Component Communication**: Used `@Input()` and `@Output()` decorators for interaction between components, ensuring a clean separation of concerns and reusability of components.
  - **State Management**: Utilized RxJS for state management to handle asynchronous data flows and manage state effectively.
  - **Bootstrap for Styling**: Chose Bootstrap for consistent styling and responsive design with minimal setup.

- **Backend (.NET Core)**:
  - **Mock JSON Database**: For simplicity, the application uses a local JSON file as a mock database. This can be replaced with a more robust database system (e.g., SQL Server) as the application scales.
  - **Error Handling**: Implemented global error handling to capture unexpected issues and return meaningful error messages to the frontend.
  - **API Design**: RESTful design patterns have been followed for clarity and ease of use. Each contact-related operation is mapped to a distinct HTTP verb (GET, POST, PUT, DELETE).

## Functional Requirements

- **CRUD Operations**: Create, Read, Update, and Delete contacts via the API.
- **Validation**:
  - Ensure that IDs are unique.
  - Validate email format.
  - First and Last names are required fields.
- **Data Model**:
  - **Id**: Auto-incrementing integer.
  - **FirstName**: String, required.
  - **LastName**: String, required.
  - **Email**: String, required, must be a valid email format.

## Performance Considerations

- **Scalability**: The application uses a mock JSON file for storage, which works well for small datasets. However, for large numbers of contacts, the application can be scaled by integrating a proper database system like SQL Server or PostgreSQL. The backend is built in a way that it can be easily extended to connect to a real database.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
