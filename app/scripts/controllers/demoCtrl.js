(function () {
  'use strict';

  angular.module('myApp.controllers')
    .controller('DemoCtrl', ['$scope', function($scope){
      $scope.movie;
      $scope.title = "EW's 30 Best Summer Blockbusters of All Time";
      $scope.d3Data = movies;
      $scope.d3OnClick = function(item){
        console.log(item);
        $scope.movie = item;
        $scope.$apply();
      };
    }]);

}());

var movies = [
    {title: "Bridesmaids", releaseDate: "05-13-2011", revenue: 288.4, quote: "Initiated Melissa McCarthy into the big leagues, helped kick-start a welcome funny-lady renaissance, addressed the complexities of female friendship and social stratification. Also, Wilson Phillips. —Darren Franich", ranking: 30},
    {title: "The Hangover", releaseDate: "06-05-2009", revenue: 467.5, quote: "Accept no substitutes or terrible sequels: Todd Phillips' dirty-deeds comedy made a star out of everybody involved. —Darren Franich", ranking: 29},
    {title: "Rambo: First Blood Part II", releaseDate: "05-22-1985", revenue: 300.4, quote: "The classic Sequel-as-Hyperbolized-Remake. John Rambo returns to Vietnam, wins this time. —Darren Franich", ranking: 28},
    {title: "There's Something About Mary", releaseDate: "07-15-1998", revenue: 369.9, quote: "Invented Cameron Diaz, perfected Ben Stiller, became one of the great slow-rising sleeper hits with a sui generis mixture of gross-out weirdness and rom-com sweetness. —Darren Franich", ranking: 27},
    {title: "Shrek", releaseDate: "05-18-2001", revenue: 484.4, quote: "The defining DreamWorks Animation project: PG-rude, celebrity voices, pop culture references, playful jabs at Disney and a legitimate inversion of the Beauty and the Beast legend. We were all believers. —Darren Franich", ranking: 26},
    {title: "Inception", releaseDate: "07-16-2010", revenue: 825.5, quote: "Christopher Nolan's 2010 actioner mixed the brain-twisty cerebral storytelling of Memento and The Prestige with the grand action of his Dark Knight films. Evidence of the film's influence: Now each summer, we wait for that year's Inception. —Darren Franich", ranking: 25},
    {title: "Spider-Man", releaseDate: "05-03-2002", revenue: 821.7, quote: "Blade and X-Men got there first, but Sam Raimi's web-swinging film officially began the superhero era. Spider-Man 2 might be the better overall movie, but the first film is the essential artifact, an invigorating and hyperkinetic thrill ride like nothing that came before. —Darren Franich", ranking: 24},
    {title: "Saving Private Ryan", releaseDate: "07-24-1998", revenue: 481.8, quote: "Opened in late July, which meant that August 1998 was essentially Saving Private Ryan Month. —Darren Franich", ranking: 23},
    {title: "Gladiator", releaseDate: "05-05-2000", revenue: 825.5, quote: "Invented Russell Crowe. Reinvented ancient epics. —Darren Franich", ranking: 22},
    {title: "Independence Day", releaseDate: "07-03-1996", revenue: 817.4, quote: "The White House would never be safe again. —Darren Franich", ranking: 21},
    {title: "Toy Story 3", releaseDate: "06-19-2010", revenue: 1060, quote: "Toy Story 3 mapped out our childhood imagination and obsessions, and in one final scene, as Andy teaches a shy little girl how to pretend-play with his old friends, Pixar pushes a button that unleashes a wave — or was it just a river of tears? — of nostalgia. It's No. 20 on our list — but it might be No. 1 in your heart. —Jeff Labrecque", ranking: 20},
    {title: "Pirates of the Caribbean: The Curse of the Black Pearl", releaseDate: "07-09-2003", revenue: 654, quote: "Although it seems weird to attribute too much importance to a series as lightweight as Pirates, it's worth considering just how perfectly the first film defined a certain kind of Hollywood product: Epic but fun, filled with action but safe for kids, spooky but not really scary, set in a stylized universe perfect for multimedia expansion. —Darren Franich", ranking: 19},
    {title: "Grease", releaseDate: "06-16-1978", revenue: 394.9, quote: "This wop-bop-a-loo-bopping high school musical — the No. 1 film of 1978 — boasts a deck stacked with stellar triple-threat performances anchored by easy-on-the-eyes stars John Travolta and Olivia Newton-John as teen loves Danny and Sandy. Musically, Grease's music was radio-ready in a way that most movie musicals aren't, with sweetly straightforward harmonies and lyrics that rode a line between clever, catchy, and nonsensically addictive. And it goes without saying that the themes of the film are timeless: Young love, growing up, teen rebellion, and what a hussy Cha Cha DiGregorio is. Reviving its source-material Broadway musical, spawning a sequel, a chart-topping soundtrack, a reality show, and countless high school productions, &quot;Grease&quot; was, is, and evermore will be The Word. —Lanford Beard", ranking: 18},
    {title: "Harry Potter and Deathly Hallows: Part 2", releaseDate: "07-15-2011", revenue: 1340, quote: "Deathly Hallows 2 is one of the best-constructed projects from a contemporary fan-service perspective, mixing together a greatest-hits series of long-awaited moments (Ron and Hermione kiss!) with nice little grace notes for the film's sprawling cast (Neville grew up nice!). Deathly Hallows 2 was the final Big Media Moment for the Potter franchise proper, and director David Yates left nothing to chance, providing viewers with a full-fledged visual assault that makes the original film look like an episode of Shining Time Station by comparison. —Darren Franich", ranking: 17},
    {title: "The Avengers", releaseDate: "05-04-2012", revenue: 1500, quote: "Could Iron Man, Captain America, The Hulk, Thor, Black Widow, and Hawkeye successfully join forces to battle evil? Despite initial skepticism from fans and critics alike, the answer was a resounding yes — making this smart superhero film the highest-grossing release of 2012 with over $1 billion in international ticket sales. —Nina Terrero", ranking: 16},
    {title: "Back to the Future", releaseDate: "07-03-1985", revenue: 381.1, quote: "Back to the Future transformed Michael J. Fox from a phenomenally popular TV actor to a bona fide movie star. Nothing speaks more to its popularity, though, than a shout-out in the 1986 State of the Union address from former-actor President Ronald Reagan himself: &quot;Never has there been a more exciting time to be alive, a time of rousing wonder and heroic achievement. As they said in the film Back to the Future, &quot;Where we're going, we don't need roads.&quot; —Hillary Busis", ranking: 15},
    {title: "Superman II", releaseDate: "06-19-1981", revenue: 108.2, quote: "While the 1978 original hooked audiences with then-spectacular special effects showing a man who could fly faster than a speeding bullet, the sequel wowed audiences with enormous action sequences of a superhero fighting super-villains in the heart of Metropolis, hurling buses and crashing through skyscrapers. Don't think young Bryan Singer and Zack Snyder weren't impressed. —Jeff Labrecque", ranking: 14},
    {title: "The Lion King", releaseDate: "06-24-1991", revenue: 987.5, quote: "Alongside fellow EW Blockbuster Forrest Gump, The Lion King ruled the '94 box office. Kids — and their parents — were absolutely transfixed by the at-that-time revolutionary animation, the beautiful music, and the compelling story about the &quot;Circle of Life.&quot; And the buzz hasn't slowed since the film's original release: Simba still is a Disney fave, with successful IMAX and 3-D re-releases introducing the cub working on his roar to new generations. It's good to be king. —Erin Strecker", ranking: 13},
    {title: "The Sixth Sense", releaseDate: "08-06-1999", revenue: 672.8, quote: "In the post-Lady in the Water era, it's tough to remember how bonkers people once went for M. Night Shyamalan's atmospheric thriller. But a mere millennium ago, The Sixth Sense was the toast of audiences and critics alike — a box office smash, a cultural touchstone, a freakin' Best Picture nominee. And for good reason: Its brief 107-minute run time means not a scene is wasted, its creepy visuals are arresting and inventive, and most importantly, its game-changing twist manages to be both surprising and inevitable. —Hillary Busis", ranking: 12},
    {title: "Top Gun", releaseDate: "05-16-1986", revenue: 356, quote: "The movie's mixture of Reagan-era patriotism and MTV-era style proved an uncannily perfect concoction with something for everyone. It's nonsense. It's genius. The film's soundtrack became iconic. Everything about the movie became iconic. The definition of &quot;iconic&quot; is just a picture of Tom Cruise wearing aviators. —Darren Franich", ranking: 11},
    {title: "Terminator 2: Judgment Day", releaseDate: "07-03-1991", revenue: 315, quote: "The Terminator of Judgment Day would be a good guy this time, paired up with a sassy youngster on a mission of mercy. He would face off against a new villain that was state-of-the-art within the world of the movie and in the world of moviemaking. Robert Patrick's T-1000 is one of the great action villains, a morphing chameleon to contrast with Schwarzenegger's hulking man-of-action; the T-1000 was also the killer app for digital effects, with director James Cameron building on the technological leaps of The Abyss to create a new kind of monster onscreen. —Darren Franich", ranking: 10},
    {title: "Animal House", releaseDate: "07-28-1978", revenue: 141.6, quote: "When you think of college movies, you think of Animal House. From John Belushi's manic performance and quotable lines to the biggest toga party since the Romans, the first feature in the National Lampoon's series is memorable not only for launching many comedic careers and films, but for launching the love of comedy for many viewing generations to come. —Jake Perlman", ranking: 9},
    {title: "Ghostbusters", releaseDate: "06-08-1984", revenue: 291.6, quote: "Ghostbusters surrounded some of the funniest guys on the planet with expensive — though slightly cheesy — special effects, including demon dogs and a giant marauding marshmallow man. Everyone in 1984 knew the emphatic, enthusiastic chanted response to the winking question, &quot;Who you gonna call?&quot; and many decades later, everyone still knows the answer. —Jeff Labrecque", ranking: 8},
    {title: "Forrest Gump", releaseDate: "07-06-1994", revenue: 677.4, quote: "Based on Winston Groom's fantastical novel, Robert Zemeckis's decades-spanning movie touched on nearly ever major cultural milestone in the second half of the 20th century: Vietnam and the March on Washington, Watergate and &quot;S--- happens&quot; shirts, Elvis and world-class ping pong, and on and on. Yet, it was solid as a rock while feeling light as a feather. It was also Baby Boomer bait that also introduced a new generation to America’s — and the world's — mid-century struggles, as well as the songs that embodied them. Sure, it was more fantasy than fact-checking, but Forrest is just darn charming. Like its endearing hero, the highly quotable six-time Oscar winner proves to be wonderfully complex underneath a seemingly uncomplicated exterior, and that's what makes it so lovable. —Lanford Beard", ranking: 7},
    {title: "E.T. the Extra-Terrestrial", releaseDate: "06-11-1982", revenue: 792.9, quote: "E.T. is one of Steven Spielberg's more personal films, telling the story of a young boy and his out-of-this-world new friend forming EW's Owen Gleiberman called &quot;one of the touching and timeless bonds of movie history.&quot; Intimacy wins over loud special effects, making for a movie that retains its magic decades later. —Ariana Bacle", ranking: 6},
    {title: "Raiders of the Lost Ark", releaseDate: "06-12-1981", revenue: 389.9, quote: "In the first 13 minutes of Raiders, audiences experienced more pulsating action than most action movies stuff into two hours. Indiana Jones, who battled Nazis and feared snakes, was envisioned as an American James Bond, and Harrison Ford combined the dash of Sean Connery with the roguish charm of Humphrey Bogart. —Jeff Labrecque", ranking: 5},
    {title: "The Dark Knight", releaseDate: "07-18-2008", revenue: 1000, quote: "Unshackled by the need to reboot and restart the Caped Crusader franchise, Christopher Nolan delivered an ambitious new take on the whole superhero idea. High Nerds could play spot-the-reference with the film's plot and tone — a little bit Frank Miller, a little bit Alan Moore, a little bit Long Halloween — but working with co-writers Jonathan Nolan and David S. Goyer, the director delivered an excitingly new take on the character. Ledger's mile-high performance as Joker got the accolades, but he's just one piece of Nolan's sprawling criminal epic. —Darren Franich", ranking: 4},
    {title: "Jurassic Park", releaseDate: "06-11-1993", revenue: 1030, quote: "Just as the rippling water in one now iconic scene signaled the T. rex's grand entrance, so did Jurassic Park usher in a new era of cinematic innovation. The leaps and bounds made by director Steven Spielberg and Oscar-winning special affects artist Stan Winston aren't solely accountable for the film becoming a global phenomenon, but they have had a profound influence, inspiring filmmakers including Stanley Kubrick, Peter Jackson, James Cameron, and George Lucas to blaze new VFX trails. Cinema historian Tom Shone noted in his book Blockbuster: How Hollywood Learned to Stop Worrying and Love the Summer that, &quot;In its way, Jurassic Park heralded a revolution in movies as profound as the coming of sound in 1927.&quot; —Lanford Beard", ranking: 3},
    {title: "Star Wars: Episode IV — A New Hope", releaseDate: "05-25-1977", revenue: 775, quote: "The influence of Star Wars outside of Star Wars is hard to measure, because it's hard to know what is outside of Star Wars. Luke Skywalker is everywhere. You can find him in any story that takes a regular kid and turns them into a Hero With A Grand Destiny. And you can see Star Wars everywhere. Sometimes literally: The brokedown-futuristic aesthetic pioneered by Lucas and his collaborators pretty much became the de facto visual style of movie science fiction. Heck, Star Wars was one of the first &quot;gritty-realism&quot; fantasies. —Darren Franich", ranking: 2},
    {title: "Jaws", releaseDate: "06-20-1975", revenue: 470.7, quote: "Jaws did for the beach what Psycho did for showers, and Steven Spielberg's monster movie became a cultural sensation that dominated the summer and established the template for every blockbuster that followed. Nearly half a century later, it's practically the Citizen Kane of modern Hollywood with every mainstream filmmaker aspiring for its perfect mix of art and popular appeal. —Jeff Labrecque", ranking: 1}
];