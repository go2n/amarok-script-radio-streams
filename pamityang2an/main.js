/*#########################################################################
#                                                                         #
#   Simple script for Pamityang2an Qwerty Radio                           #
#   Radio yg sebaiknya anda duga. Karena galau adalah harapan.            #
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
    new Station( "Pamityang2an", "http://radio.pamityang2an.com:7000/")

);

function RKTI()
{
    ScriptableServiceScript.call( this, "Pamityang2an", 1, "Pamityang2anQwrtyRdo", " Pamityang2an Qwerty Radio. Radio yg sebaiknya anda duga. Karena galau adalah harapan.", false );
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
    var iconPixmap = new QPixmap(currentDir+"pamityang2an.jpg");
    script.setIcon(iconPixmap);
}

script = new RKTI();
script.populate.connect( onPopulating );
script.customize.connect( onCustomize );
