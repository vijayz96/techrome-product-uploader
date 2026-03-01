let counter = 1;

function generateSKU() {
    let sku = "TEC" + String(counter).padStart(6, '0');
    counter++;
    return sku;
}

document.getElementById("productForm").addEventListener("submit", function(e){
    e.preventDefault();

    let sku = generateSKU();

    JsBarcode("#barcode", sku, {
        format: "CODE128",
        lineColor: "#00ff99",
        width: 2,
        height: 60,
        displayValue: true
    });

    alert("Product Submitted with SKU: " + sku);
});