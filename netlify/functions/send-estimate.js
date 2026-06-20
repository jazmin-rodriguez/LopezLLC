exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { Allow: "POST" },
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ESTIMATE_TO_EMAIL;
  const fromEmail = process.env.ESTIMATE_FROM_EMAIL || "Website Estimates <onboarding@resend.dev>";

  if (!resendApiKey || !toEmail) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Email service is not configured" })
    };
  }

  let data;

  try {
    data = JSON.parse(event.body || "{}");
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request body" })
    };
  }

  const name = cleanValue(data.name);
  const phone = cleanValue(data.phone);
  const email = cleanValue(data.email || "Not provided");
  const service = cleanValue(data.service);
  const message = cleanValue(data.message);
  const language = cleanValue(data.language || "en");

  if (!name || !phone || !service || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" })
    };
  }

  const subject = "New estimate request from MJ Painting & Remodeling";
  const text = [
    "A new estimate request was submitted from the website.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service needed: ${service}`,
    `Language selected: ${language}`,
    "",
    "Project details:",
    message
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email !== "Not provided" ? email : undefined,
      subject,
      text
    })
  });

  if (!resendResponse.ok) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Email could not be sent" })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
};

function cleanValue(value) {
  return String(value || "").trim().slice(0, 2000);
}
