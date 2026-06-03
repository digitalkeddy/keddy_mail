

// import express from "express";
// import nodemailer from "nodemailer";
// import Contact from "../models/Contact.js";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const { name, email, phone, service, message } = req.body;

//     // Save form data to DB
//     await Contact.create({
//       name,
//       email,
//       phone,
//       // service,
//       message,
//     });

//     // Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     // Send mail to owner/admin
//     await transporter.sendMail({
//       from: process.env.MAIL_USER,
//       to: process.env.MAIL_USER,

//       subject: `New Tour Inquiry - ${name}`,

//       html: `
//         <div style="font-family: Arial, sans-serif; padding:20px; background:#f4f4f4;">
          
//           <div style="max-width:600px; margin:auto; background:#ffffff; padding:30px; border-radius:10px;">

//             <h2 style="margin-bottom:20px; color:#222;">
//               New Tour & Travel Enquiry
//             </h2>

//             <table style="width:100%; border-collapse:collapse;">

//               <tr>
//                 <td style="padding:10px; font-weight:bold;">Name:</td>
//                 <td style="padding:10px;">${name}</td>
//               </tr>

//               <tr style="background:#f9f9f9;">
//                 <td style="padding:10px; font-weight:bold;">Email:</td>
//                 <td style="padding:10px;">${email}</td>
//               </tr>

//               <tr>
//                 <td style="padding:10px; font-weight:bold;">Phone:</td>
//                 <td style="padding:10px;">${phone}</td>
//               </tr>

             
//               <tr>
//                 <td style="padding:10px; font-weight:bold;">Message:</td>
//                 <td style="padding:10px;">${message}</td>
//               </tr>

//             </table>

//           </div>

//         </div>
//       `,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Inquiry submitted successfully",
//     });

//   } catch (err) {
//     console.log(err);

//     res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//     });
//   }
// });

// export default router;


import express from "express";
import nodemailer from "nodemailer";
import Quote from "../models/Quote.js"; // Create this model

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { fullName, company, phone, email, budget, project } = req.body;

    // Save form data to DB
    await Quote.create({
      fullName,
      company,
      phone,
      email,
      budget,
      project,
    });

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
  
      },
    });

    // Send mail to owner/admin
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `New Website Quote Request - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; background:#f4f4f4;">
          <div style="max-width:600px; margin:auto; background:#ffffff; padding:30px; border-radius:10px;">
            <h2 style="margin-bottom:20px; color:#222;">
              New Website Quote Request
            </h2>

            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:10px; font-weight:bold;">Full Name:</td>
                <td style="padding:10px;">${fullName}</td>
              </tr>

              <tr style="background:#f9f9f9;">
                <td style="padding:10px; font-weight:bold;">Company:</td>
                <td style="padding:10px;">${company || "N/A"}</td>
              </tr>

              <tr>
                <td style="padding:10px; font-weight:bold;">Phone:</td>
                <td style="padding:10px;">${phone}</td>
              </tr>

              <tr style="background:#f9f9f9;">
                <td style="padding:10px; font-weight:bold;">Email:</td>
                <td style="padding:10px;">${email}</td>
              </tr>

              <tr>
                <td style="padding:10px; font-weight:bold;">Budget:</td>
                <td style="padding:10px;">${budget}</td>
              </tr>

              <tr style="background:#f9f9f9;">
                <td style="padding:10px; font-weight:bold;">Project Description:</td>
                <td style="padding:10px;">${project || "N/A"}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Quote request submitted successfully",
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default router;