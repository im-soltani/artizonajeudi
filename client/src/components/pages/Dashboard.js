import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {getCurrentProfile} from "../../js/action/profileActions";
import ProfileActions  from "./ProfileActions"
//import addProfile from "../addProfile"; 
const Dashboard = () => {
  const user = useSelector((state) => state.authReducer.user);
  const profile = useSelector((state) => state.profileReducer.profile);
 const dispatch = useDispatch();
 const getProfile = () => dispatch(getCurrentProfile());
  useEffect(() => {
    (getProfile());
 })
  let dashboardContent; 
  if (!user ) 
    return <h1>Spinner...</h1>
    else{
      // // User is login but has no profile
      if (Object.keys(profile).length > 0) {

        dashboardContent = (
          <div>
          <p className="lead text-muted">
            
          {profile.profileName}<br/>
          {profile.description}<br/>
          {profile.adresse}<br/>
          {profile.codePostale}<br/>
          {profile.phoneNumber}<br/>
          {profile.Diploma}<br/>
         
           </p>

           <div style={{ marginBottom: "60px" }} />
           <ProfileActions profile={profile}/>
           
         </div>
       )}
        else{
       // profile existe
       dashboardContent = (
        <div>
        <h1>
         {user.firstName} {user.lastName} : {user.email}
        </h1>
        <p>You have not yet setup a profile, please add some info</p>
              <Link to="/addProfile" className="btn btn-lg btn-info">
                Create Profile
              </Link>
      </div>
      );
       }}
  return (
    <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
    </div>
  );
};
export default Dashboard;











