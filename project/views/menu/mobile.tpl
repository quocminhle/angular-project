<div st-mobile-menu class="menu-mob right-side">
    <ul>
        <li ng-class="{'active':pageData.menuType==='home'}">
            <a ui-sref="home">
                <span translate="MENU_HOME">Home</span>
            </a>
        </li>
        <li ng-class="{'active':pageData.menuType==='about'}">
            <a ui-sref="about">
                <span translate="MENU_ABOUT">About Us</span>
            </a>
        </li>
        <li ng-class="{'active':pageData.menuType==='contact'}">
            <a ui-sref="contact">
                <span translate="MENU_CONTACT">Contact</span>
            </a>
        </li>
    </ul>
</div>