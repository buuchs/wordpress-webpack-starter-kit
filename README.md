# WordPress WebPack Starter Kit

This starter kit aims to solve having to recreate your local development environment a billion times over on a 
new WordPress Project. This will fast forward your setup time so that you can get straight to coding.

## File Structure

In the WebPack workflow you will find a src directory. This directory is where most of your development edits will happen. I've chosen to name the compiled directory that WebPack creates to `assets/` since the files/content that live there will mostly be of JavaScript, images and CSS type. Keep in mind that most WebPack projects name the compiled directory 
`build/`. Since this is intended for WordPress it doesn't follow WebPack normal conventions.

## Plugins

I decided to pass my Less through PostCss as it will allow me to write future CSS code if I wanted to 
opt out of Less specific coding style.

1. postcss-import -- I'm using this plugin to be able to import regular css as file aside less file too.

2. autoprefixer -- I'm using this plugin to automatically insert browsers prefixes so I don't have to think about it. 

3. postcss-cssnext -- I'm using this plugin to use future CSS code now.

## Development Process - NPM Scripts Explained

To have webpack watch and compile your assets/ files, run

```
npm run build
```
Hit ctrl + 'c' to kill webpack watch command.

**At this time no live reloading is available.**

A manual browser refresh will need to be made.

## Deployment Process

 When you don't have shell access but you can sftp into the server.

 Use rsync to deploy your files/directories to you production server. 
