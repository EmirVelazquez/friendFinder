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
        friendData.push(req.body);
        res.json(true);

        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        };

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
                    console.log("The most compatible score has an index of: " + i);
                    console.log("The most compatible is: " + friendData[i].name);
                }
            }
        };


        userCompatibility();
        mostCompatible();

    });
};