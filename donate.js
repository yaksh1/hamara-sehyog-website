function selectOption (selectedOption) {
  document.getElementById('donationAmount').value = selectedOption.value
}

function showQrCode () {
  // Get the amount from the textarea
  const amount = document.getElementById('donationAmount').value

  // Define UPI data
  let upi = {
    pa: 'yakshgandhi1@okaxis', // UPI ID
    pn: 'Foody', // Payee name
    tn: 'Donation', // Transaction note
    am: amount, // Amount from textarea
    cu: 'INR' // Currency
  }

  // Generate UPI link
  let upiLink = `upi://pay?${new URLSearchParams(upi).toString()}`

  // Generate QR code link using Google Charts API
  const qrCodeUrl = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${encodeURIComponent(
    upiLink
  )}`

  // Set QR code image source
  document.getElementById('qrImage').src = qrCodeUrl

  // Show QR code popup
  document.getElementById('qrPopup').style.display = 'block'
}

// Close popup function
function closePopup () {
  document.getElementById('qrPopup').style.display = 'none'
}
