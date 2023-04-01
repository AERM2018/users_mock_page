document.addEventListener("DOMContentLoaded", () => {
  const sudentsGrid = document.querySelector("#students-grid");
  for (let i = 0; i < 12; i++) {
    const shouldDrawStudent = [2, 3, 6, 7, 10, 11].includes(i);
    console.log({ shouldDrawStudent });
    sudentsGrid.innerHTML += `
    <div class="flex"> <!--Student details-->
        <div class="flex flex-col justify-around mx-3">
          ${Array.from({ length: 2 }, (_, i) => "")
            .map(
              (e) =>
                `<div class="w-8 h-8 rounded-full object-coverc ${
                  shouldDrawStudent ? "bg-red-500" : "bg-transparent"
                }"></div>`
            )
            .join("\n")}
        </div>
        <div class="h-[7rem] w-[3rem] bg-red-200 z-30 flex flex-col justify-around">
        </div> <!--Students desktop-->
      </div>
    `;
  }
});
