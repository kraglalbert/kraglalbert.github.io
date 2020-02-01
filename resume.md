---
layout: page
title: resume
permalink: /resume/
---

<style>
.experience-img {max-width: 80px; max-height: 80px; margin-right: 25px; margin-top: 10px;}
.experience-img-container {float:right; text-align: center;}
.experience-title {position: relative; float: left;}
.education-text-container {float:right; text-align: right;}
.h-line {border-bottom: thick solid gray;}
.img-wrap {display: inline; position: relative;}
.img__description {
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #080808;
    visibility: hidden;
    opacity: 0;
  
    /* transition effect. not necessary */
    transition: opacity .2s, visibility .2s;
}
.img-wrap:hover .img__description {visibility: visible; opacity: 1;}
.icon {max-width: 14.4%; margin: 5px;}
.icon:hover {opacity: 0.7;}
@media screen and (max-width: 480px) {
    .education-text-container {
        float:right; 
        text-align: right;
        width: 150px;
    }
}
</style>

<div class="h-line">
    <p>or view/download the PDF version <a href="{{site.baseurl}}/Albert_Kragl_Resume.pdf" target="_blank">here</a></p>
    <h1>education:</h1>
</div>

<div style="margin-bottom: 50px;">
    <div class="education-text-container">
        <p style="margin: 5px;">Montreal, QC</p>
        <p style="font-style: italic;">Sept. 2016 - Apr. 2021 [Expected]</p>
    </div>
    <div>
        <h1>McGill University</h1>
        <p>B.S.E in Software Engineering; CGPA: 3.81 / 4.00</p>
    </div>
</div>

<!-- Experience section -->
<h1>experience:</h1>
<div class="h-line"></div>

<div>
    <div class="experience-img-container">
        <img src="{{site.baseurl}}/assets/images/mcgill-logo.png" class="experience-img">
    </div>
    <div>
        <h1>McGill University</h1>
        <p>Undergraduate Teaching Assistant — Montreal, QC</p>
        <p style="font-style: italic;">September 2019 - April 2020</p>
    </div>
</div>

- **Project Mentor:** Held weekly office hours, answered discussion board questions and graded the midterm for ECSE 321 - Intro. to Software Engineering.

<div>
    <div class="experience-img-container">
        <img src="{{site.baseurl}}/assets/images/facebook-logo.png" class="experience-img">
    </div>
    <div>
        <h1>Facebook</h1>
        <p>Software Engineer Intern — Menlo Park, CA</p>
        <p style="font-style: italic;">May 2019 - August 2019</p>
    </div>
</div>

- **Zero Rating Infra:** Worked with the Zero Rating Infra team to drive core product growth in developing countries, accounting for over a third of total company growth.
- **Mobile Carriers:** Updated carrier configuration storage to improve performance and reliability, and securely store passwords and encrypted data. Rolled changes out to production and reduced CPU usage by 40 percent.

<div>
    <div class="experience-img-container">
        <img src="{{site.baseurl}}/assets/images/ix-logo.png" class="experience-img">
    </div>
    <div>
        <h1>Index Exchange</h1>
        <p>Software Engineer Intern — Montreal, QC</p>
        <p style="font-style: italic;">May 2018 - August 2018</p>
    </div>
</div>

- **Stream Processing Framework:** Created a streaming pipeline that abstracts consuming from Kafka and inserting into a time-series database, giving the user a simple API which can be used to configure custom data processing functionality. The framework will be used as a powerful telemetry tool to allow for more efficient debugging and feature implementation.
- **Scalability:** Implemented a multi-threaded design to improve the scalability of the framework and increase the amount of data that can be processed at a time by over 50 percent.
- **Docker:** Created a containerized development environment to allow for quick deployment and testing.
- **Agile:** Participated in scrum, code reviews and demos in an Agile setting.

<div>
    <div class="experience-img-container">
        <img src="{{site.baseurl}}/assets/images/nettwerk-logo.png" class="experience-img">
    </div>
    <div>
        <h1>Nettwerk Music Group</h1>
        <p>Data Analysis Intern — Vancouver, BC</p>
        <p style="font-style: italic;">Summer 2016, 2017</p>
    </div>
</div>

- **Music Streaming Analytics:** Worked with Spotify and Apple Music data for various artists while also helping to expand the company’s streaming analytics department.
- **Weekly Charting Reports:** Compiled various data sets, including artist radio and chart performance, for weekly company-wide reports.

<!-- Projects section -->
<div class="h-line"></div>
<h1>projects:</h1>

- **Hack IX ’18:** Won 1st place with an app that used machine learning to analyze and offer feedback on a user’s speech patterns, with the main use case being a public speaking/presentation coaching tool.
- **CodeJam 2019:** Won 2st place overall with a machine learning web app that allows users to streamline home insurance claims by uploading photos of items in their home and getting an estimate for the value of each item in the photo.
- **Budgie**: Developed a web application that allows individuals to keep track of their monthly expenses.
- **Profound Sound (iOS App):** Created to help amateur guitarists configure their guitar recording setup. Was available on the App Store from 2014 to 2016.
- **Get J&uuml;ge (iOS App):** Created to help users track progress for each exercise in their workout.
- **git-simple**: Created a command-line tool with custom commands to simplify common git workflows and operations.
- **McGillUltimate.ca:** Part of the development team working on the <a href="https://mcgillultimate.ca" target="_blank">website</a> for McGill’s Ultimate Frisbee team.

<!-- Skills section -->
<div class="h-line"></div>
<h1>skills:</h1>
<div style="margin-bottom: 15px;">
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/python-logo.png">
        <p class="img__description">Python</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/javascript-logo.png">
        <p class="img__description">JavaScript</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/java-logo.png">
        <p class="img__description">Java</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/c-prog-logo.png">
        <p class="img__description">C</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/golang-logo.png">
        <p class="img__description">Go</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/bash-logo.png">
        <p class="img__description">BASH</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/git-logo.png">
        <p class="img__description">Git</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/kafka-logo.png">
        <p class="img__description">Kafka</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/docker-logo.png">
        <p class="img__description">Docker</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/postgres-logo.png">
        <p class="img__description">PostreSQL</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/flask-logo.png">
        <p class="img__description">Flask</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/node-logo.png">
        <p class="img__description">Node.js</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/vue-logo.png">
        <p class="img__description">Vue.js</p>
    </div>
    <div class="img-wrap">
        <img class="icon" src="{{site.baseurl}}/assets/images/react-logo.png">
        <p class="img__description">React</p>
    </div>
</div> 
<!-- Extracurriculars section -->
<div class="h-line"> </div>
<h1>extracurriculars and awards:</h1>

- **Hack4Impact McGill:** President and co-founder of the Hack4Impact chapter at McGill University, which builds software for non-profit organizations to help drive positive social impact.
- **YouTube/Music:** Created a <a href="https://www.youtube.com/user/TheFenderrocker" target="_blank">YouTube channel</a> with over 20,000 subscribers and 5 million total views. Features original music and cover songs, with original songs available on all major streaming platforms.
- **Ultimate Frisbee:** Varsity athlete and captain on the McGill Ultimate Team. Won a <a href="http://ucm.canadianultimate.com/c/2018/10/23/2018-canadian-university-ultimate-championships-open-division-recap/" target="_blank">silver medal</a> at Canadian University Nationals in 2018.
- **Excellence in Written Communication Award:** Awarded best research paper out of 259 students in CCOM 206 (Communication in Engineering) for Winter and Summer 2017 at McGill.
- **Schulich Leader Scholarship:** Given to 50 students in Canada going into engineering and science studies every year.
