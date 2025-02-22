# **Text-to-Speech Integration**
![Telex-Text-To-Speech](https://i.ibb.co/mrzP66gj/Text-to-speech.png)
This project converts text messages into audio files and provides a link to the audio. It is designed to make content accessible to visually impaired users or those who prefer audio over text.

## **Features**

- Generates audio files in common formats like MP3 or WAV.
- Makes content accessible to visually impaired users or those who prefer audio over text.
- Enables users to listen to messages while performing other tasks.

## **Technologies**

- **Backend**: Node.js, Express.js
- **AWS Services**: Amazon Polly (for AI voice generator)
- **Libraries**:
  - `@aws-sdk/client-comprehend`: AWS SDK for interacting with Amazon Polly.
  - `dotenv`: For managing environment variables.
  - `cors`: For enabling Cross-Origin Resource Sharing (CORS).
  - `express-rate-limit`: For rate limiting API requests.
- **Testing**: Axios (for API testing), Postman

---

## **Setup**

### **Prerequisites**

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [AWS Account](https://aws.amazon.com/) (for Amazon Polly)
- [Telex Account](https://telex.im/) (for testing the integration)


## **Installation**

## **Clone the repository**:

```sh
git clone https://github.com/akinwalexander/text-to-speech-integration.git
```
## **Navigate to the project directory**:
```sh
cd text-to-speech-integration
```
## **Install dependacies**:
```sh
npm install
```
## **Create a `.env` file in the root directory and add your environment variables**:
```.env
AWS_ACCESS_KEY=your-access-key-id
AWS_SECRET_KEY=your-secret-access-key
AWS_REGION=your-region
S3_BUCKET=your-bucket-name
PORT=5000
```
##  **USAGE**
   1. **start the server**:
      ```sh
      npm start
      ```
   2. **The server will be running on `http://localhost:3000.`**
##  **API Endpoints**
  ## `GET /`
  * Description: Returns a simple "Telex Api is running" message.
  * Response: `200 OK`
  ### `POST /text-to-speech`
  * Description: Converts text to speech and uploads the audio file to S3.
  * Request Body:
    ```sh
    {
    "text": "Your text message here"
      }
    ```
  * Response: `200 OK`
    ```sh
    {
    "audioUrl": "https://your-bucket-name.s3.amazonaws.com/audio/message_timestamp.mp3"
    }
    ```
  * Error Responses:
      * 400 Bad Request: If the text field is missing.
      * 500 Internal Server Error: If there is an error generating or uploading the audio.
## **Testing**
   1. Install `Jest`
  ```sh
        npm install --save-dev jest
  ```
  2. Run the test
     ```sh
       npm test
     ```
## **Deployment**
  To deploy the integration, follow these steps:
  
  1. **Build the Project**:
     ```sh
     npm run build
     ```
  
  2. **Deploy to a Server**:
     - Use a platform like [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/), [Render](https://www.render.com), [Heroku](https://www.heroku.com/), or [Vercel](https://vercel.com/).
  
  3. **Set Environment Variables**:
     - Ensure the `.env` variables are set in your deployment environment.
  
  ---
## **Contributing**
  Contributions are welcome! Follow these steps:

  1. Fork the repository.
  2. Create a new branch:
     ```bash
     git checkout -b feature/your-feature-name
     ```
  3. Commit your changes:
     ```bash
     git commit -m "Add your feature"
     ```
  4. Push to the branch:
     ```bash
     git push origin feature/your-feature-name
     ```
  5. Open a pull request.
  
  ---

## **License**

  This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
  
  ---

## Acknowledgments

- [Amazon Comprehend](https://aws.amazon.com/polly/) for AI voice generator.
- [Telex](https://telex.im/) for the integration framework.

---
## Author
Akinlami Akinwale a.k.a JEDA
