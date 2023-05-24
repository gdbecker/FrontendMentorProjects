# Frontend Mentor - QR Code Component Solution

This is my solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H){:target="blank"}. I'm super thankful to have found Frontend Mentor as a great way to confidently grow in my coding skills with real-life projects. 

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

Your challenge is to build out this QR code component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack){:target="_blank"} and ask questions in the **#help** channel.

### Mobile View

![](./qr-code-mobile.jpg)

### Desktop View

![](./qr-code-desktop.jpg)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/qr-code-component-hosted-on-netlify-rwLGIUAbUi){:target="_blank"}
- [Live Site URL](https://qr-code-gdbecker.netlify.app){:target="_blank"}

## My process

### Built with

- [React](https://reactjs.org/){:target="_blank"} - JS library
- HTML5
- CSS
- Bootstrap
- Mobile-first workflow
- [VS Code](https://code.visualstudio.com){:target="_blank"}

### What I learned

I decided to try Frontend Mentor as a way to challenge myself in frontend design and push myself to grow more comfortable and fluent in this stack - and so far I'm loving it! This QR code project was a great way to get familiar with React again as well as some basic CSS. Getting the QR image right was the trickiest part; I had to play around with the Bootstrap settings a bit to make sure it was centered and even. It was a good reminder to keep my style code cohesive and simple.

Here are a few code samples from this project:

```html
<div className="row">
  <div className="qr-box"></div>
</div>
```

```css
.qr-box {
	background-image: url(assets/image-qr-code.png);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 10px;
	min-height: 250px;
}
```

### Continued development

As a starter developer, I want to keep growing in working as a team and learning how to deliver smaller packages of code at a time, such as components like this one. I thought this project was a good way to get back into React and begin doing just that!

### Useful resources

- [Taking screenshots on Safari for Mac](https://eshop.macsales.com/blog/76508-take-a-screenshot-of-an-entire-webpage/){:target="_blank"} - This was a helpful way I found to take screenshots on Safari for Mac. Another way I'll use is to print a page to PDF, and then convert to .jpg or .png format.
- [CSS Box Shadows](https://getcssscan.com/css-box-shadow-examples){:target="_blank"} - These are a helpful set of box-shadow styles with a wide variety of styles. This is one of those settings I'm coming to grips with so this is a great way to find one to start off with and then modify as needed.

## Author

- Website - [Garrett Becker](){:target="_blank"}
- Frontend Mentor - [@gdbecker](https://www.frontendmentor.io/profile/gdbecker){:target="_blank"}
- LinkedIn - [Garrett Becker](https://www.linkedin.com/in/garrett-becker-923b4a106/){:target="_blank"}

## Acknowledgments

Thank you to the Frontend Mentor team for providing all of these fantastic projects to build, and for our getting to help each other grow!
