// $(document).ready(function() {
//     $.ajax({
//         url: "php/getStocks.php",
//         method: "GET",
//         success: function(data) {
//             let output = '';

//             data.forEach(function(stock) {
//                 output += `
//                 <div class="col-md-4 mb-4">
//                   <div class="card text-center shadow-sm">
//                       <div class="card-body">
//                           <h5 class="card-title">${stock.name}</h5>
//                           <h6 class="card-subtitle mb-2 text-muted">₹${stock.price}</h6>
//                           <p class="card-text ${stock.change.startsWith('+') ? 'text-success' : 'text-danger'}">
//                               ${stock.change}
//                           </p>
//                       </div>
//                   </div>
//                 </div>`;
//             });

//             $("#stocksSection").html(output);
//         },
//         error: function() {
//             $("#stocksSection").html('<p class="text-danger">Stocks data not available.</p>');
//         }
//     });
// });

// Function to fetch stock data and populate the stock cards
function fetchStocks() {
    fetch('php/getStocks.php')
        .then(response => response.json())
        .then(data => {
            const stocksSection = document.getElementById('stocksSection');
            stocksSection.innerHTML = ''; // Clear previous content

            data.forEach(stock => {
                const stockCard = document.createElement('div');
                stockCard.classList.add('col-md-4', 'mb-4');

                // Create the card element
                stockCard.innerHTML = `
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${stock.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Price: ₹${stock.price}</h6>
                            <p class="card-text">Change: <span class="${stock.change.startsWith('+') ? 'text-success' : 'text-danger'}">${stock.change}</span></p>
                        </div>
                    </div>
                `;
                stocksSection.appendChild(stockCard);
            });
        })
        .catch(error => {
            console.error('Error fetching stock data:', error);
        });
}

// Call the fetchStocks function when the page loads
document.addEventListener('DOMContentLoaded', fetchStocks);