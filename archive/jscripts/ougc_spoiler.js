/***************************************************************************
 *
 *	OUGC Spoiler plugin (/jscripts/ougc_spoiler.js)
 *	Author: Omar Gonzalez
 *	Copyright: © 2012-2019 Omar Gonzalez
 *
 *	Website: https://ougc.network/
 *
 *	Hide content within a spoiler tag.
 *
 ***************************************************************************
 
****************************************************************************
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
****************************************************************************/

var OUGC_Plugins = OUGC_Plugins || {};

$.extend(true, OUGC_Plugins, {
	LoadSpoiler: function(e)
	{
		e = e || window.event;

		var target = e.target || e.srcElement;

		$(target).val() == lang.ougc_spoiler_show ? $(target).val(lang.ougc_spoiler_hide) : $(target).val(lang.ougc_spoiler_show);
		$(target).parent('div').parent('div.spoiler').children('div.spoiler_content').toggle();
	}
});
