# Text Trimmer NPM Package

[![npm version](https://badge.fury.io/js/text-trimmer.svg)](https://badge.fury.io/js/text-trimmer)


I created this package because I found myself needing to trim text frequently and using the .concat function to add "..." to the end of text stings for posts, blogs etc within my fullstack applications.
Rather than repeatedly making the same helper function for each project, I decided to make this npm package to save my time and hopefully others too.

### This package does the following
This package will turn:
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Curabitur`

to a length of your choosing, for example, 20 characters:
`Lorem ipsum dolor si...`  

## How it works

In this package you have 2 variables you need to enter `text` and `charLength`. It's very simple to achieve the above. 
Call the function `textTrimmer(textString, 20);` to output a string with a limit of 20 characters

It's important to note that this package will only accept strings! If the string length of the string is shorter than your charLength variable, you will just have your input returned.

## How to install
Head to your terminal within your project directory and type:

##### NPM
`$ npm install text-trimmer`

##### YARN
`$ yarn add text-trimmer`

### Thank you for using this package. Enjoy!
