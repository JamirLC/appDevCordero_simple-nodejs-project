const jmski = {
    ja: (req, res) => { 
        res.render('index');
    },
    mir: (req, res) => { 
        res.render('create');
    },
    lan: (req, res) => { 
        res.render('about');
    },
    der: (req, res) => { 
        res.render('settings');
    },
    ski: (req, res) => { 
        res.render('update');
    }
};

module.exports = jmski;