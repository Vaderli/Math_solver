# Math Solver Quiz Application

## Project Description

**Math Solver** is a React-based web application designed to generate and manage interactive mathematical quizzes.

The application allows users to solve dynamically generated math problems under time constraints while tracking performance and results.

The project demonstrates modern React development practices including:

- Redux Toolkit state management
- Custom hooks separation
- Feature-based architecture
- Modular structure
- State persistence
- Storybook component documentation
- JSDoc generated documentation
- GDPR-compliant cookie consent implementation

The application runs entirely on the client side and stores user progress locally in the browser.

---

## Author

**Vadym Lishchynskyi**  
Zhytomyr Polytechnic State University  

---

## Main Functionality

The application provides the following features:

- Dynamic math quiz generation
- Configurable difficulty and test settings
- Countdown timer with automatic test completion
- Real-time score calculation
- Result tracking using Redux Toolkit
- Persistent state using localStorage
- Settings management
- Modular and scalable architecture
- Storybook component documentation
- JSDoc generated technical documentation
- GDPR-compliant cookie consent popup

---

## Project Structure

The project follows a feature-based and modular architecture:

- `src/store/` — Redux Toolkit store main file
- `src/features/` - Redux Toolkit slices
- `src/hooks/` — custom hooks
- `src/utils/` — helpers / utilities
- `src/components/` — UI-components
- `src/pages/` — pages/screens

---

## Installation and Setup

### Requirements

- Node.js (v16 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/Vaderli/Math_solver.git
cd mathsolver
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---


### Storybook

Storybook is used to document and isolate UI components.

Two components are documented:

- TimerComponent

- SettingsForm

Each component includes:

- Configurable props

- 2–3 variations (stories)

- Isolated UI rendering

### Run StoryBook

```bash
npm run storybook
```

Storybook ensures UI consistency and component reusability.

---

### JSDoc

JSDoc is used for automatic technical documentation generation.

Documented modules include:

- useQuiz.js
- useTimer.js
- useSettings.js
- testGenerate.js

### Generate documentation

```bash
npx jsdoc -c jsdoc.json
```

Generated documentation will be available in:

`/docs`

JSDoc improves maintainability and technical transparency of the project.

### Privacy Policy

This application does not collect or process personal data.

#### Data Storage

The application stores:

- Quiz results
- Test settings
- Timer state

All data is stored locally in the browser using localStorage.

No data is:

- Sent to external servers
- Shared with third parties
- Used for analytics or tracking

#### Cookies

A cookie consent popup is implemented to comply with GDPR requirements.

Users may:

- Accept or decline cookies
- Clear stored data at any time by clearing browser storage

### License

This project is licensed under the `Apache License`.

The full license text is available in the `LICENSE` file.

Third-party dependencies were verified using `license-checker`, and the generated report is included in the root directory as:

`license-report.txt`

---


### Best practices

---

### 1) Using Redux Toolkit (RTK) instead of “plain Redux”

- Less boilerplate code
- `configureStore` with out-of-the-box settings
- Built-in DevTools and redux-thunk
- Immer allows you write “mutations” in reducers without actual mutations
- All in one package

- [`src/store/store.js`](./src/store/store.js) - main file RTK
- [`src/features/`](./src/features/) - feature structure for grouping Redux logic

---

### 2) Moving logic into custom hooks

Moving logic from components (timers, data manipulation, queries) to custom hooks
- the component becomes simpler and more readable;
- the component is responsible for the UI;
- the logic can be reused;
- it is easier to test and maintain.

[`src/hooks/`](./src/hooks/) - directory with custom hooks
- Custom hook for timer [`src/hooks/useTimer.js`](./src/hooks/useTimer.js)
- Timer component (using timer hook) [`src/components/TimerComponent/TimerComponent.jsx`](./src/components/TimerComponent/TimerComponent.jsx)
- A separate hook for regulating and controlling the test [`src/hooks/useQuiz.js`](./src/hooks/useQuiz.js)
- Using the useQuiz hook directly for a component [`src/pages/TestPage/`](./src/pages/TestPage/TestPage.jsx)
- Custom hook for working with localStorage [`src/hooks/useLocalStorage.js`](./src/hooks/useLocalStorage.js)
- Hook for recording and updating settings [`src/hooks/useSetting.js`](./src/hooks/useSettings.js) 

---

### 3) Dividing state into logical groups

Instead of one big state “for everything”, it is better to keep **separate useState** (or separate slices in RTK) for different logical parts
- Gameplay `score`, `total`
- Settings `settings`
- Questions `question`, `testKey`
- UI states `showModal`
- Time `time`

- Distribution of local states for the test: [`src/pages/TestPage/TestPage.jsx`](/src/pages/TestPage/TestPage.jsx)
- Separate state for settings: [`src/pages/SettingsPage/SettingsPage.jsx`](./src/pages/SettingsPage/SettingsPage.jsx)
- The global state of the results is rendered in a Redux Toolkit slice and structured accordingly [`src/features/results/resultsSlice.js`](./src/features/results/resultsSlice.js)
- The global state of the test settings is moved to a separate Redux Toolkit slice with the possibility of point updates, as well as a universal reducer `setSettings` for mass state updates [`src/features/settings/settingsSlice.js`](./src/features/settings/settingsSlice.js)

---

### 4) Moving repetitive helper functions and functional logic to `utils`
Moving helper functions to utils for better structuring and logical differentiation of functional elements of the project.
Generally these are functions for calculations or helpers for Redux state persistence
This improves readability, code cleanliness and logical structuring.

[`src/utils/`](./src/utils/) - the utils directory itself
- the test question generation function has been moved to utils [`src/utils/testGenerate.js`](./src/utils/testGenerate.js)
- Redux state persistence function in utils [`src/utils/persist.js`](./src/utils/persist.js)

---

### 5) Feature-based framework for Redux (Redux Toolkit)
Structuring logic for RTK based on features.
Improves readability and project structure.

- Settings slice: [`src/features/settings/settingsSlice.js`](./src/features/settings/settingsSlice.js)
- Results slice: [`src/features/results/resultsSlice.js`](./src/features/results/resultsSlice.js)
- Connecting reducers in store: [`src/store/store.js`](./src/store/store.js)