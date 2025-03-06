"use client";
import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
    });

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if (!formData.name || !formData.email || !formData.project) {
            toast.error("Please fill out all fields.");
            return;
        }
    
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
    
        const emailParams = {
            from_name: formData.name,
            email: formData.email,
            message: formData.project
        };
    
        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                emailParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(
                () => {
                    toast.success("Message Sent!");
                    setFormData({ name: "", email: "", project: "" });
                },
                (error) => {
                    toast.error("Failed to send message!");
                    console.error("EmailJS Error:", error.text);
                }
            );
    };
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className='contact__container'>
            <div className='contact__content'>
                <div className='contact__title'>Send Me A Message!</div>
                <form onSubmit={sendEmail} className='contact__form'>
                    <div className='contact__form_div'>
                        <label className='contact__form_tag'>Name</label>
                        <input
                            type='text'
                            name='name'
                            className='contact__form_input'
                            placeholder='Your name...'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='contact__form_div'>
                        <label className='contact__form_tag'>Email</label>
                        <input
                            type='email'
                            name='email'
                            className='contact__form_input'
                            placeholder='Your email...'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='contact__form_div'>
                        <label className='contact__form_tag'>Message</label>
                        <textarea
                            name='project'
                            cols={30}
                            rows={10}
                            className='contact__form_input'
                            placeholder='Your message...'
                            value={formData.project}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit' className='contact__button '>
                        Send 
                    </button>
                </form>
            </div>
        </div>
    )
}
