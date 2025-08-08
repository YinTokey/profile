
## 1. The background
"Vibe coding" has flooded social media over the past few months. Some people say the software engineer job is dying. With vibe coding, anyone without a coding background can build products and reach $xxK or even $xxM MRR.

Alright, I'm not good at marketing products. How can I leverage this vibe coding trend to make money? Selling services, rather than products, seemed like the most practical path.

I had already experimented with vibe coding before, the speed was incredible, and I began to wonder: could I apply this same approach to real client work? If I could find more clients, perhaps this could be a reliable way to earn easy money.

With this in mind, I started searching for freelance development opportunities. After some time, I connected with a potential client on a forum. We exchanged contacts, and he sent me a set of iOS app requirements along with detailed Figma designs. 


## 2. Get the offer
To be clear, I'm not a pure vibe coder actually. I worked on iOS development from 2016 to 2021. I quickly scanned the toughest features in the requirements and looked for solutions based on my previous experience. Then I opened Cursor and started vibe coding the main features.

Within just 5 hours, I had a working demo that covered the core functionality. The speed was astonishing compared to traditional manual coding. I recorded a screen capture of the demo and sent it to the client. He was very satisfied with the demo, and then I got the freelance offer.

<div style={{textAlign: "center"}}>
<img src="/images/blog/vibe-freelancing/2.png" alt="Vibe freelancing demo" style={{width: "50%", height: "auto"}} />
</div>

By this early success, I felt optimistic, I estimated that, with the help of vibe coding tools, I could complete the entire project in just 3 days.


## 3. Early stage building
Early on, building boilerplate from Figma was very fast. I took screenshots of each page, sent them to Cursor to generate the UI, and set up click events so pages connected and navigation worked.

In less than a day, I generated more than 12 pages and almost built the whole project structure with a decent UI. Although they weren't 100% the same as the Figma design, the main workflow worked. In the old days, this might have taken seven days of manual coding.

This felt like incredible 7x productivity. Dopamine flooded my mind. I started daydreaming about getting more clients and building more projects at this speed. I almost lost my mind.

<div style={{textAlign: "center"}}>
<img src="/images/blog/vibe-freelancing/3.png" alt="Vibe freelancing progress" style={{width: "40%", height: "auto"}} />
</div>


On the second day, I continued implementing the rest of the features, many kinds of animations, dialogs, and other small features. The progress wasn't as amazing as the first day, but it was still far faster than manual coding.

## 4. Challenges start

Then I ran into a big problem: I didn’t know which page matched which files. The codebase was messy, filenames weren’t what I expected, and the project quickly felt out of control.

I was just feeding the AI the product docs to build a messy app. Even if it looked okay, it wasn’t deliverable. Worse, several compile errors appeared. I pasted the errors into Cursor, but the fixes made the codebase even messier. Some bugs came with compile errors. I asked Cursor to fix them, but even with clear descriptions, the AI didn’t always get my intent and sometimes went the wrong way, making things worse.

To be clear, I understand the performance of coding models. In this case, I didn’t use auto mode. I actually used Claude 4 sonnet and Gemini 2.5 Pro-06-05-preview. Even with excellent models, I still lost control of the project.

Up to this point, my brain was on near zero effort, just watching the AI code with no real thinking, like a healthy person taking drugs, enjoying a shortcut while it slowly rotting body.

<div style={{textAlign: "center"}}>
<img src="/images/blog/vibe-freelancing/1.webp" alt="Vibe freelancing challenges" style={{width: "40%", height: "auto"}} />
</div>

Another problem: I couldn’t stay focused. I typed, then waited for Cursor to generate code. Sometimes it was slow, so I switched to X, Reddit, or YouTube, then switched back. This constant context switching killed my focus. I lost the flow state, which is the happy, deep focus feeling you get when working on a challenge. Vibe coding destroyed that.

## 5. Stop autopilot

