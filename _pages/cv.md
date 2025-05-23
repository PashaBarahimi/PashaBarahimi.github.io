---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

> Download my complete CV [here](/files/CV.pdf).

Education
======

* B.Sc. in Computer Engineering, University of Tehran, 2025 (expected)
  * GPA: 19.39/20 (4/4)
  * Rank: 1/90

|              Course Name              |      Grade     |
|:-------------------------------------:|:--------------:|
|    Introduction to Cryptocurrencies   |   20/20 (4/4)  |
| Introduction to Distributed Computing |   20/20 (4/4)  |
|           Computer Networks           |   20/20 (4/4)  |
|           Operating Systems           |  19.9/20 (4/4) |

Research Interests
======

* Distributed Systems
* Computer Networks
* Operating Systems

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Research Experience
======

  <ul>{% for post in site.research reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Honors and Awards
======

* 2024 - Direct Admission to MSc Program, Any University in Iran (Declined)
* 2024 - Ranked 1st in bachelor’s degree among about 90 students (GPA: 19.39/20)
* 2024 - Ranked 2nd in senior year of Computer Engineering among 90 students (GPA: 19.14/20)
* 2023 - Ranked 1st in junior year of Computer Engineering among 90 students (GPA: 19.86/20)
* 2022 - Ranked 1st in sophomore year of Computer Engineering among 90 students (GPA: 19.50/20)
* 2021 - Ranked 2nd in freshman year of Computer Engineering among 90 students (GPA: 19.01/20)
* 2021 - University of Tehran Supporters’ Foundation Scholarship ($100/year for 3 years)
* 2020 - Ranked 161st in University Entrance Exam among over 160,000 participants

Selected Projects
======

  <ul>
  {% assign selected_projects = site.projects | where: "type", "selected" | reverse | slice: 0, 6 %}
  {% for post in selected_projects %}
    {% include archive-single-cv.html %}
  {% endfor %}
  </ul>

Teaching Assistance
======

  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Work Experience
======

  <ul>{% for post in site.work reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Skills
======

* Programming Languages:
  * Proficient: C++, C#, Python, Golang, SQL
  * Intermediate: Java, Kotlin, Verilog, C, Bash, LaTeX
  * Basic: Rust, R, JavaScript, Solidity
* Technologies: Git, Docker, Kubernetes, Makefile, Ansible, Redis, Django, PostgreSQL, Prometheus, GitLab CI/CD
* Operating Systems: Linux (Debian-Based), Microsoft Windows

Languages
======

* Persian: Native
* English: Advanced
  * IELTS: 8.0 (Taken in September 2024)
    * Listening: 8.5
    * Reading: 9.0
    * Writing: 8.0
    * Speaking: 7.0

<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul> -->
