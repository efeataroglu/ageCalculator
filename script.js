const btn = document.querySelector("button");
const result = document.querySelector("p");

console.log(result);

btn.addEventListener("click", calculate);

function calculate() {
  let input = document.querySelector("input").value;

  let passingTime = new Date(input).getTime();
  let now = new Date().getTime();

  let age = now - passingTime;

  let hour = Math.floor(age / (1000 * 60 * 60));
  let day = Math.floor(age / (1000 * 60 * 60 * 24));
  let month = Math.floor(age / (1000 * 60 * 60 * 24 * 30.4375));
  let year = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));

  result.innerHTML = `
                        <ul>
                            <li>Year: ${year}</li>
                            <li>Month: ${month}</li>
                            <li>Day: ${day}</li>
                            <li>Hour: ${hour}</li>
                        </ul>
  `;
}
