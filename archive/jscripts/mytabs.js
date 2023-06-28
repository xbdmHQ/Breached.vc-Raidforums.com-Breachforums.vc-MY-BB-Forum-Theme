/*
 *	MyBBPlugins
 *	http://www.mybbplug.in/s/
 *
 *	MyTabs
 *	Created by Ethan at MyBBPlugins
 *	[Administrator & Developer]
 *
 *	- File: "{$mybb->settings['bburl']}/jscripts/mytabs.js"
 *
 *  This plugin and its contents are free for use.
 *
 */

function switchTab(tab, ajax)
{
	/*
	
	This is not optimized or stable, so I am removing it from the initial 2.00 release.
	It may come back in the future.
	
	if(true)
	{
		// Use Ajax (XMLHTTP Requests)
		getPage('index.php?tab=' + tab + '&output-mytab-code=1&rand=' + Math.random());
	}
	else
	{
	*/
	var nav_list = document.getElementById('tab_nav').childNodes;
	for(n in nav_list)
	{
		if(nav_list[n].innerHTML != undefined)
		{
			if(nav_list[n].id == ("tab_nav_" + tab))
			{
				nav_list[n].style.display = "";
			}
			else
			{
				nav_list[n].style.display = "none";
			}
		}
	}
	
	var content = document.getElementById('tab_content').childNodes;
	for(c in content)
	{
		if(content[c].innerHTML != undefined)
		{
			if(content[c].id == ("tab_" + tab))
			{
				content[c].style.display = "";
			}
			else
			{
				content[c].style.display = "none";
			}
		}
	}
	return false;
}

function getPage(url)
{
	try
	{
		xmlhttp = window.XMLHttpRequest?new XMLHttpRequest(): new ActiveXObject("Microsoft.XMLHTTP");
	}
	catch (e)
	{
		return true;
	}
	xmlhttp.onreadystatechange = triggered;
	xmlhttp.open("GET", url, "data:application/xml");
	xmlhttp.send(null);
}

function triggered()
{
	if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200))
	{
		document.getElementById('mytabs_full').innerHTML = xmlhttp.responseText;
	}
}