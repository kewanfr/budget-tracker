npx expo customize metro.config.js
npx expo install nativewind react-native-reanimated tailwindcss

npx tailwind init
content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
presets: [require("nativewind/preset")],

add global.css 

@tailwind base;
@tailwind components;
@tailwind utilities;