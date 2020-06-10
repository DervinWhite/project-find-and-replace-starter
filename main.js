// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")
//console.log(rowElements)



// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 


function getCellElements(currentRowCellElement) {
    return currentRowCellElement.querySelectorAll(".cell")

}

// YOUR CODE GOES HERE

replaceAllButton.addEventListener("click", function () {
    let UserFindInput = findInput.value
    let ReplaceUserInput = replaceInput.value

    //Matching the UserFindInput to match against data in cells



    //console.log(UserFindInput, ReplaceUserInput)
    for (let counter3 = 0; counter3 < rowElements.length; counter3 = counter3 + 1) {
        let currentRow = rowElements[counter3]


        let currentRowCellElementArray = getCellElements(currentRow)

        for (let counter4 = 0; counter4 < currentRowCellElementArray.length; counter4 = counter4 + 1) {
            let currentRowCellElement = currentRowCellElementArray[counter4]
            //console.log(currentRowCellElement)
            let Matched = currentRowCellElement.innerHTML.includes(UserFindInput)
            //var str = "Visit Microsoft!";
            //var res = str.replace("Microsoft", "W3Schools");
console.log(Matched)
            if (Matched === true) {
                let Newstring = currentRowCellElement.innerHTML.replace(UserFindInput,ReplaceUserInput) 
                currentRowCellElement.innerHTML= Newstring
            }

        }


    }



})
// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer
