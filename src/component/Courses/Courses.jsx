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

    const handleSelectBtn = (select, time) => {
        const totalSelected = [...selected, select];
        setSelected(totalSelected);
        // console.log(selected);
        //////// // time ////////////////////
        const totalTime = hour + time
        setHour(totalTime);
        // console.log(hour); 
        const limit = limitTime - time;
        setLimitTime(limit)
        console.log(limitTime);
    };



    return (
        <div>

            <div className='flex p-12'>

                <div style={{ width: 1200 }} className='grid grid-cols-3 gap-y-6 '>
                    {
                        courses.map((course, idx) => <Course key={idx} course={course} handleSelectBtn={handleSelectBtn}></Course>)
                    }
                </div>

                <div style={{ width: 350 }} className='rounded-xl w-96 bg-white p-5'>
                    <CourseDetails course={selected} hour={hour} limitTime={limitTime} ></CourseDetails>
                </div>

            </div>

        </div>
    );
};


export default Courses;