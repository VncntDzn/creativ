import { Box, TextField, Button } from "@mui/material";
import { sendForm } from "@emailjs/browser";
import { useRef } from "react";

const ContactUsForm = () => {
  const formRef: any = useRef();
  const handleSendEmail = async (e:any) => {
    e.preventDefault();
    try {
      sendForm(
        "service_rrd41xc",
        "template_gp5d63t",
        formRef.current,
        "user_vD7t8ZbK4cMmk6BSCIVkp"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <form ref={formRef} onSubmit={handleSendEmail}>
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          placeholder="Email"
          type="email"
          required
          /* email-js template */
          name="from_name"
        />
        <TextField
          sx={{ marginY: 1 }}
          fullWidth
          variant="outlined"
          label="Body"
          rows={10}
          placeholder="Body"
          type="text"
          multiline
          size="medium"
          required
          /* email-js template */
          name="message"
        />
        <Button type="submit" variant="contained">
          Send Email
        </Button>
      </form>
    </Box>
  );
};

export default ContactUsForm;
