document.getElementById("pricing-toggle").addEventListener("change", function () {
    const isMonthly = this.checked;
    document.getElementById("basic-price").textContent = isMonthly ? "$19.99" : "$199.99";
    document.getElementById("professional-price").textContent = isMonthly ? "$24.99" : "$249.99";
    document.getElementById("master-price").textContent = isMonthly ? "$39.99" : "$399.99";
  });
  