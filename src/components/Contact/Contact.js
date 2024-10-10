import React, { useState } from "react";
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
import { RiSendPlaneFill } from "react-icons/ri";
import Modal from "../Modal/Modal";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    options: [],
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(""); // Modal message
  const [modalType, setModalType] = useState(""); // Modal type (success or error)


  const options = [
    "Website Design",
    "Branding",
    "Web Development",
    "Illustration",
    "Graphic Design",
    "Custom",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any options are selected
    if (formData.options.length === 0) {
      setModalMessage("Please select at least one option."); 
      setModalType("error"); 
      setIsModalOpen(true); 
      return; // Prevent form submission if no options are selected
    }

    // Handle form submission logic here
    console.log("Form Data Submitted: ", formData);

    // Show success modal
    setModalMessage("Your form has been submitted successfully!"); 
    setModalType("success"); 
    setIsModalOpen(true); 
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
    <Section nopadding id="contact">
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

        <FormButton type="submit">
          Let's chat
        </FormButton>
      </Form>

      {/* Render the modal */}
      {isModalOpen && (
        <Modal
          message={modalMessage} 
          onClose={closeModal} 
          type={modalType} 
        />
      )}
    </Section>
  );
};

export default Contact;
