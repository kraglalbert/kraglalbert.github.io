---
layout: post
title: "Internships: The LeetCode Grind"
comments: true
description: ""
keywords: "blog, internship, intern, internships, leetcode, grind, interviews"
---

For my first post of 2019, I'll start a new series focused on software internships, where I'll write about the things I've learned and experienced related to them so far.

It's been roughly a year since I was first introduced to [LeetCode](https://leetcode.com), the website with hundreds of practice problems for technical interviews, ranging in difficulty from Easy to Hard. There are other similar websites, such as HackerRank, but LeetCode was the one I used personally. Back then, it wasn't a huge thing on my radar since I was mostly focused on getting my first internship, but once I got that offer it became something I slowly committed to. At first, like many people, I struggled with a lot of the Easy level questions, and I didn't have much of an intuition for what made a solution "optimal". Since then, though, I've become a lot better at solving those types of technical questions, and I'm now able to solve most Mediums and even the occasional Hard question. 

Many people refer to the process of learning and practicing these problems as the "LeetCode grind". In my personal experience, it definitely was a grind that in total lasted about 8 months. However, while it was certainly challenging, it was also equally rewarding and even fun. I'll discuss some of the key things I learned below, as well as some of the dos and don'ts of practicing interview problems.

## Starting from Scratch

When I started out, I was relatively comfortable with my data structures and some basic algorithms (e.g. MergeSort), but the thing I struggled with was realizing when to use them. In school assignments, problems will often give you some indication to what you should do to solve it, but with LeetCode this is not the case at all. I would often think I was going in the right direction, but it would turn out that I wasn't even close, or that the idea I had *would* work, but there was a much simpler/more optimal solution that was better.  

All of this was discouraging at first, but I noticed after a while that the problems had a lot things in common (for example, tons of problems can be solved fairly simply by using a HashMap). Once I solved and understood one problem, I actually unlocked the solution to that entire *class* of problems. After a while, I could look at some problems and think to myself *"I've seen this in problem X before! I can solve it by doing Y like I did in that problem."* 

> Once I solved and understood one problem, I actually unlocked the solution to that entire *class* of problems.

This was around the point I started to gain a bit of confidence and I started enjoying the process of solving problems a lot more. However, I had only been doing Easy level problems, so it was soon time to move on to the meat of interview questions: Medium level problems.

## A Happy Medium

While I was doing LeetCode, I had also signed up for [Daily Coding Problem](https://www.dailycodingproblem.com/), which sends you a new coding problem every day by email. One of the first few I got sent actually ended up being a Medium problem on LeetCode, which was:

> Given an array `nums` of *n* integers, where *n* > 1, return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.
>
> Note: do this without division.

I remember that I thought of the solution using division pretty quickly when I first saw this, but that was all I could think of. I sat down and thought about it for almost an hour straight until I finally thought of the proper solution, which blew me away a little bit! The solution only uses arrays, which is essentially the simplest data structure one can use, but it uses them in a clever way to get the desired result. 

I didn't realize at first that this problem was on LeetCode, but I eventually found it and wrote up my solution with actual code. It worked! That was a great moment for me, and also one that opened the door to more advanced problems I still had left to do.

## Weaknesses Exposed

During the middle of the summer in 2018, I had gotten my first technical interview. It was with one of the Big 4 companies, so I knew it would be difficult. Due to circumstance, the interview would be for an internship in the Fall, which I wasn't super keen on, so I didn't end up stressing too much about this. It ended up being a good reality check, since real interviews are pretty different from solving problems casually in your bedroom, and also significantly more stressful. 

The interview was actually two back-to-back interviews, which for me at the time was equivalent to jumping into the deep end of the technical interview pool straight away. In my first interview I got a problem that was different from anything I had seen before, and I bombed that one pretty hard. I actually did pretty okay in the second and got a working solution by the end, but the first interview had already decided my fate at that point. I got rejected two weeks later, but I wasn't surprised and got a lot of positive things out of the whole experience. Most importantly, I realized two things:

* LeetCode by itself wasn't going to cut it for interviews with top-tier companies. I needed to practice by doing mock interviews as well, which I began doing shortly after (this is a separate topic that I'll talk about in a future post).
* The upper limit for difficulty with interview questions is *high*. I needed to learn more advanced (and scary) concepts if I wanted to succeed, regardless of which problem was thrown my way.

