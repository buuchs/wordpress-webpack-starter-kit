# WordPress WebPack Starter Kit

This starter kit aims to solve having to recreate your working development environment a billion times over on a 
new WordPress Project. This will fast forward your setup time so that you can get straight to coding.

## File Structure

To DO: Rewrite this to make sense to WordPress folders structure.

In most WebPack workflow you will find a src directory. This directory is where most of your development edits will happen. I've chosen to name the compiled directory that WebPack creates to `assets/` since the files/content that live there will mostly be of JavaScript, images and Sass/Less/CSS type. Keep in mind that most WebPack projects name the compiled directory 
`build/`.

## Plugins

 **Note** The CSS loaders will be used to compile LESS but it will not insert the css files into your website. WordPress does this already for us and there's no good work around that I have yet to discover. 
