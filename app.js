const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
// 讓這個動態網站可以讀取靜態文件在public裡
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('server running on port 3000...')
});

// 我們先把待輸入的item給一個default值
const items = ['Buy Food', 'Cook Food'];
const workItems = [];

app.get('/', (req, res) => {
    let day = date.getDay();
    res.render('list', { listTitle: day, newListItems: items });

});

app.post('/', (req, res) => {
    newInput = req.body.newItem;
    items.push(newInput);
    // 因為上面已經把這個新的input加進去了，我們只要刷新頁面就可以看到了
    res.redirect('/');
});

app.get('/work', (req, res) => {
    res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.post('/work', (req, res) => {
    let itme = req.body.newItem;
    workItems.push(itme);
    res.redirect('/work');
});

app.get('/about', (req, res) => {
    res.render('about');
});