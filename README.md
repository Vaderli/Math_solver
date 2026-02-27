# Math Solver Quiz Application

This is React project "Math solver" - Math quiz with timer and points. 

## Author
Vadym Lishchynskyi

Zhytomyr Polytechnic State University




# Best practices

---

## 1) Using Redux Toolkit (RTK) instead of “plain Redux”

- Less boilerplate code
- `configureStore` with out-of-the-box settings
- Built-in DevTools and redux-thunk
- Immer allows you write “mutations” in reducers without actual mutations
- All in one package

- [`src/store/store.js`](./src/store/store.js) - main file RTK
- [`src/features/`](./src/features/) - feature structure for grouping Redux logic

---

## 2) Moving logic into custom hooks

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

## 3) Dividing state into logical groups

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

## 4) Moving repetitive helper functions and functional logic to `utils`
Moving helper functions to utils for better structuring and logical differentiation of functional elements of the project.
Generally these are functions for calculations or helpers for Redux state persistence
This improves readability, code cleanliness and logical structuring.

[`src/utils/`](./src/utils/) - the utils directory itself
- the test question generation function has been moved to utils [`src/utils/testGenerate.js`](./src/utils/testGenerate.js)
- Redux state persistence function in utils [`src/utils/persist.js`](./src/utils/persist.js)

---

## 5) Feature-based framework for Redux (Redux Toolkit)
Structuring logic for RTK based on features.
Improves readability and project structure.

- Settings slice: [`src/features/settings/settingsSlice.js`](./src/features/settings/settingsSlice.js)
- Results slice: [`src/features/results/resultsSlice.js`](./src/features/results/resultsSlice.js)
- Connecting reducers in store: [`src/store/store.js`](./src/store/store.js)

---

## Structure

- `src/store/` — Redux Toolkit store main file
- `src/features/` - Redux Toolkit slices
- `src/hooks/` — custom hooks
- `src/utils/` — helpers / utilities
- `src/components/` — UI-components
- `src/pages/` — pages/screens
