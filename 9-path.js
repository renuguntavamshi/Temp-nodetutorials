const path=require('path')
console.log(path.sep)

const filepath=path.join('/content/','subfolder','text.txt')
console.log(path.basename(filepath))//base name

const absolute=path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)