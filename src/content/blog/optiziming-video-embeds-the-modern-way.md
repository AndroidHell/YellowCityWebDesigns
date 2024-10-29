---
title: Optimizing Video Embeds the Modern Way
description: In the industry, you never stop learning. Which is great because I
  love learning new things. As I progress in my career as a web developer, I am
  always looking at ways that I can improve both[...]
pubDate: Oct 29, 2024 8:22 AM
updatedDate: ""
heroImage: /optimizing-video.webp
pinned: false
---

In the industry, you never stop learning. Which is great because I love learning new things. As I progress in my career as a web developer, I am always looking at ways that I can improve both my toolbox of knowledge and the enduser experience.

When I set out to pick my stack, I wanted something that is robust, modern and lightning fast. I settled on AstroJS and Tailwind because not only do I get those above qualities, but I also have a powerhouse of a framework at my disposal.

Something I wanted to do in Y Que, the last template I wrote a few weeks back, was to revisit embedded video. Something that you probably don't know if you aren't a developer is that iframes are cumbersome, bulky and sluggish. I knew this going in to setting up my video component but I was just wanting something to demo and went the old fashioned way of embedding a YouTube video with an iframe.

On top of using old practices, I was also reminded of just how awful it is working with practically any Google branded API. The video itself wasn't too hard to get up and running but it bogged down my site template so bad, it almost felt like Google would rather I just put a link to the video so they can get that sweet ad revenue.

No one wins in this regard, in my opinion, but I digress.

I ran a site speed test after I got the site up, and I'll just let the numbers speak for themselves:

![performance score before optimizing](/assets/images/yque-before.webp)

I'm not even joking. That is the screenshot I took. I was appalled when I saw this because this is just unacceptable. So, I went to work and started researching what could be done. As it so happens, the devs that work with AstroJS knew about this and sought to fix it in-house. There is an official integration for video embedding called astro-embed. This thing is amazing. It will not load any scripts at all until you click play. The video player and default image loads along with the rest of the site(bonus points to setting the loading of the video to lazy). In layman's terms, this means the site loads fast as hell, and the site will never touch Google's bundled code until you start the video.

The next morning I set out to fix this glaring issue. It really didn't take any time at all. I installed the package with Node and the rest was practically plug-and-play. Not only does site feel light and crisp now but just look at this:

![performance score after optimizing](/assets/images/yque-after.webp)

That's it. I just swapped out the old school way of doing things with this modern approach. That module is the only thing I changed and the score went from a measly 69 to 92 just like that.

As I continue on with this journey I hope to make more blogs like this. I feel it is important to remain transparent about how I approach web development, but I also think at least a few people will get a bit of joy seeing how some things work.

Thanks for stopping by.
