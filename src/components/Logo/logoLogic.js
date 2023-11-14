export function updateLogo() {
  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".moon");
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 6 && currentHour < 18) {
    sun.style.opacity = 1;
    moon.style.opacity = 0;
  } else {
    sun.style.opacity = 0;
    moon.style.opacity = 1;
  }
}
