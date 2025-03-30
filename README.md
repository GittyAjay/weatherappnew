# Weather App

![Weather App](https://res.cloudinary.com/dhh3qr3hx/image/upload/fl_preserve_transparency/v1743328782/demo_image_guxyga.jpg?_s=public-apps)
A React Native weather application that fetches weather data based on user location with intelligent caching to minimize API calls.

## Features

- Real-time weather information based on user location
- Caching mechanism using AsyncStorage for previously searched locations
- TypeScript implementation for better type safety and development experience
- Responsive and modern UI with gradient backgrounds
- Efficient API calls using debounce

## Demo Video

Check out our app demo video:
[Weather App Demo](https://youtube.com/shorts/aT9bt2FgxE0)

## Tech Stack

- React Native 0.72.17
- TypeScript
- Redux Toolkit for state management
- AsyncStorage for data persistence
- Axios for API calls
- React Native Navigation
- React Native Linear Gradient for UI effects

## Prerequisites

- Node.js >= 16
- npm or yarn
- iOS: XCode (for Mac users)
- Android: Android Studio & Android SDK
- React Native CLI

## Installation

1. Clone the repository:

```bash
git clone <https://github.com/GittyAjay/weatherappnew.git>
cd AwesomeProject
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. iOS specific setup:

```bash
cd ios
pod install
cd ..
```

## Running the App

### iOS

```bash
# Start Metro bundler
npm start
# In another terminal, run iOS app
npm run ios
```

### Android

```bash
# Start Metro bundler
npm start
# In another terminal, run Android app
npm run android
```

## Project Structure

```

## Caching Implementation

The app implements caching using @react-native-async-storage/async-storage to store previously fetched weather data. This reduces unnecessary API calls and improves app performance. The caching strategy includes:

- Storage of weather data with timestamps
- Validation of cache freshness
- Automatic cache invalidation after a specified period

## Development Notes

- Uses ESLint and Prettier for code formatting
- Implements debouncing for search inputs using lodash.debounce
- Follows TypeScript best practices for type safety
- Uses React Native Navigation for screen management

## License

This project is licensed under the MIT License - see the LICENSE file for details
```