In the next few months that followed, I went from being okay (at best) to being pretty good at interview questions.

## The Next Level

I owe a lot of credit to [Elements of Programming Interviews](https://www.amazon.com/Elements-Programming-Interviews-Insiders-Guide/dp/1479274836) (or EPI for short), which made me a lot more comfortable with hard interview questions, and the classic [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=sr_1_1?keywords=cracking+the+coding+interview&qid=1550434425&s=books&sr=1-1), where I learned a lot about the more behavioural aspects of the technical interview. 

My copy of EPI had been sitting in my desk gathering dust for a few months, but after my interview I knew that I needed to go through it. The problems in that book are some of the hardest you could realistically be asked in an interview, and they absolutely kicked my ass—but they also took my algorithmic skills to the next level. The topics I began exploring around this time included:

* Graphs
* Dynamic Programming
* Heaps, and clever ways to use them
* Advanced Recursion

Of course, I was familiar with all of these things, but actually implementing solutions for these types of problems was something I found pretty scary. There were a lot of times when I would read a problem, and no matter how hard I thought about it I simply couldn't come up with a solution. It might seem counterintuitive, but I've gotten a lot of value out of "cheating" and looking at the solution to difficult problems I was stuck on. However, the key is not to memorize the solution, but to understand the solution and the high-level approach that was used. Implementing the solution afterwards by yourself is also super important, and I personally found that this was how I internalized the knowledge related to a problem, instead of forgetting about it the next day.

> The key is not to memorize the solution, but to understand the solution and the high-level approach that was used.

These topics were even scarier for me since I had not taken a formal algorithms class at that point (I'm only doing that now in January 2019), so I had to teach myself a lot of difficult concepts. However, I managed to pull this off, and I'm pretty proud of that.

## Showtime

Once late August rolled around and I had wrapped up my first internship, I set my sights on getting an internship at a top-tier company for Summer 2019 and I started sending out applications. I had spent months honing my skills, and it was finally time to apply them. 

My application season was actually pretty uneventful. I thought I would get a lot more interviews than I did, since I only ended up getting interviews at two of the Big 4 companies and coding challenges from another three companies (which all ended in rejections). Overall, I was a bit disappointed, but I focused on making the most of what I had.

Of the two interviews I got, I managed to move on to the second round with one of them. At that point, there was only one interview standing in the way between me and an offer, and I was *stressed*. I did my best not think about that though, and my second interview went pretty well overall. 

I received the offer for that internship a few weeks later, and *wow*. What a feeling that was.

It was a close call, but my hard work paid off in the end. After 8 months on the grind, I had gone through 150 LeetCode questions, all of the problems in EPI, most of the Daily Coding Problems I received, and most of the problems in Cracking the Coding Interview. There was definitely some luck involved with my interviews, but the amount of practice I did significantly increased my odds, without a doubt.

## Conclusion

I'll finish this post off by including what I think are best practices for technical interviews, and also what I think should be avoided.

**Do:**

* Commit. You don't have to do 10 problems a day, but establish some sort of regimen. Practicing for technical interviews isn't all that different to any other skill, and dedicated time and focus will lead to positive results.
* Challenge yourself and be aware of your weaknesses. Always push your boundaries and try to do something you don't know how to do, that's the only way you'll consistently get better. If you know you're not good at something, focus on improving that aspect of your skills instead of shying away from it, which can be easy to do.
* Implement solutions. It's not enough to think of the solution in your head, you have to also write the code for it. Get it accepted on LeetCode, it's a good feeling!
* Take a break. Sometimes trying to push through a problem will lead to unnecessary frustration, and it can be best to come back to it later with a fresh perspective. 

**Don't:**

* Memorize solutions. There is really no benefit to doing this, since a) it's easy to forget a specific solution, b) it's obvious in an interview if you memorized a solution and don't understand it completely, and c) you rob yourself of knowledge that could be useful to solve other problems.
* Take too long to solve a problem. This is okay at first, but eventually you want to get in the habit of solving problems in less than an hour, since most technical interviews are about 45 minutes long. Getting accustomed to the time pressure is extremely important, and many people fail interviews because they don't do this.

Thanks for reading, I'll be back soon with another post in this series!