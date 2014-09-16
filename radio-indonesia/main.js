/*#########################################################################
#                                                                         #
#   Simple script for Indonesian radio streams                            #
#   taken from CoolStreams script                                         #
#   some url from http://www.shoutcast.com/                               #
#                                                                         #
#   (C) 2010 Sarwo Hadi Setyana <sh.setyana@gmail.com>                    #
#                                                                         #
#   This program is free software; you can redistribute it and/or modify  #
#   it under the terms of the GNU General Public License as published by  #
#   the Free Software Foundation; either version 2 of the License, or     #
#   (at your option) any later version.                                   #
#                                                                         #
#   This program is distributed in the hope that it will be useful,       #
#   but WITHOUT ANY WARRANTY; without even the implied warranty of        #
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         #
#   GNU General Public License for more details.                          #
#                                                                         #
#   You should have received a copy of the GNU General Public License     #
#   along with this program; if not, write to the                         #
#   Free Software Foundation, Inc.,                                       #
#   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.         #
##########################################################################*/

Importer.loadQtBinding("qt.core");
Importer.loadQtBinding("qt.gui");

function Station( name, url )
{
    this.name = name;
    this.url = url;
}

var stationArray = new Array (
    new Station( "IndoHitz",                                "http://yp.shoutcast.com/sbin/tunein-station.pls?id=180678" ),
    new Station( "Kaskus Radio",                            "http://yp.shoutcast.com/sbin/tunein-station.pls?id=987377" ),
    new Station( "DENGER.IN Music",                         "http://yp.shoutcast.com/sbin/tunein-station.pls?id=4062" ),
    new Station( "Gitabali - Balinese Internet Radio",      "http://yp.shoutcast.com/sbin/tunein-station.pls?id=20416" ),
    new Station( "SwaraDewi Radio",                         "http://yp.shoutcast.com/sbin/tunein-station.pls?id=796312" ),
    new Station( "Best FM Medan",                           "http://yp.shoutcast.com/sbin/tunein-station.pls?id=652246" ),
    new Station( "RADIO-i2.COM - Komunitas Musik & Radio Internet Indonesia",                           "http://yp.shoutcast.com/sbin/tunein-station.pls?id=962174" ),
    new Station( "Rasika FM Ungaran",                      "http://yp.shoutcast.com/sbin/tunein-station.pls?id=480799" ),
    new Station( "Bugis Radio",                            "http://yp.shoutcast.com/sbin/tunein-station.pls?id=976571" ),
    new Station( "Rajawali Radio Bandung",                 "http://yp.shoutcast.com/sbin/tunein-station.pls?id=304860" ),
    new Station( "MQFM 102.7 Mhz Bandung",                 "http://yp.shoutcast.com/sbin/tunein-station.pls?id=979563" ),
    new Station( "HARBOS FM -- 102,6 FM",                  "http://yp.shoutcast.com/sbin/tunein-station.pls?id=205805" ),
    new Station( "Serambi FM 90.2 Mhz | Aceh",             "http://yp.shoutcast.com/sbin/tunein-station.pls?id=40802" ),
    new Station( "Indie Radio Online",                     "http://yp.shoutcast.com/sbin/tunein-station.pls?id=820768" ),
    new Station( "eMDiKei 102.9 FM",                       "http://yp.shoutcast.com/sbin/tunein-station.pls?id=478563" ),
    new Station( "RDA'45 Radio Catrock Pasuruan",          "http://yp.shoutcast.com/sbin/tunein-station.pls?id=274201" ),
    new Station( "Grass FM Tarakan",                       "http://yp.shoutcast.com/sbin/tunein-station.pls?id=769386" ),
    new Station( "Scout Radio 107.7 FM",                   "http://yp.shoutcast.com/sbin/tunein-station.pls?id=270366" ),
    new Station( "Nadafa FM",                              "http://yp.shoutcast.com/sbin/tunein-station.pls?id=926715" ),
    new Station( "NBI Rasisonia 103.1 FM",                 "http://yp.shoutcast.com/sbin/tunein-station.pls?id=962467" ),
    new Station( "Kiss FM Medan",                      "http://live.kissfm-medan.com:8080/" ),
    new Station( "RRI",                                "http://125.163.79.184:8010/listen.pls" ),
    new Station( "Radio Rodja",                        "http://rodja.sytes.net/listen.pls" ),
    new Station( "Eltira FM",                          "http://www.eltirafm.com/audio/stream/listeneltira.m3u" ),
    new Station( "Pas FM [Surabaya]",                  "http://radio.mitra.net.id:8102/listen.pls" ),
    new Station( "Phoenix Radio [Bali]",               "http://74.55.26.100:8250/listen.pls" ),
    new Station( "Blue Fame Radio",                    "http://117.103.57.200:8000/listen.pls" ),
    new Station( "Gajah Mada FM",                      "http://www.gajahmadafm.co.id/wp-content/32.pls" ),
    new Station( "MTA-Online FM",                      "http://202.59.201.108:21234/listen.pls" ),
    new Station( "Keilove FM [Tasikmalaya]",           "http://www.keilovefm.com/keilove.pls" ),
    new Station( "Trijaya FM [Yogyakarta]",            "http://119.110.87.62:7600/listen.pls" ),
    new Station( "Madu FM",                            "http://live.radiomadufm.com:8550/listen.pls" ),
    new Station( "Rasika FM",                          "http://117.103.56.67:7000/listen.pls" ),
    new Station( "Ardan FM [Bandung]",                 "http://202.138.229.74:8000/listen.pls" ),
    new Station( "Heartbeat Station",                  "http://heartbeatstation.com/listen.pls" ),
    new Station( "K-Lite FM [Bandung]",                "http://www.1071klitefm.com/live_streaming_ol.m3u" ),
    new Station( "spinRADIO",                          "http://ch1.radiospin.net:8000/spin" ),
    new Station( "Prambors [Jakarta]",                 "http://radio.masima.co.id:8122/listen.pls" ),
    new Station( "Prambors [Jogja]",                   "http://live.masima.co.id:8217/listen.pls" ),
    new Station( "DJ Wirya",                           "http://djwirya.com:2020/listen.pls"),
    new Station( "KLCBS The Jazz Wave Bandung",        "http://125.160.17.182:8055/listen.pls")

);

function RadioIndonesia()
{
    ScriptableServiceScript.call( this, "Radio Indonesia", 1, "List Indonesian radio streams", "Indonesian radio streams", false );
}

function onPopulating( level, callbackData, filter )
{
    Amarok.debug( " Populating station level..." );
    //add the station streams as leaf nodes
    for ( i = 0; i < stationArray.length; i++ )
    {
        item = Amarok.StreamItem;
        item.level = 0;
        item.callbackData = "";
        item.itemName = stationArray[i].name;
        item.playableUrl = stationArray[i].url;
        item.infoHtml = "A cool Indonesian radio stream called " + item.itemName;
        script.insertItem( item );
    }
    script.donePopulating();
}

function onCustomize() {
    var currentDir = Amarok.Info.scriptPath() + "/";
    var iconPixmap = new QPixmap(currentDir+"indonesia.png");
    script.setIcon(iconPixmap);
}

script = new RadioIndonesia();
script.populate.connect( onPopulating );
script.customize.connect( onCustomize );
