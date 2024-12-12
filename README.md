# React Review App

This is a React app that allows users to generate brief reviews for a store based on keywords and a rating. It uses OpenAI's GPT-3.5 model to generate the reviews.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/react-review-app.git
    ```

2. **Navigate into the project directory**:

    ```bash
    cd react-review-app
    ```

3. **Install dependencies**:

    Run the following command to install the required dependencies:

    ```bash
    npm install
    ```

4. **Set up the `.env` file**:

    In the root of the project, create a `.env` file to store your OpenAI API key. You can create this file manually or use the following command to create it:

    ```bash
    touch .env
    ```

    Then, add your OpenAI API key to the `.env` file with the following format:

    ```
    VITE_OPENAI_API_KEY=your-api-key-here
    ```

    Replace `your-api-key-here` with your actual OpenAI API key.

5. **Start the development server**:

    Run the following command to start the React development server:

    ```bash
    npm run dev
    ```


## Usage

- Enter the keywords related to the store you want to review.
- Select a rating (1 to 5 stars).
- Click the **Submit** button to generate a brief review.
- The generated review will appear below the form.

## Environment Variables

Your OpenAI API key should be stored as an environment variable in the `.env` file. This is how the app interacts with OpenAI's GPT-3.5 model.

- `VITE_OPENAI_API_KEY`: Your OpenAI API key (as a string).

