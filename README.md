# @dmc/ui-v4

Дизайн-система DMC UI v4: токены, CSS-примитивы и React-компоненты (кнопки, карточки, формы, центрированная модалка, **правая боковая панель** `DmcSidePanel`).

Источник визуала: карточка компании v4 в проекте `dmc-lk`.

## Установка из git

После публикации репозитория добавьте в `package.json` приложения:

```json
"dependencies": {
  "@dmc/ui-v4": "git+https://your-git.example.com/dmc-ui-v4.git#v4.1.0"
}
```

```bash
npm install
```

### Подключение стилей и компонентов

```js
import "@dmc/ui-v4/dist/dmc-v4.css";
import {
  DMC_V4_SCOPE_CLASS,
  DashCard,
  DmcSidePanel,
  BtnPrimaryV4,
} from "@dmc/ui-v4";
```

Обёртка v4-страницы:

```jsx
<div className={`main-page ${DMC_V4_SCOPE_CLASS}`}>
  ...
</div>
```

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run build` | Сборка `dist/index.js` и `dist/dmc-v4.css` |
| `npm run docs` | Каталог компонентов (http://localhost:5174) |
| `npm run docs:build` | Статическая сборка каталога в `docs/dist` |

## Git remote

```bash
cd dmc-ui-v4
git init
git add .
git commit -m "feat: initial dmc-ui-v4 library"
git remote add origin https://your-git.example.com/dmc-ui-v4.git
git push -u origin main
git tag v4.1.0
git push origin v4.1.0
```

## Кастомные компоненты

Используйте те же классы (`btn-primary-v4`, `site-form-control`, `card`) и CSS-переменные внутри `dmc-v4` / `company-card-v4`. Общие блоки для нескольких проектов — переносите в этот пакет.

## Версия

Текущая версия пакета: **4.1.0** (тег `v4.1.0`).
