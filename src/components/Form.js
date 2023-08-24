import {useState,useEffect} from "react";

export default function Form (props){

    // hold form data. useEFFECT NOT USED??
const [formData, setFormData] = useState({
    searchterm: "",
});

// update formData during user input

const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
};

// pass search term to datasearch prop(the formData function in Apps)
const handleSubmit = (evt) => {
    evt.preventDefault( );
    props.datasearch(formData.searchterm);
};

    return (
        <div className="location-info">
            <form on Submit={handleSubmit}>
                <input 
                    type="text"
                    category="searchterm"
                    date="searchterm"
                    location="searchterm"
                    onChange={handleChange}
                   />
                   <input type="submit" value="submit" />
            </form>
            <h3>Event Date and Location Info</h3>
        </div>
    );
};
