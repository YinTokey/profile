---
title: "Language Translation Platform"
date: 2025-02-16
hero: /images/sections/projects/language-translation/1.jpg
---

### 1. Company
[Shenzhen Aisi Software Technology Co., Ltd.](https://xmind.app/)

### 2. Project Background
The company’s main product [Xmind](https://xmind.app/) is used in over 100 countries, and every new version launch needs to support multiple languages—usually more than 10 per version. They used to rely on a translation company, but that process was both slow and expensive. With the rise of AI in 2023, the boss suggested trying AI translation to speed up the process and cut costs, so I volunteered to take it on.

### 3. My Role
I ended up doing everything myself—proposing and building an internal website that product managers could easily use for translation, designing the features, building the front end and back end, handling deployment, and reading the latest articles and academic papers to figure out how to improve translation quality using LLMs. I finally launched the platform within the company, guided product managers on how to use it, collected feedback, and continuously optimized the platform.

### 4. What I Did

- Tech Stack & Deployment: I used LLMs (including RAG, Prompt Engineering, Vector Database, Embeddings) and leveraged various AWS services (S3, App Runner, CDK). I chose Next.js and Node.js for the full-stack solution so that I could quickly build it.

- Research: To solve the project’s specific challenges—like making translations natural and handling the company’s unique terminology—I dug into a bunch of academic papers and articles. For example, the word “map” is generally translated with a geographic context (like in “Google Maps”), but for the company's products, it always means “mindmap.” I experimented with different prompts and workflows to improve translation quality, collected feedback from language-expert coworkers, and finally used RAC (plus hybrid matching in some particular situations) to achieve good results.

Below is a simplified workflow for English to French translation.

![](images/sections/projects/language-translation/2.png)

### 5. Results

- Successfully Launched: All products([Xmind](https://xmind.app/), [Xmind AI](https://xmind.ai/), [Mapify](https://mapify.so)) in the company are now using this AI translation tool for software localization.

- **Faster**: Previously, product managers had to send materials to a translation company and wait 1-2 days for the results. After using the platform, they can normally get results within 3 minutes (if the document is not too large).

- **Cost Savings**: Saving at least 20k CAD costs each year on translations that were previously paid to the translation company.

### 6. What I Learned

- End-to-End Ownership: I’d never handled an entire project solo before—from identifying which features product managers really wanted, to designing them, coding, and deploying the solution. It taught me a lot about product thinking and how to balance business needs with technical feasibility.

- Exploring a New Domain: I dived into AI/ML research for better translations and discovered that reading and trying to replicate methods from academic papers can yield practical.


