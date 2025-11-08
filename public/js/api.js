// public/js/api.js - UPDATED for Tailwind CSS

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fetchDataButton');
    const dataContainer = document.getElementById('dataContainer');
    // The URL is the endpoint defined in app.js
    const API_URL = '/api/items'; 

    // Function to fetch and display data using Async/Await
    const fetchData = async () => {
        // Tailwind classes for a loading message
        dataContainer.innerHTML = '<p class="text-center p-4 bg-yellow-100 text-yellow-800 rounded-lg">Loading data from Express server...</p>';
        
        try {
            // 1. Fetch the data
            const response = await fetch(API_URL);
            
            // Check for HTTP errors (e.g., 404, 500)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            // 2. Parse the JSON response
            const items = await response.json();
            
            // 3. Display the data in a nicely formatted layout using Tailwind
            displayData(items);

        } catch (error) {
            console.error('Error fetching data:', error);
            // Tailwind classes for an error message
            dataContainer.innerHTML = `<p class="text-center p-4 bg-red-500 text-white rounded-lg">Failed to load data. Error: ${error.message}</p>`;
        }
    };

    /**
     * Function to render the fetched data into the DOM using Tailwind classes.
     * @param {Array<Object>} items - The array of item objects from the server.
     */
    const displayData = (items) => {
        let htmlContent = '<div class="overflow-x-auto">'; // Add wrapper for responsiveness
        
        // Start the table with general styling, shadow, and rounded corners
        htmlContent += '<table class="min-w-full divide-y divide-gray-200 shadow-xl rounded-lg">';
        
        // Table Header using Tailwind classes
        htmlContent += '<thead><tr>';
        // Header cells use indigo background, white text, and padding/alignment
        htmlContent += '<th class="px-6 py-3 bg-indigo-600 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tl-lg">ID</th>';
        htmlContent += '<th class="px-6 py-3 bg-indigo-600 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>';
        htmlContent += '<th class="px-6 py-3 bg-indigo-600 text-left text-xs font-medium text-white uppercase tracking-wider">Price</th>';
        htmlContent += '<th class="px-6 py-3 bg-indigo-600 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tr-lg">Category</th>';
        htmlContent += '</tr></thead>';
        
        // Table Body
        htmlContent += '<tbody class="bg-white divide-y divide-gray-200">';
        
        // Table Rows
        items.forEach((item, index) => {
            // Alternate row colors for better readability (Zebra striping)
            const rowBg = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
            
            htmlContent += `
                <tr class="${rowBg} hover:bg-indigo-100 transition duration-150 ease-in-out">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.id}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${item.name}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600">$${item.price.toFixed(2)}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${item.category}</td>
                </tr>
            `;
        });

        htmlContent += '</tbody></table>';
        htmlContent += '</div>'; // Close overflow wrapper
        
        dataContainer.innerHTML = htmlContent;
    };

    // 4. Attach an event listener to the button
    button.addEventListener('click', fetchData);
});