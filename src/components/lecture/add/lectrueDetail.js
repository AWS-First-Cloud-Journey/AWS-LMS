import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../../utils/breadcrumbs";

function LectureDetail(props) {
  const { lecture, setLectures, setStep, nextStep } = props;
  console.log(lecture)

  useEffect(() => {
    setStep(1)
  }, [])

  return (
    <>
      <form>
        <div>
          <div className="form-header">
            <div className="form-title">
              <span>Add lecture details</span>
            </div>
          </div>
          <div className="form-content">
            <span>
              <div className="form-section">
                <div className="util-container">
                  <div className="util-container-header">
                    <div>
                      <div region="header">Lecture detail</div>
                    </div>
                  </div>
                  <div form-section-region="content">
                    <span>
                      <div className="form-field">
                        <label className="form-field-label">
                          Lecture title
                        </label>
                        <div className="form-field-description"></div>
                        <div className="form-field-control">
                          <input type="text" onChange={(e) => setLectures({...lecture, title: e.target.value})}></input>
                        </div>
                      </div>
                      <div className="util-mb-l"></div>
                      <div className="form-field">
                        <label className="form-field-label">
                          Lecture description
                        </label>
                        <div className="form-field-desceiption"></div>
                        <div className="form-field-control">
                          <textarea
                            type="text"
                            className="input-line"
                            rows="3"
                            onChange={(e) => setLectures({...lecture, des: e.target.value})}
                          ></textarea>
                        </div>
                      </div>
                      <div className="util-mb-l"></div>
                      <div className="form-field">
                        <label className="form-field-label">Lecture type</label>
                        <div className="form-field-description"></div>
                        <div className="form-field-control">
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <input
                              type="radio"
                              id="video"
                              name="type"
                              value="video"
                              onChange={(e) => setLectures({...lecture, type: e.target.value})}
                            />
                            <label>Video</label>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <input
                              type="radio"
                              id="workshop"
                              name="type"
                              value="workshop"
                              onChange={(e) => setLectures({...lecture, type: e.target.value})}
                            />
                            <label>Workshop</label>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <input
                              type="radio"
                              id="quiz"
                              name="type"
                              value="quiz"
                              onChange={(e) => setLectures({...lecture, type: e.target.value})}
                            />
                            <label>Quiz</label>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className="form-actions">
            <span>
              <div className="dx-FormActions">
                <div style={{ order: "0" }}>
                  <button className="btn-normal btn-variant-primary" onClick={nextStep}>
                    <span>Next</span>
                  </button>
                </div>
                <div style={{ order: "-1" }}>
                  <button className="btn-normal button-variant-link">
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            </span>
          </div>
        </div>
      </form>
    </>
  );
}

export default LectureDetail;
