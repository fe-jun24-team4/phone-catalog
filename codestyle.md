## GIT

- do `git pull` regularly
- follow the naming convention for the branches
  - `feature-[task-name]` for implementing something new
  - `fix-[something]` for major fixes
  - `hotfix-[something]` for minor fixes
  - `infrastructure-[feature-name]` for QoL or something that enables further work
- don't commit files not related to whatever you are doing

## SCSS

- **DO** use camelCase for class names.
  - [**BAD**] `.my-new-class` `.MyNewClass`
  - [**GOOD**] `.myNewClass`
- **DON`T** use component name as a class prefix.
  - [**BAD**] `.cardImage` `.footerLogo`
  - [**GOOD**] `.image` `.logo`
- **DO** use blank lines to separate properties into distinct blocks.

  - Recommended order:
    - `width` and `height`
    - `padding` and `margin`
    - `display`, `align-items`, `justify-content`, `gap` and so on
    - text properties
    - background properties
    - border properties
    - transformation properties
    - other (also separate, if it makes sense)
  - [**BAD**]
    ```css
    .myClass {
      display: flex;
      border-color: #00ff00;
      gap: 16px;
      transition-duration: 0.3s;
      height: 2rem;
    }
    ```
  - [**GOOD**]

    ```css
    .myClass {
      height: 2rem;

      display: flex;
      gap: 16px;

      border-color: #00ff00;

      transition-duration: 0.3s;
    }
    ```

- **DON`T** apply properties, that are already inherited from parent

  - [**BAD**]

    ```css
    .parent {
      font-size: 16px;
    }

    .child {
      font-size: 16px;
      color: #ffffff;
    }
    ```

  - [**GOOD**]

    ```css
    .parent {
      font-size: 16px;
    }

    .child {
      color: #ffffff;
    }
    ```

- Remember to use **MIXINS** and **VARIABLES**

## React

- Each _major_ component should be in its own folder with `<ComponentName>.tsx`, `<ComponentName>.module.scss` and `index.ts`
- Common components should go to `src/components`
- Page specific components should go to `src/pages/<PageComponent>/components`
- Prefer pure components where possible
- If a component feels too big - split it
- Don't put too much logic into component body - extract it into a function
- Use
  ```ts
  import styles from './<ComponentName>.module.scss';
  import cn from 'classnames';
  ```
  to type less

## TS

- use descriptive names
- functions should ave a **single** responsibility
  - [**TIP**] if your function name contains `and` (like `doFooAndBar`), it probably should be 2 separate functions.

## Misc

- File structure

  ```
  ├───components
  ├───pages
  │   └───<specific page>
  │       └───components
  ├───contexts
  ├───styles
  ├───enums
  ├───types
  └───utils
  ```

- [Architecture Reference](https://miro.com/app/board/uXjVLejhA9w=/)
