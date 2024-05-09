function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value.trim();
    const unitSelect = document.getElementById("unitSelect");
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
  
    if (temperatureInput === "" || isNaN(temperatureInput)) {
      alert("Please enter a valid temperature!");
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
  
    let result;
    if (selectedUnit === "celsius") {
      result = (temperature * 9/5) + 32;
      document.getElementById("result").innerHTML = `${temperature}° Celsius is ${result.toFixed(2)}° Fahrenheit`;
    } else {
      result = (temperature - 32) * 5/9;
      document.getElementById("result").innerHTML = `${temperature}° Fahrenheit is ${result.toFixed(2)}° Celsius`;
    }
  }
  