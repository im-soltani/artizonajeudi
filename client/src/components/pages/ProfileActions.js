import React from 'react'
import { Link } from "react-router-dom"
import {useDispatch} from  "react-redux"
import {clearCurrentProfile} from "../../js/action/profileActions";


 function ProfileActions({profile}) {

const dispatch = useDispatch()
 const deleteProfile=()=>{
            dispatch(clearCurrentProfile(profile.id))
        }

    return (
        <div>
            <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <button  onClick={deleteProfile}  className="btn btn-light">
        Clear Profile
      </button>
     
    </div>
        </div>
    )
}
export default ProfileActions