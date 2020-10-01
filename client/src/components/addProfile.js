import React, {  useEffect,useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { createProfile } from "../js/action/profileActions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
  const AddProfile = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [formData, setFormData] = useState({
      profileName: "",
      description: "",
      adress:"",
      codePostal:"",
      phoneNumber:"",
      Diploma:"",
    });
    const handleFormChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleConfim = () => {
      dispatch(createProfile(formData));
      history.push("/dashboard");
    };
return(
<div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
        <h1>Create A Profile</h1>
          <form>
              <label for="profileName">profileName</label>
              <input
                onChange={handleFormChange}
                type="text"
                name="profileName"
                id="profileName"
                placeholder="Enter your profileName ...."
              /><br/>
              <label for="description">description</label>
              <input
                onChange={handleFormChange}
                type="text"
                name="description"
                id="description"
                placeholder="Enter your description ...."
              /><br/>
              <label for="adress">adress</label>
              <input
                onChange={handleFormChange}
                type="text"
                name="adress"
                id="adress"
                placeholder="Enter your adress ...."
              />
              <br/>
              <label for="codePostal">codePostal</label>
              <input
                onChange={handleFormChange}
                type="text"
                name="codePostal"
                id="codePostal"
                placeholder="Enter your codePostal ...."
              />
              <br/>
              <label for="phoneNumber">phoneNumber</label>
              <input
                onChange={handleFormChange}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phoneNumber ...."
              />
               <label for="Diploma">Diploma</label>
              <input
                onChange={handleFormChange}
                type="text"
                name="Diploma"
                id="Diploma"
                placeholder="Enter your Diploma ...."
              />
               <button
                   onClick={() => {
                   handleConfim();
                   }}
                  >
            Confirm
          </button>
          </form>
          </div>
          </div>
        </div>
      </div>
    );
};
export default AddProfile





