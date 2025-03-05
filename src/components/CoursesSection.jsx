// import './CoursesSection.css';

const CoursesSection = () => {
  return (
    <div className="courses">
                        <div className="head">
                            <div className="heading">
                                <h4>Enrolled Courses</h4>
                            </div>
                            <div className="see-all">See all</div>
                        </div>
                        <div className="course-detail">
                            <div className="card">
                                <div className="info">
                                    <div className="courseName">
                                        <p>Object oriented programming</p>
                                    </div>
                                    <div className="btn">
                                        <button className="view">View</button>
                                    </div>
                                </div>
                                <div className="image"></div>
                            </div>
                            <div className="card">
                                <div className="info">
                                    <div className="courseName">
                                        <p>Fundamental of database system</p>
                                    </div>
                                    <div className="btn">
                                        <button className="view">View</button>
                                    </div>
                                </div>
                                <div className="image"></div>
                            </div>
                        </div>
                    </div>
  );
};

export default CoursesSection;
