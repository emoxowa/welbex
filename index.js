document.addEventListener("DOMContentLoaded", function () {
  const currentYearElement = document.getElementById("currentYear");
  try {
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
  } catch (error) {
    console.error("Ошибка при получении текущего года:", error);
    currentYearElement.textContent = "2022";
  }
});
