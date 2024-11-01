function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); // Update every second
updateClock(); // Initialize immediately

// Script.js 
// create a new QRCode instance 
let qrcode = new QRCode( 
	document.querySelector(".qrcode") 
); 

// Initial QR code generation 
// with a default message 
qrcode.makeCode("Why did you scan me?"); 

// Function to generate QR 
// code based on user input 
function generateQr() { 
	if ( 
		document.querySelector("input") 
			.value === "" || 
		document.querySelector("input") 
			.value === " ") { 
		alert( 
			"Input Field Can not be blank!"
		);} 
	else { 
		qrcode.makeCode( 
			document.querySelector( 
				"input"
			).value); 
}}
