---
title: "Video Rendering Service"
date: 2025-02-16
hero: /images/sections/projects/video-rendering-service/1.jpg
description: "Video Rendering Service is an internal backend core service that supports all the company's video generation products."
---

### 1. Team Members
- Me (Contributed 90%)
- Another Engineer (Contributed 10%)

### 2. Company
[Shenzhen Qutui Science & Technology Co., Ltd.](https://sjzn.com/)

### 3. Technologies
**3.1 Languages & Frameworks**
- Node.js (TypeScript) (80%)
- Go (20%)
- Egg.js
- go-kratos

**3.2 Databases & Caching**
- MongoDB
- Redis

**3.3 Messaging & Queueing**
- RabbitMQ

**3.4 Infrastructure**
- Docker, Kubenaties
- Tencent, Alibaba Cloud

### 4. Introduction
Video Rendering Service is an internal backend core service that supports all the company's video generation products. 

It integrated 2 video rendering engines to implement many kinds video generation, providing REST API to interact with other backend projects. The architecture is as follows.


![](/images/sections/projects/video-rendering-service/2.png)


### 5. My Role
I led the development and acted as a bridge to coordinate with multiple teams, including 5 engineer teams (11 members). And sometimes deal with feedback from other non-engineers, such as project manager, product manger, video designers. The cross team work relationship as follows.

![](/images/sections/projects/video-rendering-service/2-1.png)


### 6. Biggest Challenge
As you can see from the diagram, I was facing a huge amount of communication work while also being the core developer of the [Flash Cut](/posts/projects/flash-cut) project. Every day, I was constantly interrupted—whether it was debugging rendering failures, answering questions from different teams, or troubleshooting unexpected issues. I couldn’t even get 20 minutes of uninterrupted focus to code or debug properly. But the development deadline didn’t change. It was extremely overwhelming

##### How I overcome it

I made a few key changes:

- **Prioritization & Communication**: I sat down with my team leader and project manager to clearly define what was urgent vs. what could wait. This helped set expectations and reduced unnecessary interruptions.

- **Logging Improvement**: I improved the logging output, making it easier for other engineers to find the root cause of rendering issues without needing my immediate help.

- **Documentation**: I created a comprehensive tech guide, including API usage, troubleshooting guide, and cross-team collaboration guide so that other teams could identify and solve common issues by themselves instead of pinging me for every small problem.


##### The Result

- I regained control of my workflow and finally had time to focus on actual development.
- The multiple team collaboration productivity improve obvious, reducing unnecessary communication and interrunption.
- I got an A- performance review (1st of 14) in the back-end team in April 2022. (Every month, each team cloud only zero or one member get A- or A).

##### What I learned from this experience

- **Communication is the Key**: Keeping open communication and aligning priorities with my manager and team reduced stress and improved efficiency.

- **Work Smarter, Not Just Harder**: Building better logs and writing comprehensive documentation took extra effort upfront, but in the long run, it saved me (and everyone else) a ton of time.

- **Prioritize Everything**: Not everything is urgent. By setting boundaries and prioritizing properly, I got more done instead of trying to handle everything immediately.

- **Balance is Key**: There will always be urgent tasks, problems to solve, and unexpected issues. Instead of just working harder, I learned to step back, organize, and build better systems — making a difference for both me and coworks.



