import React, { Component } from "react";

// class myComponent extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'http://api.tvmaze.com/search/shows?q=girls';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log('This is your data', data));
//   }
//   render() {
//     return <h1>my Component has Mounted, Check the browser 'console' </h1>;
//   }
// }
// export default myComponent;


// ----------------


// import React, { Component } from "react";

// class Shows extends Component {
//   /*
//   //Arrow function which eliminates the need for the constructor: handleIncrement = () => {
//   handleIncrement = () => {
//     this.setState({ value: this.state.value + 1 });
//     console.log("Increment Clicked - counter=" + this.state.value);
//   };
//   */

//   render() {
//     //    console.log(this.props);

//     return (
//       <div>
//         <input type="text" id="showSearchText" name="showSearchText">
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button
//           onClick={() => this.props.onIncrement(this.props.counter)}
//           className="btn btn-secondary btn-sm"
//         >
//           Search for Shows
//         </button>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = "badge m-2 ";
//     classes +=
//       this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
//     return classes;
//   }





class Shows extends Component {
    shows = [
        {"score":17.902487,"show":{"id":73,"url":"http://www.tvmaze.com/shows/73/the-walking-dead","name":"The Walking Dead","type":"Scripted","language":"English","genres":["Drama","Action","Horror"],"status":"Running","runtime":60,"premiered":"2010-10-31","officialSite":"http://www.amc.com/shows/the-walking-dead","schedule":{"time":"21:00","days":["Sunday"]},"rating":{"average":8.1},"weight":100,"network":{"id":20,"name":"AMC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":25056,"thetvdb":153021,"imdb":"tt1520211"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/238/596840.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/238/596840.jpg"},"summary":"<p><b>The Walking Dead</b> tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home. As the world overrun by the dead takes its toll on the survivors, their interpersonal conflicts present a greater danger to their continuing survival than the walkers that roam the country. Over time, the characters are changed by the constant exposure to death and some grow willing to do anything to survive.</p><p>Based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard.</p>","updated":1604039754,"_links":{"self":{"href":"http://api.tvmaze.com/shows/73"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1808376"}}}},
        {"score":14.694829,"show":{"id":45194,"url":"http://www.tvmaze.com/shows/45194/the-walking-dead-world-beyond","name":"The Walking Dead: World Beyond","type":"Scripted","language":"English","genres":["Drama","Horror"],"status":"Running","runtime":60,"premiered":"2020-10-04","officialSite":"https://www.amc.com/shows/the-walking-dead-world-beyond","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.5},"weight":100,"network":{"id":20,"name":"AMC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":372787,"imdb":"tt10148174"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/246/616349.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/246/616349.jpg"},"summary":"<p><b>The Walking Dead: World Beyond</b> expands the universe of <i>The Walking Dead</i>, delving into a new mythology and story that follows the first generation raised in a surviving civilization of the post-apocalyptic world. Two sisters along with two friends leave a place of safety and comfort to brave dangers, known and unknown, living and undead on an important quest. Pursued by those who wish to protect them and those who wish to harm them, a tale of growing up and transformation unfurls across dangerous terrain, challenging everything they know about the world, themselves and each other. Some will become heroes. Some will become villains. But all of them will find the truths they seek.</p>","updated":1604359906,"_links":{"self":{"href":"http://api.tvmaze.com/shows/45194"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1940587"},"nextepisode":{"href":"http://api.tvmaze.com/episodes/1940588"}}}},
        {"score":14.690726,"show":{"id":1824,"url":"http://www.tvmaze.com/shows/1824/fear-the-walking-dead","name":"Fear the Walking Dead","type":"Scripted","language":"English","genres":["Drama","Action","Horror"],"status":"Running","runtime":60,"premiered":"2015-08-23","officialSite":"http://www.amc.com/shows/fear-the-walking-dead","schedule":{"time":"21:00","days":["Sunday"]},"rating":{"average":7.2},"weight":100,"network":{"id":20,"name":"AMC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":48384,"thetvdb":290853,"imdb":"tt3743822"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/268/672392.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/268/672392.jpg"},"summary":"<p>Living in the same universe as <i>The Walking Dead</i>, <b>Fear the Walking Dead </b>is a gritty drama that explores the onset of the undead apocalypse through the lens of a fractured family. Set in a city where people come to escape, shield secrets, and bury their pasts, a mysterious outbreak threatens to disrupt what little stability high school guidance counselor Madison Clark and English teacher Travis Manawa have managed to assemble. The everyday pressure of blending two families while dealing with resentful, escapist, and strung out children takes a back seat when society begins to break down. A forced evolution, a necessary survival of the fittest takes hold, and our dysfunctional family must either reinvent themselves or embrace their darker histories.</p>","updated":1604445543,"_links":{"self":{"href":"http://api.tvmaze.com/shows/1824"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1940597"},"nextepisode":{"href":"http://api.tvmaze.com/episodes/1940598"}}}},
        {"score":14.185065,"show":{"id":32342,"url":"http://www.tvmaze.com/shows/32342/the-walking-dead-torn-apart","name":"The Walking Dead: Torn Apart","type":"Scripted","language":"English","genres":["Drama","Horror"],"status":"Ended","runtime":4,"premiered":"2011-10-03","officialSite":"http://www.amc.com/shows/the-walking-dead/video-extras/torn-apart-webisodes","schedule":{"time":"","days":["Monday"]},"rating":{"average":8.2},"weight":94,"network":null,"webChannel":{"id":142,"name":"amc.com","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"externals":{"tvrage":null,"thetvdb":null,"imdb":"tt2022190"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/129/323202.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/129/323202.jpg"},"summary":"<p>The web series tells the origin story of Hannah, also known as \"Bicycle Girl\", the walker whom Rick Grimes killed in the first episode. Rick risks a walker encounter to go back and find Hannah before he sets out for Atlanta.</p>","updated":1506588219,"_links":{"self":{"href":"http://api.tvmaze.com/shows/32342"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1318166"}}}},{"score":14.056297,"show":{"id":33166,"url":"http://www.tvmaze.com/shows/33166/the-walking-dead-red-machete","name":"The Walking Dead: Red Machete","type":"Scripted","language":"English","genres":["Drama","Action","Horror"],"status":"Ended","runtime":15,"premiered":"2017-11-05","officialSite":"http://www.amc.com/shows/the-walking-dead-red-machete","schedule":{"time":"","days":["Monday","Tuesday","Sunday"]},"rating":{"average":7.4},"weight":91,"network":null,"webChannel":{"id":142,"name":"amc.com","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/149/373722.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/149/373722.jpg"},"summary":"<p>Follow the path of the red-handled weapon from its innocent beginnings, as it lands in the hands of survivors good and evil, familiar and new.</p>","updated":1574659602,"_links":{"self":{"href":"http://api.tvmaze.com/shows/33166"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1474616"}}}},
        {"score":13.278697,"show":{"id":32343,"url":"http://www.tvmaze.com/shows/32343/the-walking-dead-cold-storage","name":"The Walking Dead: Cold Storage","type":"Scripted","language":"English","genres":["Drama","Horror"],"status":"Ended","runtime":6,"premiered":"2012-10-01","officialSite":"http://www.amc.com/shows/the-walking-dead/video-extras/cold-storage-webisodes","schedule":{"time":"","days":["Monday"]},"rating":{"average":8.2},"weight":91,"network":null,"webChannel":{"id":142,"name":"amc.com","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/129/323201.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/129/323201.jpg"},"summary":"<p>The web series follows the story of a young man named Chase as he seeks shelter in a storage facility commanded by a malicious employee named B.J.</p>","updated":1506588193,"_links":{"self":{"href":"http://api.tvmaze.com/shows/32343"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1318170"}}}},
        {"score":13.155659,"show":{"id":9318,"url":"http://www.tvmaze.com/shows/9318/walking-with-monsters","name":"Walking with Monsters","type":"Documentary","language":"English","genres":[],"status":"Ended","runtime":60,"premiered":"2005-12-08","officialSite":"http://www.bbc.co.uk/sn/prehistoric_life/galleries/wwmonsters/","schedule":{"time":"21:00","days":["Monday"]},"rating":{"average":null},"weight":0,"network":{"id":12,"name":"BBC One","country":{"name":"United Kingdom","code":"GB","timezone":"Europe/London"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":79437,"imdb":"tt0490048"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/32/82032.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/32/82032.jpg"},"summary":"<p><i><b>\"Walking with Monsters\"</b></i> is a documentary films series about life in the Paleozoic, bringing to life extinct arthropods, fish, amphibians, synapsids, and reptiles.</p><p>As with previous <i>Walking with...</i> instalments, it is narrated by Kenneth Branagh. Using state-of-the-art visual effects, this prequel to <i>Walking with Dinosaurs</i> shows an epic 300 million year war between creatures before the dinosaurs.</p>","updated":1579817529,"_links":{"self":{"href":"http://api.tvmaze.com/shows/9318"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/503552"}}}},
        {"score":12.803506,"show":{"id":27424,"url":"http://www.tvmaze.com/shows/27424/walking-and-talking","name":"Walking and Talking","type":"Scripted","language":"English","genres":["Comedy"],"status":"Ended","runtime":30,"premiered":"2012-06-25","officialSite":null,"schedule":{"time":"22:30","days":["Monday"]},"rating":{"average":null},"weight":0,"network":{"id":113,"name":"Sky Atlantic","country":{"name":"United Kingdom","code":"GB","timezone":"Europe/London"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":259818,"imdb":"tt2254256"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/108/270050.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/108/270050.jpg"},"summary":"<p>Written by Kathy Burke the premis of this shown is the inner thoughts and tribulations of a young teenage girl. With her best friend she kicks about the town idolising rock bands and chatting. The cameo by Kathy Burke as the nun is hilarious and the dialogue between the girls genius.</p>","updated":1580719475,"_links":{"self":{"href":"http://api.tvmaze.com/shows/27424"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1149865"}}}},
        {"score":12.7769,"show":{"id":38551,"url":"http://www.tvmaze.com/shows/38551/walking-britains-lost-railways","name":"Walking Britain's Lost Railways","type":"Documentary","language":"English","genres":[],"status":"To Be Determined","runtime":60,"premiered":"2018-09-21","officialSite":"http://www.channel5.com/show/walking-britains-lost-railways/","schedule":{"time":"20:00","days":["Friday"]},"rating":{"average":null},"weight":54,"network":{"id":135,"name":"Channel 5","country":{"name":"United Kingdom","code":"GB","timezone":"Europe/London"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/168/420695.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/168/420695.jpg"},"summary":"<p>Rob Bell explores the lost landscapes and infrastructure of some of Britain's former railway lines.</p>","updated":1593588018,"_links":{"self":{"href":"http://api.tvmaze.com/shows/38551"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1841235"}}}},
        {"score":12.67506,"show":{"id":32344,"url":"http://www.tvmaze.com/shows/32344/the-walking-dead-the-oath","name":"The Walking Dead: The Oath","type":"Scripted","language":"English","genres":["Drama","Horror"],"status":"Ended","runtime":9,"premiered":"2013-10-01","officialSite":"http://www.amc.com/shows/the-walking-dead/video-extras/the-oath-webisodes","schedule":{"time":"","days":["Tuesday"]},"rating":{"average":7.4},"weight":85,"network":null,"webChannel":{"id":142,"name":"amc.com","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/129/323200.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/129/323200.jpg"},"summary":"<p>This series tells the origin of the \"Don't Open, Dead Inside\" paint on the cafeteria doors of the hospital Rick Grimes awakes in, post-apocalypse. It follows Paul and Karina as they escape their zombie-overrun camp in search of a medical station. The central theme of the series examines the will to persevere in the face of inevitable death.</p>","updated":1506588092,"_links":{"self":{"href":"http://api.tvmaze.com/shows/32344"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1318173"}}}}
    ];

    renderShows() {
        if (this.shows.length === 0) return <p>There are no shows for your search.</p>;
        return (
        <ul>
            {/* {this.shows.map((returnedList) => (
                <li key={returnedList.show.id}><a href="{returnedList.show.url}">{returnedList.show.name}</a> - ({returnedList.show.rating.average} stars)</li>
            ))} */}
        </ul>
        );
    }

    render() {
        return (
            <React.Fragment>
            {this.renderShows()}
            </React.Fragment>
        );
    }

    // formatRating(rating) {
    //     return rating === 0 ? "Zero" : rating;
    // }
}

export default Shows;
