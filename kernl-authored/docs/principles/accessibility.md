# Accessibility

Websites should be usable to visitors of all abilities.

## Overview

<em>Web accessibility</em> refers to the inclusive practice of removing barriers that prevent interaction with, or access to websites, by people with disabilities.</p>

When sites are correctly designed, developed and edited, all users have equal access to information and functionality. <cite>[(source)](https://en.wikipedia.org/wiki/Web_accessibility)</cite>

Although a website’s full scope of meeting accessibility standards depends on an author’s or developer’s content and extended markup, the kernl() website framework is built to meet standards and regulations set by Section 508, WCAG 2.0 and WAI-ARIA out of the box.

In addition to the kernl(wp) theme elements meeting ADA/WCAG compliance out of the box, there are some important, but simple, steps you must take to keep your content compliant.

## Creating Accessible Content

### Color and contrast

By default, text foreground color and size meet AAA WCAG recommendations. Note that users have some control over presentation of content, which may result in different scores. Please review Northeastern’s official brand documentation to identify which color combinations are permissible to meet accessibility standards.

### Images

Using descriptive text in the "alt" tag of an image is required. This field is found in the meta area when viewing an image in the Wordpress media browser. Example: if an image shows a student in the library, simply add into the "alt" field: "student in library".

### Motion

Minimal use of motion is used in the kernl() framework. Very subtle state transitions (animations) may occur when hovering over a link or a linked image.

## Helpful Tools and Resources

### [Northeastern's Digital Accessibility Guidelines](https://digital-accessibility.northeastern.edu/)
Guidelines and one-on-one consultations for remediation strategies, testing tools and techniques.

### [Chrome Lens](https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd)
ChromeLens is a Google Chrome extension that provides a suite of tools to help with web accessibility development

### [axe](https://www.deque.com/axe/)
An open source rules library for accessibility testing with browser extensions.

### [WAVE](http://wave.webaim.org/)
WAVE is a robust web accessibility evaluation tool developed by WebAIM.org.

### [A11ycasts by Google](https://www.youtube.com/watch?v=HtTyRajRuyY)
The goal of A11ycasts is to teach developers how accessibility works all the way down at the platform level, while also demonstrating real world accessibility problems and solutions to fix them.

::: tip
For a more details about kernl(wp) and accessibilty, [read our documentation](/wp/features/accessibility.html)
:::
