# Frontend Mentor - Stats Preview Card Component Solution

This is my solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). I'm super thankful to have found Frontend Mentor as a great way to confidently grow in my coding skills with real-life projects. 

## Table of contents

- [Overview](#overview)
  - [Project Brief](#project-brief)
  - [Mobile View](#mobile-view)
  - [Desktop View](#desktop-view)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### [Project Brief](./project%20brief/)

Your challenge is to build out this card component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

### Mobile View

![](./stats-card-mobile.jpg)

### Desktop View

![](./stats-card-desktop.jpg)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/stats-card-with-next-tailwind-s2UBHsewM6)
- [Live Site URL](https://stats-card-gdbecker.netlify.app)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org) - React framework
- HTML5
- CSS
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- Mobile-first workflow
- [VS Code](https://code.visualstudio.com)

### What I learned

While working on a handful of these Frontend Mentor challenges, I inevitably ran across Tailwind as an option for writing CSS since it was an option in the menu while initializing a new Next app. I decided to give it a go with a smaller component project like this one - and while there's definitely a learning curve, I had a lot of fun figuring out the built-in utilities to make this work! Already I'm loving how quickly and efficiently I can write CSS without leaving my HTML code, but I also want to make sure I'm keeping it as organized and concise as possible because it's easy to overdo it on classes. The trickiest part of this one for me was the background image and violet overlay - I at first had two divs, one for the image and another for the color, and once I found Tailwind's "bg-blend" class, that's what solved it for me to get the right shade and blend effect. 

Here are a few code samples from this project:

```html
<!-- My solution for the background image/color -->
<div className=" flex w-full h-72 bg-violet bg-blend-multiply bg-[url('../../public/image-header-mobile.jpg')] bg-cover bg-center    bg-no-repeat md:bg-[url('../../public/image-header-desktop.jpg')] md:h-96">
</div>
```

```css
/* My standard format for importing custom fonts */
@font-face {
  font-family: Inter-Regular;
  src: url(../../public/Inter-Regular.ttf);
}
```

### Continued development

As a starter developer, I want to keep growing in working as a team and learning how to deliver smaller packages of code at a time, such as components like this one. I thought this project was a good way to get back into React and begin doing just that!

### Useful resources

- [CSS Formatter](http://www.lonniebest.com/FormatCSS/) - I found this helpful site when I'm feeling lazy and don't want to format my CSS code, I can have this do it for me, especially putting everything in alphabetical order.
- [Tailwind Background Blend](https://tailwindcss.com/docs/background-blend-mode) - This was how I figured out blending the violet background color with image

## Author

- Website - [Garrett Becker]()
- Frontend Mentor - [@gdbecker](https://www.frontendmentor.io/profile/gdbecker)
- LinkedIn - [Garrett Becker](https://www.linkedin.com/in/garrett-becker-923b4a106/)

## Acknowledgments

Thank you to the Frontend Mentor team for providing all of these fantastic projects to build, and for our getting to help each other grow!