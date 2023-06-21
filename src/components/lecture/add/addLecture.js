import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../../utils/breadcrumbs";
import LectureDetail from "./lectrueDetail";
import LectureContent from "./lectureContent";
import SubmitLecture from "./submitLecture";
import { Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { uploadLecture } from "../../../utils/api";
import axios from "axios";
const api = "https://wzw0yg6cm0.execute-api.ap-southeast-1.amazonaws.com/dev";

function AddLecture() {
  const [step, setStep] = useState(1);
  // const []
  const [lecture, setLectures] = useState({
    id: uuidv4(),
    title: "",
    des: "",
    type: "",
    resource: "",
  });
  const [file, setFile] = useState();

  const nextStep = () => {
    setStep(step + 1);
  };

  const submitLecture = async () => {
    // uploadLecture(file).then((response) => console.log(response))
    await Storage.put(file.name, file, {
      level: "public",
    });

    await axios({
      method: "post",
      url: `${api}/course/lec`,
      data: lecture,
    });
  };

  return (
    <div className="page">
      <Breadcrumbs />
      <div className="page-content">
        <div className="add-course">
          <div className="add-main">
            <div className="add-content">
              <div className="content">
                <span>
                  <div>
                    <div className="dx-Wizard">
                      <div className="dx-Wizard__progressContainer">
                        <ul className="dx-WizardProgress ul-unstyle">
                          <li className="dx-WizardProgressStep">
                            <div className="spec-WizardProgressStep">
                              <div className="dx-WizardProgressStep__header">
                                Step 1
                              </div>
                              <div
                                className={
                                  step === 1
                                    ? "dx-WizardProgressStep__title dx-WizardProgressStep__title--bold"
                                    : "dx-WizardProgressStep__title dx-WizardProgressStep__title--bold disable-color weight-normal"
                                }
                              >
                                Add lecture detail
                              </div>
                            </div>
                            <hr className="dx-WizardProgress__divider"></hr>
                          </li>
                          <li className="dx-WizardProgressStep">
                            <div className="spec-WizardProgressStep">
                              <div className="dx-WizardProgressStep__header">
                                Step 2
                              </div>
                              <div
                                className={
                                  step === 2
                                    ? "dx-WizardProgressStep__title dx-WizardProgressStep__title--bold"
                                    : "dx-WizardProgressStep__title dx-WizardProgressStep__title--bold disable-color weight-normal"
                                }
                              >
                                Add content
                              </div>
                            </div>
                            <hr className="dx-WizardProgress__divider"></hr>
                          </li>
                          <li className="dx-WizardProgressStep">
                            <div className="spec-WizardProgressStep">
                              <div className="dx-WizardProgressStep__header" s>
                                Step 3
                              </div>
                              <div
                                className={
                                  step === 3
                                    ? "dx-WizardProgressStep__title dx-WizardProgressStep__title--bold"
                                    : "dx-WizardProgressStep__title dx-WizardProgressStep__title--bold disable-color weight-normal"
                                }
                              >
                                Review and lunch
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="dx-Wizard__contentContainer">
                        {step === 1 && (
                          <LectureDetail
                            lecture={lecture}
                            setLectures={setLectures}
                            setStep={setStep}
                            nextStep={nextStep}
                          />
                        )}
                        {step === 2 && (
                          <LectureContent
                            setLectures={setLectures}
                            setStep={setStep}
                            setFile={setFile}
                            file={file}
                            lecture={lecture}
                            nextStep={nextStep}
                          />
                        )}
                        {step === 3 && (
                          <SubmitLecture
                            setStep={setStep}
                            lecture={lecture}
                            file={file}
                            submitLecture={submitLecture}
                          />
                        )}
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
  );
}

export default AddLecture;
