import React, {useState, useEffect} from 'react';
import fakeFetch from "../../utils/fakeFetch";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import UserCard from "./UserCard";
import data from '../../utils/data.json'

function Users() {
const [data, setData] = useState([]);
const [checked, setChecked] = useState(false)
const [obj, setObj] = useState({
      page: 1, limit: 5, orderBy:"desc"
})

const handleChecked = () => {
  setChecked(!checked)
  
  if(checked){
    setObj(obj => ({
      ...obj,
      orderBy: "desc"
    }))
  } else {
    setObj(obj => ({
      ...obj,
      orderBy: "asc"
    }))
  }
 
}
const select = (e) => {
  setObj(obj => ({
    ...obj,
      limit: JSON.parse(e.target.value)
  }))
}
 useEffect(() => {
  const getData = async() => {
    const allData = await fakeFetch(obj);

  setData(allData)
  }
  getData()
  
 }, [obj,checked])


  return (
    <div>
      <div data-testid="loading-indicator">...loading</div>
      <div data-testid="error-indicator">Error: Something went wrong</div>
      <UserCard data={data}/>
      <Filters handleChecked={handleChecked} checked={checked} select={select}/>
      <Pagination />
    </div>
  );
}

export default Users;
