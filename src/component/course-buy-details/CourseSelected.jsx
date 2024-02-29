
import PropTypes from 'prop-types';


const CourseSelected = ({ title }) => {
    // console.log(course.title)


    return (

        <li className='text-lg font-normal text-slate-500 p-1 ms-7 '>{title}</li>

    );
};

CourseSelected.propTypes = {
    title: PropTypes.string
};

export default CourseSelected;