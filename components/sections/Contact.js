import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div>
      <h3
        id="contact-form"
        className="text-4xl xs:text-3xl text-gradient font-bold w-full mb-4"
      >
        Contact Form
      </h3>
      <ContactForm />
    </div>
  );
}
