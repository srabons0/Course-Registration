import { useEffect } from 'react';
import { useState } from 'react';
import Course from './Course';
import CourseDetails from '../course-buy-details/CourseDetails';
const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('details.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }

        , [])

    const [selected, setSelected] = useState([]);
    const [hour, setHour] = useState(0);
    const [limitTime, setLimitTime] = useState(20);
    const [amount, setAmount] = useState(0);



    const handleSelectBtn = (id, select, time, price) => {
        const totalSelected = [...selected, select];

        // console.log(selected);
        //////// // time ////////////////////
        const totalTime = hour + time
        const limit = limitTime - time;
        // console.log(hour); 
        // console.log(limitTime);

        const totalAmount = amount + price;

        if (limit < 0 || totalTime > 20) {
            alert('hee hee hee')
        }
        else {
            setLimitTime(limit);
            setHour(totalTime);
            setSelected(totalSelected);
            setAmount(totalAmount);
        }

    };



    return (
        <div>

            <div className='flex p-11'>

                <div style={{ width: 1200 }} className='grid grid-cols-3 gap-y-6 '>
                    {
                        courses.map((course, idx) => <Course key={idx} course={course} handleSelectBtn={handleSelectBtn}></Course>)
                    }
                </div>

                <div style={{ width: 350 }} >
                    <CourseDetails course={selected} hour={hour} limitTime={limitTime} amount={amount} ></CourseDetails>
                </div>

            </div>

        </div>
    );
};


export default Courses;