## I Built an Open-Source Music Video Generator

### 1. Introduction

I enjoy listening to background music on YouTube and have tried creating similar music using tools like Suno AI, LeonardoAI, Runware, DALL·E, and CapCut. I noticed that these music videos usually follow a few basic patterns:
- Background image
- Music (instrumental or with vocals)
- Visual effects (optional)
- Animation (optional)

With my experience using FFmpeg for video generation, I decided to build a tool that can create these music videos from a simple prompt, without any video editing work.

Here’s how the tool works:

### 2. Background Image Generation

![](images/blog/auto-mv/1.png)

We start by entering a few keywords. The tool uses ChatGPT to enhance your prompt, and you can upload a reference character image if you want. For example, I used an AI influencer image I found on Google.

This tool enables both instrumental music and music with a singer (so you can create AI influencer music videos).

Next, the tool calls Runware AI to generate background images. Runware is an image generation service, similar to Midjourney.

### 3. Music Generation

![](images/blog/auto-mv/2.png)

The next step is music generation. ChatGPT analyzes the background image and crafts a better music prompt. If the character is female, the generated music will feature a female singer.

Then, the Suno API is used to generate the music file.

### 4. Video Generation

![](images/blog/auto-mv/3.png)

Once we have both the background image and the music file, the tool creates a video by using the image as each frame, just like a video editing tool would.

Finally, we use FFmpeg to generate the finished video.

That’s the entire process.

### 5. Cost

There are two types of videos. If you use a reference character, the cost is about 12 cents per video. If you use the Juggernaut model for image generation, the cost drops to around 8 cents.

### 6. Animation (Future Work)

So far, the tool generates videos with static images. But what about animated images? I haven’t implemented this feature yet, but Leonardo.AI’s `Motion One` model can generate animated videos by adjusting the movement strength (I set it to 1 in my test).

Below is an example of an animated video generated using Leonardo.AI:

![](images/blog/auto-mv/5_hq.gif)

Leonardo.AI also supports API calls, so integrating animation into the project is definitely possible in the future.

### 7. Project Link

Here is the project link, hope you like it!

[https://github.com/YinTokey/AutoMV](https://github.com/YinTokey/AutoMV)
