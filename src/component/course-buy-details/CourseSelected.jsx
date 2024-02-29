
import PropTypes from 'prop-types';


const CourseSelected = ({ title }) => {
    // console.log(course.title)

 
    return (
        
 <li>{title}</li>
        
    );
};

CourseSelected.propTypes = {
    title: PropTypes.string
};

export default CourseSelected;