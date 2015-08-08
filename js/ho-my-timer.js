'use strict';

/**
 * config
 */
var
    dateConfig = '01022015',
    website = 'https://www.laquadrature.net/fr',
    searchEngineUrl = website + '/search/apachesolr_search/',
    termOfSearch = 'macron',
    title = 'La publication de la loi Lemaire se fait attendre',
    description = 'Annoncée en février 2013, nous l\'attendions initialement pour l\’automne 2015, mais Macron devrait changer les choses.',
    videoFile = 'video/TwoHornedChameleon.webm',
    logoFile = 'img/logo-QuadratureDuNet.png',
    moreInformation = 'Articles en relation',
    colorOfFilter = '#487ED6'
;

/**
 * elements
 * @type {*|jQuery|HTMLElement}
 */
var
    contentContainer= $('.container'),
    timerContainer = $('.timer'),
    videContainer = $('body'),
    linkWebsite = $('.website'),
    linkMoreInformations = $('.more-informations'),
    titleContainer = $('.title'),
    descriptionContainer = $('.description'),
    filterContainer = $('.filter')
;


/**
 * Boot the time
 */
function boot() {
    injectTimer();
    setInterval(injectTimer, 1000);

    videContainer.vide(videoFile, {
        loop: true,
        autoplay: true,
        resize:true
    });

    linkMoreInformations.prop('href', searchEngineUrl + termOfSearch).text(moreInformation);
    linkWebsite.prop('href', website);
    linkWebsite.find('img').prop('src', logoFile);
    titleContainer.text(title);
    descriptionContainer.text(description);
    filterContainer.css('backgroundColor', colorOfFilter);

    contentContainer.flexVerticalCenter();
}

/**
 * Create a date distance From a date and now, format and inject it in container
 */
function injectTimer() {
    var duration = moment().diff(moment(dateConfig, 'DDMMYYYY'));
    duration = moment.duration(duration);

    var months = duration.months() + ' mois ';
    var days = duration.days() + ' jours ';
    var hours = duration.hours() + ' heures ';
    var minutes = duration.minutes() + ' minutes ';
    var seconds = duration.seconds() + ' secondes ';

    var formattedTime = months + days + hours + minutes + seconds;

    timerContainer.text(formattedTime);
}

boot();