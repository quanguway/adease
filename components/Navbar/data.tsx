export const navLinks : { title: string, path: string, active: boolean }[] = [
	{ 
		'title': "Home", 
  	'path': "#",
  	'active': true,
  },
  {
    'title': "Features",
    'path': "#"
  },
  {
    'title': "Product",
    'path': "#",
  },
  {
    'title': "Pricing",
    'path': "#"
  }
];

export const navTools : { title: string, path: string, dropdown: boolean }[] = [
  { 
    'title': "English", 
    'path': "#",
    'icon': {
      'path' : "/img/homepage/header/Lang.svg",
      'alt' : "Lang"
    },
    'dropdown' : true,
  },
  {
    'title': "Sign In",
    'path': "#",
    'icon': {
      'path' : "/img/homepage/header/Union.svg",
      'alt' : "Union"
    },

  },
];