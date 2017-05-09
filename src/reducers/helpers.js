export const randomIntBetween = function(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


<Route path="/ship" component={Ship} />
<Route path="/town" component={Town} />
