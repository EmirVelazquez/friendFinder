// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Data
// Array that will hold the friends data
// Will have one mock data to hold a placeholder friend.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var friendArr = [
    {
        name: "Sunny Obama",
        photo: "https://www.washingtonpost.com/resizer/tu1zinlpwciKPEQpCw1IlLADqwc=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EY3YKMD5UM4LDJI24Q2BU53HQ4.jpg",
        scores: [
            5,
            1,
            3,
            4,
            2,
            5,
            4,
            3,
            2,
            5
        ]
    }
];

// This line of code exports the data and makes it accessible to other files using require
module.exports = friendArr;