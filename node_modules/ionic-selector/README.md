# ionic-selector

Replaces tagName of your app's main component with `ion-app`.

## Installation

```bash
npm i -S ionic-selector
```

## Usage

You don't even have to specify a selector of your main component.

It's the `app` by default.

```js
import ionicSelector from 'ionic-selector';

ionicSelector('app'); // or blank or any selector you want
```

Before:

```html
<body>
  <app class="main"></app>
</body>
```

After:

```html
<body>
  <ion-app class="main"></ion-app>
</body>
```
