function inName(){var e=bio.name.split(" ");return e[1]=e[1].toUpperCase(),e[0]=e[0].slice(0,1).toUpperCase()+e[0].slice(1).toLowerCase(),bio.name=e[0]+" "+e[1],bio.name}function usName(){var e=bio.name.split(" ");return e[1]=e[1].slice(0,1).toUpperCase()+e[1].slice(1).toLowerCase(),e[0]=e[0].slice(0,1).toUpperCase()+e[0].slice(1).toLowerCase(),bio.name=e[0]+" "+e[1],bio.name}var bio={name:"Erin Mulligan",role:"Web Developer Guru",contacts:{mobile:"+852-1111-1234",github:"emulliganator",email:"mullig.erin@myemail.com",twitter:"@mulliganec",location:"Mid-Levels, Hong Kong"},WelcomeMsg:"Learn about how I can help you.",skills:["Adobe Program Suite (PS, AI, LR)","Pilot","Front End Web Developement","E-Commerce Manager"],bioPic:"images/fry.jpg",display:function(){var e=HTMLheaderRole.replace("%data%",bio.role);$("#header").prepend(e);var a=HTMLheaderName.replace("%data%",bio.name);$("#header").prepend(a);var o=HTMLmobile.replace("%data%",bio.contacts.mobile),t=HTMLlocation.replace("%data%",bio.contacts.location);$("#topContacts").prepend(t);var r=HTMLtwitter.replace("%data%",bio.contacts.twitter);$("#topContacts").prepend(r);var n=HTMLgithub.replace("%data%",bio.contacts.github);$("#topContacts").prepend(n);var s=HTMLemail.replace("%data%",bio.contacts.email);$("#topContacts").prepend(s);var i=HTMLWelcomeMsg.replace("%data%",bio.WelcomeMsg);$("#topContacts").prepend(o),$("#footerContacts").prepend(t),$("#footerContacts").prepend(r),$("#footerContacts").prepend(n),$("#footerContacts").prepend(s),$("#footerContacts").prepend(o);var l=HTMLbioPic.replace("%data%",bio.bioPic);$("#header").append(l);var p=HTMLskillsStart.replace("box","list");if($("#header").append(i),bio.skills.length>0){$("#header").append(p);for(var c in bio.skills){var d=HTMLskills.replace("%data%",bio.skills[c]);$("#skills").prepend(d)}}$("#header").append(buttonContainer),$(".button-box").append(usaButton),$(".button-box").append(internationalizeButton)}},work={jobs:[{employer:"Wine Shop Asia Co. Ltd.",url:"http://www.wineshopasia.com",title:"E-Commerce Manager",location:"200 Gloucester Road, Wan Chai, Hong Kong",dates:"October 2012 - October 2014",description:"Here is where I discuss the great things I learned and did while working as a manager in the Relm of E-Commerce. The Almost imposible challenges I over came, quests I completed, Wine I defeated. Though I wont, You'll just have to meet me in person for the great details!"},{employer:"AH Editing",url:"http://www.ahediting.com",title:"Workflow Manager",location:"99 Hennessy Road, Wan Chai, Hong Kong",dates:"October 2014 - Current",description:"Here is where I plagiarize my previous text out of lazyness, and also forget to remove the obvious repeated starting sentence. Here is where I discuss the great things I learned and did while working as a manager in the Relm of Academic Editing. The Almost imposible challenges I over came, quests I completed, Papers I defeated. Though I wont, You'll just have to meet me in person for the great details!"}],display:function(){if(work.jobs.length>0)for(var e in work.jobs){$("#workExperience").append(HTMLworkStart);var a=HTMLworkEmployer.replace("%data%",work.jobs[e].employer).replace("#",work.jobs[e].url),o=HTMLworkTitle.replace("%data%",work.jobs[e].title),t=a+o;$(".work-entry:last").append(t);var r=HTMLworkDates.replace("%data%",work.jobs[e].dates);$(".work-entry:last").append(r);var n=HTMLworkLocation.replace("%data%",work.jobs[e].location);$(".work-entry:last").append(n);var s=HTMLworkDescription.replace("%data%",work.jobs[e].description);$(".work-entry:last").append(s)}}},projects={projects:[{title:"Front End Web Developer Project 1",dates:"Jan 2015",description:"Here is where I discuss the great things I learned and did while working as a manager in the Relm of HTML and CSS Programing. The Almost imposible challenges I over came, quests I completed, Styles I defeated. Though I wont, You'll just have to meet me in person for the great details!",images:["images/197x148Proj1.jpg","images/197x148.gif"],url:"http://www.udacity.com"},{title:"Front End Web Developer Project 2",dates:"Feb 2015",description:"Here is where I discuss the great things I learned and did while working as a manager in the Relm of Javascript & JQuery Programing. The Almost imposible challenges I over came, quests I completed, Syntax I defeated. The great number of times my mind exploded (Anyone could guess this... too many). Though I wont, You'll just have to meet me in person for the great details!",images:["images/197x148-Coding-Proj-2.jpg","images/197x148-Webpage-Proj2.jpg"],url:"http://www.udacity.com"}],display:function(){if(projects.projects.length>0)for(var e in projects.projects){$("#projects").append(HTMLprojectStart);var a=HTMLprojectTitle.replace("%data%",projects.projects[e].title).replace("#",projects.projects[e].url);$(".project-entry:last").append(a);var o=HTMLprojectDates.replace("%data%",projects.projects[e].dates);$(".project-entry:last").append(o);var t=HTMLprojectDescription.replace("%data%",projects.projects[e].description);if($(".project-entry:last").append(t),projects.projects[e].images.length>0)for(var r in projects.projects[e].images){var n=HTMLprojectImage.replace("%data%",projects.projects[e].images[r]);$(".project-entry:last").append(n)}}}},education={schools:[{name:"Purdue University",location:"West Lafayette, IN",degree:"BoS",majors:["Professional Flight Technology"],dates:"May, 2010",url:"http://www.purdue.edu/"}],onlineCourses:[{title:"Front-End Web Developer Nanodegree",school:"Udacity",date:"July, 2015",url:"http://www.udacity.com/"},{title:"CompTIA A+",school:"ITPro-TV",date:"November, 2014",url:"http://www.itpro.tv/"}],display:function(){if(education.schools.length>0)for(var e in education.schools){$("#education").append(HTMLschoolStart);var a=HTMLschoolName.replace("%data%",education.schools[e].name).replace("#",education.schools[e].url)+HTMLschoolDegree.replace("%data%",education.schools[e].degree);$(".education-entry:last").append(a);var o=HTMLschoolDates.replace("%data%",education.schools[e].dates);$(".education-entry:last").append(o);var t=HTMLschoolLocation.replace("%data%",education.schools[e].location);$(".education-entry:last").append(t);var r=HTMLschoolMajor.replace("%data%",education.schools[e].majors);$(".education-entry:last").append(r)}if(education.onlineCourses.length>0){$(".education-entry:last").append(HTMLonlineClasses);for(var n in education.onlineCourses){var s=HTMLonlineTitle.replace("%data%",education.onlineCourses[n].title).replace("#",education.onlineCourses[n].url)+HTMLonlineSchool.replace("%data%",education.onlineCourses[n].school);$(".education-entry:last").append(s);var i=HTMLonlineDates.replace("%data%",education.onlineCourses[n].date);$(".education-entry:last").append(i);var l=HTMLonlineURL.replace("%data%",education.onlineCourses[n].url).replace("#",education.onlineCourses[n].url);$(".education-entry:last").append(l)}}}};bio.display(),work.display(),projects.display(),education.display(),$("#mapDiv").append(googleMap);