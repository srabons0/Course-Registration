
import PropTypes from 'prop-types';
import CourseSelected from './CourseSelected';

const CourseDetails = ({ course, hour, limitTime, amount }) => {
    // console.log(course);

    
    return (

        <div className='rounded-xl w-96 bg-white p-5'>

            <div>
                <h1 className='text-xl font-bold p-2 my-3 w-80 text-blue-500'>Credit Hour Remaining {limitTime} hr</h1>
            </div>
<hr />
            <div>
                <h1 className='text-2xl font-bold p-2 mt-3 mb-4'>Course Name</h1>
                <ul className='list-decimal mb-5'>
                    {
                        course.map((course, idx) => <CourseSelected key={idx} title={course.title}></CourseSelected>)
                    }
                </ul>
            </div>
<hr />
            <div>
                <h1 className='text-xl font-medium p-2 my-1 w-80 text-slate-600'>Total Credit Hour : {hour}</h1>
            </div>
<hr />
            <div>
                <h1 className='text-xl font-semibold p-2 my-2 w-80 text-slate-600'>Total Price : {amount} USD</h1>
            </div>

        </div>
    );
};

CourseDetails.propTypes = {
    course: PropTypes.array,
    hour: PropTypes.number,
    limitTime: PropTypes.number,
    amount: PropTypes.number
};

export default CourseDetails;