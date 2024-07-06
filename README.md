# Project Title

This project uses Playwright for automating the following scenarios on the DemoBlaze website:

1. Login
2. Order
3. Register
4. Logout

The project follows the Page Object Model (POM) design pattern for organizing the code.

## Project Structure

### Page Objects

Each functionality has a separate page object with all the variables and methods required to perform actions on that page and all of them under folder called pages:

- `login.js`: Contains methods and variables for login functionality.
- `order.js`: Contains methods and variables for ordering functionality.
- `register.js`: Contains methods and variables for registration functionality.
- `logout.js`: Contains methods and variables for logout functionality.

### Test Cases

The main test file `demoblaze.spec.js` includes the following test cases:

1. Login Test Case
2. Order Test Case
3. Register Test Case
4. Logout Test Case

### video of the testcases located under folder called "Video of runnig the testcases"

### Manual Testing Results

You can find the results of the manual testing tasks in the `manual` folder. This folder includes separate subfolders for each point:

- `defects`: Contains identified defects.
- `testcases`: Contains the defined test cases.
- `missing_requirements`: Contains missing requirements identified.
- `test_summary_report`: Contains the test summary report.

### API Testing

The `api` folder contains a file named `Nawy.postman_collection.json` which includes the test cases executed using Postman in JSON format.



1. **Clone the Repository:**
   
   git clone [https://github.com/yourusername/your-repo.git](https://github.com/kalaashehata/demoplazecode.git)
   
