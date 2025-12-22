This is React project "Math solver" - Math quiz with timer and points. 


# Best practices

---

## 1) Використання Redux Toolkit (RTK) замість “plain Redux”

- Менше boilerplate-коду
- `configureStore` з налаштуваннями “з коробки”
- Вбудовані DevTools та redux-thunk
- Immer дозволяє писати “мутації” у reducer-ах без реальних мутацій
- Все в одному пакеті

- [`src/store/store.js`](./src/store/store.js) - головний файл RTK
- [`src/features/`](./src/features/) - структура фіч для групування Redux-логіки

---

## 2) Винесення логіки у custom hooks

Винесення логіки з компонентів (таймери, робота з даними, запити) до кастомних хуків
- компонент стає простішим і читабельнішим;
- компонент відповідає за UI;
- логіку можна повторно використовувати;
- легше тестувати та підтримувати.

[`src/hooks/`](./src/hooks/) - директорія з кастомними хуками
- Кастомний хук для таймера [`src/hooks/useTimer.js`](./src/hooks/useTimer.js)
- Компонент таймера (використання хуку таймера) [`src/components/TimerComponent/TimerComponent.jsx`](./src/components/TimerComponent/TimerComponent.jsx)
- Окремий хук для регуляції та контролю проведення тесту [`src/hooks/useQuiz.js`](./src/hooks/useQuiz.js)
- Безпосереднє використання хуку useQuiz для компонента [`src/pages/TestPage/`](./src/pages/TestPage/TestPage.jsx)
- Кастомний хук для роботи з localStorage [`src/hooks/useLocalStorage.js`](./src/hooks/useLocalStorage.js)
- Хук для запису та оновлення налаштувань [`src/hooks/useSetting.js`](./src/hooks/useSettings.js) 

---

## 3) Розділення state по логічних групах

Замість одного великого стану “на все”, краще тримати **окремі useState** (або окремі slice-и в RTK) під різні логічні частини
- Ігровий процес `score`, `total`
- Налаштування `settings`
- Питання `question`, `testKey`
- UI стани `showModal`
- Час `time`

- Розподілення локальних станів для тесту: [`src/pages/TestPage/TestPage.jsx`](/src/pages/TestPage/TestPage.jsx)
- Окремий стан для налаштувань: [`src/pages/SettingsPage/SettingsPage.jsx`](./src/pages/SettingsPage/SettingsPage.jsx)
- Глобальний стан результатів винесений у Redux Toolkit slice та відповідно структурований [`src/features/results/resultsSlice.js`](./src/features/results/resultsSlice.js)

---

## 4) Винесення повторюваних helper-функцій та функціональної логіки в `utils`
Винесення допоміжних функцій в utils для кращої структуризації та логічної диференціації функціоанальних елементів проєкту.
Загалом це функції для обчислень або хелпер для персистенції Redux-стану
Це покращує читабельність, чистоту коду та логічну структуризацію.

[`src/utils/`](./src/utils/) - власне директорія utils
- функція генерації питань тесту винесена в utils [`src/utils/testGenerate.js`](./src/utils/testGenerate.js)
- функція персистенції Redux-стану в utils [`src/utils/persist.js`](./src/utils/persist.js)

---

## 5) Feature-based структура для Redux (Redux Toolkit)
Структуризація логіки для RTK на основі фіч (features).
Покращує читабельність і структуру проєкту.

- Settings slice: [`src/features/settings/settingsSlice.js`](./src/features/settings/settingsSlice.js)
- Results slice: [`src/features/results/resultsSlice.js`](./src/features/results/resultsSlice.js)
- Підключення редʼюсерів у store: [`src/store/store.js`](./src/store/store.js)

---

## Структура

- `src/store/` — Redux Toolkit store main file
- `src/features/` - Redux Toolkit slices
- `src/hooks/` — custom hooks
- `src/utils/` — helpers / утиліти
- `src/components/` — UI-компоненти
- `src/pages/` — сторінки/екрани
