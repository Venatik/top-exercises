const admitGuests = [];
const rejectGuests = [];
const guestList = ["Bob", "Phil", "Lola", "Liz", "Anne"];

let admit = document.getElementById("admit");
let reject = document.getElementById("reject");

for (guest of guestList) {
    if (guest === "Phil" || guest === "Lola") {
        rejectGuests.push(guest);
        reject.textContent = `Rejected: ${rejectGuests.join(", ")}`;
    }
    else {
        admitGuests.push(guest);
        admit.textContent = `Admitted: ${admitGuests.join(", ")}`;
    }
}

console.log(admitGuests);
console.log(rejectGuests);