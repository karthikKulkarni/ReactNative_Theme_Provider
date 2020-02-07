# RN_TS_ESlint_Prettier

A boiler plate for React Native 0.61, TS 3.7, ES Lint 6.8, Prettier 1.19, Jest 24.9

#### Updated: 29 Jan 2020

### Steps:

#### 1. Update react native to latest globally

`$ npm install -g react-native@latest`

#### 2. Create react native app with typescript template

`$ react-native init <ProjectName> --template react-native-template-typescript`

#### 3. Update the package name/ bundle identifier if necessary

##### a. iOS:

Open xcode -> `<ProjectName>` -> Targets `<select ProjectName>` -> General -> Bundle Identifier.

##### b. Android:

Package name can be updated using "react-native-rename" npm. But this also changing of app name.

#### 4. Add project to git <a href="https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line">Link </a>

`$ git init`</br>
`$ git add .`</br>
`$ git commit -m "Initial commit"`</br>
`$ git remote add origin <remote_repository_URL>`</br>
`$ git remote -v`</br>
`$ git push -u origin master`

#### 5. Install ESlint, prettier and types for each

`$ npm install --save-dev eslint prettier eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-prettier`

#### 6. Config ES lint

Make sure you have ESLint plugin installed for VSCode</br>
And update .eslintrc.js </br>
`module.exports = { root: true, extends: ['@react-native-community', 'airbnb-typescript', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'], };` </br>

Additionally update the VSCode Workspace setting, add </br>
`"eslint.validate": [ "javascript", "javascriptreact", "typescript", "typescriptreact" ]`

#### 7. Config prettier

Make sure you have Prettier plugin installed for VSCode</br>
`{ "singleQuote": true, "trailingComma": "all", }`

#### 8. Exclude test files from ts in tsconfig.js

`"exclude": [ "__tests__/**/*-test.ts" ]`

#### 9. Enable Hermes engine for android <a href="https://facebook.github.io/react-native/docs/hermes">Link</a>

`android/app/build.gradle`<br/>
"enableHermes": true // clean and rebuild if changing</br>
`proguard-rules.pro`</br>
-keep class com.facebook.hermes.unicode.\*_ { _; }

#### 10. Build the app

`$react-native run-ios / react-native run-android`<br/>
or<br/>
`$yarn ios / yarn android`<br/>

#### 11. Commit all the new git changes

`$ git add .` </br>
`$ git commit -m "Config TS ES prettier"`</br>
`$ git push`</br>

#### 12. Setup Husky and configure to check any prettier and Eslint

#### Install Husky

`$ npm install --save-dev pretty-quick husky` </br>

#### Configure husky in package.json

`"husky": { "hooks": { "pre-commit": "pretty-quick --staged && npm run lint" } }`

All set!!! build the app using
`$react-native run-ios/run-android` </br>
or</br>
`$yarn android/ios`</br>
