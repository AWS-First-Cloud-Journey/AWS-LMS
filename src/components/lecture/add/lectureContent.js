import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../../utils/breadcrumbs";

function LectureContent(props) {
  const { setLectures, setStep, setFile, file, lecture, nextStep } = props;
  const inputFile = useRef();

  console.log(lecture)
  console.log(file)

  useEffect(() => {
    setStep(2)
  }, [])

  const handleSelectFiles = (event) => {
    inputFile.current.value = "";
    inputFile.current.click();
  };

  const onChangeFile = (file) => {
    setFile(file)
    setLectures({...lecture, resource: file.name})
  }

  return (
    <>
      <form>
        <div>
          <div className="form-header">
            <div className="form-title">
              <span>Add content</span>
            </div>
          </div>
          <div className="form-content">
            <span>
              <div className="form-section">
                <div className="util-container">
                  <div className="util-container-header">
                    <div>
                      <div region="header">Lecture content</div>
                    </div>
                  </div>
                  <div
                    form-section-region="content"
                    style={{ minHeight: "20vh" }}
                  >
                    <span>
                      <div className="form-field">
                        <label className="form-field-label">
                          Lecture video
                        </label>
                        <div className="form-field-description">
                          Theory video for lecture
                        </div>
                        <div className="form-field-control">
                          <div className="choose-file">
                            <div style={{ display: "inline-block" }}>
                              <button
                                type="button"
                                className="btn-choose-file"
                                onClick={handleSelectFiles}
                              >
                                <span className="btn-icon">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillfule="evenodd"
                                      clipRule="evenodd"
                                      d="M2 12L2 2L12 2L12 12H10V14H13C13.5523 14 14 13.5523 14 13L14 1C14 0.447715 13.5523 0 13 0L1 0C0.447715 0 0 0.447715 0 1L0 13C0 13.5523 0.447715 14 1 14H4V12H2ZM10.2929 9.70711L11.7071 8.29289L7 3.58579L2.29289 8.29289L3.70711 9.70711L6 7.41421V14L8 14L8 7.41421L10.2929 9.70711Z"
                                      fill="#545B64"
                                    />
                                  </svg>
                                </span>

                                <span
                                  className="btn-text"
                                  style={{ paddingLeft: "5px" }}
                                >
                                  <input
                                    type="file"
                                    ref={inputFile}
                                    onChange={(e) => onChangeFile(e.target.files[0])}
                                    hidden
                                  ></input>
                                  <span>Choose file</span>
                                </span>
                              </button>
                            </div>
                            <span style={{ fontStyle: "italic" }}>
                              {" "}
                              {file ? file.name : "No file chosen"}
                              {" "}
                            </span>
                          </div>
                        </div>
                        <div className="form-hint">.mov, mp4</div>
                      </div>
                      <div className="util-mb-l"></div>
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

export default LectureContent;
