document.addEventListener("DOMContentLoaded", () => {
  const sudentsGrid = document.querySelector("#students-grid");
  for (let i = 0; i < 12; i++) {
    const shouldDrawStudent = i > 4;
    sudentsGrid.innerHTML += `
    <div class="flex"> <!--Student details-->
        <div class="flex flex-col justify-around mx-3">
          ${Array.from({ length: 10 }, (_, i) => i + 1)}
          <div class="w-8 h-8 rounded-full object-coverc bg-red-500"></div>
          <div class="w-8 h-8 rounded-full object-coverc bg-red-500"></div>
        </div>
        <div class="h-[7rem] w-[3rem] bg-red-200 z-30 flex flex-col justify-around">
          <div class="h-[3rem] w-[2rem] bg-stone-400 my-2 mx-1 z-40 flex flex-col justify-center items-center">
            <img src="/pages/asstes/apple.png" alt="apple icon" class="w-1/2 rotate-90">
          </div>
          <div class="h-[3rem] w-[2rem] bg-stone-400 my-2 mx-1 z-40 flex flex-col justify-center items-center">
            <img src="/pages/asstes/apple.png" alt="apple icon" class="w-1/2 rotate-90">
          </div>
        </div> <!--Students desktop-->
      </div>
    `;
  }
});
