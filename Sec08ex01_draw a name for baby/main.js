const btn = document.querySelector("button");
const generatedName = document.querySelector('div');
const names = ["Pola", "Jagoda", "Hania", "Zuzia", "Maja", "Lena", "Ola", "Tola"];

const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    generatedName.textContent = names[index];
}
// const nameGenerator = () => {
//     console.log("klik")
// }

btn.addEventListener('click', nameGenerator);