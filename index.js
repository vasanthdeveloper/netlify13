document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const dataInput = document.getElementById('data');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const formatSelect = document.getElementById('format');
    const qrColorInput = document.getElementById('qrColor');
    const bgColorInput = document.getElementById('bgColor');
    const qrcodeDiv = document.getElementById('qrcode');
    const downloadLink = document.getElementById('downloadLink');
    const container = document.querySelector('.container'); 


    generateBtn.addEventListener('click', () => {
        const data = encodeURIComponent(dataInput.value);
        const width = widthInput.value;
        const height = heightInput.value;
        const format = formatSelect.value;
        const qrColor = qrColorInput.value.substring(1); 
        const bgColor = bgColorInput.value.substring(1); 
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${width}x${height}&format=${format}&color=${qrColor}&bgcolor=${bgColor}`;

       
        
           

        qrcodeDiv.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`;

       

        downloadLink.style.display = 'block';
        downloadLink.href = qrCodeUrl;
        downloadLink.download = `qrcode.${format}`;
    });
});
