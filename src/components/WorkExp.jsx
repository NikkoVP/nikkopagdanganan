import React from "react";

import qaImg from "../images/work-qa.jpg";
import testerImg from "../images/work-tester.jpg";
import qcImg from "../images/work-qc.jpg";
import councilImg from "../images/work-council.jpg";
import manualImg from "../images/work-manual.jpg";

export default function WorkExp() {
  return (
    <section id="work-exp" className="section">
      <h2 className="section-title">Work Experience</h2>

      <div className="work-list">
        {/* 1. Software QA Tester */}
        <div className="work-card">
          <div className="work-thumb">
            <img src={qaImg} alt="Software QA Tester" />
          </div>
          <div className="work-info">
            <h3>Software QA Tester</h3>
            <p className="project">
              Project: Royal Reels (Online Casino Platform)
            </p>
            <p className="desc">
              Tested an online casino gaming platform used in AU/NZ markets.
              Validated wallet balance, currency conversion, gameplay results,
              promotions, and bonus features. Performed functional, regression,
              and integration testing while tracking defects and ensuring stable
              production releases.
            </p>
          </div>
        </div>

        {/* 2. Software Tester */}
        <div className="work-card">
          <div className="work-thumb">
            <img src={testerImg} alt="Software Tester" />
          </div>
          <div className="work-info">
            <h3>Software Tester</h3>
            <p className="project">
              Project: Refuel Mobile & Tulu (Web and Mobile Applications)
            </p>
            <p className="desc">
              Tested both web and mobile applications focusing on usability,
              responsiveness, and end-to-end user workflows. Validated user
              registration, transactions, notifications, and account management
              features across different devices and screen sizes. Executed
              manual and exploratory testing, reported defects in tracking
              tools, and coordinated with developers to verify fixes and ensure
              stable releases.
            </p>
          </div>
        </div>

        {/* 3. Quality Control Tester */}
        <div className="work-card">
          <div className="work-thumb">
            <img src={qcImg} alt="Quality Control Tester" />
          </div>
          <div className="work-info">
            <h3>Quality Control Tester</h3>
            <p className="project">
              Project: PNB ATM Integrated Switch Terminal (IST)
            </p>
            <p className="desc">
              Performed end-to-end ATM transaction testing including withdrawal,
              transfer, balance inquiry, and interbank communication. Verified
              host responses and ensured transaction accuracy between ATM
              machines and banking networks.
            </p>
          </div>
        </div>

        {/* 4. Municipal Councilor */}
        <div className="work-card">
          <div className="work-thumb">
            <img src={councilImg} alt="Municipal Councilor" />
          </div>
          <div className="work-info">
            <h3>Municipal Councilor</h3>
            <p className="project">Project: Local Government Programs</p>
            <p className="desc">
              Managed community initiatives and coordinated projects across
              departments. Collaborated with stakeholders, analyzed public
              impact, and implemented policies while strengthening leadership,
              communication, and decision-making skills.
            </p>
          </div>
        </div>

        {/* 5. Manual Tester */}
        <div className="work-card">
          <div className="work-thumb">
            <img src={manualImg} alt="Manual Tester" />
          </div>
          <div className="work-info">
            <h3>Manual Tester</h3>
            <p className="project">Project: Automotive Navigation System</p>
            <p className="desc">
              Tested vehicle navigation software for international car brands.
              Verified routing behavior, GPS positioning, map updates, and user
              interface functionality. Executed test cases and validated system
              behavior under real driving scenarios before release.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
