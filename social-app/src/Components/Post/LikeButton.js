// import React from "react";

let likeFavortied = false;
// function LikeBtn() {
//     const
//         isFavorited = !isFavorited
//     favoriteButton.style.backgroundColor = isFavorited ? "red" : "white"

//     if (isFavorited) {
//         addNewFavorite()
//         console.log("add")
//     }

//     if (!isFavorited) {
//         removeLastFavorite();
//         console.log("remove")
//     }
// }

// function addNewFavorite() {
//     const newFavorite = document.createElement("li")
//     const deleteEmoji = document.createElement('span')
//     deleteEmoji.textContent = '❌'

//     deleteEmoji.addEventListener(
//         "mouseover",
//         (e) => {
//             newFavorite.style.color = "purple";
//         })

//     deleteEmoji.addEventListener(
//         "mouseout",
//         (e) => {
//             newFavorite.style.color = ""
//         })

//     newFavorite.textContent = currentQuote.textContent
//     newFavorite.appendChild(deleteEmoji)
//     favoriteList.appendChild(newFavorite)

//     deleteEmoji.addEventListener('click', () => {
//         newFavorite.remove()
//         }

//     )

// }

// function removeLastFavorite() {
//     const favoriteListDelete = favoriteList.getElementsByTagName("li")
//     const lastItem = favoriteListDelete[favoriteListDelete.length - 1]
//     lastItem.parentNode.removeChild(lastItem)
// }

// export default LikeBtn