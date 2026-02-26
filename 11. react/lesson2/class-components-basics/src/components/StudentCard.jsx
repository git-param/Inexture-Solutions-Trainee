function StudentCard({name,age,course,isEnrolled,grade})
{
    // let status;
    // let displayText="Name: 
    return(
        <>
            <h2>Name: {name}<br/>
                Age: {age}<br/>
                Course: {course}<br/>
                Status: {isEnrolled?'Enrolled':'Not Enrolled'}<br/>
                Grade: {grade=="A"?'Excellent':grade=="B"?"Good":"Average"}<br/><br/>
            </h2>
        </>
    )
}
export default StudentCard;