// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Data
// Array that will hold the friends data
// Will have one mock data to hold a placeholder friend.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var friendArr = [
    {
        name: "sunny obama",
        photo: "https://www.washingtonpost.com/resizer/tu1zinlpwciKPEQpCw1IlLADqwc=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EY3YKMD5UM4LDJI24Q2BU53HQ4.jpg",
        scores: [
            "5",
            "5",
            "3",
            "3",
            "5",
            "5",
            "5",
            "5",
            "1",
            "5"
        ]
    },
    {
        name: "tardar sauce",
        photo: "https://media.mnn.com/assets/images/2019/01/grumpy_cat.jpg.653x0_q80_crop-smart.jpg",
        scores: [
            "1",
            "1",
            "5",
            "2",
            "1",
            "1",
            "1",
            "1",
            "5",
            "1"
        ]
    }
];

// This line of code exports the data and makes it accessible to other files using require
module.exports = friendArr;