# Learn Spanish Numbers Web Application

<em>I made this webapp for my daughter to learn and practice the numbers in Spanish.</em>

The application is designed to help users learn and practice the numbers 1 to 10 in Spanish. The application is built using JavaScript and jQuery, and features interactive animations and sounds to engage the user.
<hr>

![numeros](https://user-images.githubusercontent.com/94300302/230707256-d961a63b-f0ee-4e86-85fe-0b2cd9de307c.png)

<hr>

## Usage

To use the application, simply click on the number you want to learn, or type the corresponding number on your keyboard. The application will animate the number and play the corresponding sound to help reinforce the user's understanding.

## Features

The application includes the following features:

- Interactive animations for each number
- Audio playback for each number
- Keyboard support for quick and easy use

## Code

The code for this application is designed to be clean and easy to understand. It includes a number of functions to handle key events, sound playback, and button animations. Here are some of the key functions:

- `press()`: This function listens for keydown events and plays the appropriate sound and animates the corresponding button based on the key pressed.
- `playSound(soundUrl)`: This function creates an Audio object with the specified soundUrl and plays it.
- `animateButton(button)`: This function adds the 'animate_btn' class to the specified button, which adds a CSS animation to it, and removes the class after 2 seconds.

In addition to these functions, the code also sets up event listeners for each button, so that when it is clicked, the corresponding sound is played and the button is animated. Finally, the code calls the `press()` function to start listening for keydown events.

## Learning Goals

This web application was designed with the goal of helping users learn and practice basic concepts of JavaScript and jQuery, including:

- Understanding of key events and event listeners
- Interacting with the DOM using jQuery
- Writing DRY code by utilizing functions

## Credits

This application was created by CiscoMerchan (Me :-)) as a personal project. Please feel free to contribute to the code or report any issues you encounter.
