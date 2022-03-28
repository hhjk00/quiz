import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState("")

  const handleChange = (value) => {
    setValue(value);

    if(value == 1){
        alert ("1점")
        setRating("1점")
    }
    if(value == 2){
        alert ("2점")
        setRating("2점")
    }
    if(value == 3){
        alert ("3점")
        setRating("3점")
    }
    if(value == 4){
        alert ("4점")
        setRating("4점")
    }
    if(value == 5){
        alert ("5점")
        setRating("5점")
    }
  };




  return (
      <div>
  <Rate onChange={handleChange}  value={value} /> <br/>
  {rating}
  
  </div>
  )
  }