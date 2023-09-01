// 
document.getElementById("text-zone").addEventListener('keyup', function() {
    let textZone = document.getElementById("text-zone");

    document.getElementById("counter").innerHTML = textZone.value.length;
});