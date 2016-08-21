---
author: peter meißner
title: Software
layout: default
---

# Dratful - an convenience R-package to make your drat ful

[[dratful]](https://github.com/petermeissner/dratful)

This package wraps up several R packages: drat, devtools, git2r and getPass() to make it really really easy - i.e. one line of coded - to build your package and if succesful throw it out onto you very own R-package repository (a CRANlike repository hosted on Github). 


# My personal R-package repository

- [[my personal R-package repository]](https://petermeissner.github.io/drat/)

This is a CRANlike package repository but its mine and hosts stable versions of my packages. Thanks to the efforts of Dirk Eddelbuettel pointing out and publicizing the idea that 

- CRAN is just a simple web page with a specific file structure
- R can install packges - out of the box - from anything structured like CRAN
- Github lets you host web pages (easily, for no money, and on scale)
- **ergo: everyone can have one's own personal CRAN**

... and building a package that puts together the needed file structure this thing is very very easy to maintain and using my own [dratful](https://github.com/petermeissner/dratful) package adding and updating packages is a one-liner. 

Installation from the repo works like that:

```r
install.packages(
  pkgs  = "package_name",
  repos = c( options("repos")$repos, "path_to_repository")
)
```




# <img src="/images/robotstxt.png" style="width: 50px; vertical-align:middle;" /> robotstxt

[[Package source at Github]](https://github.com/petermeissner/robotstxt)

A software package for R that provides robots.txt file parsing and bot permission checking. 

Find out more by visiting robotstxt's Github repository and browse through its [README](https://github.com/petermeissner/robotstxt).

``` r
# install from Github
devtools::install_github("petermeissner/robotstxt")
```




# <img src="/images/unikonstanzmensabot.jpg" style="width: 50px; vertical-align:middle;" /> Uni-Konstanz-Mensa/Canteen-Twitter-Bot

[[Package source at Github]](https://github.com/petermeissner/unikonstanzmensabot)

This sturdy little fellow -- called Mampf-Bot or Mampfy by his friends -- daily moves out to do his tasks. First, Mampfy fetches fresh  menus from the University of Konstanz Canteen. Thereafter, Mampfy boils his gatherings into a soup until he has a nice extract in tabular form which he then serves in little pieces laid out on Twitter. As Bot-O-Cuisine Mampfy of cause prefers to use a Pi as his vehicle. When Mampfy is grown up he would like to inform its users about the general popularity of different dishes and make predictions about line/queue speed.

Mampfy's guts lie open on [Github](https://github.com/petermeissner/unikonstanzmensabot) and his gallery of wisdom shines on [Twitter](https://twitter.com/Mensa_Bot_UniKN/with_replies). He talks about the [University of Konstanz](http://www.uni-konstanz.de/) and its [canteen's menu](https://www.seezeit.com/Essen/Speiseplaene/MensaGiessberg.html) which he never tries because he is bot. Mampfy's direct rival is called [Mensa Uni Konstanz](https://twitter.com/giessberg) who he does not like much because she does follow back although they are colleagues.  

# <img src="/images/wp_trend.png" style="width: 50px; vertical-align:middle;" /> wikipediatrend

[[Package source at Github]](https://github.com/petermeissner/wikipediatrend)  / [[CRAN page]](https://cran.r-project.org/web/packages/wikipediatrend/index.html)

A software package for R that provides access to daily page view statistics of Wikipedia articles.  

Find out more by browsing the [README](https://github.com/petermeissner/wikipediatrend) or have a look at the [vignette](https://cran.r-project.org/web/packages/wikipediatrend/vignettes/using-wikipediatrend.html).

``` r
# install from CRAN
install.packages("wikipediatrend")

# install from Github
devtools::install_github("petermeissner/wikipediatrend")
```


# <img src="/images/hellno50.png" style="width: 50px; vertical-align:middle;" /> hellno

[[Package source at Github]](https://github.com/petermeissner/hellno) / [[CRAN page]](https://cran.r-project.org/web/packages/hellno/index.html)

Base R's `stringsAsFactors` default setting is supposedly the 
  most often complained about piece of code in the whole R infrastructure. 
  A search through the source code of all CRAN packages in December 2015 ([Link](https://github.com/search?utf8=%E2%9C%93&q=user%3Acran+stringsAsFactors&type=Code))
  resulted in 3,492 mentions of `stringsAsFactors`. Most of the time these explicit 
  mentions where found within calls to `data.frame()` or `as.data.frame()` and 
  simply set the value to `FALSE`. 
  
  The hellno package provides an explicit solution to the problem without 
  changing R itself or having to mess around with options. One could use e.g.:
  `options("stringsAsFactors" = FALSE)` to re-set the global default behavior. 
  Instead hellno tackles the problem from another direction, namely by 
  providing alternative implementations of `data.frame()` and `as.data.frame()`. 
  Those *re*-implementations are in fact simple wrappers around base R's very own 
  `data.frame()` and `as.data.frame()` with `stringAsFactors` option set to 
  `HELLNO` - which in turn equals to `FALSE` and gives the package its name.
  
  Some info material and crediting for 'hellno' as catch phrase - thanks Clint?: 
  
  - [Some girls and Clint](https://twitter.com/zenrhino/status/623226883644129280)
  - [THE (official) LOGO](http://rtalk.org/strings-as-factors_hell-no_hex-sticker/)
  - [twitter-search](https://twitter.com/search?q=stringsAsFactors%3DHELLNO&src=typd) 
  - [sillylogic](https://github.com/nutterb/sillylogic/blob/master/README.md) (The one and only package with hand-crafted logical constants)


``` r
# install from CRAN
install.packages("hellno")

# install from Github
devtools::install_github("petermeissner/hellno")
```


# <img src="/images/diffr.png" style="width: 50px; vertical-align:middle;" /> diffr

[[Package source at Github]](https://github.com/petermeissner/diffr)

Diffr is like diff for R only that it is not diff. Diffr is a software package for R providing functions to compare text versions, aligning lines and measure distances between texts.

Find out more by visiting diffr's Github repository and browsing its [README](https://github.com/petermeissner/diffr).

``` r
# install from Github
devtools::install_github("petermeissner/diffr")
```
