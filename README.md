# sahaja-app
Repository to host Sahaja Mobile App project

## Setup Develoment Environment (Windows)

Reference : https://facebook.github.io/react-native/docs/getting-started

### 1) Installing dependencies
You will need Node, the React Native command line interface, Python2, a JDK, and Android Studio.

We recommend installing Node and Python2 via Chocolatey [https://chocolatey.org/], a popular package manager for Windows.

React Native also requires a recent version of the Java SE Development Kit (JDK), as well as Python 2. Both can be installed using Chocolatey.

Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:

```
choco install -y nodejs.install python2 jdk8
```

If you have already installed Node on your system, make sure it is Node 8.3 or newer. If you already have a JDK on your system, make sure it is version 8 or newer.

### 2) Android development environment

1. Install Android Studio [https://developer.android.com/studio/index.html]

    Make sure the boxes next to all of the following are checked:

```
Android SDK
Android SDK Platform
Performance (Intel ® HAXM) (See here for AMD)
Android Virtual Device
Then, click "Next" to install all of these components.
```

If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

2. Install the Android SDK
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:

Android SDK Platform 28
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 28.0.3 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

3. Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

Open the System pane under System and Security in the Windows Control Panel, then click on Change settings.... Open the Advanced tab and click on Environment Variables.... Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:

The SDK is installed, by default, at the following location:
```
c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk
```
You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

4. Add platform-tools to Path
Open the System pane under System and Security in the Windows Control Panel, then click on Change settings.... Open the Advanced tab and click on Environment Variables.... Select the Path variable, then click Edit. Click New and add the path to platform-tools to the list.

The default location for this folder is:

```
c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools
```

## Running the application

Assuming that you have Node 10 LTS or greater installed, you can use npm to install the Expo CLI command line utility:

```
npm install -g expo-cli
```

Then run the following commands to create a new React Native project called "AwesomeProject":

```
cd sahaja-app
npm start # you can also use: expo start
```

This will start a development server for you.
