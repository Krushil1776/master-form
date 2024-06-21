var usertype = localStorage.getItem("username");

function createMenu(items) {
    var menu = "<div class='navbar-custom'>";
    menu += "<div class='container-fluid colmspadding'>";
    menu += "<div id='navigation'>";
    menu += "<ul class='navigation-menu'>";

    items.forEach(function(item) {
        menu += "<li class='has-submenu' id='" + item.id + "'>";
        menu += "<a href='" + item.link + "'><i class='" + item.icon + "' aria-hidden='true'></i>" + item.text + "</a>";
        if (item.submenu) {
            menu += "<ul class='submenu'>";
            item.submenu.forEach(function(subitem) {
                menu += "<li><a href='" + subitem.link + "' class='subpaddings'>" + subitem.text + "</a></li>";
            });
            menu += "</ul>";
        }
        menu += "</li>";
    });

    menu += "</ul>";
    menu += "</div>";
    menu += "</div>";
    menu += "</div>";

    document.write(menu);
}

if (usertype == "admin") {
    var adminMenuItems = [
        { id: 'master_form', link: 'masterf', icon: 'fa fa-plus-circle', text: 'Create Form' },
        { id: 'fill_forms', link: 'fillf', icon: 'fa fa-file-text-o', text: 'Fill Form' },
        { id: 'completed_forms', link: 'completed_forms.html', icon: 'fa fa-check-circle', text: 'Completed Form' },
        { id: 'adminpanel', link: '#', icon: 'fa fa-tasks', text: 'Masters', submenu: [
            { link: 'master_users.html', text: 'Users' }
        ]}
    ];
    createMenu(adminMenuItems);
} else if (usertype == "client") {
    var clientMenuItems = [
        { id: 'fill_forms', link: 'fill_forms.html', icon: 'fa fa-file-text-o', text: 'Fill Form' },
        { id: 'completed_forms', link: 'completed_forms.html', icon: 'fa fa-check-circle', text: 'Completed Form' }
    ];
    createMenu(clientMenuItems);
}
