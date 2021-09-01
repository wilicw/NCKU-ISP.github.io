# NCKU ISP Website
## Introduction
This is a purely front-end website. Once a new connection starts, this website renders its 
pages according to `data/content.md` which can be edited on [Hackmd](https://hackmd.io/).
With this feature, one can modify the content without any programming skills; the only thing
they need to do to update the pages is just clicking the synchronization button on the Hackmd.

## Usage
Owning to the CORS policy of browsers, you can not open this website from your computer 
directly(The browsers forbid the dynamic sources with URLs from `file://`). You need a static 
web server or a web service such as git-page at least.

## Dependencies
This project was powered by [markdown-it]() and [Hackmd](https://hackmd.io/). You don't need 
to install any other library, however, you should provide your own markdown file in `data/` 
and name it with `data/content.md`.

## Authors
- [sciyen](https://github.com/sciyen)