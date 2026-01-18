const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/support", (req, res) => {
  const { name, phone, issue, urgency } = req.body;

  let autoResponse = "";

  if (urgency === "High") {
    autoResponse = "This seems urgent. Our volunteers will contact you as soon as possible.";
  } else if (urgency === "Medium") {
    autoResponse = "Your request has been noted. We will reach out within 24 hours.";
  } else {
    autoResponse = "Thank you for contacting us. We will get back to you shortly.";
  }

  res.json({
    message: "Support request submitted successfully",
    summary: autoResponse,
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
