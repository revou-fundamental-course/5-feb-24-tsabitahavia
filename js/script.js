
function konversiSuhu2() {
    var celcius = parseFloat(document.getElementById("celcius").value);
    var fahrenheit = (celcius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    
    // Menetapkan nilai rumus kalkulasi
    document.getElementById("cara_kalkulasi").value = "Fahrenheit = (°C × 9/5) + 32\n"
                                                          + "Fahrenheit = (" + celcius + " × 9/5) + 32\n"
                                                          + "Fahrenheit = " + fahrenheit.toFixed(2);
    // Menampilkan deskripsi kalkulasi
    document.getElementById("deskripsi_kalkulasi").style.display = "block";
}

function resetForm() {
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("cara_kalkulasi").value = "";
    document.getElementById("deskripsi_kalkulasi").style.display = "none";
}

function reverseConversion() {
    var celcius = parseFloat(document.getElementById("fahrenheit").value);
    var fahrenheit = (celcius - 32) * 5/9;
    document.getElementById("celcius").value = fahrenheit.toFixed(2);
    document.getElementById("cara_kalkulasi").value = "";
    document.getElementById("deskripsi_kalkulasi").style.display = "none";
}


