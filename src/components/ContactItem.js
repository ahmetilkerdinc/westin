import React from 'react'
const ContactItem = (props) => {
    return (
    <div className="info-box">
        <div className="item-icon">
            <img src={props.resim} alt="/" />
        </div>
        <div className="info-text">
            <h5 className=" mb-0">{props.bilgiler}</h5>
            <small> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3f5a525e56537f5a475e524f535a115c5052">{props.bilgi}</a></small>
        </div>
    </div>
    );
};
export default ContactItem;