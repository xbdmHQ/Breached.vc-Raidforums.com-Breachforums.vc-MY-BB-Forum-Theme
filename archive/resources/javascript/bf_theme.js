{
const colorSelect = {
        'red': {
            '--theme-primary-color': "#610707",
            '--theme-secondary-color': "#cc8989",
            '--theme-tertiary-color': "#762b2b",
            '--theme-quaternary-color': "#9f3333",
            '--theme-low-alpha-color': "rgba(204, 137, 137, 0.06)",
            '--header-panel-bg-color': "#251313",
            '--header-logo-bg-color': "#2f1d1d",
            '--main-notification-color': "#b65e12"
        },
        'pink': {
            '--theme-primary-color': "#5f0736",
            '--theme-secondary-color': "#cd89ad",
            '--theme-tertiary-color': "#782b54",
            '--theme-quaternary-color': "#9e336c",
            '--theme-low-alpha-color': "rgba(205, 137, 173, 0.06)",
            '--header-panel-bg-color': "#25131d",
            '--header-logo-bg-color': "#2f1d27",
            '--main-notification-color': "#b65e12"
        },
        'violet': {
            '--theme-primary-color': "#59075f",
            '--theme-secondary-color': "#c889cd",
            '--theme-tertiary-color': "#732b78",
            '--theme-quaternary-color': "#97339e",
            '--theme-low-alpha-color': "rgba(200, 137, 205, 0.06)",
            '--header-panel-bg-color': "#241325",
            '--header-logo-bg-color': "#2e1d2f"
        },
        'aqua': {
            '--theme-primary-color': "#075a5f",
            '--theme-secondary-color': "#89c9cd",
            '--theme-tertiary-color': "#2b7478",
            '--theme-quaternary-color': "#33999e",
            '--theme-low-alpha-color': "rgba(137, 201, 205, 0.06)",
            '--header-panel-bg-color': "#132425",
            '--header-logo-bg-color': "#1d2f2f"
        },
        'green': {
            '--theme-primary-color': "#075f33",
            '--theme-secondary-color': "#89cdab",
            '--theme-tertiary-color': "#2b7852",
            '--theme-quaternary-color': "#339e69",
            '--theme-low-alpha-color': "rgba(137, 205, 171, 0.06)",
            '--header-panel-bg-color': "#13251c",
            '--header-logo-bg-color': "#1d2f26"
        },
        'yellow': {
            '--theme-primary-color': "#535f07",
            '--theme-secondary-color': "#c4cd89",
            '--theme-tertiary-color': "#6e782b",
            '--theme-quaternary-color': "#909e33",
            '--theme-low-alpha-color': "rgba(196, 205, 137, 0.06)",
            '--header-panel-bg-color': "#232513",
            '--header-logo-bg-color': "#2d2f1d"
        },
        'orange': {
            '--theme-primary-color': "#5f4907",
            '--theme-secondary-color': "#cdbc89",
            '--theme-tertiary-color': "#78652b",
            '--theme-quaternary-color': "#9e8333",
            '--theme-low-alpha-color': "rgba(205, 188, 137, 0.06)",
            '--header-panel-bg-color': "#252113",
            '--header-logo-bg-color': "#312b1c"
        },
        'black': {
            '--theme-primary-color': "#343434",
            '--theme-secondary-color': "#787878",
            '--theme-tertiary-color': "#646363",
            '--theme-quaternary-color': "#8b8b8b",
            '--header-panel-bg-color': "#202020",
            '--header-logo-bg-color': "#2a2a2a"
        },
	        'default': {
            '--theme-primary-color': "hsl(208,43%,26%)",
            '--theme-secondary-color': "hsl(208,40%,67%)",
            '--theme-tertiary-color': "hsl(208,47%,32%)",
            '--theme-quaternary-color': "hsl(208,51%,41%)",
            '--theme-low-alpha-color': "hsla(208,40%,67%,0.06)",
            '--header-panel-bg-color': "hsl(208,32%,11%)",
            '--header-logo-bg-color': "hsl(208,24%,15%)",
        }
}

function changeColorTheme(color)
{
	$.each(colorSelect[color], function(variableName, hex) {
            document.documentElement.style.setProperty(variableName, hex);
        });
}

function selectColorTheme(color)
{
	if (color == "default")
	{
		Cookie.unset('theme_color');
	}
	else
	{
		Cookie.set('theme_color', color);
	}
	changeColorTheme(color);
}

const userColor = Cookie.get('theme_color');

if (userColor) {
	changeColorTheme(userColor);
}
const wrapperWidthValue = Cookie.get('wrapper_width');
var elements = document.getElementsByClassName('wrapper');
  Array.from(elements).forEach(function(element) {
     element.style.width = wrapperWidthValue + '%';
  });

}
