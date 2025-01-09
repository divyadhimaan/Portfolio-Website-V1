import React, { useEffect, useState } from "react";
import {
  Section,
  SectionText,
  SectionTitle,
  SecondaryBtn,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  FormRow,
  InputContainer,
  OptionButtonGroup,
  OptionButton,
} from "../../styles/GlobalComponents";
import Modal from "../Modal/Modal";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    options: [],
  });


  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(""); // Modal message
  const [modalType, setModalType] = useState(""); // Modal type (success or error)

  const options = [
    "Counsel",
    "Website Design",
    "Web Development",
    "Illustration",
    "Graphic Design"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.options.length === 0) {
      setModalMessage("Please select at least one option.");
      setModalType("error");
      setIsModalOpen(true); // Show error modal
      return;
    }

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company_name: formData.companyName,
        options: formData.options.join(", "),
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, userId);

      if (response.status === 200) {
        setModalMessage("Your form has been submitted successfully!");
        setModalType("success");
        setIsModalOpen(true); // Show success modal
        setFormData({ name: "", email: "", companyName: "", options: [] }); // Reset form
      }
    } catch (error) {
      console.log('FAILED...', error);
      setModalMessage("There was an error sending your message. Please try again.");
      setModalType("error");
      setIsModalOpen(true); // Show error modal
    }
  };

  const handleOptionClick = (option) => {
    setFormData((prevState) => {
      const updatedOptions = prevState.options.includes(option)
        ? prevState.options.filter((opt) => opt !== option)
        : [...prevState.options, option];
      return { ...prevState, options: updatedOptions };
    });
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };


  return (
    <Section id="contact">
      <SectionTitle main>Tell me about your idea</SectionTitle>
      {/* <SectionText>Reach out and let's chat.</SectionText> */}

      <Form onSubmit={handleSubmit}>
        <FormRow>
          <InputContainer>
            <FormLabel htmlFor="name">Name*</FormLabel>
            <FormInput
              id="name"
              name="name"
              type="text"
              placeholder="Hello..."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="email">Email*</FormLabel>
            <FormInput
              id="email"
              name="email"
              type="email"
              placeholder="Where can I reply?"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputContainer>
        </FormRow>
        <InputContainer>
          <FormLabel htmlFor="companyName">Company Name</FormLabel>
          <FormInput
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Your company or website?"
            value={formData.companyName}
            onChange={handleChange}
          />
        </InputContainer>

        {/* Button-like option selector */}
        <InputContainer>
          <FormLabel>What's in your mind?*</FormLabel>
          <OptionButtonGroup>
            {options.map((option) => (
              <OptionButton
                key={option}
                type="button"
                selected={formData.options.includes(option)}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </OptionButton>
            ))}
          </OptionButtonGroup>
        </InputContainer>

        <FormButton type="submit">Let's chat</FormButton>
      </Form>

      {/* Render the modal */}
      {isModalOpen && (
        <Modal message={modalMessage} onClose={closeModal} type={modalType} />
      )}
    </Section>
  );
};

export default Contact;
