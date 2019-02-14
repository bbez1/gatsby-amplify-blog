---
title: HTML5 Semantics for the Document Outline
date: "2019-02-14T10:15:00.121Z"
id: 3
---

## Why are HTML5 Semantics Important?

A semantic element clearly describes its meaning to both the browser and developer. Rather than using a `<div>` or `<span>`, elements like `<section>` and `<nav>` can be used to not only help assistive technologies read and interpret your webpage, but also has an effect on search engine optimization (SEO), internationalization, and code readability.

In terms of the accessibility of our sites, using these roles enables screen reader users to utilize "landmark" navigation. Landmark navigation allows screen reader users to jump from area to area of the page depending on where the landmarks are placed.

## Example Document Outline

Here is an example document outline. 

![An Example of HTML5 Landmarks](./html5landmarks.jpg)

## Semantic Elements for Document Outlines

The main semantic tags to define a document outline are:

- `header`: identifies content that precedes the primary content of the web page. The `header` of a page, or "masthead", typically contains branding, search fields and navigation elements. The `header` element can also be used with the `main`, `section`, `article`, `aside`, and `nav` elements.
- `nav`: identifies a navigation region on your page. A `nav` can be used for the main site navigation, but also regions contained in the `main`, such as a local sidebar navigation, as well as links found in our `footer` elements.
- `aside`: identifies complementary content on a page. This is often used with a `nav` element to create a local navigation, but can also be used for supplemental information that is related to the main content of the parent element.
- `section`: identifies a "thematic grouping of content, typically with a heading." A section is similar to a `div` element, but has semantic meaning for users of assistive technologies. For more information on `section`, see the [W3C Description of the Section Element](https://www.w3.org/TR/2011/WD-html5-20110525/sections.html).
- `article`: identifies an "**independent, self-contained, complete** composition in a document, page, application, or site, which is intended to be independently distributable or reusable." Examples of good use cases for the `article` element are forum or blog posts, news articles. Note that the article should contain at least one `<h1>` through `<h6>` element and also a `<header>` element. For more information on `article`, see the [Mozilla Developer Network Description of the Article Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article).
- `footer`: identifies supplementary information about the webpage and/or containing parent element. Typically, the `footer` contains information about the organization, copyright data, related links or related documents.

## ARIA Roles to add Semantics

If you prefer to use a `div` element, you may use the syntax `<div role="main">` for example. The following table details the equivalent ARIA role for each HTML5 Semantic element.

| html5 element | role          |
|---------------|---------------|
| header        | banner        |
| nav           | navigation    |
| aside         | complementary |
| section       | region        |
| article       | article       |
| footer        | footer        | 


