import React, { useState } from 'react';
import Title from '../title/Title';
import { getCurrentTextData } from '../../Data_File/dataAbstract'; 
import "./form.css"
function Form() {
    const [status, setStatus] = useState("");
    
    
    const pageText = getCurrentTextData("pageText");
    const formLabels = getCurrentTextData("formLabels");
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sent");
        setTimeout(() => setStatus(""), 3000);
       ;
    };

    return (
        <section className={`contact ${status}`} id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <Title title={pageText.formPageHeading} />
                    <p>{formLabels.subtext}</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">{formLabels.name}</label>
                        <input
                            type="text"
                            id="name"
                            placeholder={formLabels.placeholderName}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{formLabels.email}</label>
                        <input
                            type="email"
                            id="email"
                            placeholder={formLabels.placeholderEmail}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">{formLabels.message}</label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder={formLabels.placeholderMsg}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="contact-btn">
                        {status === "sent" ? "✔" : formLabels.btn}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Form;
