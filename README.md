This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of the Create React Native App guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## Table of Contents

- [Starting up Civic for local development](#local-development)
  - [Using VS Code](#using-vs-code)
  - [Running the App](#running-the-app)
- [Updating to New Releases](#updating-to-new-releases)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run ios](#npm-run-ios)
  - [npm run android](#npm-run-android)
  - [npm run eject](#npm-run-eject)
- [Writing and Running Tests](#writing-and-running-tests)
- [Environment Variables](#environment-variables)
  - [Configuring Packager IP Address](#configuring-packager-ip-address)
- [Customizing App Display Name and Icon](#customizing-app-display-name-and-icon)
- [Sharing and Deployment](#sharing-and-deployment)
  - [Publishing to Expo's React Native Community](#publishing-to-expos-react-native-community)
  - [Building an Expo "standalone" app](#building-an-expo-standalone-app)
  - [Ejecting from Create React Native App](#ejecting-from-create-react-native-app)
    - [Build Dependencies (Xcode & Android Studio)](#build-dependencies-xcode-android-studio)
    - [Should I Use ExpoKit?](#should-i-use-expokit)
- [Troubleshooting](#troubleshooting)
  - [Networking](#networking)
  - [iOS Simulator won't open](#ios-simulator-wont-open)
  - [QR Code does not scan](#qr-code-does-not-scan)

## Local Development

Clone the remote repository into your local filesystem by running

`git clone https://github.com/civic-app/civic-app.git`

from the command line. You may be prompted for your GitHub username and password. Then run

`git checkout develop`

to switch to the main development branch.

You will also need to have Node.js installed in order to run the application. Node comes with the command line tool npm, used for package management. [Click here](https://nodejs.org/en/download/) to download the latest version of Node and follow the instructions to install it.

Once you have node, run

`npm install -g yarn eslint`

to install the yarn package manager and eslint _globally_ (available to all projects on your computer).

Then, be sure to run the command

`yarn`

to install local dependencies necessary.

### Using VS Code

[Visual Studio Code](https://code.visualstudio.com/) is a great IDE for developing in Javascript. It comes with features like

- Integrated terminal window - Run command prompts without switching programs
- Intellisense - An autocomplete for your code. Easily see the available properties on an object, parameters for a function, import paths in your project, and more
- Integrated git client - View diffs, stage changes, make commits, and push to remote all at the click of a button
- A rich full text code search
- Configurable interactive debugger

and through the vast library of Extensions can support many more custom actions. Two extensions recommended are ESLint, which gives real-time feedback based on eslint rules, and Prettier, which auto formats your code according to your eslint rules.

### Running the app

All of our Javascript code wouldn't run on a real mobile device without the help of [Expo](https://expo.io/). Expo manages, configures, and contains all of the native code needed to run the app, so all we have to do is write Javascript. To be able to view your local development version of the app on your phone, download Expo from the App Store. We will also use the Expo app to distribute alpha/beta versions to our test users.

You may also require [Watchman](https://facebook.github.io/watchman/), which allows React Native to detect changes in files and hot reload the app during development. If on Mac run

`brew install watchman`

to install Watchman using [Homebrew](https://brew.sh/).

In order to be able to run the application and see it on a device, run

`npm install -g exp`

to globally install the Expo Command Line Interface. Then, run

`exp start`

to begin running the project. It may take awhile to build the app, but you should see some logged statements indicating progress. When the app is built, expo will log a QR code, a URL to view the app, and instructions for running the app on a simulator or your own device.

If you are connected to the same wi-fi network on both your phone and your laptop, you should see your project available to view in the Expo app on your phone. If you don't see it, open up a new terminal window and run

`exp send -s <your-phone-number-or-email>`

to be sent a text message or email containing the link to open the app on your phone in Expo.

Now, Civic App is running on your phone! Any changes you make to the source code will cause the app to rebuild and reload on your phone. Any errors will be shown both on your phone and in the terminal window where you first ran `exp start`.

At any time, you can shake your phone to bring up the Expo developer menu. When you are done, type `ctrl + c` at the command line to stop the Expo dev server. For a complete list of Expo CLI commands, [see the documentation](https://docs.expo.io/versions/v28.0.0/workflow/exp-cli).

## Updating to New Releases

You should only need to update the global installation of `create-react-native-app` very rarely, ideally never.

Updating the `react-native-scripts` dependency of your app should be as simple as bumping the version number in `package.json` and reinstalling your project's dependencies.

Upgrading to a new version of React Native requires updating the `react-native`, `react`, and `expo` package versions, and setting the correct `sdkVersion` in `app.json`. See the [versioning guide](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md) for up-to-date information about package version compatibility.

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1.  Make sure that you can run adb from your terminal.
2.  Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1.  Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2.  Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3.  Make sure that you can run adb from your terminal.

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Customizing App Display Name and Icon

You can edit `app.json` to include [configuration keys](https://docs.expo.io/versions/latest/guides/configuration.html) under the `expo` key.

To change your app's display name, set the `expo.name` key in `app.json` to an appropriate string.

To set an app icon, set the `expo.icon` key in `app.json` to be either a local path or a URL. It's recommended that you use a 512x512 png file with transparency.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).

## Environment Variables

You can configure some of Create React Native App's behavior using environment variables. For example, the variable `__DEV__` is set to `true` when developing and `false` in production. Configuration specified in `app.json` can be accessed in code via `Expo.Constants.manifest`.

### Configuring Packager IP Address

When starting your project, you'll see something like this for your project URL:

```
exp://192.168.0.2:19000
```

The "manifest" at that URL tells the Expo app how to retrieve and load your app's JavaScript bundle, so even if you load it in the app via a URL like `exp://localhost:19000`, the Expo client app will still try to retrieve your app at the IP address that the start script provides.

In some cases, this is less than ideal. This might be the case if you need to run your project inside of a virtual machine and you have to access the packager via a different IP address than the one which prints by default. In order to override the IP address or hostname that is detected by Create React Native App, you can specify your own hostname via the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable:

Mac and Linux:

```
REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' npm start
```

Windows:

```
set REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname'
npm start
```

The above example would cause the development server to listen on `exp://my-custom-ip-address-or-hostname:19000`.

## Sharing and Deployment

Create React Native App does a lot of work to make app setup and development simple and straightforward, but it's very difficult to do the same for deploying to Apple's App Store or Google's Play Store without relying on a hosted service.

### Publishing to Expo's React Native Community

Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

Install the `exp` command-line tool, and run the publish command:

```
$ npm i -g exp
$ exp publish
```

### Building an Expo "standalone" app

You can also use a service like [Expo's standalone builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you want to get an IPA/APK for distribution without having to build the native code yourself.

### Ejecting from Create React Native App

If you want to build and deploy your app yourself, you'll need to eject from CRNA and use Xcode and Android Studio.

This is usually as simple as running `npm run eject` in your project, which will walk you through the process. Make sure to install `react-native-cli` and follow the [native code getting started guide for React Native](https://facebook.github.io/react-native/docs/getting-started.html).

#### Should I Use ExpoKit?

If you have made use of Expo APIs while working on your project, then those API calls will stop working if you eject to a regular React Native project. If you want to continue using those APIs, you can eject to "React Native + ExpoKit" which will still allow you to build your own native code and continue using the Expo APIs. See the [ejecting guide](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md) for more details about this option.

## Troubleshooting

### Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading

```
http://192.168.0.1:19000
```

and

```
http://192.168.0.1:19001
```

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the [Create React Native App repository](https://github.com/react-community/create-react-native-app) with details about these steps and any other error messages you may have received.

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager. If you are using a VPN you may need to disable it.

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

- "non-zero exit code: 107"
- "You may need to install Xcode" but it is already installed
- and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1.  Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2.  Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3.  If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.

### QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.
