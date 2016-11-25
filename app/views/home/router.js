js_setting.routings.push({
    state: 'home',
    config: {
        url: '/',
        data: {
            title: 'Home',
            menuType: 'home'
        },
        params:{
            page: '1'
        },
        templateUrl: 'views/home/view.tpl',
        controller: 'homeCtrl',
        controllerAs: 'home',
    
    }
});