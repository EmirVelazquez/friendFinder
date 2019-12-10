// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Load Data
// Here is the link for the routes that have the data source, in this case the friends array
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var friendData = require("../data/friends");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Routing
// Getting the data
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        friendData.push(newFriend);

        //Global variable
        var compatibilityGoal = 0;
        var compatibilityArray = [];

        // Sum of all values in an array
        const arrSum = arr => arr.reduce((a, b) => a + b, 0);

        // This function will check the new users compatibility based on question results
        function userCompatibility() {
            for (var i = 0; i < friendData.length - 1; i++) {
                arrIndex = i;
                console.log("Compability Function is currently being run on " + friendData[arrIndex].name);
                differences(arrIndex);
            }
            // This block of code checks the total difference array for the person who has the closest diff to zero
            closest = compatibilityArray.reduce(function (prev, curr) {
                return (Math.abs(curr - compatibilityGoal) < Math.abs(prev - compatibilityGoal) ? curr : prev);
            });

            console.log("The most compatible score is: " + closest);
            mostCompatible();
        };
        // Helper function that checks differences between user score and scores inside data array
        function differences(index) {
            let diffAnswer = [];
            for (var i = 0; i < newFriend.scores.length; i++) {
                let diffBoth = Math.abs(newFriend.scores[i] - friendData[arrIndex].scores[i]);
                diffAnswer.push(diffBoth);
            }
            totalDifference = arrSum(diffAnswer);
            console.log("Total Difference between " + newFriend.name + " & " + friendData[arrIndex].name + " is: " + totalDifference);
            compatibilityArray.push(totalDifference);
        };
        // Function to find the most compatible user
        function mostCompatible() {
            for (var i = 0; i < compatibilityArray.length; i++) {
                if (closest === compatibilityArray[i]) {
                    // Here the results were logged to get them on node terminal
                    console.log("The most compatible score has an index of: " + i);
                    console.log("The most compatible is: " + friendData[i].name);
                    console.log("The most compatible has a picture of: " + friendData[i].photo);
                    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                    // Here the result is placed in a variable that is then sent back the client
                    var matched = friendData[i];
                    console.log(matched);
                    return res.send(matched);
                }
            }
        };

        // Function calls
        userCompatibility();

    });
};