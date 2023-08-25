import React from "react";
import Form from "./shared/form";

const ContactFormSection: React.FC = () => (
  <section id="contact" className="size-md flex flex-col gap-8">
    <h2 className="headline4">
      Klingt interessant? Dann trete mit uns in Kontakt!
    </h2>
    <Form formId="contact"></Form>
  </section>
);

export default ContactFormSection;
