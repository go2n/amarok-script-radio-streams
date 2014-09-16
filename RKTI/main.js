/*#########################################################################
#                                                                         #
#   Simple script for RKTI - Radio Komunitas Twitter Indonesia            #
#                                                                         #
#   (C) 2011 Sarwo Hadi Setyana <sh.setyana@gmail.com>                    #
#   http://twitter.com/go2n                                               #
#   http://identi.ca/go2n                                                 #
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
    new Station( "Channel 24kbps", "http://r.rkti.net:8000/listen.pls"),
    new Station( "Channel 64kbps", "http://r.rkti.net:8100/listen.pls")

);

function RKTI()
{
    ScriptableServiceScript.call( this, "RKTI", 1, "Radio Komunitas Twitter Indonesia", "Radio Komunitas Twitter Indonesia", false );
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
        item.infoHtml = "A cool radio stream called " + item.itemName;
        script.insertItem( item );
    }
    script.donePopulating();
}

function onCustomize() {
    var currentDir = Amarok.Info.scriptPath() + "/";
    var iconPixmap = new QPixmap(currentDir+"rkti.png");
    script.setIcon(iconPixmap);
}

script = new RKTI();
script.populate.connect( onPopulating );
script.customize.connect( onCustomize );
