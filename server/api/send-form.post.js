import { sendEmail } from "../utils/SendEmail.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

//   const recaptchaRes = await $fetch(
//     "https://www.google.com/recaptcha/api/siteverify",
//     {
//       method: "POST",
//       body: new URLSearchParams({
//         secret: config.recaptchaSecretKey,
//         response: body.recaptchaToken,
//       }),
//     }
//   );

//   if (!recaptchaRes.success) {
//     throw createError({ statusCode: 400, statusMessage: "Invalid reCAPTCHA" });
//   }
  const info = await sendEmail({
    to: config.MAILERSEND_TO_EMAIL,
    subject: "New message from client",
    html: `
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Message:</strong> ${body.message}</p>
    `,
  });

  return {
    success: true,
    messageId: info.messageId,
  };
});
