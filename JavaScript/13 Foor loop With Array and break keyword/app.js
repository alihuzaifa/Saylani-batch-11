var cleanCities = ["karachi", "Lahore", "Faisalabad", "Multan"];
var userCity = prompt("Enter Your City in Pakistan");
var cityFlag = false;
for (var i = 0; i < cleanCities.length; i++) {
    if (userCity === cleanCities[i]) {
        cityFlag = true;
        break
    }
}
if (cityFlag === true) {
    alert("Cleaned City")
} else {
    alert("Not cleaned City")
}