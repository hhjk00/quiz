import { DatePicker } from 'antd';
import { useState } from 'react';

export default function DatePick() {

    const [dateString, setDateString] = useState()

    const onChange = (date, dateString) => {
        console.log(date, dateString);
        setDateString(dateString)

    }

    return (
        <div>
        <DatePicker onChange={onChange}/><br/>
        {dateString} <br/>
        {dateString && dateString.slice(5,7)}
        </div>
    )
}