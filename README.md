# Webpack Config Screencast

Link to screecast: https://www.youtube.com/watch?v=guAJfZKiC5c&list=PLOQDek48BpZFadeo_SJUNDggOKouA-nyM&index=1

## 1. Video about webpack

1.	npm init
2.	npm install webpack --save-dev (используем как разработчики)
3.	npm install webpack-cli --save-dev
4.	index.html – основной файл
5.	create folder **src** and file **index.js** (entry point)
6.	change in package.json "main": "index.js" => **"private": "true"** – documentation webpack
7.	create folder **dist** 
8.	move **index.html** into folder **dist**
9.	library install with --save
10.	install lodash for example
11.	write <script src=’main.js’></script> in index.html (into body) – **bundle app**
12.	for build write **command:** npx webpack
13.	create **webpack.config.js** – configuration webpack
14.	add path
15.	add entry and out put
16.	write **command:** npx webpack --config webpack.config.js
17.	add script

## 2. Video about webpack files, styles, images, fonts and other

1.	change name **main.js** => **bundle.js** (index.html and webpack.config.js)
2.	npm install --save-dev style-loader css-loader (style-loader – подключает стили на страницу, css-loader – обрабатывает import и url)
3.	for example, create file style.css and add style class
4.	npm install --save-dev file-loader (file-loader – для обработки изображений) 
5.	add image config 
6.	add fonts config
7.	npm install --save-dev csv-loader xml-loader
