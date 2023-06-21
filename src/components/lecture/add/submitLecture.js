import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../../utils/breadcrumbs";

function SubmitLecture(props) {
  const { setStep, file, lecture, submitLecture } = props;

  useEffect(() => {
    setStep(3);
  }, []);

  return (
    <>
      <form>
        <div>
          <div className="form-header">
            <div className="form-title">
              <span>Review and lunch</span>
            </div>
          </div>
          <div className="form-content">
            <div className="awsui_root_1i0s3_ltrmr_93 form-component">
              <div>
                <div className="display-vertical">
                  <div>
                    <div className="display-vertical">
                      <div className="child-header">
                        <span>Step 1: Add lecture detail</span>
                        <button type="button" className="btn-normal">
                          {" "}
                          Edit
                        </button>
                      </div>
                      <div>
                        <span>
                          <div className="form-section">
                            <div className="util-container">
                              <div className="util-container-header">
                                <div>
                                  <div region="header">Lecture content</div>
                                </div>
                              </div>
                              <div>
                                {" "}
                                <div
                                  className="form-review"
                                  form-section-region="content"
                                >
                                  <div className="form-field-col">
                                    <label className="form-field-content">
                                      Lecture title
                                    </label>
                                    <div
                                      className="form-field-label"
                                      style={{ display: "block" }}
                                    >
                                      {lecture.title}
                                    </div>
                                  </div>
                                  <div className="form-field-col">
                                    <label className="form-field-content">
                                      Description
                                    </label>
                                    <div
                                      className="form-field-label"
                                      style={{ display: "block" }}
                                    >
                                     {lecture.des}
                                    </div>
                                  </div>
                                  <div className="form-field-col">
                                    <label className="form-field-content">
                                      Lecture type
                                    </label>
                                    <div
                                      className="form-field-label"
                                      style={{ display: "block" }}
                                    >
                                      {lecture.type}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="display-vertical">
                      <div className="child-header">
                        <span>Step 2: Add content</span>
                        <button type="button" className="btn-normal">
                          {" "}
                          Edit
                        </button>
                      </div>
                      <div>
                        <span>
                          <div className="form-section">
                            <div className="util-container">
                              <div className="util-container-header">
                                <div>
                                  <div region="header">Lecture content</div>
                                </div>
                              </div>
                              <div>
                                {" "}
                                <div
                                  className="form-review"
                                  form-section-region="content"
                                >
                                  <div className="form-field-col">
                                    <label className="form-field-content">
                                      File name
                                    </label>
                                    <div
                                      className="form-field-label"
                                      style={{ display: "block" }}
                                    >
                                      {lecture.resource}
                                    </div>
                                  </div>
                                  <div className="form-field-col">
                                    <label className="form-field-content">
                                      Description
                                    </label>
                                    <div
                                      className="form-field-label"
                                      style={{ display: "block" }}
                                    >
                                      -
                                    </div>
                                  </div>
                                  <div className="form-field-col"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-actions">
            <span>
              <div className="dx-FormActions">
                <div style={{ order: "0" }}>
                  <div className="btn-normal btn-variant-primary" onClick={submitLecture}>
                    <span>Submit</span>
                  </div>
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

export default SubmitLecture;
