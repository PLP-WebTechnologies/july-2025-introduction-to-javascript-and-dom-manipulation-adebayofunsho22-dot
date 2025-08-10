// A simple function to log a separator in the console for readability
function logSeparator(title) {
    console.log(`\n--- ${title} ---\n`);
    }

    /*
     * =========================
      * PART 1: VARIABLES AND CONDITIONALS
       * =========================
        *
         * This section demonstrates variable declarations and a basic if/else conditional statement.
          */
          logSeparator("Part 1: Variables and Conditionals");

          // Variable declarations using different keywords
          let studentName = "Alice";
          const courseName = "JavaScript Fundamentals";
          var studentGrade = 95; // Note: 'var' is an older keyword, 'let' and 'const' are preferred.

          console.log(`Student Name: ${studentName}`);
          console.log(`Course Name: ${courseName}`);

          // A conditional statement to check the student's grade
          if (studentGrade >= 90) {
              console.log(`${studentName} has an excellent grade in ${courseName}!`);
              } else if (studentGrade >= 70) {
                  console.log(`${studentName} has a good grade in ${courseName}.`);
                  } else {
                      console.log(`${studentName} needs to improve their grade in ${courseName}.`);
                      }

                      /*
                       * =========================
                        * PART 2: CUSTOM FUNCTIONS
                         * =========================
                          *
                           * This section defines two custom functions.
                            */
                            logSeparator("Part 2: Custom Functions");

                            // Function 1: A simple function that returns a new title.
                            function generateNewTitle() {
                                return "DOM Interactions in Action!";
                                }

                                // Function 2: A function that takes parameters and performs a calculation.
                                function calculateSquareArea(sideLength) {
                                    // Check if the input is a valid number
                                        if (typeof sideLength !== 'number' || sideLength <= 0) {
                                                console.error("Invalid input: Please provide a positive number for the side length.");
                                                        return null;
                                                            }
                                                                return sideLength * sideLength;
                                                                }

                                                                let area = calculateSquareArea(10);
                                                                if (area !== null) {
                                                                    console.log(`The area of a square with side 10 is: ${area}`);
                                                                    }


                                                                    /*
                                                                     * =========================
                                                                      * PART 3: LOOP EXAMPLES
                                                                       * =========================
                                                                        *
                                                                         * This section demonstrates two types of loops: a for loop and a while loop.
                                                                          */
                                                                          logSeparator("Part 3: Loop Examples");

                                                                          // Loop 1: A for loop to iterate over an array
                                                                          const students = ["Bob", "Charlie", "Diana"];
                                                                          console.log("Iterating through the student list with a for loop:");
                                                                          for (let i = 0; i < students.length; i++) {
                                                                              console.log(`Student at index ${i} is ${students[i]}`);
                                                                              }

                                                                              // Loop 2: A while loop to perform an action a certain number of times
                                                                              let counter = 0;
                                                                              const loopLimit = 3;
                                                                              console.log(`\nCounting up to ${loopLimit} with a while loop:`);
                                                                              while (counter < loopLimit) {
                                                                                  console.log(`Current count is: ${counter}`);
                                                                                      counter++; // Don't forget to increment the counter to avoid an infinite loop!
                                                                                      }


                                                                                      /*
                                                                                       * =========================
                                                                                        * PART 4: DOM INTERACTIONS
                                                                                         * =========================
                                                                                          *
                                                                                           * This section shows how to interact with the HTML document.
                                                                                            */
                                                                                            logSeparator("Part 4: DOM Interactions");

                                                                                            // Interaction 1: Select an element and change its content.
                                                                                            // This is done on page load, immediately when the script runs.
                                                                                            const subHeadingElement = document.getElementById('sub-heading');
                                                                                            subHeadingElement.innerText = "All parts of the assignment are demonstrated here!";

                                                                                            // Interaction 2: Add an event listener to a button.
                                                                                            const actionButton = document.getElementById('action-button');
                                                                                            const targetTitleElement = document.getElementById('target-title');
                                                                                            const domTextElement = document.getElementById('dom-text');

                                                                                            actionButton.addEventListener('click', () => {
                                                                                                // Change the title using the custom function from Part 2
                                                                                                    targetTitleElement.innerText = generateNewTitle();
                                                                                                        // Change the text content of the paragraph
                                                                                                            domTextElement.innerText = "The button was clicked! The title has been updated.";
                                                                                                            });

                                                                                                            // Interaction 3: Use a loop to create and add elements to the DOM.
                                                                                                            const loopListElement = document.getElementById('loop-list');
                                                                                                            const loopItems = ["First Item", "Second Item", "Third Item", "Fourth Item"];

                                                                                                            // We'll use a forEach loop here, which is a modern and clean way to loop over arrays.
                                                                                                            loopItems.forEach(itemText => {
                                                                                                                const listItem = document.createElement('li'); // Create a new <li> element
                                                                                                                    listItem.textContent = itemText; // Set its text content
                                                                                                                        loopListElement.appendChild(listItem); // Add it to the <ul>
                                                                                                                        });

                                                                                                                        // Bonus Interaction: Toggle a class on a list item to highlight it
                                                                                                                        loopListElement.addEventListener('click', (event) => {
                                                                                                                            // Check if the clicked element is an <li>
                                                                                                                                if (event.target.tagName === 'LI') {
                                                                                                                                        // Toggle the 'highlight' class
                                                                                                                                                event.target.classList.toggle('highlight');
                                                                                                                                                    }
                                                                                                                                                    });

                                                                                                                                                    