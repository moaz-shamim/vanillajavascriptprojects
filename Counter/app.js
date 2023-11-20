let count = 0;
value = document.getElementById("value");
btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const styles = event.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "blue";
    }
    if (count === 0) {
      value.style.color = "green";
    }

    value.textContent = count;
  });
});
