export interface BlogPost {
    id: string;
    title: string;
    date: string;
    content: string;
    tags: string[];
    excerpt: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "computer-dying",
        title: "My Computer is About to Die (And Other Coding Thoughts)",
        date: "October 9, 2025",
        content: `My computer is about to die any moment now, as I've had a 2014 MacBook pro for 11+ years now (whoa). I am very excited to have a computer with some more CPU, RAM, and all that good stuff.

It's interesting working in the non-profit Jewish world as a developer. In my specific role, I am the only one who knows software development by a long shot. Though my fellowship ends in 8 months, I know I want to leave behind some kind of legacy. I wonder if my interests will attract more software developers into the non-profit world! Who knows. But what I do know is that even though my time in the Johns Hopkins Hillel is short, it will be sweet, and that no matter where I go afterwards, I will have left behind that software engineering legacy.

Also, my dev profile is almost up completely!!!! Ahhhh!!!`,
        tags: ["career", "non-profit", "reflection"],
        excerpt: "Thoughts on leaving a legacy in non-profit work and the excitement of finally having a modern computer..."
    },
    {
        id: "github-profile-update",
        title: "Updated My GitHub Profile",
        date: "September 25, 2025",
        content: `I updated my GitHub profile, added a new profile picture that looks even snazzier, and watched a bit of the LinkedIn set-up video.

It's amazing how much a good profile picture can change how you feel about your professional presence online. The new picture makes me feel more confident about putting myself out there in the tech world.

Watching the LinkedIn setup video was also helpful - it reminded me that building a professional online presence is just as important as building technical skills. Sometimes I get so focused on coding that I forget about the business side of things, but both are crucial for success.`,
        tags: ["github", "career", "profile", "professional"],
        excerpt: "The importance of a polished online presence and how small changes can boost confidence..."
    },
    {
        id: "progress-perfection",
        title: "Progress Over Perfection",
        date: "September 22, 2025",
        content: `I had a good break. I did a lot of color by number, booked a last minute plane ticket to San Francisco, watched three Rom Coms, upgraded my iPhone SE 2nd generation to the iPhone 17 Pro, had a nice brunch with my flatmates, and made progress on my puzzle.

That said, I knew that if I knew what was good for me, that I would return to FES and take a little tackle at the next unit. Progress > perfection, progress > speed. I am going into this job application season with a proper mindset, an opportunity-forward mindset, and throwing any fear-mongering into the deep abysses.

I just finished watching the intro video for the Job Application unit. It will give me guidance on the "quick wins" parts, the "take yo time" parts, and the "as you apply" parts. It also will give me guidance on actual application strategies. I definitely am treating this as an "act of faith" act, but I am hoping that in their explanations, they will explain why it truly does make sense.`,
        tags: ["mindset", "career", "learning"],
        excerpt: "Why progress matters more than perfection, and how I'm approaching job applications with the right mindset..."
    },
    {
        id: "skinstric-internship",
        title: "Skinstric AI Internship: What I Actually Learned",
        date: "September 16, 2025",
        content: `I did finish my Skinstric AI internship and was paid for it, which was awesome. It took some time to get to this point, that's for sure, and I am paying the price for it a little bit, because I am now kind of tired (but I've been that way before the internship too—any time I do something energy consuming—be it physical or mental). That said, I am taking a well-deserved mini-vacation and I will return to FES soon.

Some things I did learn along the way though:
- Much better understanding of props
- Much better understanding of how to use components
- Much better understanding of parent, child, and sibling elements, and how that affects positioning or other definition changes
- Better understanding of Absolute Positioning, Relative Positioning, and Flexbox
- Better understanding of Use State and Use Effect
- Better understanding of Conditional Statements
- Better understanding of Git commands to find old pieces of code, revive old commit histories, and devise branches

Overtime, I do want to get better at:
- Various JavaScript functions like conditional statements
- Utilizing and understanding programming Hooks, like React hooks`,
        tags: ["internship", "react", "learning", "technical"],
        excerpt: "Reflecting on my first paid internship and the concrete technical skills I gained..."
    },
    {
        id: "hopkins-hillel-website",
        title: "Building the Hopkins Hillel Website",
        date: "August 27, 2025",
        content: `The week between August 16th and now, I was spending a lot on the Hopkins Hillel website. But then I needed to turn back to this stuff because I had the mid-life crisis of OMG where will I be in a year from now?! 

Hack: when in a mini fright, have a project to work on that will actively bring you closer to your next goal. Tip: this is long term and really for life. It may and can and probably will feel like a slog through mud, but every step counts. Taking the step helps me get through the day and feel like my day went somewhere.

React Project (i.e. Hopkins Hillel) website is 100% done and published. Check it out at <a href="https://www.hopkinshillel.org" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 underline">https://www.hopkinshillel.org</a>`,
        tags: ["projects", "react", "non-profit", "motivation"],
        excerpt: "How building real projects helps with career anxiety and the satisfaction of shipping something meaningful..."
    },
    {
        id: "virtual-internship-planning",
        title: "The Virtual Internship Game Plan",
        date: "August 16, 2025",
        content: `I promise you I was coding basically non-stop daily from the last post till today. I just was forgetful of logging each day.

Some basic updates:
- React Project (i.e. Hopkins Hillel) website is 100% done and published. Check it out at <a href="https://www.hopkinshillel.org" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 underline">https://www.hopkinshillel.org</a>
- Virtual Internship is 99% done. I just need to properly re-fork Hanna's repo, then push my branch updates accordingly.

I am going to create a game plan for #2 and show it to FES support staff to ensure I am planning this correctly.

GAME PLAN
PHASE 1: Preparation
a. Create New (3rd) Repo
b. ASK: First, if I were to fork my second repository (I created a second repository where I had a sample of my 100% working website), would I be able to push pieces of my files in branches? If so, that would likely be the easiest way to do this. Assuming it works, how would I do that? Could you walk me through an example? From there, I would be able to push all my branches myself from there.

OR:
i. Fork Hanna's Repo again
ii. Download #2 (Again)
iii. On VS Code, open #3 (Again)
iv. Make 1st commit on #1 (Again)

PHASE 2-8: Hot-Collections, New-Items, Top-Sellers, Explore, Author, Item-Details

Creating branches for each feature, testing, pushing, creating pull requests, getting reviews, merging to main, and moving to the next phase.`,
        tags: ["planning", "projects", "strategy", "git"],
        excerpt: "A detailed phase-by-phase plan for completing the virtual internship project..."
    },
    {
        id: "shopping-spree",
        title: "The $350 Shopping Spree",
        date: "July 18, 2025",
        content: `First, to get a little into other things. I think I might be really into shopping. I got a $350 gift card and within 2 days, I used it on groceries, kitchen supplies, and a balcony table and chair set and balcony flooring. I almost feel a sense of buyer's RUSH! and a little buyer's remorse, in case I regret it or if there's a "different" way to buy things too. I cannot believe how quickly I blew through the 350 dollars, but I guess that since I won it as a stipend, I wanted to tell myself to save it as cash (it was prepaid on a card, so it couldn't be used for things like investing or savings), and kind of just went crazy. Mom also bought me a bunch of clothes, which was just SO nice of her. I guess long story short, I can't get too used to this.

I have wanted balcony furniture for a while now, and I know I am only gonna be using it for a year before I have to sell it and move out anyways. But it was really enjoyable to buy and I really like seeing my apartment come together.

As I was sleeping last night, I was thinking about the Hopkins Hillel website coming together, which slowly but surely it is. It is really cool to think about.`,
        tags: ["personal", "life", "apartment"],
        excerpt: "The thrill of shopping with a gift card and making my apartment feel like home..."
    },
    {
        id: "vacation-return",
        title: "Back from Vacation, Ready to Code",
        date: "July 17, 2025",
        content: `Two weeks and one day later haha. I was on vacation in the Bay Area; then Sequoia National Park; then Yosemite National Park; and finally a return stop back to my parents'. This vacation was quite nice. I was relaxed. I almost don't like coming back from vacation because a part of me feels that the definition of life is to be in nature with loved ones and never leave them for work purposes. Sometimes the work can in my head feel more boring that way. And then I have to do things like doing this, journaling, writing, texting mentors, to hype up some more energy within me to try and get the big stuff feeling less big.

Worked to find React Final Project Websites to work on. So far landed on a Code With Antonio YouTube Clone and JavaScript Mastery 3-in-1 projects of a movie finder, Google Drive (-ish) clone, and a travel agency app.

For my final project, I am going to start with a YouTube clone. It is two 12-hour videos. 24 hours total. It will take some time to get through it. Going to remind myself that it is the long haul that matters the most. Roti music is really useful to help make the work itself a more calm and serene process. <3 So, thank you, Roti. Thank you.`,
        tags: ["personal", "vacation", "motivation", "projects"],
        excerpt: "The challenge of returning from vacation and finding motivation to tackle big coding projects..."
    },
    {
        id: "macbook-upgrade",
        title: "Hacking My MacBook to Run Modern Software",
        date: "July 17, 2025",
        content: `Starting at the 0 minute mark. Will let you know where I end to.

Ended at around 12 minute mark. Needed to download bun, but my MacBook Pro Big Sur 11.0 software wasn't compatible. On my own, my Mac couldn't upgrade any further, but thanks to OpenCore-Patcher and Mr Macintosh (thanks ChatGPT for suggesting these), I was able to hack my computer into thinking that it was Ventura 13.0 software. So I SHOULD be able to download Bun to the model that the guy was showing in the video.

I am going to try that out tomorrow.

It's crazy how resourceful you can be when you're determined to learn something new. My 2014 MacBook Pro has been through a lot, but I'm not ready to give up on it yet. Sometimes the best solutions come from thinking outside the box and being willing to try unconventional approaches.`,
        tags: ["technical", "hardware", "problem-solving", "determination"],
        excerpt: "Using OpenCore-Patcher to upgrade a 2014 MacBook and the satisfaction of solving technical challenges..."
    },
    {
        id: "react-crash-course",
        title: "Finally Finished React Crash Course",
        date: "May 13, 2025",
        content: `I skipped a lot of days of journaling, but trust that I went through many of the days. I just finished the React Crash Course. I'm really happy about that. Finally, I get to move to projects. This was also the first module where I embraced my ability to not fully understand anything right away and didn't waste time trying to understand things when I didn't have enough practice yet. That helped me a bunch. That's because I know that the more I interact with the material, the more concrete of a mental model my brain will soon begin to form. That's great. Yay. I am excited to begin to work on the projects. And the rest is history. No more boring stuff! Yay! 😀`,
        tags: ["react", "learning", "mindset", "milestone"],
        excerpt: "The breakthrough moment when I stopped trying to understand everything immediately and embraced the learning process..."
    },
    {
        id: "dreamfinder-project",
        title: "DreamFinder: My First Real Project",
        date: "April 20, 2025",
        content: `Between April 4th and April 20th (today), I put in my blood, sweat, and tears, to make a nice website for finding movies. I am going to retire this site now and move on to my next one, but this was a labor of love. I learned a lot by doing it. It tested my patience, my gut, and my ability to not smash the wall.

Between Wednesday, Thursday, Friday, Saturday, and Sunday, I made a satisfactory version of the DreamFinder - Find Your Dream Movie Today Website. 
https://github.com/RinaNewhouse/Dream-Finder
https://rinanewhouse.github.io/Dream-Finder/#

This was my first real project where I felt like I was actually building something meaningful. The process was frustrating at times, but the satisfaction of seeing it come together was incredible.`,
        tags: ["projects", "javascript", "milestone", "frustration"],
        excerpt: "The emotional rollercoaster of building my first real project and learning to push through frustration..."
    },
    {
        id: "freelance-opportunities",
        title: "Learning About Freelance Opportunities",
        date: "April 7, 2025",
        content: `I learned ways to freelance with my coding strategies so far. The main thing I need to learn to balance is wanting to freelance right away and begin making more money (that would help things like rent, etc.) and continuing through the course and learning more high-level code like more JS, React, and FireBase.

From what I was told repeatedly, it is worth learning more and getting even better at my skills as that will set me up with more options for higher pay.

That said, it was empowering to know that I have an in and that it isn't as hard as people make it out to be.`,
        tags: ["freelance", "career", "money", "strategy"],
        excerpt: "The balance between wanting to start earning immediately and investing in deeper learning..."
    },
    {
        id: "first-navigation-bar",
        title: "My First Navigation Bar",
        date: "January 6, 2025",
        content: `Made a navigation bar. Need to work out specifics. One thing I want to do is see if my parent-child classes are organized the best possible here. This feels hard, kind of like when I took physics for the first time and winged everything, with a C- at the end. One nice thing that Mohamed suggested was to make a few short, easy, maybe even ridiculously easy goals and to start that each day. That was what I did today, and it was a helpful trick for me. I also did not feel like I was burnt out when making my code, and a part of that could have been due to not watching any of David's videos and frantically trying to follow along. Rather, I took everything into my own hands and did things more mindlessly, even if I made a lot of mistakes along the way. At the very least, I felt level headed and didn't exit this study session feeling like I was going to lose my mind.`,
        tags: ["html", "css", "learning", "mindset"],
        excerpt: "Learning to break things down into manageable pieces and the importance of feeling level-headed while coding..."
    },
    {
        id: "imposter-syndrome",
        title: "Dealing with Imposter Syndrome",
        date: "January 5, 2025",
        content: `Began final project. Familiarized self with new learning platform. Began to do lists and 30 minute/day chunks to instill a 'leave-them-wanting-more' strategy.

Personal: Dealing with copious amounts of imposter's syndrome and perfectionism.

Sometimes I wonder if I am even cut out for this (I know I am, I am just mega confused at the moment lmaooo). I know that this stuff requires time and patience and I am willing to do it. I just have to own the fact that right now I am utterly and completely CLUELESS. Ahahahaha.`,
        tags: ["imposter-syndrome", "perfectionism", "mindset", "personal"],
        excerpt: "The constant battle with imposter syndrome and learning to be okay with not knowing everything..."
    }
];