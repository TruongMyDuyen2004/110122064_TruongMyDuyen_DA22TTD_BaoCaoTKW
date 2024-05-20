function submitOrder() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var address = document.getElementById('address').value;
            var quantity = document.getElementById('quantity').value;

            var tableBody = document.getElementById('order-table-body');
            var newRow = tableBody.insertRow();
            var cellIndex = newRow.insertCell(0);
            var cellName = newRow.insertCell(1);
            var cellEmail = newRow.insertCell(2);
            var cellAddress = newRow.insertCell(3);
            var cellQuantity = newRow.insertCell(4);

            cellIndex.appendChild(document.createTextNode(tableBody.rows.length));
            cellName.appendChild(document.createTextNode(name));
            cellEmail.appendChild(document.createTextNode(email));
            cellAddress.appendChild(document.createTextNode(address));
            cellQuantity.appendChild(document.createTextNode(quantity));
        }