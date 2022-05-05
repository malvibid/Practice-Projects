# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7).

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size

### Screenshot

![Current Status: WIP](./my-project-screenshots/002.png)

### Links

-   [Solution](https://github.com/malvibid/Practice-Projects/tree/main/Frontend-Mentor/testimonials-grid-section-main)
-   [Live Site](https://malvibid.github.io/Practice-Projects/Frontend-Mentor/testimonials-grid-section-main/)

## My process

### Built with

-   Semantic HTML5 markup
-   Utility first CSS
-   CSS custom properties
-   CSS Grid

### What I learned

-   I got to practice utility first CSS. Although, it is still unclear to me why I would choose an utility first approach.
-   New CSS Setup; overwriting defaults I didn't even know existed and following best practices for accessibility.
-   Used new pseudo classes:

    ```css
    :first-of-type
    :last-of-type
    .flow > *:where(:not(:first-child))
    ```

-   CSS Grid. Explicit VS Implicit Grid. Once we explicitly specify the grid columns, the grid rows are implicitly defined. Don't need to write more CSS and make it messy. Keep the CSS as simple and generalised as possible and add complexity as needed.

-   Grid template areas are much more simpler to set-up and use. And it enables us to write conscise media queries.

### Continued development

-   New properties:

    -   I don't understand the difference between padding-block vs padding and margin-inline vs margin.
    -   I also didn't fully understand how the min() function works.

    ```css
    .testimonial-grid {
        padding-block: 2rem;
        width: min(95%, 70rem);
        margin-inline: auto;
    }
    ```

-   I don't understand whether there is a technique used to determine the box shadow or he just used magic numbers.

    ```css
    box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
    ```

    ```
        hsl[a](H, S, L[, A])
    ```

    A (alpha), optional, can be a <number> between 0 and 1, or a <percentage>, where the number 1 corresponds to 100% (full opacity). When specifying an alpha value it must be preceded with a forward slash (/).
    [Read more about color values on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

-   Need to practice more with
    -   Pseudo classes and elements
    -   Grid layouts
    -   Grid Template areas

### Useful resources

-   [Learn CSS Grid the easy way - Kevin Powell](https://youtu.be/rg7Fvvl3taU) - Introduction to CSS Grid and how to use it in two different ways.
-   [Kevin Powell's Solution Walkthrough - Github](https://github.com/kevin-powell/learn-grid-the-easy-way)

## Author

-   Github - [Malvi Bid](https://github.com/malvibid)
-   Frontend Mentor - [@malvibid](https://www.frontendmentor.io/profile/malvibid)
-   Twitter - [@malvibid](https://www.twitter.com/@malvibid)

## Acknowledgments

Special thank you to Kevin Powell. His YouTube videos have helped me a tonne in understanding CSS best practices.
