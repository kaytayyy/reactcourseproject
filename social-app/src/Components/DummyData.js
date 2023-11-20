const api = "http://localhost:3500/photos/"
const randomWholeNumber = (Math.floor(Math.random() * 6));
const apiSpecific = api + randomWholeNumber

// fetch(apiSpecific, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//     },
// })
//     .then(response => response.json())
//     .then(data => {
//         // Do something with the data
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("Fetch error:", error);
//     });

export const Users = [
    {
        id: 1,
        profilePicture: "src/Photos/KatiePfp.jpg",
        username: "Katie Smith"
    },
    {
        id: 2,
        profilePicture: "src/Photos/AaronPfp.jpg",
        username: "Aaron Woodman"
    },
    {
        id: 3,
        profilePicture: "src/Photos/MeghanPfp.jpg",
        username: "Meghan Glinski"
    },
    {
        id: 4,
        profilePicture: "src/Photos/GunnerPfp.jpg",
        username: "Gunner Smith"
    },
    {
        id: 5,
        profilePicture: "src/Photos/DannyPfp.jpg",
        username: "Danny Megard"
    },
    {
        id: 6,
        profilePicture: "src/Photos/JaxPfp.JPG",
        username: "Jax Smith"
    }
]

export const Posts = [
    {
        id: 1,
        desc: "Look at this!",
        photo: apiSpecific,
        date: "10 mins ago",
        userId: 1,
        likes: 12,
        comments: 3
    },
    {
        id: 2,
        desc: "Stay strong, I whispered to my wifi signal",
        photo: apiSpecific,
        date: "35 mins ago",
        userId: 2,
        likes: 19,
        comments: 1
    },
    {
        id: 3,
        desc: "Embrace the glorious mess that you are",
        photo: apiSpecific,
        date: "1 hour ago",
        userId: 3,
        likes: 26,
        comments: 2
    },
    {
        id: 4,
        desc: "Mentally here",
        photo: apiSpecific,
        date: "2 hours ago",
        userId: 4,
        likes: 19,
        comments: 1
    },
    {
        id: 5,
        desc: "The bags under my eyes are Gucci",
        photo: apiSpecific,
        date: "3 hours ago",
        userId: 5,
        likes: 19,
        comments: 1
    },
    {
        id: 6,
        desc: "Be kind and full of love",
        photo: apiSpecific,
        date: "3 hours ago",
        userId: 6,
        likes: 19,
        comments: 1
    }
]