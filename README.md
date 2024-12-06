## Создание проекта 
 
npx create-react-app name + npm start
npm create vite@latest + npm install + npm run dev 
 
## React components

Строительные блоки сайта.
любой тэг = React.createElement(tag, props, children) = обычный return с jsx (как работает jsx)

## Children 
 
Вложенное содержимое в тег jsx приходит в родительский компонент как свойство children

## Умные и глупые компоненты

Умные - со стейтом, глупые - без стейта. Стремиться как можно меньше использовать компонентов с состояниями - проще поддерживать

## Стилизация компонентов

css modules => Button
lib styled-components => Header