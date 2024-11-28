function getFormvalue(event) {
            event.preventDefault(); // Prevent the default form submission
            // Get the values of the first name and last name fields
            let fname = document.getElementsByName("fname")[0].value;
            let lname = document.getElementsByName("lname")[0].value;
            // Display the full name in an alert
            alert(`${fname} ${lname}`);
        }
