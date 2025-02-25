# OSA Management Website
**OSA Management Website** is a web application designed to simplify and streamline the management of clubs and societies within Chitkara University. With features like automated email notifications, centralized club data storage, and a user-friendly interface, the system helps manage and coordinate various activities efficiently.


![Screenshot 2025-01-20 193336](https://github.com/user-attachments/assets/1c9cf37b-8727-4913-a78c-f25bca9e38b4)


### Features
- **Club and Society Management:** Add, update, and delete details of clubs and societies.
- **Member Registration:** Allows students to register for clubs or societies easily.
- **Email Notifications:** Sends automated emails using Nodemailer for confirmations and updates.
- **Centralized Database:** All data is securely stored in MongoDB for easy access and retrieval.
- **Responsive Design:** Works seamlessly across desktops, tablets, and mobile devices.
- **User-Friendly Interface:** Intuitive design for admins and students to navigate the system effortlessly.


![Screenshot 2025-01-21 095616](https://github.com/user-attachments/assets/49d3bb1d-d502-45fc-be10-99adefac185a)


### Technologies Used
- **Frontend:**
  - HTML
  - CSS
  - JavaScript
- **Backend:**
  - Node.js
  - Express.js
  - Body-parser
  - Nodemailer
- **Database:**
  - MongoDB(Atlas)
 

![Screenshot 2025-01-21 095755](https://github.com/user-attachments/assets/2376741f-d0d5-4965-823d-8d6875199dde)


### Installation

To get a local copy up and running follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aarushdhawan11/OSA-Management-System.git
   
2. **Navigate to the project directory:**
   ```bash
   cd OSA-Management-Website
   
3. **Install Dependencies:**
   ```bash
   npm install
   
4. **Set Up Environment Variables:**
   Create a .env file in the backend directory and add the following:
   ```bash
    MONGO_URL=your-mongodb-connection-string
    JWT_SECRET=your-secret-key
    PORT=3000

6. **Run the Frontend:**
   ```bash
   npm start
   
7. **Access the website:**
   Open your browser and navigate to http://localhost:3000

![Screenshot 2025-01-21 095837](https://github.com/user-attachments/assets/d64689a6-73bf-46eb-9d3b-52f2d3ef1cd7)

  
### Usage
- **Home Page:** Provides an overview of the OSA system with options for registration and club management.
- **Club Registration:** Students can register for clubs and societies via an intuitive form.
- **Admin Panel:** Allows authorized users to manage club details and view registrations.
- **Automated Emails:** Sends a confirmation email to students upon successful registration.

### Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request


![Screenshot 2025-01-21 095704](https://github.com/user-attachments/assets/ee73a76c-bac6-4453-840a-a8fd89ea2951)


### License
Distributed under the MIT License. See LICENSE for more information.

### Contact
For any questions or feedback, feel free to reach out at **Email:** aarushdhawan25@gmail.com or **Linkedin:** https://www.linkedin.com/in/aarush-dhawan-2866a8309/

### Acknowledgements
- Chitkara University for the inspiration.
- Nodemailer Documentation
- MongoDB Documentation
- Stack Overflow
