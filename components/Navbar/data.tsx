export const navLinks : { title: string, path: string, active: boolean }[] = [
	{ 
		'title': "Home", 
  	'path': "#",
  	'active': true,
  },
  {
    'title': "Features",
    'path': "#",
    'active': false,
  },
  {
    'title': "Product",
    'path': "#",
    'active': false,
  },
  {
    'title': "Pricing",
    'path': "#",
    'active': false,
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