function convertTemperature() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const conversion = document.getElementById("conversionType").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.innerHTML = "Please enter a valid number.";
    return;
  }

  let result;

  if (conversion === "CtoF") {
    result = (temp * 9 / 5) + 32;
    resultDiv.innerHTML = `${temp}°C = ${result.toFixed(2)}°F`;
  } else if (conversion === "FtoC") {
    result = (temp - 32) * 5 / 9;
    resultDiv.innerHTML = `${temp}°F = ${result.toFixed(2)}°C`;
  }
}
