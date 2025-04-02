# Frontend Mentor - REST Countries API with color theme switcher Solution

This is my solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). I'm super thankful to have found Frontend Mentor as a great way to confidently grow in my coding skills with real-life projects. 

## Table of contents

- [Frontend Mentor - REST Countries API with color theme switcher Solution](#frontend-mentor---rest-countries-api-with-color-theme-switcher-solution)
	- [Table of contents](#table-of-contents)
	- [Overview](#overview)
		- [Project Brief](#project-brief)
		- [Mobile View - Light Mode](#mobile-view---light-mode)
		- [Mobile View - Dark Mode](#mobile-view---dark-mode)
		- [Desktop View - Light Mode](#desktop-view---light-mode)
		- [Desktop View - Dark Mode](#desktop-view---dark-mode)
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

Your challenge is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.

You can use any JavaScript framework/library on the front-end such as [React](https://reactjs.org) or [Vue](https://vuejs.org). You also have complete control over which packages you use to do things like make HTTP requests or style your project.

Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

**⚠️ NOTE ⚠️: Sometimes the REST Countries API can go down. We've added a `data.json` file with all the country data if you prefer to use that instead. However, please be aware that the data in the JSON file might not be up-to-date.**

### Mobile View - Light Mode
![](./Mobile%20View%20-%20Light%20Mode.png)

### Mobile View - Dark Mode
![](./Mobile%20View%20-%20Dark%20Mode.png)

### Desktop View - Light Mode
![](./Desktop%20View%20-%20Light%20Mode.png)

### Desktop View - Dark Mode
![](./Desktop%20View%20-%20Dark%20Mode.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/rest-countries-api-app-with-next-tailwind-VZ0_N1UPsW)
- [Live Site URL](https://rest-countries-api-gdbecker.netlify.app)

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

Level 4 (intermediate) FrontendMentor projects intimated me at first, but seeing the final product for the challenge made me want to take a go at it. As with any larger project, what helped was tackling each part at a time, solving one problem after another and make a plan to attack it. Overall, I knew there were several components/challenges: the navbar up top, being able to switch between light and dark mode, creating a reusable component for each country on the main page, importing the supplied JSON file (since the API could be broken later on), and not to mention each individual country's detail page with the ability to head to another neighboring country's page with a list of links.

I more or less approached this challenge in that order above, working on one component and section at a time, styling as I went with Tailwind, and making sure I was matching the desired design as closely as possible on mobile and desktop screens. It was great practice using mapping functions for both displaying all the country cards on the main page, as well as outputting a list of links to neighboring countries. Creating each country's detail page wasn't too hard with the built-in folder structure that Next has. I could add a general "/[countrycode]" page which would populate based on the selected code's values from the JSON data. For the light/dark mode, I had practice with other projects using Next and Tailwind so setting up the theme provider component wasn't bad, and I first styled the light mode with the design's colors and then moved over to dark mode. It helped me a lot to make smaller goals and accomplish those well before moving onto the next.

I'm proud of how this one turned out and definitely want to keep practicing using themes and Next's folder structure for more dynamic web sites!

Here are a few code samples from this project:

```html
<!-- 'CountryCard' component for each country -->
<Link
	href={{
		pathname: `/${alpha3Code}`,
	}}
	className="flex w-full max-h-fit flex-col rounded-md overflow-hidden bg-white shadow-b-md dark:bg-darkBlue">
	<div 
		className="flex flex-row h-40 bg-no-repeat bg-cover bg-center 2xl:h-60"
		style={{backgroundImage: `url(${img_url})`}}>
	</div>
	<div className="flex flex-col p-7 text-veryDarkBlue-Light dark:text-white">
		<h1 className="text-md font-nunitoSansExtraBold mb-4">{name}</h1>
		<p className="text-sm font-nunitoSansSemiBold mb-1">Population: <span className="font-nunitoSansLight">{numberWithCommas(population)}</span></p>
		<p className="text-sm font-nunitoSansSemiBold mb-1">Region: <span className="font-nunitoSansLight">{region}</span></p>
		<p className="text-sm font-nunitoSansSemiBold mb-1">Capital: <span className="font-nunitoSansLight">{capital}</span></p>
	</div>
</Link>
```

```css
/* Importing custom font in my main CSS file */
@font-face {
  font-family: NunitoSans-ExtraBold;
  src: url(../../public/NunitoSans_7pt-ExtraBold.ttf);
}
```

```js
// Applying all selected and inputted filter settings
const filterCountries = (countryName, region) => {
	if (countryName != "" && region != "All" && region != "Filter by Region") {
		var f =  countryData.filter(function(c) {
			// return c.region == region && c.name.slice(0, countryName.length).toLowerCase() == countryName.toLowerCase();
			return c.region == region && c.name.toLowerCase().includes(countryName.toLowerCase());
		});

		setFilteredCountries(f);
	} else if (region != "All" && region != "Filter by Region") {
		var f =  countryData.filter(function(c) {
			return c.region == region;
		});

		setFilteredCountries(f);
	} else if (countryName != "") {
		var f =  countryData.filter(function(c) {
			// return c.name.slice(0, countryName.length).toLowerCase() == countryName.toLowerCase();
			return c.name.toLowerCase().includes(countryName.toLowerCase());
		});

		setFilteredCountries(f);
	} else {
		setFilteredCountries(countryData);
	}
}
```

### Continued development

As a starter developer, I want to keep growing in working as a team and learning how to deliver smaller packages of code at a time, such as robust and beautiful pages like this one. I thought this project was a good way to get back into Next.js and begin doing just that!

### Useful resources

- [Regex for adding commas to numbers](https://stackoverflow.com/questions/721304/insert-commas-into-number-string) - Thank goodness for StackOverflow especially in my regex situations. This was where I got help on the pattern to use when adding commas to numbers.
- [Tailwind Flexbox](https://tailwindcss.com/docs/flex) - Handy guide from Tailwind's docs about using flexbox, including flex columns and rows

## Author

- Website - [Garrett Becker]()
- Frontend Mentor - [@gdbecker](https://www.frontendmentor.io/profile/gdbecker)
- LinkedIn - [Garrett Becker](https://www.linkedin.com/in/garrett-becker-923b4a106/)

## Acknowledgments

Thank you to the Frontend Mentor team for providing all of these fantastic projects to build, and for our getting to help each other grow!