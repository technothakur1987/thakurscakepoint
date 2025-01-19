import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


const User = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { loader,bakeryUser } = useSelector(
    (state) => state.cakeSlice
  );

  console.log(bakeryUser)

  
  return (
    <div>Welcome to user Section</div>
  )
}

export default User