# Angular base project created with v18

This project acts as base project for all v18 Angular projects. It contains all the necessary dependencies and
configurations to start a new project.

1. Esbuild (vite)
2. Standalone components
3. Signals
4. Prettier
5. Eslint
6. Jest (unit testing)
7. Playwright (e2e testing)

By default, new component or directive generates standalone version with inline template and styles. And tests are skipped.

## Setup
1. Clone the repository and run below command to install all the dependencies.
  ```shell
  npm i
  ```
2. Run script and enter the desired project name
  ````shell
  bash setup.sh
  ````
3. Run `npm run start` to start the development server and navigate to `http://localhost:4200`
4. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
