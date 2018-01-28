Vue.component('project', {
    template: `
    <div class="post">
        <h1 class="post-title">{{title}}</h1>
        <span class="post-date">{{date}}</span>
        <div class="center">
            <img v-for="i in imageinfo" :src="i.link" :style="i.style" class="img-inline">
            <div v-for="v in videolinks"style='position: relative; width: 100%; height: 0px; padding-bottom: 60%; margin-bottom: 10px'>
                <iframe style='position: absolute; left: 0px; top: 0px; width: 100%; height: 100%'
                    :src="v" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                </iframe>
            </div>
        </div>
        <p>{{description}}</p>
        <a class="button" :href="ghlink">Github</a>
        </div>
    </div>
    `,
    props: ['title', 'description', 'date', 'imageinfo', 'videolinks', 'ghlink', 'tags']
})

const PROJECTS = [
    {
        name: 'UBC Course Scheduler Creator',
        description: 'A website that offers UBC students all the possible schedules that can be made, given the courses they wish to take.',
        imageinfo: [{link: 'https://raw.githubusercontent.com/gbvivian/schedulecreator/master/demo-images/two.png', style: "border: 1px solid black;"}],
        date: 'April 2017 - Present',
        ghlink: 'https://github.com/gbvivian/schedulecreator',
        tags: []
    },
    {
        name: 'Food Shake',
        date: 'March 2017 - May 2017',
        description: 'An Android application to solve “Where should we eat?” situations by randomly selecting a nearby restaurant on phone shake.',
        imageinfo: [
            {link: 'https://raw.githubusercontent.com/nickwu241/FoodShake/master/demo/main_screen.png', style: "max-width: 45%; margin-right: 2%;"},
            {link: 'https://raw.githubusercontent.com/nickwu241/FoodShake/master/demo/result_screen.png', style: "max-width: 45%;"}
        ],
        ghlink: 'https://github.com/nickwu241/FoodShake',
        tags: []
    },
    {
        name: 'Desktop Launcher',
        date: 'January 2017 – April 2017',
        description: 'A toy turret that can aim, take photos, and be fired by the user.',
        videolinks: [
            'https://www.youtube.com/embed/gDMdrrUyVQY',
            'https://www.youtube.com/embed/LGqRxaPduhk'
        ],
        ghlink: 'https://zeyadtamimi.github.io/DesktopLauncher',
        tags: []
    },
    {
        name: 'Blackjack',
        date: 'December 2015 - September 2016',
        description: 'A desktop application for playing Blackjack. Implemented in Java using JavaFX for GUI.',
        imageinfo: [
            {link: 'https://raw.githubusercontent.com/nickwu241/blackjack-java/master/demo/demo_actions.png'},
            {link: 'https://raw.githubusercontent.com/nickwu241/blackjack-java/master/demo/demo_win.png'}
        ],
        ghlink: 'https://github.com/nickwu241/blackjack-java',
        tags: []
    }
];

const NAV_ITEMS = [
    {name: "Projects", isActive : true},
    {name: "Resume", isActive : false},
    {name: "About", isActive : false}
];

var app = new Vue({
    el: '#app',
    data: {
        projects: PROJECTS,
        navItems: NAV_ITEMS,
        lastActiveNavIndex: 0,
        resumeHeight: 0
    },
    computed: {
        activeSection: function() {
            return this.navItems[this.lastActiveNavIndex].name;
        }
    },
    methods: {
        navItemClick: function(item, itemIndex) {
            // deactive last item and activate our new one
            this.navItems[this.lastActiveNavIndex].isActive = false;
            this.lastActiveNavIndex = itemIndex;
            item.isActive = true;

            // setup the embed height based on our content width
            if (item.name == "Resume") {
                this.resumeHeight = document.getElementById("content-container").clientWidth * 1.2;
            }
        }
    }
})
