# Frontend Mentor - 3 Column Card Component Solution

This is my solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). I'm super thankful to have found Frontend Mentor as a great way to confidently grow in my coding skills with real-life projects. 

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

Your challenge is to build out this 3-column preview card component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

### Mobile View

![](./3-column-card-mobile.jpg)

### Desktop View

![](./3-column-card-desktop.jpg)

### Links

- [Solution URL]()
- [Live Site URL]()

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org) - React framework
- HTML5
- CSS
- [SASS](https://sass-lang.com) - CSS extension language
- Bootstrap
- Mobile-first workflow
- [VS Code](https://code.visualstudio.com)

### What I learned

After working through several challenges with React and Bootstrap, I wanted to challenge myself and learn a couple of new tools I've heard about - Next.js and SASS. Definitely a learning curve for both of these but completely worth it, especially coming to grips with SASS - it was so handy separating my color palette and font variables into a separate file and then calling them throughout the .scss file. Next.js was also a lot of fun to learn and get started with, as well as figuring out how the server side rendering works and when to 'use client' s needed - I needed to for the home page on this project to pull in the Bootstrap js I installed. It felt like a good step to start with a smaller component project like this one to learn new tools.

Here are a few code samples from this project:

```html
<div className="row mt-4">
  <div className="icon-wrapper"> 
    <Image 
      src={SedansIcon}
      alt="Sedans Icon"
      width={45}
      height={45}           
    />
  </div>
</div>
<div className="row mt-4">
  <h1 className="card-title">SEDANS</h1>
</div>
```

```css
.icon-wrapper {
  text-align: left;
}

.card-title {
  color: $white;
  font-family: $BigShouldersDisplay-Bold;
  font-size: 1.8rem;
}
```

```js
const [loading, setLoading] = useState(true);

useEffect(() => {
  import ('bootstrap/dist/js/bootstrap.min.js');
  setLoading(false);
}, []);
```

### Continued development

As a starter developer, I want to keep growing in working as a team and learning how to deliver smaller packages of code at a time, such as components like this one. I thought this project was a good way to get back into React and begin doing just that!

### Useful resources

- [CSS Formatter](http://www.lonniebest.com/FormatCSS/) - I found this helpful site when I'm feeling lazy and don't want to format my CSS code, I can have this do it for me, especially putting everything in alphabetical order.
- [SASS Tutorial and Setup](https://www.youtube.com/watch?v=txg2fCPsYYU&t=241s) - This was a helpful quick tutorial I watched to help me get started with SASS and the live compiler in VS Code.

## Author

- Website - [Garrett Becker]()
- Frontend Mentor - [@gdbecker](https://www.frontendmentor.io/profile/gdbecker)
- LinkedIn - [Garrett Becker](https://www.linkedin.com/in/garrett-becker-923b4a106/)

## Acknowledgments

Thank you to the Frontend Mentor team for providing all of these fantastic projects to build, and for our getting to help each other grow!