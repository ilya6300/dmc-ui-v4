# @dmc/ui-v4

Дизайн-система DMC UI v4: токены, CSS-примитивы и React-компоненты (кнопки, карточки, формы, центрированная модалка, **правая боковая панель** `DmcSidePanel`).

Источник визуала: карточка компании v4 в проекте `dmc-lk`.

## Установка из git

После публикации репозитория добавьте в `package.json` приложения:

```json
"dependencies": {
  "@dmc/ui-v4": "git+https://github.com/ilya6300/dmc-ui-v4.git#v4.1.0"
}
```

```bash
npm install
```

При установке из git npm клонирует репозиторий, ставит dev-зависимости и выполняет `prepare` (`npm run build`), поэтому в `node_modules/@dmc/ui-v4/dist/` появляются `index.js` и `dmc-v4.css`. В git `dist/` не коммитится.

`npm run docs` есть только в репозитории **dmc-ui-v4** (локальный клон или `C:\Frontend\dmc-ui-v4`), не в проекте-потребителе (`lid-bot`). Собранный каталог после установки: файлы `dist/index.html` и `dist/assets/` внутри пакета.

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
| `npm run build` | Библиотека + каталог в `dist/` (`index.js`, `dmc-v4.css`, `index.html`, `assets/`, `previews/`) |
| `npm run docs` | Каталог в dev-режиме (http://localhost:5174) |
| `npm run docs:build` | Только статика каталога в `dist/` (после `vite build` или вместе с `npm run build`) |
| `npm run docs:preview` | Просмотр собранного каталога из `dist/` |

## Git remote

```bash
cd dmc-ui-v4
git init
git add .
git commit -m "feat: initial dmc-ui-v4 library"
git remote add origin https://github.com/ilya6300/dmc-ui-v4.git
git push -u origin main
git tag v4.1.0
git push origin v4.1.0
```

## Кастомные компоненты

Используйте те же классы (`btn-primary-v4`, `site-form-control`, `card`) и CSS-переменные внутри `dmc-v4` / `company-card-v4`. Общие блоки для нескольких проектов — переносите в этот пакет.

## Версия

Текущая версия пакета: **4.1.0** (тег `v4.1.0`).
