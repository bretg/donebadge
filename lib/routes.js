Router.configure({
        layoutTemplate: 'main_layout'
});

Router.map(function(){
        this.route('calendar', {
                path: '/calendar',
                template: 'calendar'
        });
        this.route('home', {
                path: '/',
                template: 'home'
        });
        this.route('login', {
                path: '/login',
                template: 'login'
        });
        this.route('add', {
                path: '/add',
                template: 'add'
        });
        this.route('signupParent', {
                path: '/signupParent',
                template: 'signupParent'
        });
        this.route('parentHome', {
                path: '/parentHome',
                template: 'parentHome'
        });
        this.route('addKidAccount', {
                path: '/addKidAccount',
                template: 'addKidAccount'
        });
        this.route('kidHome', {
                path: '/kidHome',
                template: 'kidHome'
        });
        this.route('addResponsibility', {
                path: '/addResponsibility',
                template: 'addResponsibility'
        });
        this.route('responsibilities', {
                path: '/responsibilities',
                template: 'responsibilities'
        });
        this.route('prizes', {
                path: '/prizes',
                template: 'prizes'
        });
        this.route('addPrize', {
                path: '/addPrize',
                template: 'addPrize'
        });
});
