# Frontend Mentor - Recipe Page Solution

This is my solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). I'm super thankful to have found Frontend Mentor as a great way to confidently grow in my coding skills with real-life projects. 

## Table of contents

- [Frontend Mentor - Recipe Page Solution](#frontend-mentor---recipe-page-solution)
	- [Table of contents](#table-of-contents)
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

Your challenge is to build out this recipe page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

### Mobile View

![](./recipe-page-mobile.jpg)

### Desktop View

![](./recipe-page-desktop.jpg)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/recipe-card-with-html-css-eBDtuI37Uz)
- [Live Site URL](https://recipe-page-gdbecker.netlify.app)

## My process

### Built with

- HTML5
- CSS3
- Mobile-first workflow
- [VS Code](https://code.visualstudio.com)

### What I learned

I love cooking and baking so this project was calling for me to complete, and I'm definitely happy with how it turned out. It was awesome getting more practice with just HTML and CSS, and I tackled this one by building the card structure and styling at the same time, so going line by line of content and picking the right tags for each part. Having the design guidelines point out that the paragraph text size was 16 pixels helped me figure out the sizing and proportion of elements against each other, so I took my time in getting the overall look and feel down. I think the trickiest part was figuring out the square bullet points, and I ended up using a 'before' pseudo selector to get those in and styled the way I wanted. Might use this or something similar for my own recipe app! I definitely want to keep practicing using the basic tools in more projects like this one.

Here are a few code samples from this project:

```html
<!-- Ingredients section -->
<h2>Ingredients</h2>
<ul class="list">
	<li class="ul-item">2-3 large eggs</li>
	<li class="ul-item">Salt, to taste</li>
	<li class="ul-item">Pepper, to taste</li>
	<li class="ul-item">1 tablespoon of butter or oil</li>
	<li class="ul-item">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
</ul>
```

```css
/* Styling for unordered lists */
.list {
	font-family: 'Outfit';
	margin: 0;
	padding-left: 0px;
}

.ul-item {
  list-style-type: none;
  display: flex;
  align-items: center;
	margin: 12px 0 0;
}

.ul-item::before {
  content: "■";
	color: var(--nutmeg);
	font-size: 9px;
	margin-left: 8px;
  margin-right: 25px;
	align-items: center;
}
```

### Continued development

As a starter developer, I want to keep growing in working as a team and learning how to deliver smaller packages of code at a time, such as components like this one. I thought this project was a good way to get back into vanilla HTML, CSS, and JavaScript and begin doing just that!

### Useful resources

- [CSS Formatter](http://www.lonniebest.com/FormatCSS/) - I found this helpful site when I'm feeling lazy and don't want to format my CSS code, I can have this do it for me, especially putting everything in alphabetical order.
- Brad Traversy's [50 Projects In 50 Days - HTML, CSS & JavaScript course on Udemy](https://www.udemy.com/course/50-projects-50-days/) - I highly recommend this course for great practice in using just HTML, CSS, and vanilla JavaScript to build amazing projects.

## Author

- Website - [Garrett Becker]()
- Frontend Mentor - [@gdbecker](https://www.frontendmentor.io/profile/gdbecker)
- LinkedIn - [Garrett Becker](https://www.linkedin.com/in/garrett-becker-923b4a106/)

## Acknowledgments

Thank you to the Frontend Mentor team for providing all of these fantastic projects to build, and for our getting to help each other grow!