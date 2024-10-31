# Google Analytics
A web analytics service offered by Google that tracks and reports website traffic.

Below is a high-level overview of how to navigate and leverage Google Analytics.

<ImageStage title="Google Analytics Cheetsheet" filename="ga-cheatsheet.png" caption="Basic overview of the Google Analytics dashboard" />

## How many people came to my site?
* Audience -> Overview
    * Users = Unique visitors
    * Sessions = Visits
    * Pageviews = Pageviews
    * New vs Returning Visitors – Important if you're trying to bring in new people

## How did they get there?
* Acquisition -> All Traffic -> Channels (high-level buckets)
* Acquisition -> All Traffic -> Source/Medium (from where and how?)

## Where in the world are they from?
* Audience -> Geo -> Location (Can be viewed as map or table)

## What are my most popular pages?
* Behavior -> Site Content -> All pages

## How are my marketing campaigns doing?
* Acquisition -> Campaigns -> All Campaigns (add Source/Medium as secondary dimension)

## What keywords am I ranking for in Google organic (non-paid) search?
* Acquisition -> Search Console -> Queries
* If wanted, remove branded keywords using advanced search feature
    * “Exclude Search Query Matching RegExp northeastern|neu”
    * See Regular Expressions for Google Analytics for more advanced searches
    * Unfortunately no easy way to connect to goal conversions

## How many of my visitors were using mobile devices?
* Audience -> Mobile -> Overview

## Are my visitors being served broken pages?
* Behavior -> Events -> Top Events -> 404 Pages
