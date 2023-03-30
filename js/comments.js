// const getComments = async () => {
//   const comments = await execApiCall(
//     "/posts",
//     "GET"
//   );
//   console.log({comments})
// const commentsBox = document.querySelector("#comments-box")
// comments.forEach( comment => {
//   const newComment = document.createElement('div')
//   newComment.className = "max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"
//   newComment.innerHTML = `
//     <>
//       <div class="flex justify-center md:justify-end -mt-16">
//         <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="asstes/usuario.png">
//       </div>
//       <div>
//         <h2 class="text-gray-800 text-3xl font-semibold">${commnet.total_likes}</h2>
//         <p class="mt-2 text-gray-600">${comment.text}</p>
//       </div>
//       <div class="flex justify-end mt-4">
//         <a href="#" class="text-xl font-medium text-indigo-500">${comment.user.full_name}</a>
//       </div>
//    </>`;
//   commentsBox.append(newComment);
// })
// }

// const getComments = async () => {
//   console.log("first!!");
//   const comments = await execApiCall("/posts", {},"GET")
//   console.log({comments})
// };

// document.addEventListener("DOMContentLoaded", async (event) => {
// });

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
  execApiCall("/posts", {}, "GET").then((comments) =>
    console.log({ comments })
  );
});
