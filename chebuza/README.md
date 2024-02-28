# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

steps to configure local setup
- clone the repo
- get into project folder and run npm install in terminal to install all the dependencies in package.json
- run npm run dev in terminal to host the application in your local

Implemented the following points in project:
- Packaging orders displayed in a list view
- When no filters are applied all orderlines should be displayed.
- “OrderLineID” as the first column(extreme left)
- Items are always sorted in ascending order of “OrderLineID”
- Ensure fast loading of list items for user convenience
- Ability to filter by “Quantity”
- Ensure usability remains smooth even in slow network conditions
- Rich and responsive UI

improvements can be done in future
- can be work more on cosmestic changes (css)
- can be work on unit test cases (due to less time from my side, i am not able to implement)
