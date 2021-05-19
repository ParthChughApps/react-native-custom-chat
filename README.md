
# react-native-chat-screen

## Getting started

`$ npm install react-native-chat-screen --save`

### Mostly automatic installation

`$ react-native link react-native-chat-screen`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-chat-screen` and add `RNChatScreen.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNChatScreen.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.chatscreen.RNChatScreenPackage;` to the imports at the top of the file
  - Add `new RNChatScreenPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-chat-screen'
  	project(':react-native-chat-screen').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-chat-screen/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-chat-screen')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNChatScreen.sln` in `node_modules/react-native-chat-screen/windows/RNChatScreen.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Chat.Screen.RNChatScreen;` to the usings at the top of the file
  - Add `new RNChatScreenPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNChatScreen from 'react-native-chat-screen';

// TODO: What to do with the module?
RNChatScreen;
```
  