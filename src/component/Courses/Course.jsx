import PropTypes from 'prop-types';

const Course = ({ course ,handleSelectBtn}) => {
    const { id, img, title, description, price, time } = course;
    // console.log(course)
    return (
        <div style={{width:340}} className='rounded-xl w-96 bg-white p-5'>
            {/* <h1>{id}</h1> */}
            <img style={{width:340}} className=' h-44 rounded-xl' src={img} alt="" />
            <h1 className='text-2xl font-bold mt-4 m-1 h-16'>{title}</h1>
            <h1 className='text-lg font-normal text-slate-500  h-32'>{description}</h1>
            <div className='flex justify-between'>
            <h1 className='text-xl font-semibold text-slate-500'> Price : {price}</h1>
            <h1 className='text-xl font-semibold text-slate-500'> Credit : {time}hr</h1>
            </div>
           <button className='w-72 bg-blue-500 text-white h-10 rounded-lg mt-5 hover:bg-blue-600 hover:border-blue-800 hover:border-2' onClick={()=>handleSelectBtn(course, course.time)}>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.array,
    handleSelectBtn:PropTypes.func
}
export default Course;