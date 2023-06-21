import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import introCourse from "../assets/introCourse.mp4";
import routeTable from "../assets/route table.mp4";
import { getCourseById, getVidById } from "../utils/api";
import { coverSecondToString } from "../utils/tool";
import { Storage } from "aws-amplify";

function Learning() {
  const [resrc, setResrc] = useState();
  const [course, setCourse] = useState([]);
  const [itemActive, setItemActive] = useState([]);
  const [currentLec, setCurrentLec] = useState({});
  const lectureTitle = useRef();
  const videoTimeEl = useRef();
  const videoRef = useRef();
  useEffect(() => {
    getCourseById("266bab6b-c79c-4571-b5ed-7981cb176381").then((response) =>
      setCourse(response)
    );
  }, []);

  const selectLecture = async (lecture, indexChap, indexLec) => {
    // videoTimeEl.current.innerHTML = videoRef.current.duration;
    setItemActive([indexChap, indexLec]);
    setCurrentLec(lecture)
    // getVidById(lecture.vid_id).then((data) => setResrc(data));
    const videoURL = await Storage.get(lecture.resource, { level: "public" });
    setResrc(videoURL)
  };

  const updateVideoInfor = () => {
    lectureTitle.current.innerHTML = currentLec.name;
    // console.log(currentLec.length)
    videoTimeEl.current.innerHTML = coverSecondToString(
      videoRef.current.duration
    );
  };

  return (
    <div className="page home video-page">
      <div className="breadcrumbs">
        <Link style={{ cursor: "pointer" }} to="/">
          Home
        </Link>
      </div>
      <div className="page-content">
        <div className="learning-content" style={{ minHeight: "92vh" }}>
          <div className="learning-content1">
            <div className="page-left">
              <div className="menu">
                <nav aria-hidden="false">
                  <span className="close-menu">
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                  <div className="section">
                    <h2 className="menu-tile">First Cloud Journey</h2>
                    <hr
                      style={{
                        borderTop: "1px solid #eaeded",
                        marginTop: "0px",
                      }}
                    />
                    <div className="section-list">
                      <div
                        className="text-yellow-dark"
                        style={{
                          paddingBottom: "20px",
                          fontƯeight: "700",
                        }}
                      >
                        You have completed 0 out of 220 lectures
                      </div>
                      {/* <div className="mode-learn">
                        <label>
                          <span className="switch-root">
                            <span className="switch-oval">
                              <span className="switch-oval1">
                                <input type="checkbox"></input>
                                <span className="icon-oval"></span>
                              </span>
                            </span>
                            <span className="icon-rec"></span>
                          </span>
                        </label>
                      </div> */}
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Difficult Version
                        </label>
                      </div>
                      <ul
                        style={{
                          margin: "0px",
                        }}
                      >
                        {/* <li>
                          <div className="section-item">
                            <div className="section-header">
                              <i className="fa-solid fa-caret-down icon-small"></i>
                              Introduction
                            </div>
                            <div className="section-content">
                              <ul>
                                <li>Welcome to the Course</li>
                                <li>Why cloud compute</li>
                              </ul>
                            </div>
                          </div>
                        </li> */}
                        {course.length > 0 &&
                          course.map((chapter, indexChap) => (
                            <li key={indexChap}>
                              <div className="section-item">
                                <div className="section-header">
                                  <i className="fa-solid fa-caret-down icon-small"></i>
                                  {chapter.chapter}
                                </div>
                              </div>
                              <div className="section-content">
                                <ul>
                                  {chapter.lectures.length > 0 &&
                                    chapter.lectures.map(
                                      (lecture, indexLec) => (
                                        <li
                                          className={
                                            itemActive[0] === indexChap &&
                                            itemActive[1] === indexLec
                                              ? "active"
                                              : ""
                                          }
                                          style={{ cursor: "pointer" }}
                                          key={indexLec}
                                          onClick={(e) =>
                                            selectLecture(
                                              lecture,
                                              indexChap,
                                              indexLec
                                            )
                                          }
                                        >
                                          {lecture.name}
                                        </li>
                                      )
                                    )}
                                </ul>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="page-right">
              <div className="course-main">
                <div className="lesson">
                  <div className="lesson-title">
                    <span ref={lectureTitle}>Welcome to the Course</span>
                    <span className="title-note">
                      (<span ref={videoTimeEl}></span>)
                    </span>
                    <span className="status">{Object.keys(currentLec).length > 0 ? "Watching" : ""}</span>
                  </div>
                  <div className="lesson-content">
                    <div className="lesson-video active">
                      {resrc && (
                        // <Video>
                        //   <source src={resrc.url} type="video/webm"></source>
                        // </Video>
                        <video
                          src={resrc.url}
                          ref={videoRef}
                          onLoadedData={updateVideoInfor}
                          controls
                        ></video>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
