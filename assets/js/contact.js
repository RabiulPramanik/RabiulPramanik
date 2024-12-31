const CreateContact = () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const payload = {
        Name: name,
        email: email,
        message: message
    };

    fetch("https://protfoliobackend-vbw4.onrender.com/contacts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    })
    .then((res) => {
        if (!res.ok) {
            return res.json().then(err => { 
                console.error("Error Response:", err);
                if (err.email) {
                    alert("Invalid email address. Please enter a valid email.");
                } else {
                    alert("Failed to send your message. Please try again.");
                }
                throw new Error(`Server error: ${res.status}`);
            });
        }
        return res.json();
    })
    .then((data) => {
        alert("Message sent successfully! Thank you for contacting us.");
        console.log("Response:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
};