At this point, I leaned on my iOS experience and stopped pure vibe coding. First, I asked Cursor to reorganize files into a folder structure I know and to rename files so I could see the project clearly. It was time to stop wild west coding and switch to careful, detail oriented work.

I could send Figma screenshots to Cursor, use the Figma MCP, or copy the design as code, but none of these could match the design 100%. The UI also had to adapt to different screen sizes, which needed careful coding and testing. My workflow became a loop: Cursor chats, Xcode breakpoints, and small manual fixes.

## 6. Time wasting end‑to‑end testing

To ensure all functions worked well in different cases, I conducted end‑to‑end manual testing. 

My project was a license scanning project. It required using Apple Vision to recognize licenses from many countries, so I needed to gather as many publicly accessible driver’s licenses, identity cards, and passports as possible across many countries from Google image. Testing samples cost me a ton of time. This couldn’t be done automatically.

There were also many other test cases. The more I tested, the more problems I found. 

## 7. Rework for vibe coding implementation

Before that, I pasted the client's requirement text into Cursor and let it code. The problem: the doc was a general feature list from a PM, not very detailed and missing edge cases. Cursor could build something, but it might miss some side cases or misunderstand the requirements. The result looked okay, about 85% done. **The last 15% took more time than the first 85%**. I had to fully understand the docs, find what wasn’t said, and use past experience. Edge cases needed manual tests and tweaks. With detailed rules, it’s easy for AI to get them wrong and cause rework.

Bug fixing was another big problem. Even after I switched to AI as a copilot, fixing one bug could introduce new ones, which cut productivity. To avoid this, I reduced code context and was very specific about scope and files when using the tool. (I also tried Windsurf. Nice UI, but the large context sometimes worked against me and overall it was worse than Cursor.)

## 8. Soft skills work can't be vibe coding
Another time consuming part was communication. The client was in another country with a 10+ hour time difference, so we mostly worked at different times. Some details needed clarification. To avoid missing expectations, I analyzed the document, wrote down many questions, and put them in an online doc to ask the client and wait for replies. This took a lot of time and can’t be done by AI.

After I got replies, I had to turn the requirements into prompts that Cursor could use, or just code it myself. Communication is also about clear writing, like a spec that covers all test cases.

## 9. Finally done the work
Overall: 130+ hours for features, ads, and in‑app purchases. This is far more than the 3 days I expected at the beginning.
Sometimes I spent only 30 minutes a day fixing problems.
So, using vibe coding to sell freelance software development services isn’t a good idea for every case. If you have a good client and a high pay rate, maybe. But you can’t expect 10x productivity with a lazy brain and limited development experience.

## 10. My opinions about AI coding tools
Compared to pure manual coding, AI tools do improve my productivity. How much? Hard to say. My personal subjective estimate for iOS work is about **20% to 30%**, a bit higher than this [Stanford talk](https://www.youtube.com/watch?v=tbDDYKRFjhk).

Some `pros` from my experience in iOS development:

- Tab to autocomplete.
- Building early boilerplate is very convenient.
- UI structure can be roughly implemented by sending screenshots.
- Localization translation files can be easily generated with good translation quality.
- Still good for personal projects without strict detail requirements or complex features.


Also some `cons`:
- Messy codebase. More code/more commits ≠ more productivity.
- Fixing bugs can introduce new bugs.
- Incomplete understanding of requirements increases rework.
- Money cost, Claude 4 or Gemini 2.5 are expensive.
- Lost flow state experience.
- Pure vibe coding reduces chances to learn knowledge and bebugging experience.


So, my final take: don’t be a pure vibe coder or a pure prompt engineer. Stay curious and keep learning the technical details. AI reflects the person using it: the more you understand the tech and have experience, the more it helps. If your skills are weak, the AI will be worse too. I’m not against AI. Use it. But use it wisely, as a copilot, not autopilot. Also, soft skills like communication and business sense matter more than before. Being only a “coding monkey” will hurt your career.

In the end, **you should control AI, not be controlled by it**.