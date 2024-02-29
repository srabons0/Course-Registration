
import PropTypes from 'prop-types';
import CourseSelected from './CourseSelected';

const CourseDetails = ({ course, hour,limitTime }) => {
    // console.log(course);
    return (

        <div>
            <div>
                <h1>{limitTime}</h1>
            </div>
            <div>
                <ul className='list-decimal'>
                    {
                        course.map((course, idx) => <CourseSelected key={idx} title={course.title}></CourseSelected>)
                    }
                </ul>
            </div>

            <div>
                <h1>{hour}</h1>
            </div>
            

        </div>
    );
};

CourseDetails.propTypes = {
    course: PropTypes.array,
    hour:PropTypes.number
};

export default CourseDetails;