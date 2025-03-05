// import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sideBar">
    <div className="course-instructors">
        <div className="heading">
            <h4>Course Instructors</h4>
        </div>
        <div className="instructors">
            <div className="image"></div>
            <div className="image"></div>
            <div className="image"></div>
        </div>
    </div>
    <div className="notice">
        <div className="head">
            <div className="title">
                <h4>Daily Notice</h4>
            </div>
            <div className="see-all">See all</div>
        </div>
        <div className="content">
            <div className="notice-update">
                <div className="notice-card">
                    <div className="content-title">
                        <h5>Prelim Payment due</h5>
                    </div>
                    <div className="content-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo.
                        </p>
                    </div>
                    <div className="see-more">See more</div>
                </div>
                <div className="notice-card">
                    <div className="content-title">
                        <h5>Exam Shedule</h5>
                    </div>
                    <div className="content-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur.
                        </p>
                    </div>
                    <div className="see-more">See more</div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Sidebar;
