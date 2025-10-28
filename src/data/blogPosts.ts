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
    id: 'ship-ai-conference-2025',
    title: 'My Second Conference: SHIP AI Conference 2025',
    date: 'October 23, 2025',
    content: `
      Today’s conference had a bit of a different rhythm to it from the first conference. First, I didn’t technically have a badge…;) but thanks to an invite code and some HARDCORE persuasion, I was in! (Aparna, if you happen to be reading this, you are my angel.)

Today’s set of talks had a different cadence. Rather than talk about a newer, modern framework to do your coding in, Next.js, built by a company called Vercel, the same company, Vercel, talked about how AI has been, is, and can continue to be, changing the development world around us. 

Again, I thought I had a decent grip on AI. <em>No, girl.</em> This conference humbled me, taught me, and allowed me to move forward in this crazy digital world with some confidence and stride. 

Primarily, one talk that really struck me was a concept called <strong>vibe coding</strong>. Vibe coding is a new approach to programming that lets users describe what they want in everyday language, which the AI then translates into functional code. With applications like Cursor, Codex, and Claude Code, vibe coding is advancing faster than ever. Everyday users can now build large-scale applications with little to no technical background.

As exciting as that sounds, it carries a cost. Imagine you vibe code an e-commerce site, describing functions in plain language like, “When the user checks out, process their payment and confirm the order.”

If the AI misinterprets the instruction, it could inadvertently expose sensitive information. For instance, it might create an endpoint that logs payment requests for debugging but fails to mask credit card details. The system could store full card numbers in plain text or transmit them through insecure HTTP rather than HTTPS. A hacker could then locate your public repository on GitHub and exploit every customer’s financial data.

Another risk lies in authentication. If the AI omits proper token validation or session expiration, hackers could exploit those weaknesses to access user accounts or view transaction histories. Because vibe coding encourages rapid prototyping without thorough human oversight, critical security flaws may remain hidden until a breach—or a lawsuit—brings them to light.

To counteract that, security measures need to be put in place. From the conference, here are three potential security measures:
1. <strong>Secure by Design:</strong> Vibe coding platforms should be opinionated in pushing a secure architecture and defaults.
2. <strong>Detect Out-of-Scope Practice:</strong> “Build me a medical record system that also trades Bitcoin” should be an instant nope
3. <strong>Code Review Options:</strong> Vibe coders are unlikely to bring code reviews. So, they should be built-in to the platform, for higher success rate of secure platforms.

With these measures, vibe coding can continue to be a fun—and safe—way to build new and innovative applications.`,
    tags: ['conference', 'learning', 'vercel', 'shipai'],
    excerpt: 'My experience at the SHIP AI conference and how it inspired me to learn more about AI and vibe coding can be used to build secure and innovative applications...',
  },
  {
    id: 'next-js-conference-2025',
    title: 'My First Conference: Next.js Conference 2025',
    date: 'October 22, 2025',
    content: `
      This past Thursday, I took a plane out to San Francisco to see my family and to wish my little brother, Laker, a happy 22nd birthday (See Mon, Sept 22). It was truly quite a whirlwind adventure, from exploring all the big towers, trying the most bizarrely delicious fusion cuisines, and exploring the sun-scaped Golden Gate bridge. 

      That Thursday, October 16th, I told him that I want to sit down and plan my next career a bit. We had planned to do a whiteboard session that day from 5pm-6pm, before our dinner out with our parents. Lo and behold, our parents arrived early, and having not seen them for 3 months, and knowing they’d only see me for three days (...subtle foreshadowing…), we decided to defer our whiteboard session and go straight to dinner. 

      That said, I was eagerly awaiting our whiteboard session that we were going to do the next day, October 17th. Morning comes, and I remind Laker of our whiteboard session. He lights up, and immediately says (more or less), “Rina, you’ll be going to the Next.js conference! Aparna will be inviting you!” 

      I thought for a moment, and I thought, this is a great idea, but how do I bring this up to my boss?! Laker, being the master persuader he is, reminded me that not only is this good for me, it’s also really good for THEM. So, I called my boss. She said she would need to bring it up with her boss, but that it seemed like a fun idea. The longest three and a half hours later, she approved it! I was the happiest girl at the office cafeteria that day.

      I told my parents that I was staying for longer in SF to go to the conference and they went berserk! More family time too :) 

      All right, well that was a lot of context, what about the actual conference?! (Says the audience)

      Well, the conference itself was magical. Located at the Midway in SF, I walked in and felt a buzzing sensation. Hundreds of people, a DJ playing casual bass-ridden beats at all times, caterers offering us food, tons of pop-up startups telling us about how they use Next.js and are awesome, and an INSANE, yes, INSANE amount of free merch.

      Most of all, I learned that I still have a lot of learning to do. I kind of knew that going into the conference, because in a developer’s world, learning never, and I mean, it NEVER ends. One of my mentors, Michel, told me, <strong><em>“The more you know, the less you know.”</em></strong> And, in a way, I felt that that was the truest statement ringing in my brain over the duration of the entire conference. In just the first talk alone, I was googling 27 different tabs of various acronyms, frameworks, coding languages, tech stacks, and more. I was exhaustively invigorated. 
      
      My brother, Laker, reminded me that putting yourself in the newest of environments makes your learning gradient the highest and most rapid as a result. I can say this conference did it for me. Although I had a decent understanding of Next.js going into the conference, the aftermath of it made me realize how untrue that is and it also made me slowly want to improve my understanding even more of Next.js, but also other tech stacks that go with it.

      My last takeaway is that I want to put in actionable steps about how I can utilize Next.js more in the work I do ahead. Something I always like to do when learning something new is creating a plan of action. Action is such a special word, and I love to take it with me wherever I go. One huge area of action I want to do is to migrate the Johns Hopkins Hillel website from Create React App (which was sunsetted on February 14th, 2025—what a day to break up with someone!) to Next.js. 

      Though I have made migration attempts previously, with this conference, I now have a better framework for how exactly I will migrate this truckload of an application (thanks to my 100 JS/JSX files needed for migration) >:) I also am inspired to watch crash course videos of NextJS and to just really get myself to learn more and more. Truly, the best way is through experience, and especially experiences where you feel just a little bit dumb by.

      I’m excited for the Vercel conference, see you then!`,
    tags: ['conference', 'learning', 'vercel', 'nextjs'],
    excerpt: 'My experience at the Next.js conference and how it inspired me to learn more about Next.js and other tech stacks...',
  },
  {
    id: 'interviews',
    title: 'Interviews: What to Expect and How to Prepare',
    date: 'October 21, 2025',
    content: `Today, I spent a bunch of time learning new and innovative ways to interview, both behaviorally and technically. It was really interesting to see where AI can come into the picture for both parts, and also where it doesn’t. 
        
        There is a certain degree of nit and grit that people will just have to put in. That’s just truth. You can’t not put in the work! 
        
        AT THE SAME TIME, there are ways said work can be done WAYYYY more efficiently in a way that it can be FUN and ENERGIZING. Say hello to your AI platform of choice, whether that be ChatGPT, Gemini, Claude, or another. (Not not saying there is a family feud in my household about which AI platform is best to use and should be used.) ;)
        
        Plus, if anyone has any questions about interviews, please feel free to ask in the modal up above in the top of my portfolio! I don't gatekeep ;)`,
    tags: ['interviews', 'preparation', 'advice', 'ai'],
    excerpt:
      'Learning new and innovative ways to interview, both behaviorally and technically...',
  },
  {
    id: 'ai-coding',
    title: 'AI Coding: What It Means for the Future of Software Development',
    date: 'October 13, 2025',
    content: `Coding has taken a turn for the crazier in recent years. As I am sure you all know, AI is on the uproar, and I have a feeling that during any future interviews I or others take, the type of questions asked and skills asked for are going to be different than they may have 2 or 3 years ago. Nowadays, so many developers use AI to help build their projects--and I’m not going to lie and say I didn’t. 

        The only thing I wonder is, how is that going to change things for me? How am I going to prove I have knowledge on topics, if I can’t generate them from scratch, but rather, rely on the fingertips of Google, ChatGPT, Gemini, or Cursor? If I run out of internet, will I be someone who just has absolutely zero reliable coding knowledge? Well, the truth is, I look up concepts ALL the time. I know DOM is the simple document object model, and that it is a model that JavaScript can use to communicate back and forth between it, the HTML, and the webpage itself. But when I am trying to build one specific thing, how will I know what to turn to in that moment of need? 

        Then, for follow-along videos…ahhh the best. Those can take a long time. It is easy to get stuck. It is also easy to be overwhelmed by it all. I think I just need to take it one video at a time and know that it is not something I need to master tomorrow, but if I am one step closer, I will feel better about it. Sometimes, it feels like I’ve been telling myself this every day. And that I truly cannot compare my success or my doings to others, or what is the “norm” of what should be done. 

        Granted, when I talk to my mentors, some of whom really believe in me and use kind supportive language, it also gives me the energy boost I need to give something a go, knowing that they are there on the other side waiting for me to do it. I have to tune out the noise, as easy as it is to not. Seeing social media posts about frontend developers going to the crazy marks are also not very helpful for my growth. Yeah. Today I did learn a bit more about DOM.`,
    tags: ['ai', 'coding', 'thoughts'],
    excerpt:
      'Thoughts on AI coding and the impact it may have on the future of software development...',
  },
  {
    id: 'computer-dying',
    title: 'My Computer is About to Die (And Other Coding Thoughts)',
    date: 'October 9, 2025',
    content: `My computer is about to die any moment now, as I've had a 2014 MacBook pro for 11+ years now (whoa). I am very excited to have a computer with some more CPU, RAM, and all that good stuff.

        It's interesting working in the non-profit Jewish world as a developer. In my specific role, I am the only one who knows software development by a long shot. Though my fellowship ends in 8 months, I know I want to leave behind some kind of legacy. I wonder if my interests will attract more software developers into the non-profit world! Who knows. But what I do know is that even though my time in the Johns Hopkins Hillel is short, it will be sweet, and that no matter where I go afterwards, I will have left behind that software engineering legacy.

        Also, my dev profile is almost up completely!!!! Ahhhh!!!`,
    tags: ['career', 'non-profit', 'reflection'],
    excerpt:
      'Thoughts on leaving a legacy in non-profit work and the excitement of finally having a modern computer...',
  },
  {
    id: 'github-profile-update',
    title: 'Updated My GitHub Profile',
    date: 'September 25, 2025',
    content: `I updated my GitHub profile, added a new profile picture that looks even snazzier, and watched a bit of the LinkedIn set-up video.

        It's amazing how much a good profile picture can change how you feel about your professional presence online. The new picture makes me feel more confident about putting myself out there in the tech world.

        Watching the LinkedIn setup video was also helpful - it reminded me that building a professional online presence is just as important as building technical skills. Sometimes I get so focused on coding that I forget about the business side of things, but both are crucial for success.`,
    tags: ['github', 'career', 'profile', 'professional'],
    excerpt:
      'The importance of a polished online presence and how small changes can boost confidence...',
  },
  {
    id: 'progress-perfection',
    title: 'Progress Over Perfection',
    date: 'September 22, 2025',
    content: `I had a good break. I did a lot of color by number, booked a last minute plane ticket to San Francisco, watched three Rom Coms, upgraded my iPhone SE 2nd generation to the iPhone 17 Pro, had a nice brunch with my flatmates, and made progress on my puzzle.

        That said, I knew that if I knew what was good for me, that I would return to FES and take a little tackle at the next unit. Progress > perfection, progress > speed. I am going into this job application season with a proper mindset, an opportunity-forward mindset, and throwing any fear-mongering into the deep abysses.

        I just finished watching the intro video for the Job Application unit. It will give me guidance on the "quick wins" parts, the "take yo time" parts, and the "as you apply" parts. It also will give me guidance on actual application strategies. I definitely am treating this as an "act of faith" act, but I am hoping that in their explanations, they will explain why it truly does make sense.`,
    tags: ['mindset', 'career', 'learning'],
    excerpt:
      "Why progress matters more than perfection, and how I'm approaching job applications with the right mindset...",
  },
  {
    id: 'skinstric-internship',
    title: 'Skinstric AI Internship: What I Actually Learned',
    date: 'September 16, 2025',
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
    tags: ['internship', 'react', 'learning', 'technical'],
    excerpt:
      'Reflecting on my first paid internship and the concrete technical skills I gained...',
  },
  {
    id: 'hopkins-hillel-website',
    title: 'Building the Hopkins Hillel Website',
    date: 'August 27, 2025',
    content: `The week between August 16th and now, I was spending a lot on the Hopkins Hillel website. But then I needed to turn back to this stuff because I had the mid-life crisis of OMG where will I be in a year from now?! 

Hack: when in a mini fright, have a project to work on that will actively bring you closer to your next goal. Tip: this is long term and really for life. It may and can and probably will feel like a slog through mud, but every step counts. Taking the step helps me get through the day and feel like my day went somewhere.

React Project (i.e. Hopkins Hillel) website is 100% done and published. Check it out at <a href="https://www.hopkinshillel.org" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 underline">https://www.hopkinshillel.org</a>`,
    tags: ['projects', 'react', 'non-profit', 'motivation'],
    excerpt:
      'How building real projects helps with career anxiety and the satisfaction of shipping something meaningful...',
  },
  {
    id: 'virtual-internship-planning',
    title: 'The Virtual Internship Game Plan',
    date: 'August 16, 2025',
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
    tags: ['planning', 'projects', 'strategy', 'git'],
    excerpt:
      'A detailed phase-by-phase plan for completing the virtual internship project...',
  },
  {
    id: 'shopping-spree',
    title: 'The $350 Shopping Spree',
    date: 'July 18, 2025',
    content: `First, to get a little into other things. I think I might be really into shopping. I got a $350 gift card and within 2 days, I used it on groceries, kitchen supplies, and a balcony table and chair set and balcony flooring. I almost feel a sense of buyer's RUSH! and a little buyer's remorse, in case I regret it or if there's a "different" way to buy things too. I cannot believe how quickly I blew through the 350 dollars, but I guess that since I won it as a stipend, I wanted to tell myself to save it as cash (it was prepaid on a card, so it couldn't be used for things like investing or savings), and kind of just went crazy. Mom also bought me a bunch of clothes, which was just SO nice of her. I guess long story short, I can't get too used to this.

        I have wanted balcony furniture for a while now, and I know I am only gonna be using it for a year before I have to sell it and move out anyways. But it was really enjoyable to buy and I really like seeing my apartment come together.

        As I was sleeping last night, I was thinking about the Hopkins Hillel website coming together, which slowly but surely it is. It is really cool to think about.`,
    tags: ['personal', 'life', 'apartment'],
    excerpt:
      'The thrill of shopping with a gift card and making my apartment feel like home...',
  },
  {
    id: 'vacation-return',
    title: 'Back from Vacation, Ready to Code',
    date: 'July 17, 2025',
    content: `Two weeks and one day later haha. I was on vacation in the Bay Area; then Sequoia National Park; then Yosemite National Park; and finally a return stop back to my parents'. This vacation was quite nice. I was relaxed. I almost don't like coming back from vacation because a part of me feels that the definition of life is to be in nature with loved ones and never leave them for work purposes. Sometimes the work can in my head feel more boring that way. And then I have to do things like doing this, journaling, writing, texting mentors, to hype up some more energy within me to try and get the big stuff feeling less big.

        Worked to find React Final Project Websites to work on. So far landed on a Code With Antonio YouTube Clone and JavaScript Mastery 3-in-1 projects of a movie finder, Google Drive (-ish) clone, and a travel agency app.

        For my final project, I am going to start with a YouTube clone. It is two 12-hour videos. 24 hours total. It will take some time to get through it. Going to remind myself that it is the long haul that matters the most. Roti music is really useful to help make the work itself a more calm and serene process. <3 So, thank you, Roti. Thank you.`,
    tags: ['personal', 'vacation', 'motivation', 'projects'],
    excerpt:
      'The challenge of returning from vacation and finding motivation to tackle big coding projects...',
  },
  {
    id: 'macbook-upgrade',
    title: 'Hacking My MacBook to Run Modern Software',
    date: 'July 17, 2025',
    content: `Starting at the 0 minute mark. Will let you know where I end to.

        Ended at around 12 minute mark. Needed to download bun, but my MacBook Pro Big Sur 11.0 software wasn't compatible. On my own, my Mac couldn't upgrade any further, but thanks to OpenCore-Patcher and Mr Macintosh (thanks ChatGPT for suggesting these), I was able to hack my computer into thinking that it was Ventura 13.0 software. So I SHOULD be able to download Bun to the model that the guy was showing in the video.

        I am going to try that out tomorrow.

        It's crazy how resourceful you can be when you're determined to learn something new. My 2014 MacBook Pro has been through a lot, but I'm not ready to give up on it yet. Sometimes the best solutions come from thinking outside the box and being willing to try unconventional approaches.`,
    tags: ['technical', 'hardware', 'problem-solving', 'determination'],
    excerpt:
      'Using OpenCore-Patcher to upgrade a 2014 MacBook and the satisfaction of solving technical challenges...',
  },
  {
    id: 'react-crash-course',
    title: 'Finally Finished React Crash Course',
    date: 'May 13, 2025',
    content: `I skipped a lot of days of journaling, but trust that I went through many of the days. I just finished the React Crash Course. I'm really happy about that. Finally, I get to move to projects. This was also the first module where I embraced my ability to not fully understand anything right away and didn't waste time trying to understand things when I didn't have enough practice yet. That helped me a bunch. That's because I know that the more I interact with the material, the more concrete of a mental model my brain will soon begin to form. That's great. Yay. I am excited to begin to work on the projects. And the rest is history. No more boring stuff! Yay! 😀`,
    tags: ['react', 'learning', 'mindset', 'milestone'],
    excerpt:
      'The breakthrough moment when I stopped trying to understand everything immediately and embraced the learning process...',
  },
  {
    id: 'dreamfinder-project',
    title: 'DreamFinder: My First Real Project',
    date: 'April 20, 2025',
    content: `Between April 4th and April 20th (today), I put in my blood, sweat, and tears, to make a nice website for finding movies. I am going to retire this site now and move on to my next one, but this was a labor of love. I learned a lot by doing it. It tested my patience, my gut, and my ability to not smash the wall.

        Between Wednesday, Thursday, Friday, Saturday, and Sunday, I made a satisfactory version of the DreamFinder - Find Your Dream Movie Today Website. 
        https://github.com/RinaNewhouse/Dream-Finder
        https://rinanewhouse.github.io/Dream-Finder/#

        This was my first real project where I felt like I was actually building something meaningful. The process was frustrating at times, but the satisfaction of seeing it come together was incredible.`,
    tags: ['projects', 'javascript', 'milestone', 'frustration'],
    excerpt:
      'The emotional rollercoaster of building my first real project and learning to push through frustration...',
  },
  {
    id: 'freelance-opportunities',
    title: 'Learning About Freelance Opportunities',
    date: 'April 7, 2025',
    content: `I learned ways to freelance with my coding strategies so far. The main thing I need to learn to balance is wanting to freelance right away and begin making more money (that would help things like rent, etc.) and continuing through the course and learning more high-level code like more JS, React, and FireBase.

        From what I was told repeatedly, it is worth learning more and getting even better at my skills as that will set me up with more options for higher pay.

        That said, it was empowering to know that I have an in and that it isn't as hard as people make it out to be.`,
    tags: ['freelance', 'career', 'money', 'strategy'],
    excerpt:
      'The balance between wanting to start earning immediately and investing in deeper learning...',
  },
  {
    id: 'first-navigation-bar',
    title: 'My First Navigation Bar',
    date: 'January 6, 2025',
    content: `Made a navigation bar. Need to work out specifics. One thing I want to do is see if my parent-child classes are organized the best possible here. This feels hard, kind of like when I took physics for the first time and winged everything, with a C- at the end. One nice thing that Mohamed suggested was to make a few short, easy, maybe even ridiculously easy goals and to start that each day. That was what I did today, and it was a helpful trick for me. I also did not feel like I was burnt out when making my code, and a part of that could have been due to not watching any of David's videos and frantically trying to follow along. Rather, I took everything into my own hands and did things more mindlessly, even if I made a lot of mistakes along the way. At the very least, I felt level headed and didn't exit this study session feeling like I was going to lose my mind.`,
    tags: ['html', 'css', 'learning', 'mindset'],
    excerpt:
      'Learning to break things down into manageable pieces and the importance of feeling level-headed while coding...',
  },
  {
    id: 'imposter-syndrome',
    title: 'Dealing with Imposter Syndrome',
    date: 'January 5, 2025',
    content: `Began final project. Familiarized self with new learning platform. Began to do lists and 30 minute/day chunks to instill a 'leave-them-wanting-more' strategy.

        Personal: Dealing with copious amounts of imposter's syndrome and perfectionism.

        Sometimes I wonder if I am even cut out for this (I know I am, I am just mega confused at the moment lmaooo). I know that this stuff requires time and patience and I am willing to do it. I just have to own the fact that right now I am utterly and completely CLUELESS. Ahahahaha.`,
    tags: ['imposter-syndrome', 'perfectionism', 'mindset', 'personal'],
    excerpt:
      'The constant battle with imposter syndrome and learning to be okay with not knowing everything...',
  },
];
