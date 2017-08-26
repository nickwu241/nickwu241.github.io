Vue.component('project', {
    template: `
    <div class="post">
        <h1 class="post-title">{{title}}</h1>
        <span class="post-date">{{date}}</span>
        <div class="center">
            <img v-for="i in imageinfo" :src="i.link" :style="i.style" class="img-inline">
        </div>
        <p>{{description}}</p>
        <a class="button" :href="ghlink">View on Github</a>
        </div>
    </div>
    `,
    props: ['title', 'description', 'date', 'imageinfo', 'ghlink', 'tags']
})

const projects = [
    /*
    {
        name: 'UBC Course Scheduler Creator',
        description: 'A web application to output all possible course schedules given desired courses at UBC!',
        imageinfo: [{link: 'https://placehold.it/800x400'}],
        date: 'April 2017 - Present',
        ghlink: 'https://github.com/nickwu241/CourseScrapperUBC',
        tags: []
    },
    */
    {
        name: 'Food Shake',
        date: 'March 2017 - Present',
        description: 'An Android application to solve “Where should we eat?” situations by randomly selecting a nearby restaurant on phone shake.',
        imageinfo: [
            {link: 'https://raw.githubusercontent.com/nickwu241/FoodShake/master/demo/main_screen.png', style: "max-width: 45%; margin-right: 2%;"},
            {link: 'https://raw.githubusercontent.com/nickwu241/FoodShake/master/demo/result_screen.png', style: "max-width: 45%;"}
        ],
        ghlink: 'https://github.com/nickwu241/FoodShake',
        tags: []
    }
];

const navItems = [
    {name: "Projects", isActive : true},
    {name: "Resume", isActive : false},
    {name: "About", isActive : false}
];

var app = new Vue({
    el: '#app',
    data: {
        projects: projects,
        lastActiveNavIndex: 0,
        navItems: navItems,
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
