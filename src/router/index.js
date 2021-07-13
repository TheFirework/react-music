const ROOT = '/'

const DISCOVERY = '/discovery'
const RECOMMEND = `${DISCOVERY}/recommend`
const PLAYLIST = `${DISCOVERY}/playlist`
const SINGER = `${DISCOVERY}/singer`
const TOP_LIST = `${DISCOVERY}/toplist`
const LATEST_MUSIC = `${DISCOVERY}/latestmusic`
const DJRADIO = `${DISCOVERY}/djradio`

const FM = '/fm'

const VIDEO = '/video'

const FRIEND = '/friend'

const PAGE404 = '/404'
const DEFAULT_ROUTE = DISCOVERY

const ROUTES = {
    ROOT,
    DISCOVERY,
    DEFAULT_ROUTE,
    RECOMMEND,
    PLAYLIST,
    SINGER,
    TOP_LIST,
    LATEST_MUSIC,
    DJRADIO,
    FM,
    FRIEND,
    VIDEO,
    PAGE404,
}

export default ROUTES
