import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"; // Assurez-vous de créer ce fichier CSS pour personnaliser l'apparence

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      const templateParams = { name, email, subject, message };
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              {...register("name", {
                required: { value: true, message: "Please enter your name" },
                maxLength: { value: 30, message: "Use 30 characters or less" },
              })}
              className="form-control"
              placeholder="Name"
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              className="form-control"
              placeholder="Email address"
            />
            {errors.email && (
              <span className="error-message">
                Please enter a valid email address
              </span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              {...register("subject", {
                required: { value: true, message: "Please enter a subject" },
                maxLength: {
                  value: 75,
                  message: "Subject cannot exceed 75 characters",
                },
              })}
              className="form-control"
              placeholder="Subject"
            />
            {errors.subject && (
              <span className="error-message">{errors.subject.message}</span>
            )}
          </div>
          <div className="form-group">
            <textarea
              rows={3}
              name="message"
              {...register("message", { required: true })}
              className="form-control"
              placeholder="Message"
            />
            {errors.message && (
              <span className="error-message">Please enter a message</span>
            )}
          </div>
          <button
            className="submit-btn btn btn-primary"
            disabled={disabled}
            type="submit"
          >
            {disabled ? "Submitting..." : "Submit"}
          </button>
        </form>
        {alertInfo.display && (
          <div className={`alert alert-${alertInfo.type}`} role="alert">
            {alertInfo.message}
            <button
              type="button"
              className="close"
              onClick={() =>
                setAlertInfo({ display: false, message: "", type: "" })
              }
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
