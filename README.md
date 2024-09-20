## How to Run the Project Locally

To run this project locally, follow these steps:

1. **Navigate to the Project Directory**:
   ```bash
   cd surface-workflow-project
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the Database**: If you're running into issues with `start-database.sh`, open the script for additional instructions for running it on Windows.
   ```bash
   ./start-database.sh 
   ```
   - Say `yes` for the random password.

4. **Push the Database Schema**:
   ```bash
   pnpm db:push
   ```

5. **Run the Development Server**:
   ```bash
   pnpm dev
   ```

6. **Test the Functionality**: You can test the functionality at `/demo/index.html`.