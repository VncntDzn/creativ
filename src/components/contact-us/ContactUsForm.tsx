import { Box, TextField, Button } from "@mui/material";
import { sendForm } from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef: any = useRef();
  const handleSendEmail = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      sendForm(
        "service_rrd41xc",
        "template_gp5d63t",
        formRef.current,
        "user_vD7t8ZbK4cMmk6BSCIVkp"
      );

      //form reset
      e.target.reset();
      setLoading(false);
      toast.success("Email sent!");
    } catch (error) {
      toast.error("Something went wrong.")
      console.log(error);
      alert(`${error}`);
    }
  };

  return (
    <Box>
      <ToastContainer />
      <Box sx={{ marginX: { sm: "8rem", md: "10vw", lg: 0 } }}>
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
          <Button disabled={loading} type="submit" variant="contained">
            Send Email
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUsForm;
