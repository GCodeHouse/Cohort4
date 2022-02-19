// people use console logs to help them check if their javascript is working
// console logs print out in the console of your browser
// lets check to see if the words hello world appear in a browser
// if it does, that means our javascript is connected to our html

// console.log('hello world')

// lets try to get the body element by its id

// document.getElementById('main-background')
                        
// althought that syntax is right, we don't know if it worked,
// so let's console log it to see that it grabbed the right element 

// console.log(document.getElementById('main-background'))

// let's store document.getElementById('main-background') in a variable 
// so we can use the value again without typing out the entire word all the the time

// var bodyElement = document.getElementById('main-background')

// let's see if it worked by printing it out with a  a console.log 

// console.log('I will print out the body element variable below')

// console.log(bodyElement)

// let's manipulate body Element and change the background black

// bodyElement.style.background = "black"

// let's manipulate the words inside of the button to say Change to Dark Mode

// first let's figure out how to get the button using DOM methods

// document.getElementById('dark-mode-btn')

// then save it in a variable

// var darkModeBtn = document.getElementById('dark-mode-btn')

// console log it to make sure you targeted the right HTML element

// console.log(darkModeBtn)

// now change the words 

// darkModeBtn.innerHTML = "Change to Dark Mode"

// let's comment out everything above

// let's create a function called toggleDarkMode to match what's being called in the event listener

function toggleDarkMode() {
     var bodyElement = document.getElementById('main-background')
    bodyElement.style.background = "black"
    var darkModeBtn = document.getElementById('dark-mode-btn')
    darkModeBtn.innerHTML = "Change to Dark Mode"
}
