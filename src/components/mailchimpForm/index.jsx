import React, {useEffect, useState} from "react";
import './style.scss'
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email
            });
    }

    const handleChange = e => {
        setEmail(e.target.value);
    }

    useEffect(() => {
        if (status === "success") {
            setEmail('');
        }
    }, [status, message]);

    return (
        <form className='mt-20 me-lg-5' onSubmit={(e)=> handleSubmit(e)}>
            <div className="cta-form d-flex align-items-center justify-content-between">
                {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html:message}} />}
                {status === "success" && <div style={{ color: "green" }}>Signed Up!</div>}
                {status !== "success" ? (
                    <>
                        <div className="cta-input">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" value={email} onChange={e => handleChange(e)} />
                        </div>
                        <div className="cta-btn">
                            <button label="subscribe" type="submit" className="btn btn-primary btn-lg">Request Early Access</button>
                        </div>
                    </>
                ) : null}
            </div>
        </form>
    );
};

const MailchimpFormContainer = props => {
    const postUrl = `https://gmail.us17.list-manage.com/subscribe/post?u=4020e8073a7ab1b807895de68&id=ca33eac5bd`

    return (
        <div className="mailchimp-form-container">
            <MailchimpSubscribe url={postUrl} render={({ subscribe, status, message}) => (
                <CustomForm status={status} message={message} onValidated={formData => subscribe(formData)}/>
            )} />
        </div>
    )
}

export default MailchimpFormContainer;